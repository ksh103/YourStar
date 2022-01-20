package com.ssafy.yourstar.domain.meeting.db.repository;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long> {
}
