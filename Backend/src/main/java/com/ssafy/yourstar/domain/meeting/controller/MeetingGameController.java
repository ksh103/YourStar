package com.ssafy.yourstar.domain.meeting.controller;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingGame;
import com.ssafy.yourstar.domain.meeting.response.MeetingGameListGetRes;
import com.ssafy.yourstar.domain.meeting.response.MeetingGameResultListGetRes;
import com.ssafy.yourstar.domain.meeting.service.MeetingGameService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api("미팅룸 게임 API")
@Slf4j
@RestController
@RequestMapping("/api/meetings")
public class MeetingGameController {

    @Autowired
    MeetingGameService meetingGameService;

    @ApiOperation(value = "팬미팅 게임 목록")
    @GetMapping("/game/{meetingId}")
    public ResponseEntity<MeetingGameListGetRes> meetingGameList(@ApiParam(value = "팬미팅 구분 번호") @PathVariable("meetingId") int meetingId) {

        List<MeetingGame> meetingGameList = meetingGameService.meetingGameList(meetingId);

        if(meetingGameList != null && !meetingGameList.isEmpty()) {
            return ResponseEntity.status(200).body(MeetingGameListGetRes.of(200, "Success", meetingGameList));
        }else {
            log.error("meetingRecordImgRemove - No Contents");
            return ResponseEntity.status(400).body(MeetingGameListGetRes.of(400, "No Contents", null));
        }

    }
    @ApiOperation(value = "팬미팅 게임 목록")
    @GetMapping("/game-result/{memberId}")
    public ResponseEntity<MeetingGameResultListGetRes> meetingGameResultList(@PathVariable int memberId) {
        List<String> meetingGameResultList = meetingGameService.meetingGameResultList(memberId);

        if(meetingGameResultList != null && !meetingGameResultList.isEmpty()) {
            return ResponseEntity.status(200).body(MeetingGameResultListGetRes.of(200, "Success", meetingGameResultList));
        }else {
            log.error("meetingGameResultList - None");
            return ResponseEntity.status(400).body(MeetingGameResultListGetRes.of(400, "None", null));
        }
    }
}
