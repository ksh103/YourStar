package com.ssafy.yourstar.domain.meeting.controller;

import com.ssafy.yourstar.domain.meeting.request.MeetingRecordingPostReq;
import com.ssafy.yourstar.domain.meeting.service.OpenviduService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.openvidu.java.client.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;


@Slf4j
@Api(value = "openVidu API")
@RestController
@RequestMapping("/api/meetings")
public class OpenviduController {

	@Autowired
	OpenviduService openviduService;

	@ApiOperation(value = "팬미팅 승인 및 미팅룸 생성")
	@GetMapping("/room-applicant/pending/{meetingId}")
	public ResponseEntity<? extends BaseResponseBody> meetingPendingApprove(@ApiParam(value = "팬미팅 번호") @PathVariable int meetingId) throws URISyntaxException, OpenViduJavaClientException, OpenViduHttpException {
		log.info("meetingPendingApprove - Call");

		int returnCode = openviduService.meetingPendingApprove(meetingId);

		if (returnCode == 0) {	// 미팅룸 승인 및 세션 생성이 정상적으로 이루어짐
			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
		} else if (returnCode == 1){	// 미팅룸 승인 및 세션 생성이 이미 이루어진 상태
			log.error("meetingPendingApprove - This Meeting is already approved");
			return ResponseEntity.status(409).body(BaseResponseBody.of(409, "This Meeting is already approved"));
		} else if (returnCode == 2){	// 해당 미팅룸 id가 존재하지 않는 경우
			log.error("meetingPendingApprove - This MeetingId doesn't exist");
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "This MeetingId doesn't exist"));
		} else {	// 세션 생성에 실패한 경우
			log.error("meetingPendingApprove - Failed to create session");
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "Failed to create session"));
		}
	}

	@ApiOperation(value = "녹화 시작")
	@PostMapping(value = "/recording/start")
	public ResponseEntity<? extends BaseResponseBody> recordingStart(@RequestBody MeetingRecordingPostReq meetingRecordingPostReq) {
		log.info("recordingStart - Call");
		String recordId = openviduService.recordingStart(meetingRecordingPostReq);

		if (recordId.equals("1")) { // 미팅 id 또는 멤버 id가 유효하지 않을 경우
			log.error("recordingStart - This meetingId or memberId doesn't exist");
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "This meetingId or memberId doesn't exist."));
		} else if (recordId.equals("2")){	 // 세션에 연결된 참가자가 없는 경우
			log.error("recordingStart - There are no participants connected to the session.");
			return ResponseEntity.status(406).body(BaseResponseBody.of(406, "There are no participants connected to the session."));
		} else if (recordId.equals("3")) {     // 이미 녹화중인 경우
			log.error("recordingStart - It's already being recorded.");
			return ResponseEntity.status(409).body(BaseResponseBody.of(409, "It's already being recorded."));
		} else if (recordId.equals("4")) {	// build 또는 설정 문제
			log.error("recordingStart - Problem with build or settings.");
			return ResponseEntity.status(500).body(BaseResponseBody.of(500, "Problem with build or settings."));
		} else {	// 녹화 시작, 중단 및 db에 정상적으로 저장됨
			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
		}
	}

	@ApiOperation(value = "녹화 삭제")
	@DeleteMapping(value = "/recording/{fileId}")
	public ResponseEntity<? extends BaseResponseBody> recordingRemove(@PathVariable int fileId) {
		log.info("recordingRemove - Call");

		Integer returnCode = openviduService.recordingRemove(fileId);

		if (returnCode == 0) {	// 녹화 삭제가 정상적으로 이루어짐
			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
		} else if (returnCode == 1){	// 녹화 삭제 실패한 경우
			log.error("recordingRemove - Failed to delete recording");
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "Failed to delete recording"));
		} else {	// fileId가 존재하지 않는 경우
			log.error("recordingRemove - This fileId doesn't exist");
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "This fileId doesn't exist"));
		}
	}
}
