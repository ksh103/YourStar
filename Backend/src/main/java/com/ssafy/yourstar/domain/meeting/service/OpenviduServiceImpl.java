package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingFilePath;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingFilePathRepository;
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
    MeetingFilePathRepository meetingFilePathRepository;

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
            RecordingProperties recordingProperties = new RecordingProperties.Builder().name(meeting.getMeetingName()).build();
            // 세션 설정 - 세션 이름(원래 랜덤)을 미팅룸id으로 변경, 위에서 만든 녹화 설정으로 세션 설정하기
            SessionProperties sessionProperties = new SessionProperties.Builder().customSessionId(String.valueOf(meetingId)).defaultRecordingProperties(recordingProperties).build();

            // 세션 만들기
            try {
                this.openVidu.createSession(sessionProperties);
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
    public String recordingStart(MeetingRecordingPostReq meetingRecordingPostReq) {
        Integer meetingId = meetingRecordingPostReq.getMeetingId();	// 미팅룸 id
        if (meetingRepository.findById(meetingId).isPresent() && memberRepository.findById(meetingRecordingPostReq.getMemberId()).isPresent()){
            RecordingProperties recordingProperties = new RecordingProperties.Builder().build();	// recording property

            try {
                // 녹화 시작
                Recording recording = this.openVidu.startRecording(String.valueOf(meetingId), recordingProperties);
                Thread.sleep(180);  // 3분 뒤에 녹화 중단
                this.openVidu.stopRecording(recording.getId());

                // DB에 저장하기
                MeetingFilePath meetingFilePath = new MeetingFilePath();

                meetingFilePath.setMeetingId(meetingId);
                meetingFilePath.setMemberId(meetingRecordingPostReq.getMemberId());
                meetingFilePath.setFileName(recording.getName() + "녹화");

                meetingFilePath.setFileContentType("mp4");
                meetingFilePath.setFileUrl(recording.getUrl());
                meetingFilePath.setRecordId(recording.getId());

                meetingFilePathRepository.save(meetingFilePath);
                return "0";
            } catch (OpenViduJavaClientException | OpenViduHttpException | InterruptedException e) {
                String error = e.getMessage();
                if (error.equals("404")) {
                    return "1"; // 세션이 없는 경우
                } else if (error.equals("406")) {
                    return "2"; // 세션에 연결된 참가자가 없는 경우
                } else if (error.equals("409")) {
                    return "3"; // 이미 녹화중
                } else {
                    return "4";
                }
            }
        } else {
            return "1"; // 미팅룸 id 또는 member id가 존재하지 않는 경우
        }
    }

    @Override
    public int recordingRemove(int fileId) {
        if (meetingFilePathRepository.findById(fileId).isPresent()) {
            try {
                MeetingFilePath meetingFilePath = meetingFilePathRepository.findById(fileId).get();

                if (meetingFilePath.getRecordId() != null) {    // 녹화 영상이라면
                    // 오픈비두 서버에서 삭제
                    this.openVidu.deleteRecording(meetingFilePath.getRecordId());
                }
                // DB에서 삭제
                meetingFilePathRepository.deleteById(fileId);
                return 0;
            } catch (OpenViduJavaClientException | OpenViduHttpException e) {
                return 1;
            }
        } else {
            return 2;   // fileId가 존재하지 않는 경우
        }
    }
}
