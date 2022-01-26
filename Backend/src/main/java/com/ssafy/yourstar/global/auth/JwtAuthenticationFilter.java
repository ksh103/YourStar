package com.ssafy.yourstar.global.auth;

import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.ssafy.yourstar.global.util.JwtTokenUtil;
import com.ssafy.yourstar.global.util.ResponseBodyWriteUtil;
import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
public class JwtAuthenticationFilter extends BasicAuthenticationFilter {

    private MemberService memberService;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, MemberService memberService) {
        super(authenticationManager);
        this.memberService = memberService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // Authorization 사용하면 해당 API 접근 전에 이쪽으로 와서 유효한 jwt token 인지 확인한다

        try {
            // 토큰이 유효한지 체크하면서 권한에 대한 부분도 설정하게끔함
            Authentication authentication = getAuthentication(request);
            // jwt 토큰으로 부터 획득한 인증 정보(authentication) 설정.
            SecurityContextHolder.getContext().setAuthentication(authentication);
        } catch (Exception ex) {
            ResponseBodyWriteUtil.sendError(request, response, ex);
            return;
        }

        filterChain.doFilter(request, response);
    }

    @Transactional(readOnly = true)
    public Authentication getAuthentication(HttpServletRequest request) throws Exception {
        String token = request.getHeader(JwtTokenUtil.HEADER_STRING);
        // 요청 헤더에 Authorization 키값에 jwt 토큰이 포함된 경우에만, 토큰 검증 및 인증 처리 로직 실행.
        if (token != null) {
            // 토큰 확인 후 디코딩
            JWTVerifier verifier = JwtTokenUtil.getVerifier();
            JwtTokenUtil.handleError(token);
            DecodedJWT decodedJWT = verifier.verify(token);
            String memberEmail = decodedJWT.getSubject();

            // 토큰에서 PK인 이메일 정보가 있는지 확인 후 다음 처리
            if (memberEmail != null) {
                // jwt 토큰에 포함된 계정 정보(memberEmail) 통해 실제 디비에 해당 정보의 계정이 있는지 조회.
                Member member = memberService.memberLoginByMemberEmail(memberEmail);

                // 해당 멤버의 권한을 확인하고 입력
                if(member != null) {
                    List<String> roles = new ArrayList<>();
                    if (member.getCode() == 1) {
                        roles.add("ROLE_ADMIN");
                        roles.add("ROLE_MANAGER");
                        roles.add("ROLE_MEMBER");
                    } else if (member.getCode() == 2) {
                        roles.add("ROLE_MANAGER");
                        roles.add("ROLE_MEMBER");
                    }
                    else roles.add("ROLE_MEMBER");

                    // 식별된 정상 유저인 경우, 요청 context 내에서 참조 가능한 인증 정보(jwtAuthentication) 생성.
                    // 확인한 권한을 memberDetails에 입력 (현재는 String 타입으로 하나의 권한만 부여
                    MemberDetails memberDetails = new MemberDetails(member, roles);
                    UsernamePasswordAuthenticationToken jwtAuthentication = new UsernamePasswordAuthenticationToken(memberEmail,
                            null, memberDetails.getAuthorities());
                    jwtAuthentication.setDetails(memberDetails);
                    log.info("유효한 토큰입니다 : " + String.valueOf(memberDetails.getAuthorities()));
                    return jwtAuthentication;
                }
            }
            return null;
        }
        return null;
    }

}
