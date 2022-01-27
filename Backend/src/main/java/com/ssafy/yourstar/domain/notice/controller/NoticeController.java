package com.ssafy.yourstar.domain.notice.controller;

import com.ssafy.yourstar.domain.notice.db.entity.Notice;
import com.ssafy.yourstar.domain.notice.request.NoticeReq;
import com.ssafy.yourstar.domain.notice.service.NoticeService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RestController
@Api(value = "공지사항 API")
@RequestMapping("/api/notice")
public class NoticeController {

    @Autowired
    NoticeService noticeService;

    @ApiOperation(value = "공지사항 등록")
    @PostMapping
    public ResponseEntity<BaseResponseBody> noticeRegister(@RequestBody NoticeReq noticeRegister, HttpServletRequest request) {
        log.info("noticeRegister - 호출");
        noticeService.noticeRegister(noticeRegister);

        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }

    @ApiOperation(value = "공지사항 전체 조회")
    @GetMapping
    public Page<Notice> noticeList(@ApiParam(value = "페이지 번호") @RequestParam int page, @ApiParam(value = "페이지당 게시글 개수") @RequestParam int size) {
        log.info("noticeList - 호출");
        return noticeService.noticeList(page, size);
    }

    @ApiOperation(value = "공지사항 상세 조회")
    @GetMapping("/{noticeId}")
    public Notice noticeDetail(@ApiParam(value = "공지사항 번호") @PathVariable("noticeId") int noticeId, HttpServletRequest request) {
        log.info("noticeDetail - 호출");
        return noticeService.noticeDetail(noticeId);
    }

    @ApiOperation(value = "공지사항 수정")
    @PutMapping("/{noticeId}")
    public ResponseEntity<BaseResponseBody> noticeModify
            (@ApiParam(value = "공지사항 번호") @PathVariable("noticeId") int noticeId, @RequestBody NoticeReq noticeModify, HttpServletRequest request) {
        log.info("noticeModify - 호출");
        if (noticeService.noticeModify(noticeId, noticeModify) == null) {    // 해당 공지사항이 존재하지 않는 경우
            log.error("noticeModify - This noticeId doesn't exist.");
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "This noticeId doesn't exist."));
        } else {    // 정상 작동
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }
    }

    @ApiOperation(value = "공지사항 삭제")
    @DeleteMapping("/{noticeId}")
    public ResponseEntity<BaseResponseBody> noticeRemove(@PathVariable int noticeId, HttpServletRequest request) {
        log.info("noticeRemove - 호출");
        if (noticeService.noticeRemove(noticeId)) {  // 정상 작동
            return ResponseEntity.status(201).body(BaseResponseBody.of(200, "Success"));
        } else {    // 해당 공지사항이 존재하지 않는 경우
            log.error("noticeRemove - This noticeId doesn't exist.");
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "This noticeId doesn't exist."));
        }
    }
}
