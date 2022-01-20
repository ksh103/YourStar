package com.ssafy.yourstar.member.db.repository;

import com.ssafy.yourstar.member.db.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

//    Optional<Member> memberLoginByMemberEmail(String memberEmail);
}
