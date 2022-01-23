package com.ssafy.yourstar.domain.member.service;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.request.MemberPasswordPostReq;
import com.ssafy.yourstar.domain.member.request.MemberRegisterPostReq;

public interface MemberService {

    Member loginMemberByMemberEmail(String memberEmail);
    boolean loginApproveMember(String memberEmail);
    boolean loginIsLoginMember(String memberEmail);
    Member registerMember(MemberRegisterPostReq memberRegisterInfo);
    Member passwordInitMember(MemberPasswordPostReq memberPasswordPostReq);
    boolean registerApproveMember(String memberEmail);
}
