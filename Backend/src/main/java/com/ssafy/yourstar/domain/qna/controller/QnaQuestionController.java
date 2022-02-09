package com.ssafy.yourstar.domain.qna.controller;

import com.ssafy.yourstar.domain.qna.db.entity.QnaQuestion;
import com.ssafy.yourstar.domain.qna.request.QnaQuestionModifyPutReq;
import com.ssafy.yourstar.domain.qna.request.QnaQuestionRegisterPostReq;
import com.ssafy.yourstar.domain.qna.service.QnaQuestionService;
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
@Api(value = "QNA 질문")
@RestController
@RequestMapping("/api/qna")
public class QnaQuestionController {

    @Autowired
    QnaQuestionService qnaQuestionService;

    @ApiOperation(value = "QNA 전체 조회")
    @GetMapping
    public Page<QnaQuestion> qnaList
            (@ApiParam(value = "페이지 번호")@RequestParam int page, @ApiParam(value = "페이지당 게시글 개수") @RequestParam int size) {
        log.info("qnaList - 호출");
        return qnaQuestionService.qnaList(page, size);
    }

    @ApiOperation(value = "내 QNA 조회")
    @GetMapping("/{memberId}")
    public Page<QnaQuestion> qnaListByMemberId
            (@ApiParam(value = "회원 구분 번호") @PathVariable("memberId") int memberId,
                    @ApiParam(value = "페이지 번호")@RequestParam int page, @ApiParam(value = "페이지당 게시글 개수") @RequestParam int size) {
        log.info("qnaListByMemberId - 호출");
        return qnaQuestionService.qnaListByMemberId(memberId, page, size);
    }

    @ApiOperation(value = "QNA 상세 조회")
    @GetMapping("/detail/{questionId}")
    public QnaQuestion qnaDetail(@ApiParam(value = "QNA 번호") @PathVariable("questionId") int questionId) {
        log.info("qnaDetail - 호출");
        return qnaQuestionService.qnaDetail(questionId);
    }

    @ApiOperation(value = "QNA 질문 등록")
    @PostMapping("/questions")
    public ResponseEntity<BaseResponseBody> qnaQuestionRegister(@RequestBody QnaQuestionRegisterPostReq qnaQuestionRegister) {
        log.info("qnaQuestionRegister - 호출");
        qnaQuestionService.qnaQuestionRegister(qnaQuestionRegister);

        return ResponseEntity.status(201).body(BaseResponseBody.of(200, "Success"));
    }

    @ApiOperation(value = "QNA 질문 수정")
    @PutMapping("/questions")
    public ResponseEntity<BaseResponseBody> qnaQuestionModify
            (@RequestBody QnaQuestionModifyPutReq qnaQuestionModify, HttpServletRequest request) {
        log.info("qnaQuestionModify - 호출");
        if (qnaQuestionService.qnaQuestionModify(qnaQuestionModify) == null) {    // 해당 질문이 존재하지 않는 경우
            log.error("qnaQuestionModify - This questionId doesn't exist.");
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "This questionId doesn't exist."));
        } else {    // 정상 작동
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }
    }

    @ApiOperation(value = "QNA 질문 삭제")
    @DeleteMapping("/questions/{questionId}")
    public ResponseEntity<BaseResponseBody> qnaQuestionRemove
            (@ApiParam(value = "QNA 질문 번호") @PathVariable int questionId) {
        log.info("qnaQuestionRemove - 호출");
        if (qnaQuestionService.qnaQuestionRemove(questionId)) {  // 정상 작동
            return ResponseEntity.status(201).body(BaseResponseBody.of(200, "Success"));
        } else {    // 해당 질문이 존재하지 않는 경우
            log.error("qnaQuestionRemove - This questionId doesn't exist.");
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "This questionId doesn't exist."));
        }
    }

}
