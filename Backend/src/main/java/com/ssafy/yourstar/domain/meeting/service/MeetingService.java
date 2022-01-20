package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Applicant;
import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByStarPostReq;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByUserPostReq;

public interface MeetingService {
    Meeting meetingApplyByStar(MeetingApplyByStarPostReq meetingApplyByStarPostReq);
    Meeting meetingModifyByStar(Meeting meeting);
    boolean meetingRemoveByStar(int meetingId);
    Applicant meetingApplyByUser(MeetingApplyByUserPostReq meetingApplyByUserPostReq);
}
