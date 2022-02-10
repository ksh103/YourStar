package com.ssafy.yourstar.domain.meeting.controller;

import com.ssafy.yourstar.domain.meeting.request.MeetingOathByUserPostReq;
import com.ssafy.yourstar.domain.meeting.service.MeetingService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Api("미팅룸 보안서약서 관련 API")
@Slf4j
@Controller
@RequestMapping("/api/meetings")
public class MeetingOathConrtoller {
    @Autowired
    MeetingService meetingService;

    @ApiOperation(value = "팬미팅 참여 시 보안서약서 작성 유무")
    @PostMapping("/oath")
    public ResponseEntity<? extends BaseResponseBody> meetingOathByUser(MeetingOathByUserPostReq meetingOathByUserPostReq){

        log.info("meetingOathByUser - Call");

        meetingService.meetingOathByUser(meetingOathByUserPostReq);
        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }
}
