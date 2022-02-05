package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRepository;
import io.openvidu.java.client.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OpenviduServiceImpl implements OpenviduService{
    @Autowired
    MeetingRepository meetingRepository;

    // 오픈비두 객체 SDK
    private OpenVidu openVidu;

    // 미팅룸 관리 { 미팅룸 id : 미팅룸 세션 }
//    private Map<Integer, Session> mapSessions = new ConcurrentHashMap<>();
//    // 미팅룸 <-> 사용자 { 미팅룸 id : { 참가자 토큰 : 참가자 역할 } }
//    private Map<Integer, Map<String, OpenViduRole>> mapSessionNamesTokens = new ConcurrentHashMap<>();
//    // 미팅룸 <-> 녹화
//    private Map<String, Boolean> sessionRecordings = new ConcurrentHashMap<>();

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
            } catch (OpenViduJavaClientException e) {
                return 3;
            } catch (OpenViduHttpException e) {
                return 3;
            }
        }
        return 2;   // 해당 미팅룸 존재하지 않는 경우
    }
}
