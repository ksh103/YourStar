package com.ssafy.yourstar.domain.member.db.repository;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

    Optional<Member> findMemberByMemberEmail(String memberEmail);
    Optional<Member> findMemberByMemberNick(String memberNick);
    Optional<Member> findMemberByMemberEmailAndMemberName(String memberEmail, String memberName);
    Optional<Member> findMemberByMemberEmailLikeAndIsApproveTrue(String memberEmail);
}
