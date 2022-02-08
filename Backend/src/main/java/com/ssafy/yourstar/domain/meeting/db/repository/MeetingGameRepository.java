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

    @Query(value = "select g.meetingGameName, m.meetingName from MeetingGame g left join Meeting m on m.meetingId = g.meetingId where g.memberId = :memberId")
    List<String> fintMeetingResultListByMemberId(int memberId);

    @Query(value = "select g.meetingGameName, m.memberName from MeetingGame g " +
            "left join Member m on m.memberId = g.memberId " +
            "where g.meetingId = :meetingId")
    List<String> fintMeetingResultListByMeetingId(int meetingId);
}
