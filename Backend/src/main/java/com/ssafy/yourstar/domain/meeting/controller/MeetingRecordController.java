package com.ssafy.yourstar.domain.meeting.controller;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordImgPath;
import com.ssafy.yourstar.domain.meeting.response.MeetingRecordImgDetailGetRes;
import com.ssafy.yourstar.domain.meeting.response.MeetingRecordListGetRes;
import com.ssafy.yourstar.domain.meeting.service.MeetingRecordService;
import com.ssafy.yourstar.domain.meeting.service.MeetingService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<MeetingRecordListGetRes> meetingRecordList(@ApiParam(value = "회원 구분 번호") @PathVariable(value = "memberId") int memberId, int page, int size) {
        log.info("meetingRecordList - Call");

        Page<Meeting> meetingRecordPage = meetingRecordService.meetingRecordList(memberId, PageRequest.of(page - 1, size));

        return ResponseEntity.status(200).body(MeetingRecordListGetRes.of(200, "Success", meetingRecordPage));
    }

    @ApiOperation(value = "추억 보관함 사진 다운로드")
    @GetMapping("/record-list/{meetingId}/{memberId}")
    public ResponseEntity<MeetingRecordImgDetailGetRes> meetingRecordImgDownload(@ApiParam(value = "팬미팅 구분 번호") @PathVariable(value = "meetingId") int meetingId, @ApiParam(value = "회원 구분 번호") @PathVariable(value = "memberId") int memberId) {
        log.info("meetingRecordImgDownload - Call");

        List<MeetingRecordImgPath> meetingRecordImgPathList = meetingRecordService.meetingRecordImgDetail(meetingId, memberId);

        if(meetingRecordImgPathList != null && !meetingRecordImgPathList.isEmpty()) {
            return ResponseEntity.status(200).body(MeetingRecordImgDetailGetRes.of(200, "Success", meetingRecordImgPathList));
        }else{
            log.error("meetingRecordImgRemove - No Contents");
            return ResponseEntity.status(204).body(MeetingRecordImgDetailGetRes.of(204, "No Contents", null));
        }
    }

    @ApiOperation(value = "추억 보관함 사진 개별 삭제")
    @DeleteMapping("/record-img/{fileId}")
    public ResponseEntity<? extends BaseResponseBody> meetingRecordImgRemove(@ApiParam(value = "파일 구분 번호") @PathVariable(value = "fileId") int fileId) {
        log.info("meetingRecordImgRemove - Call");

        if(meetingRecordService.meetingRecordImgRemove(fileId) == 1){
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }else {
            log.error("meetingRecordImgRemove - This FileId doesn't exist");
            return ResponseEntity.status(400).body(BaseResponseBody.of(400, "This FileId doesn't exist"));
        }
    }
}
