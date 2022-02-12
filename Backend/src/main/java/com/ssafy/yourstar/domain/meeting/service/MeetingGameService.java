package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingGame;
import com.ssafy.yourstar.domain.meeting.request.MeetingGameWinnerApplyByUserPostReq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MeetingGameService {
    boolean meetingGameScore(int meetingId, int memberId);

    List<String> meetingGameResultListByUser(int memberId); // 게임 우승자 내역 (회원 확인용)
    Page<String> meetingGameResultListByStar(int meetingId, Pageable pageable); // 게임 우승자 내역 (스타 확인용)
    MeetingGame meetingGameWinnerApply(MeetingGameWinnerApplyByUserPostReq meetingGameWinnerApplyByUserPostReq); // 게임 우승자 등록
}
