package com.ssafy.yourstar.domain.admin.service;

import com.ssafy.yourstar.domain.admin.db.repository.AdminRepository;
import com.ssafy.yourstar.domain.admin.request.ManagerRegisterPostReq;
import com.ssafy.yourstar.domain.admin.request.NewAccountRes;
import com.ssafy.yourstar.domain.member.db.entity.ManagerGroup;
import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.db.repository.MemberRepository;
import com.ssafy.yourstar.domain.member.service.MemberService;
import com.ssafy.yourstar.global.util.ManagerRegisterMailUtil;
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

    @Autowired
    MemberService memberService;

    @Override
    public Page<Member> memberList(int code, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page - 1, size, Sort.by("memberId").descending());
        if (code == 0) { // 전체 조회
            return memberRepository.findAll(pageRequest);
        } else {    // 회원 코드별로 조회 (2 - 관계자, 3 - 일반회원, 4 - 스타)
            return memberRepository.findAllByCode(code, pageRequest);
        }
    }

    @Override
    public Page<Member> managerGroupList(int managerCode, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page - 1, size, Sort.by("code").descending().and(Sort.by("memberId").ascending()));

        return memberRepository.findAllByManagerCode(managerCode, pageRequest);
    }

    @Override
    public List<NewAccountRes> managerRegister(ManagerRegisterPostReq managerRegister) {
        ManagerGroup managerGroupInfo = null;
        int starAccountIdx = 0;
        int accountIdx = 0;

        // 처음 생성하는 경우
        if (adminRepository.findByManagerCodeName(managerRegister.getManagerCodeName()) == null) {
            // 관계자 그룹 생성
            ManagerGroup managerGroup = new ManagerGroup();

            managerGroup.setManagerCodeName(managerRegister.getManagerCodeName());
            managerGroup.setManagerAccountCnt(managerRegister.getAccountCnt());
            managerGroup.setManagerStarAccountCnt(managerRegister.getStarAccountCnt());

            adminRepository.save(managerGroup);
            managerGroupInfo = adminRepository.findByManagerCodeName(managerRegister.getManagerCodeName()); // 그룹 정보 가지고 오기

            starAccountIdx = 1;
            accountIdx = 1;
        } else { // 이미 생성되어 있는 경우 인덱스 지정
            managerGroupInfo = adminRepository.findByManagerCodeName(managerRegister.getManagerCodeName()); // 그룹 정보 가지고 오기

            ManagerGroup managerGroup = new ManagerGroup();
            managerGroup.setManagerCode(managerGroupInfo.getManagerCode());
            managerGroup.setManagerCodeName(managerGroupInfo.getManagerCodeName());
            managerGroup.setManagerAccountCnt(managerGroupInfo.getManagerStarAccountCnt() + managerRegister.getStarAccountCnt());
            managerGroup.setManagerStarAccountCnt(managerGroupInfo.getManagerAccountCnt() + managerRegister.getAccountCnt());

            adminRepository.save(managerGroup);

            starAccountIdx = managerGroupInfo.getManagerStarAccountCnt() + 1;
            accountIdx = managerGroupInfo.getManagerAccountCnt() + 1; // 이미 생성되어 있는 경우 accountIdx 만들어있던 계정 수 +1 부터 시작
        }

        List<NewAccountRes> accounts = new ArrayList<>();
        // 스타 게정 생성
        for (int i = starAccountIdx; i < starAccountIdx + managerRegister.getStarAccountCnt(); i++) {
            Member member = new Member();

            member.setCode(4); // 스타 코드 4
            member.setManagerCode(managerGroupInfo.getManagerCode());
            member.setManagerGroup(managerGroupInfo);

            String email = "star" + i + "@" + managerRegister.getManagerCodeName() + ".com";
            member.setMemberEmail(email);

            String password = MemberPasswordMailUtil.getRandomPassword(12);
            member.setMemberPassword(memberService.passwordEncode(password));

            member.setMemberName(managerRegister.getManagerCodeName() + " 스타" + i);
            member.setMemberNick(managerRegister.getManagerCodeName() + " 스타" + i);

            member.setIsLogin(false); // 회원가입이라 로그인 안 한 상태
            member.setIsApprove(true); // 회원가입 승인

            memberRepository.save(member);
            NewAccountRes newAccountRes = new NewAccountRes(email, password);

            accounts.add(newAccountRes);
        }

        // 관계자 생성
        for (int i = accountIdx; i < accountIdx + managerRegister.getAccountCnt(); i++) {
            Member member = new Member();

            member.setCode(2); // 관계자 코드 2
            member.setManagerCode(managerGroupInfo.getManagerCode());
            member.setManagerGroup(managerGroupInfo);

            String email = "manager" + i + "@" + managerRegister.getManagerCodeName() + ".com";
            member.setMemberEmail(email);

            String password = MemberPasswordMailUtil.getRandomPassword(12);
            member.setMemberPassword(memberService.passwordEncode(password));

            member.setMemberName(managerRegister.getManagerCodeName() + " 관계자" + i);
            member.setMemberNick(managerRegister.getManagerCodeName() + " 관계자" + i);

            member.setIsLogin(false); // 회원가입이라 로그인 안 한 상태
            member.setIsApprove(true); // 회원가입 승인

            memberRepository.save(member);
            NewAccountRes newAccountRes = new NewAccountRes(email, password);

            accounts.add(newAccountRes);
        }

        ManagerRegisterMailUtil.sendManagerAccountEmail(managerRegister.getManagerEmail(), accounts);

        return accounts;
        }
    }
