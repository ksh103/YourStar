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
    Page<Meeting> findAllByIsApproveTrue(Pageable pageable);

    @Query("SELECT m FROM Meeting m WHERE m.meetingStartDate >= CURRENT_TIMESTAMP")
    Page<Meeting> findAll(Pageable pageable);
}
