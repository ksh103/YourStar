package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRepository;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByStarPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MeetingServiceImpl implements MeetingService {
    @Autowired
    MeetingRepository meetingRepository;

    @Override
    public Meeting meetingApplyByStar(MeetingApplyByStarPostReq meetingApplyByStarPostReq) {
        Meeting meeting = new Meeting();

        meeting.setManagerCode(meetingApplyByStarPostReq.getManagerCode());
        meeting.setMeetingName(meetingApplyByStarPostReq.getMeetingName());
        meeting.setMeetingOpenDate(meetingApplyByStarPostReq.getMeetingOpenDate());
        meeting.setMeetingStartDate(meetingApplyByStarPostReq.getMeetingStartDate());
        meeting.setMeetingEndDate(meetingApplyByStarPostReq.getMeetingEndDate());
        meeting.setMeetingCnt(meetingApplyByStarPostReq.getMeetingCnt());
        meeting.setMeetingPrice(meetingApplyByStarPostReq.getMeetingPrice());
        meeting.setMeetingDescription(meetingApplyByStarPostReq.getMeetingDescription());
        meeting.setApprove(false); // 스타가 신청시에는 관리자 승인 X 상태로 저장

        return meetingRepository.save(meeting);
    }
}
