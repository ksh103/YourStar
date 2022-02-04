package com.ssafy.yourstar.domain.meeting.controller;

import com.google.gson.JsonObject;
import com.ssafy.yourstar.domain.meeting.request.MeetingExitPostReq;
import com.ssafy.yourstar.domain.meeting.request.MeetingJoinPostReq;
import com.ssafy.yourstar.domain.meeting.service.MeetingService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.openvidu.java.client.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Api(value = "openVidu API")
@RestController
@RequestMapping("/api/meetings")
public class OpenviduController {

	@Autowired
	MeetingService meetingService;

	// 오픈비두 객체 SDK
	private OpenVidu openVidu;

	// 미팅룸 관리 { 미팅룸 id : 미팅룸 세션 }
	private Map<Integer, Session> mapSessions = new ConcurrentHashMap<>();
	// 미팅룸 <-> 사용자 { 미팅룸 id : { 참가자 토큰 : 참가자 역할 } }
	private Map<Integer, Map<String, OpenViduRole>> mapSessionNamesTokens = new ConcurrentHashMap<>();
	// 미팅룸 <-> 녹화
	private Map<String, Boolean> sessionRecordings = new ConcurrentHashMap<>();

	// 오픈비두 서버 관련 변수
	private String OPENVIDU_URL;
	private String SECRET;

	// OpenviduController에 접근할 때마다 오픈비두 서버 관련 변수 얻어옴
	public OpenviduController(@Value("${openvidu.secret}") String secret, @Value("${openvidu.url}") String openviduUrl) {
		this.SECRET = secret;
		this.OPENVIDU_URL = openviduUrl;
		this.openVidu = new OpenVidu(OPENVIDU_URL, SECRET);
	}

	@ApiOperation(value = "팬미팅 승인")
	@GetMapping("/room-applicant/pending/{meetingId}")
	public ResponseEntity<? extends BaseResponseBody> meetingPendingApprove(@ApiParam(value = "팬미팅 번호") @PathVariable int meetingId) throws URISyntaxException, OpenViduJavaClientException, OpenViduHttpException {
		log.info("meetingPendingApprove - Call");

		// 세션 만들기
		RecordingProperties properties = new RecordingProperties.Builder().name("박동준의 팬미팅").build();
		SessionProperties sessionProperties = new SessionProperties.Builder().customSessionId("3").defaultRecordingProperties(properties).build();

		Session session = this.openVidu.createSession(sessionProperties);
		log.error(String.valueOf(session.getSessionId()));

		// 만든 세션 미팅룸 관리 map에 저장
		this.mapSessions.put(meetingId, session);

		// 미팅룸 <-> 사용자 map에 저장
		this.mapSessionNamesTokens.put(meetingId, new ConcurrentHashMap<>());

		if (meetingService.meetingPendingApprove(meetingId)) {
			return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
		} else {
			log.error("meetingPendingApprove - This MeetingId doesn't exist");
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "This MeetingId doesn't exist"));
		}
	}

//	@ApiOperation(value = "미팅룸 참가")
//	@PostMapping(value = "/meeting-join")
//	public ResponseEntity<JsonObject> MeetingJoin(@RequestBody MeetingJoinPostReq meetingJoinPostReq) throws OpenViduJavaClientException, OpenViduHttpException {
//		log.info("MeetingJoin - Call");
//
//		// 참여할 미팅룸 id
//		Integer meetingId = meetingJoinPostReq.getMeetingId();
//
//		// 역할 배정 (subcriber은 쓰지않음. (음성, 비디오 안되기때문))
//		OpenViduRole role;
//		if (meetingJoinPostReq.getCode() == 3) {
//			// 일반회원은 기본 역할 배정
//			role = OpenViduRole.PUBLISHER;
//		} else {
//			// 관리자, 관계자는 강퇴, 음성, 마이크 중지 할 수 있는 역할 배정
//			role = OpenViduRole.MODERATOR;
//		}
//
//		// 연결 생성 (입장할 사람의 역할과 데이터 넣어줘서 생성)
//		ConnectionProperties connectionProperties = new ConnectionProperties.Builder().type(ConnectionType.WEBRTC)
//				.role(role).data("user_data").build();
//
//		log.error(String.valueOf(this.mapSessions.get(meetingId)));
//
//		// 해당 미팅룸에 참여자 연결해주고 참여자의 토큰 가져오기
//		String token = this.mapSessions.get(meetingId).createConnection(connectionProperties).getToken();
//
//		// 해당 미팅룸의 접속한 사람들 정보에 참여자 넣어주기
//		// ex) 미팅룸 id : {참여자 토큰 : 역할}
//		this.mapSessionNamesTokens.get(meetingId).put(token, role);
//
//		JsonObject responseJson = new JsonObject();
//		responseJson.addProperty("token", token);
//
//		return new ResponseEntity<>(responseJson, HttpStatus.OK);
//	}

	@ApiOperation(value = "미팅룸 나가기")
	@PostMapping(value = "/meeting-exit")
	public ResponseEntity<? extends BaseResponseBody> MeetingExit(@RequestBody MeetingExitPostReq meetingExitPostReq) {
		Integer meetingId = meetingExitPostReq.getMeetingId();
		String token = meetingExitPostReq.getToken();

		// 해당 미팅룸이 존재한다면
		if (this.mapSessions.get(meetingId) != null && this.mapSessionNamesTokens.get(meetingId) != null) {
			// 사용자가 미팅룸에 참가 중이라면 해당 토큰 삭제
			if (this.mapSessionNamesTokens.get(meetingId).remove(token) != null) {
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
			} else {
				// 사용자가 미팅룸에 없으면(토큰 유효하지 않으면) 에러
				log.error("MeetingExit - TOKEN does not exist");
				return ResponseEntity.status(400).body(BaseResponseBody.of(400, "the TOKEN wasn't valid"));
			}
		} else {
			// 미팅룸이 존재하지 않는다면 에러
			log.error("MeetingExit - meetingId does not exist");
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "the meetingId wasn't valid"));
		}
	}

	@ApiOperation(value = "미팅룸 삭제")
	@DeleteMapping(value = "/{meetingId}")
	public ResponseEntity<JsonObject> MeetingDelete(@RequestBody Map<String, Object> sessionName) throws Exception {

		System.out.println("Closing session | {sessionName}=" + sessionName);

		// Retrieve the param from BODY
		String session = (String) sessionName.get("sessionName");

		//	미팅룸 존재할경우
		if (this.mapSessions.get(session) != null && this.mapSessionNamesTokens.get(session) != null) {
			Session s = this.mapSessions.get(session);
			s.close();
			this.mapSessions.remove(session);
			this.mapSessionNamesTokens.remove(session);
			this.sessionRecordings.remove(s.getSessionId());
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			// 미팅룸 존재하지 않을 경우
			System.out.println("Problems in the app server: the SESSION does not exist");
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

//	// 현재 미팅룸 정보 및 참가자 정보 반환
//	@PostMapping(value = "/meetingDetail")
//	public ResponseEntity<JsonObject> fetchInfo(@RequestBody Map<String, Object> sessionName) {
//		try {
//			System.out.println("Fetching session info | {sessionName}=" + sessionName);
//
//			// Retrieve the param from BODY
//			String session = (String) sessionName.get("sessionName");
//
//			// 미팅룸 존재하는 경우
//			if (this.mapSessions.get(session) != null && this.mapSessionNamesTokens.get(session) != null) {
//				Session s = this.mapSessions.get(session);
//				boolean changed = s.fetch();
//				System.out.println("Any change: " + changed);
//				return new ResponseEntity<>(this.sessionToJson(s), HttpStatus.OK);
//			} else {
//				// 미팅룸 존재하지 않는 경우
//				System.out.println("Problems in the app server: the SESSION does not exist");
//				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//			}
//		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
//			e.printStackTrace();
//			return getErrorResponse(e);
//		}
//	}
//
//	// 활성화된 모든 미팅룸 정보와 참가자 정보 반환
//	@GetMapping(value = "/meetingList")
//	public ResponseEntity<?> fetchAll() {
//		try {
//			System.out.println("Fetching all session info");
//			boolean changed = this.openVidu.fetch();
//			System.out.println("Any change: " + changed);
//			JsonArray jsonArray = new JsonArray();
//			for (Session s : this.openVidu.getActiveSessions()) {
//				jsonArray.add(this.sessionToJson(s));
//			}
//			return new ResponseEntity<>(jsonArray, HttpStatus.OK);
//		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
//			e.printStackTrace();
//			return getErrorResponse(e);
//		}
//	}
//
//	// 강퇴 시키기
//	// 필요한 값 : 그 사람의 connectionId
//	@DeleteMapping(value = "/force/disconnect")
//	public ResponseEntity<JsonObject> forceDisconnect(@RequestBody Map<String, Object> params) {
//		try {
//			// Retrieve the param from BODY
//			String session = (String) params.get("sessionName");
//			String connectionId = (String) params.get("connectionId");
//
//			// If the session exists
//			if (this.mapSessions.get(session) != null && this.mapSessionNamesTokens.get(session) != null) {
//				Session s = this.mapSessions.get(session);
//				s.forceDisconnect(connectionId);
//				return new ResponseEntity<>(HttpStatus.OK);
//			} else {
//				// The SESSION does not exist
//				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//			}
//		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
//			e.printStackTrace();
//			return getErrorResponse(e);
//		}
//	}
//
//	// 스트리밍 중지 시키기
//	// 필요한 값 : 그 사람의 streamId
//	@DeleteMapping(value = "/force/unpublish")
//	public ResponseEntity<JsonObject> forceUnpublish(@RequestBody Map<String, Object> params) {
//		try {
//			// Retrieve the param from BODY
//			String session = (String) params.get("sessionName");
//			String streamId = (String) params.get("streamId");
//
//			// If the session exists
//			if (this.mapSessions.get(session) != null && this.mapSessionNamesTokens.get(session) != null) {
//				Session s = this.mapSessions.get(session);
//				s.forceUnpublish(streamId);
//				return new ResponseEntity<>(HttpStatus.OK);
//			} else {
//				// The SESSION does not exist
//				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//			}
//		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
//			e.printStackTrace();
//			return getErrorResponse(e);
//		}
//	}
//
//	/*******************/
//	/** Recording API **/
//	/*******************/
//
//	// 녹화 시작
//	@RequestMapping(value = "/recording/start", method = RequestMethod.POST)
//	public ResponseEntity<?> startRecording(@RequestBody Map<String, Object> params) {
//		String sessionId = (String) params.get("session");	// 미팅룸 세션 id
//		// 자신 화면만 녹화 vs 전체 화면 녹화
//		Recording.OutputMode outputMode = Recording.OutputMode.valueOf((String) params.get("outputMode"));
//		boolean hasAudio = (boolean) params.get("hasAudio");	// 오디오 포함 하는지
//		boolean hasVideo = (boolean) params.get("hasVideo");	// 비디오 포함 하는지
//
//		RecordingProperties properties = new RecordingProperties.Builder().outputMode(outputMode).hasAudio(hasAudio)
//				.hasVideo(hasVideo).build();
//
//		System.out.println("Starting recording for session " + sessionId + " with properties {outputMode=" + outputMode
//				+ ", hasAudio=" + hasAudio + ", hasVideo=" + hasVideo + "}");
//
//		try {
//			Recording recording = this.openVidu.startRecording(sessionId, properties);
//			this.sessionRecordings.put(sessionId, true);
//			return new ResponseEntity<>(recording, HttpStatus.OK);
//		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
//		}
//	}
//
//	// 녹화 중단
//	@RequestMapping(value = "/recording/stop", method = RequestMethod.POST)
//	public ResponseEntity<?> stopRecording(@RequestBody Map<String, Object> params) {
//		String recordingId = (String) params.get("recording");
//
//		System.out.println("Stoping recording | {recordingId}=" + recordingId);
//
//		try {
//			Recording recording = this.openVidu.stopRecording(recordingId);
//			this.sessionRecordings.remove(recording.getSessionId());
//			return new ResponseEntity<>(recording, HttpStatus.OK);
//		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
//		}
//	}
//
//	// 녹화 삭제
//	@RequestMapping(value = "/recording/delete", method = RequestMethod.DELETE)
//	public ResponseEntity<?> deleteRecording(@RequestBody Map<String, Object> params) {
//		String recordingId = (String) params.get("recording");
//
//		System.out.println("Deleting recording | {recordingId}=" + recordingId);
//
//		try {
//			this.openVidu.deleteRecording(recordingId);
//			return new ResponseEntity<>(HttpStatus.OK);
//		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
//		}
//	}
//
//	// 녹화 검색 (상세 조회)
//	@RequestMapping(value = "/recording/get/{recordingId}", method = RequestMethod.GET)
//	public ResponseEntity<?> getRecording(@PathVariable(value = "recordingId") String recordingId) {
//
//		System.out.println("Getting recording | {recordingId}=" + recordingId);
//
//		try {
//			Recording recording = this.openVidu.getRecording(recordingId);
//			return new ResponseEntity<>(recording, HttpStatus.OK);
//		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
//		}
//	}
//
//	// 녹화 전체 조회 (관리자)
//	@RequestMapping(value = "/recording/list", method = RequestMethod.GET)
//	public ResponseEntity<?> listRecordings() {
//
//		System.out.println("Listing recordings");
//
//		try {
//			List<Recording> recordings = this.openVidu.listRecordings();
//
//			return new ResponseEntity<>(recordings, HttpStatus.OK);
//		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
//		}
//	}
//
//		private ResponseEntity<JsonObject> getErrorResponse(Exception e) {
//			JsonObject json = new JsonObject();
//			json.addProperty("cause", e.getCause().toString());
//			json.addProperty("error", e.getMessage());
//			json.addProperty("exception", e.getClass().getCanonicalName());
//			return new ResponseEntity<>(json, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//
//	protected JsonObject sessionToJson(Session session) {
//		Gson gson = new Gson();
//		JsonObject json = new JsonObject();
//		json.addProperty("sessionId", session.getSessionId());
//		json.addProperty("customSessionId", session.getProperties().customSessionId());
//		json.addProperty("recording", session.isBeingRecorded());
//		json.addProperty("mediaMode", session.getProperties().mediaMode().name());
//		json.addProperty("recordingMode", session.getProperties().recordingMode().name());
//		json.add("defaultRecordingProperties",
//				gson.toJsonTree(session.getProperties().defaultRecordingProperties()).getAsJsonObject());
//		JsonObject connections = new JsonObject();
//		connections.addProperty("numberOfElements", session.getConnections().size());
//		JsonArray jsonArrayConnections = new JsonArray();
//		session.getConnections().forEach(con -> {
//			JsonObject c = new JsonObject();
//			c.addProperty("connectionId", con.getConnectionId());
//			c.addProperty("role", con.getRole().name());
//			c.addProperty("token", con.getToken());
//			c.addProperty("clientData", con.getClientData());
//			c.addProperty("serverData", con.getServerData());
//			JsonArray pubs = new JsonArray();
//			con.getPublishers().forEach(p -> {
//				pubs.add(gson.toJsonTree(p).getAsJsonObject());
//			});
//			JsonArray subs = new JsonArray();
//			con.getSubscribers().forEach(s -> {
//				subs.add(s);
//			});
//			c.add("publishers", pubs);
//			c.add("subscribers", subs);
//			jsonArrayConnections.add(c);
//		});
//		connections.add("content", jsonArrayConnections);
//		json.add("connections", connections);
//		return json;
//	}
//

}
