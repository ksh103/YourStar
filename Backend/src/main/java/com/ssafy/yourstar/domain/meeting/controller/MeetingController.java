package com.ssafy.yourstar.domain.meeting.controller;

import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByStarPostReq;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByUserPostReq;
import com.ssafy.yourstar.domain.meeting.service.MeetingService;
import com.ssafy.yourstar.global.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api("팬미팅 관련 API")
@Slf4j
@RestController
@RequestMapping("/api/meetings")
public class MeetingController {

    @Autowired
    MeetingService meetingService;

    @ApiOperation(value = "스타가 팬미팅 신청")
    @PostMapping("/room-applicant")
    public ResponseEntity<? extends BaseResponseBody> meetingApplyByStar
            (@RequestBody MeetingApplyByStarPostReq meetingApplyByStarPostReq) {
        log.info("meetingApplyByStar - Call");

        meetingService.meetingApplyByStar(meetingApplyByStarPostReq);

        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }

    // 이미지 등록하는 api 필요

    @ApiOperation(value = "팬이 팬미팅 신청")
    @PostMapping("/fan-applicant")
    public ResponseEntity<? extends BaseResponseBody> meetingApplyByUser
            (@RequestBody MeetingApplyByUserPostReq meetingApplyByUserPostReq) {
        log.info("meetingApplyByUser - Call");

        meetingService.meetingApplyByUser(meetingApplyByUserPostReq);

        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }
}
