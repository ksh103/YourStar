package com.ssafy.yourstar.domain.admin.controller;

import com.ssafy.yourstar.domain.admin.request.ManagerRegisterPostReq;
import com.ssafy.yourstar.domain.admin.request.NewAccountRes;
import com.ssafy.yourstar.domain.admin.service.AdminService;
import com.ssafy.yourstar.domain.member.db.entity.Member;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import jdk.nashorn.internal.runtime.options.Option;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Slf4j
@RestController
@Api(value = "관리자 페이지 API")
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @ApiOperation(value = "가입 회원 정보 확인")
    @GetMapping
    public Page<Member> memberList(
            @ApiParam(value = "회원 코드") @RequestParam(required = false, defaultValue = "0") String code,
            @ApiParam(value = "페이지 번호") @RequestParam int page, @ApiParam(value = "페이지당 게시글 개수") @RequestParam int size) {
        log.info("memberList - 호출");
        return adminService.memberList(code, page, size);
    }

    @ApiOperation(value = "관계자 계정 생성")
    @PostMapping
    public List<NewAccountRes> managerRegister(@RequestBody ManagerRegisterPostReq managerRegister) {
        log.info("managerRegister - 호출");
        return adminService.managerRegister(managerRegister);
    }
}
