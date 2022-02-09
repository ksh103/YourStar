package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordVideoPath;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRecordVideoPathRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRepository;
import com.ssafy.yourstar.domain.meeting.request.MeetingRecordingPostReq;
import com.ssafy.yourstar.domain.member.db.repository.MemberRepository;
import io.openvidu.java.client.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class OpenviduServiceImpl implements OpenviduService{
    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    MeetingRecordVideoPathRepository meetingRecordVideoPathRepository;

    @Autowired
    MemberRepository memberRepository;

    // 오픈비두 객체 SDK
    private OpenVidu openVidu;

    // 오픈비두 서버 관련 변수
    private String OPENVIDU_URL;
    private String SECRET;

    // OpenviduController에 접근할 때마다 오픈비두 서버 관련 변수 얻어옴
    public OpenviduServiceImpl(@Value("${openvidu.secret}") String secret, @Value("${openvidu.url}") String openviduUrl) {
        this.SECRET = secret;
        this.OPENVIDU_URL = openviduUrl;
        this.openVidu = new OpenVidu(OPENVIDU_URL, SECRET);
    }

    @Override
    public int meetingPendingApprove(int meetingId) {
        if (meetingRepository.findById(meetingId).isPresent()) {
            Meeting meeting = meetingRepository.findById(meetingId).get();  // 미팅룸 정보 가져오기

            // 이미 승인된 상태라면
            if (meeting.isApprove() == true) {
                return 1;
            }
            // 녹화 설정 - 녹화 제목 팬미팅 이름으로 만들어지도록 설정
//            RecordingProperties recordingProperties = new RecordingProperties.Builder().name(meeting.getMeetingName()).build();
            // 메인 세션 설정 - 세션 이름(원래 랜덤)을 미팅룸id으로 변경, 위에서 만든 녹화 설정으로 세션 설정하기
            SessionProperties mainSessionProperties = new SessionProperties.Builder().customSessionId(String.valueOf(meetingId)).build();
            // 1대1 세션 설정
            SessionProperties onebyoneSessionProperties = new SessionProperties.Builder().customSessionId(String.valueOf(meetingId)+"-onebyone").build();
            // 세션 만들기
            try {
                this.openVidu.createSession(mainSessionProperties);
                this.openVidu.createSession(onebyoneSessionProperties);
                // 승인 상태로 변경 후 저장
                meeting.setApprove(true);
                meetingRepository.save(meeting);
                return 0;
            } catch (OpenViduJavaClientException | OpenViduHttpException e) {
                return 3;
            }
        }
        return 2;   // 해당 미팅룸 존재하지 않는 경우
    }

    @Override
    public String meetingRecording(MeetingRecordingPostReq meetingRecordingPostReq) {
        Integer meetingId = meetingRecordingPostReq.getMeetingId();	// 미팅룸 id
        if (meetingRepository.findById(meetingId).isPresent() && memberRepository.findById(meetingRecordingPostReq.getMemberId()).isPresent()){

            try {
                Recording recording = this.openVidu.stopRecording(meetingRecordingPostReq.getRecordId());   // 녹화 중단

                // DB에 저장하기
                MeetingRecordVideoPath meetingRecordVideoPath = new MeetingRecordVideoPath();

                meetingRecordVideoPath.setMeetingId(meetingId);
                meetingRecordVideoPath.setMemberId(meetingRecordingPostReq.getMemberId());
                Meeting meeting = meetingRepository.findById(meetingId).get();
                meetingRecordVideoPath.setFileName(meeting.getMeetingName() + " 1대1 미팅");

                meetingRecordVideoPath.setFileUrl(recording.getUrl());  // openvidu 녹화 url
                meetingRecordVideoPath.setRecordingId(recording.getId());  // openvidu server의 녹화 id

                meetingRecordVideoPathRepository.save(meetingRecordVideoPath);
                return "0";
            } catch (OpenViduJavaClientException | OpenViduHttpException e) {
                String error = e.getMessage();
                if (error.equals("404")) {
                    return "2"; // recordingId 없는 경우
                } else if (error.equals("406")) {
                    return "3"; // recording이 "starting" 상태. "started"가 될때까지 기다리기
                } else {
                    return "4";
                }
            }
        } else {
            return "1"; // 미팅룸 id 또는 member id가 존재하지 않는 경우
        }
    }

    @Override
    public int fileRemove(int fileId) {
        if (meetingRecordVideoPathRepository.findById(fileId).isPresent()) {
            try {
                MeetingRecordVideoPath meetingFilePath = meetingRecordVideoPathRepository.findById(fileId).get();
                // DB에서 삭제
                meetingRecordVideoPathRepository.deleteById(fileId);

                // 오픈비두 서버에서 삭제
                this.openVidu.deleteRecording(meetingFilePath.getRecordingId());

                return 0;
            } catch (OpenViduJavaClientException | OpenViduHttpException e) {
                return 1;
            }
        } else {
            return 2;   // fileId가 존재하지 않는 경우
        }
    }
}
