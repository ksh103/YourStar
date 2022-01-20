package com.ssafy.yourstar.domain.member.service;

import com.ssafy.yourstar.domain.member.db.entity.Member;

public interface MemberService {

    Member loginMemberByMemberEmail(String memberEmail);
}
