package com.ssafy.yourstar.domain.meeting.db.repository;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingGame;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MeetingGameRepository extends JpaRepository<MeetingGame, Integer> {

    @Query("select m.meetingName, a.applicantGameScore from Applicant a left join Meeting m on m.meetingId = a.meetingId where a.memberId = :memberId")
    List<String> fintMeetingResultListByMemberId(int memberId);

    @Query("select m.memberNick, a.applicantGameScore from Applicant a " +
            "left join Member m on m.memberId = a.memberId " +
            "where a.meetingId = :meetingId "+
            "order by a.applicantGameScore desc")
    Page<String> fintMeetingResultListByMeetingId(int meetingId, Pageable pageable);
}
