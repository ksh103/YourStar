package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.request.MeetingRecordingPostReq;

public interface OpenviduService {
    int meetingPendingApprove(int meetingId);
    int recordingStart(MeetingRecordingPostReq meetingRecordingPostReq);
}
