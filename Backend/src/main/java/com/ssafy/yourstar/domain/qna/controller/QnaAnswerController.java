package com.ssafy.yourstar.domain.qna.controller;

import com.ssafy.yourstar.domain.qna.request.QnaAnswerModifyPutReq;
import com.ssafy.yourstar.domain.qna.request.QnaAnswerRegisterPostReq;
import com.ssafy.yourstar.domain.qna.service.QnaAnswerService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@Api(value = "QNA 답변")
@RestController
@RequestMapping("/api/qna/answers")
public class QnaAnswerController {

    @Autowired
    QnaAnswerService qnaAnswerService;

    @ApiOperation(value = "QNA 답변 등록")
    @PostMapping
    public ResponseEntity<BaseResponseBody> qnaAnswerRegister(@RequestBody QnaAnswerRegisterPostReq qnaAnswerRegister, HttpServletRequest request) {
        log.info("qnaAnswerRegister - 호출");
        qnaAnswerService.qnaAnswerRegister(qnaAnswerRegister);

        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }

    @ApiOperation(value = "QNA 답변 수정")
    @PutMapping
    public ResponseEntity<BaseResponseBody> qnaAnswerModify
            (@RequestBody QnaAnswerModifyPutReq qnaAnswerModify, HttpServletRequest request) {
        log.info("qnaAnswerModify - 호출");
        if (qnaAnswerService.qnaAnswerModify(qnaAnswerModify) == null) {    // 해당 질문이 존재하지 않는 경우
            log.error("qnaAnswerModify - This answerId doesn't exist.");
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "This answerId doesn't exist."));
        } else {    // 정상 작동
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }
    }

    @ApiOperation(value = "QNA 답변 삭제")
    @DeleteMapping("/{answerId}")
    public ResponseEntity<BaseResponseBody> qnaAnswerRemove
            (@ApiParam(value = "QNA 질문 번호") @PathVariable int answerId, HttpServletRequest request) {
        log.info("qnaAnswerRemove - 호출");
        if (qnaAnswerService.qnaAnswerRemove(answerId)) {  // 정상 작동
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } else {    // 해당 질문이 존재하지 않는 경우
            log.error("qnaAnswerRemove - This answerId doesn't exist.");
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "This answerId doesn't exist."));
        }
    }

}
