package com.ssafy.yourstar.domain.admin.service;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import org.springframework.data.domain.Page;

public interface AdminService {
    Page<Member> memberList(String code, int page, int size);
    boolean ManagerRegister();
}
