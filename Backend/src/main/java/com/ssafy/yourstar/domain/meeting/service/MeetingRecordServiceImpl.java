package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordImgPath;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRecordImgPathRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRecordRepositorySpp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeetingRecordServiceImpl implements MeetingRecordService {

    @Autowired
    MeetingRecordImgPathRepository meetingRecordImgPathRepository;

    @Autowired
    MeetingRecordRepositorySpp meetingRecordRepositorySpp;

    @Value("${app.fileupload.recordDir}")
    private String recordFolder;

    @Value("${app.fileupload.uploadPath}")
    private String uploadPath;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public Page<Meeting> meetingRecordList(int memberId, Pageable pageable) {
        return meetingRecordRepositorySpp.findMeetingRecordListByMemberId(memberId, pageable);
    }

    @Override
    public List<MeetingRecordImgPath> meetingRecordImgDetail(int meetingId, int memberId) {

        if(!meetingRecordImgPathRepository.findAllByMeetingIdAndMemberId(meetingId, memberId).isEmpty()){
            return meetingRecordImgPathRepository.findAllByMeetingIdAndMemberId(meetingId, memberId);
        }
        return null;
    }
}
