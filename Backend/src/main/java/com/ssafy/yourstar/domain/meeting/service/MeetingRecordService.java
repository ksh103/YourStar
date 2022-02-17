package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordImgPath;
import com.ssafy.yourstar.domain.meeting.request.MeetingRecordImgPathPostReq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.util.List;

public interface MeetingRecordService {

    Page<Meeting> meetingRecordList(int memberId, Pageable pageable); // 추억 보관함 목록
    String getSignImgPath(int fileId);
    int meetingRecordImgSave(MeetingRecordImgPathPostReq meetingRecordImgPathPostReq) throws IOException;
    List<MeetingRecordImgPath> meetingRecordImgDetail(int meetingId, int memberId); // 추억 보관함 사진 다운로드
    String meetingRecordVideoFileUrl(int meetingId, int memberId);
    int meetingRecordImgRemove(int fileId); // 추억 보관함 사진 개별 삭제
}
