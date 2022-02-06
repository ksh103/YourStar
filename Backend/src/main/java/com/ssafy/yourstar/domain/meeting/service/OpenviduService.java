package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.request.MeetingRecordingPostReq;

public interface OpenviduService {
    int meetingPendingApprove(int meetingId);
    String recordingStart(MeetingRecordingPostReq meetingRecordingPostReq);
    int recordingRemove(int fileId);
}
