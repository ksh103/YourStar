package com.ssafy.yourstar.domain.member.service;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.db.repository.MemberRepository;
import com.ssafy.yourstar.domain.member.db.repository.MemberRepositorySupport;
import com.ssafy.yourstar.domain.member.request.MemberRegisterPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;

@Service
public class MemberServiceImpl implements  MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private MemberRepositorySupport memberRepositorySupport;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public Member loginMemberByMemberEmail(String memberEmail) {
        Member member = memberRepositorySupport.memberLoginByMemberEmail(memberEmail).get();
        return member;
    }

    @Override
    public Member registerMember(MemberRegisterPostReq memberRegisterInfo) {
        Member member = new Member();

        SimpleDateFormat newDtFormat = new SimpleDateFormat("yyyy-MM-dd");

        member.setCode(3); // 회원가입은 일반회원만 가능하므로 3으로 default
        member.setMemberEmail(memberRegisterInfo.getMemberEmail());
        member.setMemberPassword(passwordEncoder.encode(memberRegisterInfo.getMemberPassword()));
        member.setMemberName(memberRegisterInfo.getMemberName());
        member.setMemberNick(memberRegisterInfo.getMemberNick());
        member.setMemberPhone(memberRegisterInfo.getMemberPhone());
        member.setMemberAddress(memberRegisterInfo.getMemberAddress());
        member.setMemberBirth(memberRegisterInfo.getMemberBirth());
        member.setMemberGender(memberRegisterInfo.getMemberGender());
        member.setIsLogin(false); // 회원가입이라 로그인 안 한 상태로
        member.setManagerCode(0);
        return memberRepository.save(member);
    }
}
