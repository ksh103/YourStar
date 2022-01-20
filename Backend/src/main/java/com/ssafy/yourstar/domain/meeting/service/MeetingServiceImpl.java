package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Applicant;
import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.repository.ApplicantRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRepository;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByStarPostReq;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByUserPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MeetingServiceImpl implements MeetingService {
    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    ApplicantRepository applicantRepository;


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

    @Override
    public Meeting meetingModifyByStar(Meeting meeting) {
        // 해당 팬미팅이 존재하면 수정
        if (meetingRepository.findById(meeting.getMeetingId()).isPresent()) {
            return meetingRepository.save(meeting);
        } else return null;
    }

    @Override
    public boolean meetingRemoveByStar(int meetingId) {
        // 해당 팬미팅이 존재하면 삭제
        if (meetingRepository.findById(meetingId).isPresent()) {
            meetingRepository.deleteById(meetingId);
            return true;
        } else return false;
    }

    @Override
    public Applicant meetingApplyByUser(MeetingApplyByUserPostReq meetingApplyByUserPostReq) {
        Applicant applicant = new Applicant();

        applicant.setMeetingId(meetingApplyByUserPostReq.getMeetingId());
        applicant.setMemberId(meetingApplyByUserPostReq.getMemberId());
        applicant.setApplicantWarnCount(0); // 신청 했을 때 경고 횟수는 0이다.

        return applicantRepository.save(applicant);
    }

    @Override
    public boolean meetingRemoveByUser(Applicant applicant) {
        // 해당 팬미팅이 존재하는지 조회 후 있을 때 삭제하는 코드로 수정
        applicantRepository.delete(applicant);
        return true;
    }
}
