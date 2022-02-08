package com.ssafy.yourstar.domain.meeting.db.repository;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MeetingGameRepository extends JpaRepository<MeetingGame, Integer> {

    @Query(value = "select g from MeetingGame g where g.meetingId = :meetingId ")
    List<MeetingGame> findMeetingGameByMeetingId(int meetingId);
}
