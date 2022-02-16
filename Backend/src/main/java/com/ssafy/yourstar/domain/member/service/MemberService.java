package com.ssafy.yourstar.domain.member.service;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.request.MemberModifyPostReq;
import com.ssafy.yourstar.domain.member.request.MemberPasswordPostReq;
import com.ssafy.yourstar.domain.member.request.MemberRegisterPostReq;

public interface MemberService {

    Member memberDetail(String memberEmail); // 로그인
    boolean memberLoginApprove(String memberEmail); // 회원가입 인증 여부 확인 후 로그인
    boolean memberLoginCheck(String memberEmail); // 현재 로그인 상태인지 확인
    boolean memberIsLogin(String memberEmail); // DB에 로그인 처리

    boolean memberLogout(int memberId); // 로그아웃

    boolean memberPasswordInit(MemberPasswordPostReq memberPasswordPostReq, String newMemberPassword); // 비밀번호 초기화

    Member memberRegister(MemberRegisterPostReq memberRegisterInfo); // 회원가입
    boolean memberRegisterApprove(String memberEmail); // 회원가입 인증

    boolean memberEmailCheck(String memberEmail); // 이메일 중복 체크
    boolean memberNickCheck(String memberNick); // 닉네임 중복 체크

    boolean memberRemove(int memberId); // 회원 탈퇴

    Member memberModify(int memberId, MemberModifyPostReq memberModifyPostReq); // 회원 정보 수정

    String passwordEncode(String password);
}
