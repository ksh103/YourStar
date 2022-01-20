package com.ssafy.yourstar.domain.member.controller;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.response.MemberLoginPostRes;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import com.ssafy.yourstar.global.util.JwtTokenUtil;
import com.ssafy.yourstar.domain.member.request.MemberLoginPostReq;
import com.ssafy.yourstar.domain.member.service.MemberService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "로그인 인증 API")
@RestController
@RequestMapping("/api/members")
public class MemberLoginController {
    @Autowired
    MemberService memberService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    @ApiOperation(value = "로그인", notes = "<strong>Email과 Password</strong>입력을 통해 로그인 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = MemberLoginPostRes.class),
            @ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
            @ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
            @ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class)
    })
    public ResponseEntity<MemberLoginPostRes> memberLogin(@RequestBody @ApiParam(value = "로그인 정보", required = true) MemberLoginPostReq memberLoginInfo) {
        String memberEmail = memberLoginInfo.getMemberEmail();
        String memberPassword = memberLoginInfo.getMemberPassword();

        Member member = memberService.loginMemberByMemberEmail(memberEmail);

        // 회원가입 구현되면 이거 사용
//        if(passwordEncoder.matches(memberPassword, member.getMemberPassword())) {
//            return ResponseEntity.ok(MemberLoginPostRes.of(200, "Success", JwtTokenUtil.getMemberLoginToken(memberEmail, member.getCode(), member.getMemberNick(), member.getIsLogin())));
//        }else {
//            return ResponseEntity.status(401).body(MemberLoginPostRes.of(401, "Invalid Password", null));
//        }

        // 테스트용
        if(member.getMemberPassword().equals("1212")) {
            return ResponseEntity.ok(MemberLoginPostRes.of(200, "Success", JwtTokenUtil.getMemberLoginToken(memberEmail, member.getCode(), member.getMemberNick(), member.getIsLogin())));
        }else {
            return ResponseEntity.status(401).body(MemberLoginPostRes.of(401, "Invalid Password", null));
        }
    }
}
