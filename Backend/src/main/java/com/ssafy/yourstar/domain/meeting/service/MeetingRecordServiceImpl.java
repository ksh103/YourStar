package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class MeetingRecordServiceImpl implements MeetingRecordService {

    @Autowired
    MeetingRepository meetingRepository;

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
}
