package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Applicant;
import com.ssafy.yourstar.domain.meeting.db.entity.ApplicantID;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingGame;
import com.ssafy.yourstar.domain.meeting.db.repository.ApplicantRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingGameRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRepositorySpp;
import com.ssafy.yourstar.domain.meeting.request.MeetingGameWinnerApplyByUserPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeetingGameServiceImpl implements MeetingGameService {

    @Autowired
    MeetingGameRepository meetingGameRepository;

    @Autowired
    MeetingRepositorySpp meetingRepositorySpp;

    @Autowired
    ApplicantRepository applicantRepository;

    @Override
    public boolean meetingGameScore(int meetingId, int memberId) {
        ApplicantID applicantID = new ApplicantID();

        applicantID.setMeetingId(meetingId);
        applicantID.setMemberId(memberId);

        if(applicantRepository.findById(applicantID).isPresent()) {
            Applicant applicant = applicantRepository.findById(applicantID).get();

            applicant.setApplicantGameScore(applicant.getApplicantGameScore() + 50);

            applicantRepository.save(applicant);

            return true;
        }
        return false;
    }

    @Override
    public List<String> meetingGameResultListByUser(int memberId) {
        return meetingGameRepository.fintMeetingResultListByMemberId(memberId);
    }

    @Override
    public List<String> meetingGameResultListByStar(int meetingId) {
        return meetingGameRepository.fintMeetingResultListByMeetingId(meetingId);
    }

    @Override
    public MeetingGame meetingGameWinnerApply(MeetingGameWinnerApplyByUserPostReq meetingGameWinnerApplyByUserPostReq) {
        MeetingGame meetingGame = new MeetingGame();

        meetingGame.setMeetingId(meetingGameWinnerApplyByUserPostReq.getMeetingId());
        meetingGame.setMemberId(meetingGameWinnerApplyByUserPostReq.getMemberId());
        meetingGame.setMeetingGameName(meetingGameWinnerApplyByUserPostReq.getMeetingGameName());

        return meetingGameRepository.save(meetingGame);
    }
}
