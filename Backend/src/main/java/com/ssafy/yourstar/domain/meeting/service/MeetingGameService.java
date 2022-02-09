package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingGame;

import java.util.List;

public interface MeetingGameService {
    List<MeetingGame> meetingGameList(int meetingId);
    List<String> meetingGameResultListByUser(int memberId);
    List<String> meetingGameResultListByStar(int meetingId);

}
