package com.ssafy.yourstar.domain.member.service;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.request.MemberPasswordPostReq;
import com.ssafy.yourstar.domain.member.request.MemberRegisterPostReq;

public interface MemberService {

    Member loginMemberByMemberEmail(String memberEmail); // 로그인
    boolean loginApproveMember(String memberEmail); // 회원가입 인증 여부 확인 후 로그인
    boolean loginIsLoginMember(String memberEmail); // 로그인 여부 체크

    Member passwordInitMember(MemberPasswordPostReq memberPasswordPostReq); // 비밀번호 초기화

    Member registerMember(MemberRegisterPostReq memberRegisterInfo); // 회원가입
    boolean registerApproveMember(String memberEmail); // 회원가입 인증

    boolean emailCheckMember(String memberEmail);
    boolean nickCheckMember(String memberNick);

    String passwordEncode(String password);
}
