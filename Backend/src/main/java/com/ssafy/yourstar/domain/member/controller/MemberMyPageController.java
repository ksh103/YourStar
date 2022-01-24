package com.ssafy.yourstar.domain.member.controller;

import com.ssafy.yourstar.domain.member.service.MemberService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "회원 마이페이지 API")
@Slf4j
@RestController
public class MemberMyPageController {

    @Autowired
    MemberService memberService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @ApiOperation(value = "회원 탈퇴", notes = "token에 담은 <strong>memberId</strong> 정보를 통해 회원 탈퇴를 한다.")
    @DeleteMapping("/{memberId}")
    public ResponseEntity<? extends BaseResponseBody> memberRemove(@PathVariable @ApiParam(value = "회원 인덱스 번호", required = true) int memberId) {
        log.info("memberRemove - Call");

        if(memberService.memberRemove(memberId)) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        else return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
    }

}
