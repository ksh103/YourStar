package com.ssafy.yourstar.member.service;

import com.ssafy.yourstar.member.db.entity.Member;

public interface MemberService {

    Member loginMemberByMemberEmail(String memberEmail);
}
