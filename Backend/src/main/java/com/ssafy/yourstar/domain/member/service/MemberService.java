package com.ssafy.yourstar.domain.member.service;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.request.MemberPasswordPostReq;
import com.ssafy.yourstar.domain.member.request.MemberRegisterPostReq;

public interface MemberService {

    Member memberLoginByMemberEmail(String memberEmail); // 로그인
    boolean memberLoginApprove(String memberEmail); // 회원가입 인증 여부 확인 후 로그인
    boolean memberIsLogin(String memberEmail); // 로그인 여부 체크

    Member memberPasswordInit(MemberPasswordPostReq memberPasswordPostReq); // 비밀번호 초기화

    Member memberRegister(MemberRegisterPostReq memberRegisterInfo); // 회원가입
    boolean memberRegisterApprove(String memberEmail); // 회원가입 인증

    boolean memberEmailCheck(String memberEmail);
    boolean memberNickCheck(String memberNick);

    boolean memberRemove(int memberId);
}
