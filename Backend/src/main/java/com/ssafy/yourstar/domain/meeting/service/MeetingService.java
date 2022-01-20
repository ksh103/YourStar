package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByStarPostReq;

public interface MeetingService {
    Meeting meetingApplyByStar(MeetingApplyByStarPostReq meetingApplyByStarPostReq);
}
