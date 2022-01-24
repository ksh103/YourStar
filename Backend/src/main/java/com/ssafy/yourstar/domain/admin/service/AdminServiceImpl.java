package com.ssafy.yourstar.domain.admin.service;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.ssafy.yourstar.domain.admin.db.repository.AdminRepository;
import com.ssafy.yourstar.domain.admin.request.ManagerRegisterPostReq;
import com.ssafy.yourstar.domain.admin.request.NewAccountRes;
import com.ssafy.yourstar.domain.member.db.entity.ManagerGroup;
import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.db.repository.MemberRepository;
import com.ssafy.yourstar.global.util.MemberPasswordMailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminServiceImpl implements AdminService{

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    AdminRepository adminRepository;


    @Override
    public Page<Member> memberList(String code, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page - 1, size, Sort.by("memberId").descending());
        if (code.equals("0")) {
            return memberRepository.findAll(pageRequest);
        } else {
            int Intcode = Integer.parseInt(code);
            return memberRepository.findAllByCode(Intcode, pageRequest);
        }
    }

    @Override
    public List<NewAccountRes> managerRegister(ManagerRegisterPostReq managerRegister) {
        int startId = 0;

        // 처음 생성하는 경우
        if (adminRepository.findByManagerCodeName(managerRegister.getManagerCodeName()) == null) {
            // 관계자 그룹 생성
            ManagerGroup managerGroup = new ManagerGroup();

            managerGroup.setManagerCodeName(managerRegister.getManagerCodeName());
            managerGroup.setManagerAccountCnt(managerRegister.getAccountCnt());

            adminRepository.save(managerGroup);
            startId = 1;
        }

        ManagerGroup managerGroupInfo = adminRepository.findByManagerCodeName(managerRegister.getManagerCodeName());    // 그룹 정보 가지고 오기
        if (startId == 0) {startId = managerGroupInfo.getManagerAccountCnt() + 1;}  // 이미 생성되어 있는 경우 startId 만들어있던 계정 수 +1 부터 시작

        List<NewAccountRes> accounts = new ArrayList<>();
        // 계정 생성
        for (int i = startId; i < startId + managerRegister.getAccountCnt(); i++) {
            Member member = new Member();

            member.setCode(2); // 관계자 코드 2
            member.setManagerCode(managerGroupInfo.getManagerCode());
            member.setManagerGroup(managerGroupInfo);

            String email = "manager" + i + "@" + managerRegister.getManagerCodeName() + ".com";
            member.setMemberEmail(email);

            String password = MemberPasswordMailUtil.getRandomPassword(12);
            member.setMemberPassword(password);
//            member.setMemberPassword(passwordEncoder.encode(password));

            member.setMemberName(managerRegister.getManagerCodeName() + i);
            member.setMemberNick(managerRegister.getManagerCodeName() + i);

            member.setIsLogin(false); // 회원가입이라 로그인 안 한 상태
            member.setIsApprove(true); // 회원가입 승인

            memberRepository.save(member);

            NewAccountRes newAccountRes = new NewAccountRes(email, password);

            accounts.add(newAccountRes);
        }
        return accounts;

        }
    }
