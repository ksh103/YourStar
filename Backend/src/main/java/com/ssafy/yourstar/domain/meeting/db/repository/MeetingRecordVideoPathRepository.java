package com.ssafy.yourstar.domain.meeting.db.repository;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordVideoPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MeetingRecordVideoPathRepository extends JpaRepository<MeetingRecordVideoPath, Integer> {

    @Query(value = "SELECT meetingId FROM MeetingRecordVideoPath WHERE memberId = :memberId")
    List<Integer> findMeetingIdByMemberId(int memberId);
}
