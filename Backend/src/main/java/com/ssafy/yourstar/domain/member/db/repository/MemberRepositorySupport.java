package com.ssafy.yourstar.domain.member.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.member.db.entity.QMember;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class MemberRepositorySupport {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QMember qMember = QMember.member;

    public Optional<Member> memberLoginByMemberEmail(String memberEmail) {
        Member member = jpaQueryFactory.select(qMember).from(qMember)
                .where(qMember.memberEmail.eq(memberEmail)).fetchOne();

        if(member == null) return Optional.empty();
        return Optional.ofNullable(member);
    }
}
