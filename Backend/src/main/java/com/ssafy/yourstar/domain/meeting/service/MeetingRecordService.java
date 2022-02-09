package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordImgPath;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MeetingRecordService {

    Page<Meeting> meetingRecordList(int memberId, Pageable pageable);
    List<MeetingRecordImgPath> meetingRecordImgDetail(int meetingId, int memberId);
    int meetingRecordImgRemove(int fileId);
}
