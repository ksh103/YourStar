package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Applicant;
import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByStarPostReq;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByUserPostReq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MeetingService {
    Meeting meetingApplyByStar(MeetingApplyByStarPostReq meetingApplyByStarPostReq);
    Meeting meetingModifyByStar(Meeting meeting);
    boolean meetingRemoveByStar(int meetingId);
    Page<Meeting> meetingPendingList(Pageable pageable);
    Applicant meetingApplyByUser(MeetingApplyByUserPostReq meetingApplyByUserPostReq);
    boolean meetingRemoveByUser(int memberId, int meetingId);
}
