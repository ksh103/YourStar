package com.ssafy.yourstar.domain.meeting.db.repository;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Integer> {
    Page<Meeting> findAllByIsApproveFalse(Pageable pageable);

    @Query("SELECT m FROM Meeting m WHERE m.isApprove = true and m.meetingStartDate >= CURRENT_TIMESTAMP ")
    Page<Meeting> findAllByIsApproveTrue(Pageable pageable);
    Page<Meeting> findAll(Pageable pageable);

    @Query("select m.memberName, m.memberEmail, o.IsOath from Member m " +
            "left join Applicant a on m.memberId = a.memberId " +
            "left join MeetingOath o on m.memberId = o.memberId " +
            "where a.meetingId = :meetingId and o.meetingId = :meetingId")
    Page<String> findAllApplyMeetingListByMeetingId(int meetingId, Pageable pageable);
}
