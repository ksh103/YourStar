package com.ssafy.yourstar.domain.meeting.db.repository;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingImgPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MeetingImgPathRepository extends JpaRepository<MeetingImgPath, Integer> {

    @Query(value = "SELECT fileUrl FROM MeetingImgPath WHERE meetingId = :meetingId")
    List<String> meetingImgFileUrl(@Param("meetingId") int meetingId);

    @Query(value = "SELECT fileId FROM MeetingImgPath WHERE meetingId = :meetingId")
    List<Integer> findFileIdBymeetingId(@Param("meetingId") int meetingId);
}
