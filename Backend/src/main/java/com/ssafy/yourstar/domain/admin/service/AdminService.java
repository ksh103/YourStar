package com.ssafy.yourstar.domain.admin.service;

import com.ssafy.yourstar.domain.admin.request.ManagerRegisterPostReq;
import com.ssafy.yourstar.domain.admin.request.NewAccountRes;
import com.ssafy.yourstar.domain.member.db.entity.Member;
import org.springframework.data.domain.Page;

import java.util.List;

public interface AdminService {
    Page<Member> memberList(String code, int page, int size);
    List<NewAccountRes> managerRegister(ManagerRegisterPostReq managerRegister);
}
