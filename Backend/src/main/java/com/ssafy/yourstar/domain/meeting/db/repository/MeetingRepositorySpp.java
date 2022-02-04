package com.ssafy.yourstar.domain.meeting.db.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.QApplicant;
import com.ssafy.yourstar.domain.meeting.db.entity.QMeeting;
import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.db.entity.QMember;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public class MeetingRepositorySpp {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QApplicant qApplicant = QApplicant.applicant;
    QMeeting qMeeting = QMeeting.meeting;
    QMember qMember = QMember.member;

    public Page<Meeting> findAllApplyMeetingByMemberId(int memberId, Pageable pageable) {
        QueryResults<Meeting> list = jpaQueryFactory.select(qMeeting).from(qMeeting)
                .leftJoin(qApplicant).on(qApplicant.meetingId.eq(qMeeting.meetingId))
                .where(qApplicant.memberId.eq(memberId))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }

    public Page<Member> findAllApplyMeetingListByMeetingId(int meetingId, Pageable pageable) {
        QueryResults<Member> list = jpaQueryFactory.select(qMember).from(qMember)
                .leftJoin(qApplicant).on(qMember.memberId.eq(qApplicant.memberId))
                .where(qApplicant.meetingId.eq(meetingId))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }
}
