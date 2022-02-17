package com.ssafy.yourstar.domain.meeting.controller;

import com.ssafy.yourstar.domain.meeting.db.entity.Applicant;
import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.response.ApplicantDetailGetRes;
import com.ssafy.yourstar.domain.meeting.response.MeetingDetailGetRes;
import com.ssafy.yourstar.domain.meeting.response.MeetingListGetRes;
import com.ssafy.yourstar.domain.meeting.service.MeetingService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Api("미팅룸 어드민 관련 API")
@Slf4j
@Controller
@RequestMapping("/api/meetings")
public class MeetingController {
    @Autowired
    MeetingService meetingService;

    @ApiOperation(value = "팬미팅 전체보기")
    @GetMapping("/room-applicant")
    public ResponseEntity<MeetingListGetRes> meetingList(int page, int size) {
        log.info("meetingList - Call");

        Page<Meeting> meetingPage = meetingService.meetingList(PageRequest.of(page - 1, size, Sort.by(Sort.Direction.ASC, "meetingStartDate")));

        return ResponseEntity.status(200).body(MeetingListGetRes.of(200, "Success", meetingPage));
    }

    @ApiOperation(value = "승인 대기 중인 팬미팅 전체보기")
    @GetMapping("/room-applicant/pending")
    public ResponseEntity<MeetingListGetRes> meetingPendingList(int page, int size) {
        // 쿼리문으로 page와 size를 보내주면 해당하는 결과값만 리턴
        // ex) http://localhost:8080/api/meetings/room-applicant/pending?page=1&size=5

        log.info("meetingPendingList - Call");

        Page<Meeting> meetingPage = meetingService.meetingPendingList(PageRequest.of(page - 1, size, Sort.by(Sort.Direction.ASC, "meetingRegDt")));

        return ResponseEntity.status(200).body(MeetingListGetRes.of(200, "Success", meetingPage));
    }

    @ApiOperation(value = "승인된 팬미팅 전체보기")
    @GetMapping("/room-applicant/approve")
    public ResponseEntity<MeetingListGetRes> meetingApproveList(int page, int size) {
        log.info("meetingApproveList - Call");

        Page<Meeting> meetingPage = meetingService.meetingApproveList(PageRequest.of(page - 1, size, Sort.by(Sort.Direction.ASC, "meetingStartDate")));

        return ResponseEntity.status(200).body(MeetingListGetRes.of(200, "Success", meetingPage));
    }

    @ApiOperation(value = "팬미팅 상세보기")
    @GetMapping("/{meetingId}")
    public ResponseEntity<MeetingDetailGetRes> meetingDetail(@ApiParam(value = "팬미팅 번호") @PathVariable int meetingId) {
        log.info("meetingDetail - Call");

        Meeting meeting = meetingService.meetingDetail(meetingId);

        if (meeting == null) {
            log.error("meetingDetail - This MeetingId doesn't exist");
            return ResponseEntity.status(400).body(MeetingDetailGetRes.of(400, "This MeetingId doesn't exist", null));
        } else {
            return ResponseEntity.status(200).body(MeetingDetailGetRes.of(200, "Success", meeting));
        }
    }

    @ApiOperation(value = "팬미팅에 참여한 팬의 경고 횟수 확인")
    @GetMapping("/warning/{memberId}/{meetingId}")
    public ResponseEntity<ApplicantDetailGetRes> applicantDetail
            (@ApiParam(value = "회원 구분 번호") @PathVariable("memberId") int memberId,
            @ApiParam(value = "팬미팅 번호") @PathVariable("meetingId") int meetingId) {
        log.info("applicantDetail - Call");

        Applicant applicant = meetingService.applicantDetail(memberId, meetingId);

        if (applicant == null) {
            log.error("applicantDetail - This MemberId or MeetingId doesn't exist");
            return ResponseEntity.status(400).body(ApplicantDetailGetRes.of(400, "This MemberId or MeetingId doesn't exist", null));
        } else {
            return ResponseEntity.status(200).body(ApplicantDetailGetRes.of(200, "Success", applicant));
        }
    }

    @ApiOperation(value = "팬미팅에 참여한 팬에게 경고 주기")
    @PutMapping("/warning/{memberId}/{meetingId}")
    public ResponseEntity<ApplicantDetailGetRes> meetingGiveWarnToUser
            (@ApiParam(value = "회원 구분 번호") @PathVariable("memberId") int memberId,
             @ApiParam(value = "팬미팅 번호") @PathVariable("meetingId") int meetingId) {
        log.info("meetingGiveWarnToUser - Call");

        Applicant applicant = meetingService.meetingGiveWarnToUser(memberId, meetingId);

        if (applicant == null) {
            log.error("meetingGiveWarnToUser - This MeetingId or MemberId doesn't exist");
            return ResponseEntity.status(400).body(ApplicantDetailGetRes.of(400, "This MemberId or MeetingId doesn't exist", null));
        } else {
            return ResponseEntity.status(200).body(ApplicantDetailGetRes.of(200, "Success", applicant));
        }
    }

    @ApiOperation(value = "팬미팅 이미지 확인")
    @GetMapping(value = "/image/{fileId}",
    produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> getImageWithMediaType(@PathVariable("fileId") int fileId) {
        String filePath = meetingService.getMeetingImgPath(fileId);

        Resource resource = new FileSystemResource(filePath);
        if (!resource.exists()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        HttpHeaders headers = new HttpHeaders();
        Path path = null;

        try {
            path = Paths.get(filePath);
            headers.add("Content-Type", Files.probeContentType(path));
        } catch (IOException e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
    }
}
