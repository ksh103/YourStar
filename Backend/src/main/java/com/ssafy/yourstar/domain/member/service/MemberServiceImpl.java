package com.ssafy.yourstar.domain.member.service;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.db.repository.MemberRepository;
import com.ssafy.yourstar.domain.member.request.MemberModifyPostReq;
import com.ssafy.yourstar.domain.member.request.MemberPasswordPostReq;
import com.ssafy.yourstar.domain.member.request.MemberRegisterPostReq;
import com.ssafy.yourstar.global.util.MemberPasswordMailUtil;
import com.ssafy.yourstar.global.util.MemberRegisterMailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements  MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    PasswordEncoder passwordEncoder;


    @Override
    public Member memberDetail(String memberEmail) {
        Member member = memberRepository.findMemberByMemberEmail(memberEmail).get();
        return member;
    }

    @Override
    public boolean memberLoginApprove(String memberEmail) {
        if(memberRepository.findMemberByMemberEmailLikeAndIsApproveTrue(memberEmail).isPresent()) {
            return true;
        }else return false;
    }

    @Override
    public boolean memberIsLogin(String memberEmail) {
        if(memberRepository.findMemberByMemberEmail(memberEmail).isPresent()) {
            Member member = memberRepository.findMemberByMemberEmail(memberEmail).get();

            member.setIsLogin(true);
            memberRepository.save(member);

            return true;
        }else return false;
    }

    @Override
    public boolean memberLogout(int memberId) {
        if(memberRepository.findById(memberId).isPresent()) {
            Member member = memberRepository.findById(memberId).get();

            member.setIsLogin(false);
            memberRepository.save(member);

            return true;
        }
        return false;
    }

    @Override
    public Member memberRegister(MemberRegisterPostReq memberRegisterInfo) {
        Member member = new Member();

        StringBuilder sb = new StringBuilder();
        sb.append(memberRegisterInfo.getMemberBirth()).insert(4, "-").insert(7, "-");

        member.setCode(3); // 회원가입은 일반회원만 가능하므로 3으로 default
        member.setManagerCode(0); // 회원가입은 일반회원만 가능하므로 소속이 없음 --> 이 부분은 개선해야할듯. (테스트)

        member.setMemberEmail(memberRegisterInfo.getMemberEmail());
        member.setMemberPassword(passwordEncoder.encode(memberRegisterInfo.getMemberPassword()));
        member.setMemberName(memberRegisterInfo.getMemberName());
        member.setMemberNick(memberRegisterInfo.getMemberNick());
        member.setMemberPhone(memberRegisterInfo.getMemberPhone());
        member.setMemberAddress(memberRegisterInfo.getMemberAddress());
        member.setMemberBirth(sb.toString());
        member.setMemberGender(memberRegisterInfo.getMemberGender());

        member.setIsLogin(false); // 회원가입이라 로그인 안 한 상태
        member.setIsApprove(false); // 회원가입 미승인 (default) --> 이메일 인증 이후 true 처리

        MemberRegisterMailUtil.sendApproveEmail(memberRegisterInfo.getMemberEmail());
        return memberRepository.save(member);
    }

    @Override
    public Member memberPasswordInit(MemberPasswordPostReq memberPasswordPostReq) {
        Member member = new Member();

        if(memberRepository.findMemberByMemberEmailAndMemberName(memberPasswordPostReq.getMemberEmail(), memberPasswordPostReq.getMemberName()).isPresent()) {
            String newMemberPassword = MemberPasswordMailUtil.getRandomPassword(12);

            member = memberRepository.findMemberByMemberEmailAndMemberName(memberPasswordPostReq.getMemberEmail(), memberPasswordPostReq.getMemberName()).get();

            member.setMemberPassword(passwordEncoder.encode(newMemberPassword));

            MemberPasswordMailUtil.sendInitPwEmail(memberPasswordPostReq, newMemberPassword);

            return memberRepository.save(member);
        }else return null;
    }

    @Override
    public boolean memberRegisterApprove(String memberEmail) {
        if(memberRepository.findMemberByMemberEmail(memberEmail).isPresent()) {
            Member member = memberRepository.findMemberByMemberEmail(memberEmail).get();

            member.setIsApprove(true);
            memberRepository.save(member);

            return true;
        }else return false;
    }

    @Override
    public boolean memberEmailCheck(String memberEmail) {
        if(memberRepository.findMemberByMemberEmail(memberEmail).isPresent()) return false;
        else return true;
    }

    @Override
    public boolean memberNickCheck(String memberNick) {
        if(memberRepository.findMemberByMemberNick(memberNick).isPresent()) return false;
        else return true;
    }

    public boolean memberRemove(int memberId) {
        if(memberRepository.findById(memberId).isPresent()) {
            memberRepository.deleteById(memberId);
            return true;
        } else return false;
    }

    @Override
    public Member memberModify(int memberId, MemberModifyPostReq memberModifyPostReq) {
        if(memberRepository.findById(memberId).isPresent()) {
            Member member = new Member();

            member = memberRepository.findById(memberId).get();

            member.setMemberNick(memberModifyPostReq.getMemberNick());
            member.setMemberPassword(passwordEncoder.encode(memberModifyPostReq.getMemberPassword()));
            member.setMemberPhone(memberModifyPostReq.getMemberPhone());
            member.setMemberAddress(memberModifyPostReq.getMemberAddress());

            return memberRepository.save(member);
        }else return null;
    }

    @Override
    public String passwordEncode(String password) {
        return passwordEncoder.encode(password);
    }
}
