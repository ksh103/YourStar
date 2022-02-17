package com.ssafy.yourstar.domain.meeting.controller;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordImgPath;
import com.ssafy.yourstar.domain.meeting.request.MeetingRecordImgPathPostReq;
import com.ssafy.yourstar.domain.meeting.response.MeetingRecordImgDetailGetRes;
import com.ssafy.yourstar.domain.meeting.response.MeetingRecordListGetRes;
import com.ssafy.yourstar.domain.meeting.response.MeetingRecordVidoeDetailGetRes;
import com.ssafy.yourstar.domain.meeting.service.MeetingRecordService;
import com.ssafy.yourstar.domain.meeting.service.MeetingService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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

    @ApiOperation(value = "추억 보관함 사진 저장")
    @PostMapping(value = "/record-img")
    public ResponseEntity<? extends BaseResponseBody> meetingRecordImgSave(@RequestBody MeetingRecordImgPathPostReq meetingRecordImgPathPostReq) {

        try {
            if (meetingRecordService.meetingRecordImgSave(meetingRecordImgPathPostReq) == 1) {
                return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
            } else {
                return ResponseEntity.status(400).body(BaseResponseBody.of(400, "Failed"));
            }
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResponseEntity.status(400).body(BaseResponseBody.of(400, "Failed"));
        }
    }

    @ApiOperation(value = "추억 보관함 녹화 영상 다운로드")
    @GetMapping("/record-video/{meetingId}/{memberId}")
    public ResponseEntity<MeetingRecordVidoeDetailGetRes> meetingRecordVideoDownload(@ApiParam(value = "팬미팅 구분 번호") @PathVariable(value = "meetingId") int meetingId, @ApiParam(value = "회원 구분 번호") @PathVariable(value = "memberId") int memberId) {
        log.info("meetingRecordVideoDownload - Call");

        String meetingRecordVideoFileUrl = meetingRecordService.meetingRecordVideoFileUrl(meetingId, memberId);

        if(meetingRecordVideoFileUrl != null && !meetingRecordVideoFileUrl.isEmpty()) {
            return ResponseEntity.status(200).body(MeetingRecordVidoeDetailGetRes.of(200, "Success", meetingRecordVideoFileUrl));
        }else{
            log.error("meetingRecordImgRemove - No Contents");
            return ResponseEntity.status(204).body(MeetingRecordVidoeDetailGetRes.of(204, "No Contents", null));
        }
    }

    @ApiOperation(value = "추억 보관함 사진 정보 불러오기")
    @GetMapping("/record-img/{meetingId}/{memberId}")
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

    @ApiOperation(value = "추억 보관함 사진 불러오기")
    @GetMapping(value = "/record-img/{fileId}",
            produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> getSignImageWithMediaType(@PathVariable("fileId") int fileId) {
        String filePath = meetingRecordService.getSignImgPath(fileId);

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
