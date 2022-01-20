package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Applicant;
import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByStarPostReq;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByUserPostReq;

public interface MeetingService {
    Meeting meetingApplyByStar(MeetingApplyByStarPostReq meetingApplyByStarPostReq);
    Applicant meetingApplyByUser(MeetingApplyByUserPostReq meetingApplyByUserPostReq);
}
