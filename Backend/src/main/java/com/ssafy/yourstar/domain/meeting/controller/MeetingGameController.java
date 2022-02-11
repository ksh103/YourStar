package com.ssafy.yourstar.domain.meeting.controller;

import com.ssafy.yourstar.domain.meeting.request.MeetingGameWinnerApplyByUserPostReq;
import com.ssafy.yourstar.domain.meeting.response.MeetingGameResultListByStarGetRes;
import com.ssafy.yourstar.domain.meeting.response.MeetingGameResultListByUserGetRes;
import com.ssafy.yourstar.domain.meeting.service.MeetingGameService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("미팅룸 게임 API")
@Slf4j
@RestController
@RequestMapping("/api/meetings")
public class MeetingGameController {

    @Autowired
    MeetingGameService meetingGameService;

    @ApiOperation(value = "팬미팅에 참여한 팬에게 경고 주기")
    @PutMapping("/game-score/{meetingId}/{memberId}")
    public ResponseEntity<BaseResponseBody> meetingGameScoreApply
            (@ApiParam(value = "회원 구분 번호") @PathVariable("meetingId") int meetingId,
             @ApiParam(value = "팬미팅 번호") @PathVariable("memberId") int memberId) {
        log.info("meetingGameScore - Call");

        if (meetingGameService.meetingGameScore(meetingId, memberId)) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        } else {
            log.error("meetingGiveWarnToUser - This MeetingId or MemberId doesn't exist");
            return ResponseEntity.status(400).body(BaseResponseBody.of(400, "This MeetingId or MemberId doesn't exist"));
        }
    }

    @ApiOperation(value = "팬미팅 게임 우승 내역(일반회원)")
    @GetMapping("/game-result/{memberId}")
    public ResponseEntity<MeetingGameResultListByUserGetRes> meetingGameResultListByUser (@ApiParam(value = "회원 구분 번호") @PathVariable int memberId) {
        List<String> meetingGameResultList = meetingGameService.meetingGameResultListByUser(memberId);

        if(meetingGameResultList != null && !meetingGameResultList.isEmpty()) {
            return ResponseEntity.status(200).body(MeetingGameResultListByUserGetRes.of(200, "Success", meetingGameResultList));
        }else {
            log.error("meetingGameResultListByUser - None");
            return ResponseEntity.status(400).body(MeetingGameResultListByUserGetRes.of(400, "None", null));
        }
    }
    
    @ApiOperation(value = "팬미팅 게임 우승 내역(관계자)")
    @GetMapping("/game-result/admin/{meetingId}")
    public ResponseEntity<MeetingGameResultListByStarGetRes> meetingGameResultListByStart (@PathVariable("meetingId") int meetingId) {
        List<String> meetingGameResultList = meetingGameService.meetingGameResultListByStar(meetingId);

        if (meetingGameResultList != null && !meetingGameResultList.isEmpty()) {
            return ResponseEntity.status(200).body(MeetingGameResultListByStarGetRes.of(200, "Success", meetingGameResultList));
        }else {
            log.error("meetingGameResultListByStart - None");
            return ResponseEntity.status(400).body(MeetingGameResultListByStarGetRes.of(400, "None", null));
        }
    }

    @ApiOperation(value = "팬미팅 게임 우승자 등록")
    @PostMapping("/game")
    public ResponseEntity<? extends BaseResponseBody> meetingGameWinnerApplyByUser (MeetingGameWinnerApplyByUserPostReq meetingGameWinnerApplyByUserPostReq) {
        log.info("meetingOathByUser - Call");

        meetingGameService.meetingGameWinnerApply(meetingGameWinnerApplyByUserPostReq);
        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }
}
