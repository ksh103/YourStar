package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MeetingRecordService {

    Page<Meeting> meetingRecordList(int memberId, Pageable pageable);
}
