package com.ssafy.yourstar.domain.meeting.controller;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByUserPostReq;
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

@Api("미팅룸 유저 관련 API")
@Slf4j
@RestController
@RequestMapping("/api/meetings")
public class FanApplicantController {
    @Autowired
    MeetingService meetingService;

    @ApiOperation(value = "팬이 팬미팅 신청")
    @PostMapping("/fan-applicant")
    public ResponseEntity<? extends BaseResponseBody> meetingApplyByUser
            (@RequestBody MeetingApplyByUserPostReq meetingApplyByUserPostReq) {
        log.info("meetingApplyByUser - Call");

        meetingService.meetingApplyByUser(meetingApplyByUserPostReq);

        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }

    @ApiOperation(value = "팬이 신청한 팬미팅 취소")
    @DeleteMapping("/fan-applicant/{memberId}/{meetingId}")
    public ResponseEntity<? extends BaseResponseBody> meetingRemoveByUser
            (@ApiParam(value = "회원 구분 번호") @PathVariable("memberId") int memberId,
             @ApiParam(value = "팬미팅 번호") @PathVariable("meetingId") int meetingId) {
        log.info("meetingRemoveByUser - Call");

        if (meetingService.meetingRemoveByUser(memberId, meetingId)) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        } else {
            log.error("meetingRemoveByUser - This MeetingId or MemberId doesn't exist");
            return ResponseEntity.status(400).body(BaseResponseBody.of(400, "This MeetingId or MemberId doesn't exist"));
        }
    }

    @ApiOperation(value = "팬이 팬미팅 내역 확인")
    @GetMapping("/fan-applicant/{memberId}")
    public Page<Meeting> meetingApplyListByUser
            (@ApiParam(value = "회원 구분 번호") @PathVariable("memberId") int memberId, int page, int size) {
        log.info("meetingApplyListByUser - Call");

        Page<Meeting> meetingPage = meetingService.meetingApplyListByUser(memberId, PageRequest.of(page - 1, size));

        return meetingPage;
    }

    @ApiOperation(value = "팬미팅 신청 명단")
    @GetMapping("/fan-applicant/list/{meetingId}")
    public Page<String> meetingApplyList
            (@ApiParam(value = "팬미팅 구분 번호") @PathVariable("meetingId") int meetingId, int page, int size) {
        log.info("meetingApplyList - Call");

        Page<String> memberPage = meetingService.meetingApplyList(meetingId, PageRequest.of(page - 1, size));

        return memberPage;
    }
}
