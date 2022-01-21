package com.ssafy.yourstar.domain.member.controller;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.request.MemberRegisterPostReq;
import com.ssafy.yourstar.domain.member.response.MemberLoginPostRes;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import com.ssafy.yourstar.global.util.JwtTokenUtil;
import com.ssafy.yourstar.domain.member.request.MemberLoginPostReq;
import com.ssafy.yourstar.domain.member.service.MemberService;
import io.swagger.annotations.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "회원 관리 API")
@Slf4j
@RestController
@RequestMapping("/api/members")
public class MemberController {
    @Autowired
    MemberService memberService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    @ApiOperation(value = "로그인", notes = "<strong>Email과 Password</strong>입력을 통해 로그인 한다.")
    public ResponseEntity<MemberLoginPostRes> memberLogin(@RequestBody @ApiParam(value = "로그인 정보", required = true) MemberLoginPostReq memberLoginInfo) {
        log.info("memberLogin - Call");

        String memberEmail = memberLoginInfo.getMemberEmail();
        String memberPassword = memberLoginInfo.getMemberPassword();

        Member member = memberService.loginMemberByMemberEmail(memberEmail);

         // 회원가입 구현되면 이거 사용
        if(passwordEncoder.matches(memberPassword, member.getMemberPassword())) {
            return ResponseEntity.ok(MemberLoginPostRes.of(201, "Success", JwtTokenUtil.getMemberLoginToken(memberEmail, member.getCode(), member.getMemberNick(), member.getIsLogin())));
        }else {
            return ResponseEntity.status(401).body(MemberLoginPostRes.of(401, "Invalid Password", null));
        }
    }

    @ApiOperation(value = "회원가입", notes = "<strong>Email, Password, 이름, 닉네임, 성별, 휴대전화, 생일</strong>입력을 통해 회원가입 한다.")
    @PostMapping
    public ResponseEntity<? extends BaseResponseBody> memberRegister (@RequestBody MemberRegisterPostReq memberRegister){
        log.info("memberRegister - Call");

        memberService.registerMember(memberRegister);
        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }
}
