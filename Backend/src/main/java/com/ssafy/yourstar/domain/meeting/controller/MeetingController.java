package com.ssafy.yourstar.domain.meeting.controller;

import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByStarPostReq;
import com.ssafy.yourstar.domain.meeting.service.MeetingService;
import com.ssafy.yourstar.global.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api("팬미팅 관련 API")
@RestController
@RequestMapping("/api/meetings")
public class MeetingController {
    @Autowired
    MeetingService meetingService;

    @ApiOperation(value = "스타가 팬미팅 신청")
    @PostMapping("/room-applicant")
    public ResponseEntity<? extends BaseResponseBody> meetingApplyByStar
            (@RequestBody @ApiParam(value = "스타가 팬미팅 신청시 필요한 정보") MeetingApplyByStarPostReq meetingApplyByStarPostReq) {
        meetingService.meetingApplyByStar(meetingApplyByStarPostReq);

        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }
}
