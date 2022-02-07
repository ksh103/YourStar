package com.ssafy.yourstar.domain.meeting.controller;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordImgPath;
import com.ssafy.yourstar.domain.meeting.response.MeetingRecordImgDetailGetRes;
import com.ssafy.yourstar.domain.meeting.response.MeetingRecordListGetRes;
import com.ssafy.yourstar.domain.meeting.service.MeetingRecordService;
import com.ssafy.yourstar.domain.meeting.service.MeetingService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api("추억 보관함 API")
@Slf4j
@RestController
@RequestMapping("/api/meetings")
public class MeetingRecordController {

    @Autowired
    MeetingService meetingService;

    @Autowired
    MeetingRecordService meetingRecordService;

    @ApiOperation(value = "추억 보관함 목록")
    @GetMapping("/record-list/{memberId}")
    public ResponseEntity<MeetingRecordListGetRes> meetingRecordList(@PathVariable(value = "memberId") int memberId, int page, int size) {
        log.info("meetingRecordList - Call");

        Page<Meeting> meetingRecordPage = meetingRecordService.meetingRecordList(memberId, PageRequest.of(page - 1, size));

        return ResponseEntity.status(200).body(MeetingRecordListGetRes.of(200, "Success", meetingRecordPage));
    }

    // 추억 보관함 사진 다운로드
    @ApiOperation(value = "추억 보관함 사진 다운로드")
    @GetMapping("/record-list/{meetingId}/{memberId}")
    public ResponseEntity<MeetingRecordImgDetailGetRes> meetingRecordImgDownload(@PathVariable(value = "meetingId") int meetingId, @PathVariable(value = "memberId") int memberId) {
        log.info("meetingRecordImgDownload - Call");

        List<MeetingRecordImgPath> meetingRecordImgPathList = meetingRecordService.meetingRecordImgDetail(meetingId, memberId);

        if(meetingRecordImgPathList != null && !meetingRecordImgPathList.isEmpty()) {
            return ResponseEntity.status(200).body(MeetingRecordImgDetailGetRes.of(200, "Success", meetingRecordImgPathList));
        }else{
            return ResponseEntity.status(204).body(MeetingRecordImgDetailGetRes.of(204, "No Contents", null));
        }
    }
    // 추억 보관함 사진 삭제

}
