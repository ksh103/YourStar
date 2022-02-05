package com.ssafy.yourstar.domain.member.controller;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.request.MemberModifyPostReq;
import com.ssafy.yourstar.domain.member.service.MemberService;
import com.ssafy.yourstar.global.Exception.ForbiddenException;
import com.ssafy.yourstar.global.auth.MemberDetails;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.net.URISyntaxException;

@Api(value = "회원 마이페이지 API")
@Slf4j
@RestController
@RequestMapping("/api/members")
public class MemberMyPageController {

    @Autowired
    MemberService memberService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @ApiOperation(value = "회원 조회", notes = "Header의 Token을 이용해 자신의 정보를 조회함")
    @GetMapping
    public Member memberDetail(@ApiIgnore Authentication authentication) {
        log.info("memberDetail - Call");
        if (authentication == null) throw new ForbiddenException();

        MemberDetails memberDetails = (MemberDetails) authentication.getDetails();

        return memberService.memberDetail(memberDetails.getUsername());
    }

    @ApiOperation(value = "회원 탈퇴", notes = "token에 담은 <strong>memberId</strong> 정보를 통해 회원 탈퇴를 한다.")
    @DeleteMapping("/{memberId}")
    public ResponseEntity<? extends BaseResponseBody> memberRemove(@PathVariable @ApiParam(value = "회원 인덱스 번호", required = true) int memberId) {
        log.info("memberRemove - Call");

        if(memberService.memberRemove(memberId)) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        else return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Internal Server Error"));
    }

    @ApiOperation(value = "회원 수정", notes = "<strong>비밀번호, 닉네임, 휴대전화, 주소</strong> 정보를 수정한다.")
    @PutMapping("/{memberId}")
    public ResponseEntity<? extends BaseResponseBody> memberModify(@PathVariable @ApiParam(value = "회원 인덱스 번호", required = true) int memberId, @RequestBody MemberModifyPostReq memberModifyPostReq) throws URISyntaxException {
        log.info("memberModify - Call");

        if(memberService.memberModify(memberId, memberModifyPostReq) != null) {
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }else {
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "No modifications exist."));
        }
    }
}
