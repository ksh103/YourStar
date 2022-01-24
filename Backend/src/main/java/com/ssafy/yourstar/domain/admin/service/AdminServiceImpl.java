package com.ssafy.yourstar.domain.admin.service;

import com.ssafy.yourstar.domain.admin.db.repository.AdminRepository;
import com.ssafy.yourstar.domain.member.db.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService{

    @Autowired
    AdminRepository adminRepository;

    @Override
    public Page<Member> memberList(String code, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page - 1, size, Sort.by("memberId").descending());
        if (code.equals("0")) {
            return adminRepository.findAll(pageRequest);
        } else {
            int Intcode = Integer.parseInt(code);
            return adminRepository.findAllByCode(Intcode, pageRequest);
        }
    }

    @Override
    public boolean ManagerRegister() {
        return false;
    }
}
