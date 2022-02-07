package com.ssafy.yourstar.domain.meeting.db.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.QMeeting;
import com.ssafy.yourstar.domain.meeting.db.entity.QMeetingRecordImgPath;
import com.ssafy.yourstar.domain.meeting.db.entity.QMeetingRecordVideoPath;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public class MeetingRecordRepositorySpp {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QMeeting qMeeting = QMeeting.meeting;
    QMeetingRecordImgPath qMeetingRecordImgPath = QMeetingRecordImgPath.meetingRecordImgPath;
    QMeetingRecordVideoPath qMeetingRecordVideoPath = QMeetingRecordVideoPath.meetingRecordVideoPath;

    public Page<Meeting> findMeetingRecordListByMemberId(int memberId, Pageable pageable) {
        QueryResults<Meeting> list = jpaQueryFactory.select(qMeeting).from(qMeeting)
                .leftJoin(qMeetingRecordImgPath).on(qMeetingRecordImgPath.meetingId.eq(qMeeting.meetingId))
                .leftJoin(qMeetingRecordVideoPath).on(qMeetingRecordVideoPath.meetingId.eq(qMeeting.meetingId))
                .where((qMeetingRecordImgPath.memberId.eq(memberId).or(qMeetingRecordVideoPath.memberId.eq(memberId))))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }
}
