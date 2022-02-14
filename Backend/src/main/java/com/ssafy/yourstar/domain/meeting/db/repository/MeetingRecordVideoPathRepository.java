package com.ssafy.yourstar.domain.meeting.db.repository;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordVideoPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MeetingRecordVideoPathRepository extends JpaRepository<MeetingRecordVideoPath, Integer> {

    @Query("select m.fileUrl from MeetingRecordVideoPath m where m.meetingId = :meetingId and m.memberId = :memberId")
    String findFileUrlByMeetingIdAndMemberId(int meetingId, int memberId);
}
