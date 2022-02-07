package com.ssafy.yourstar.domain.meeting.db.repository;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordImgPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MeetingRecordImgPathRepository extends JpaRepository<MeetingRecordImgPath, Integer> {

    @Query(value = "select m from MeetingRecordImgPath m where m.meetingId = :meetingId and m.memberId = :memberId")
    List<MeetingRecordImgPath> findAllByMeetingIdAndMemberId(int meetingId, int memberId);
}
