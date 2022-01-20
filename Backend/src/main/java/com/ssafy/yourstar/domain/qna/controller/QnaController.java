package com.ssafy.yourstar.domain.qna.controller;

import com.ssafy.yourstar.domain.qna.request.QnaRegisterPostReq;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@Api(value = "QNA")
@RestController
@RequestMapping("/api/qna")
public class QnaController {

//    @ApiOperation(value = "QNA 등록")
//    @PostMapping
//    public ResponseEntity<BaseResponseBody> qnaRegister(@RequestBody QnaRegisterPostReq qnaRegister, HttpServletRequest request) {
//
//    }
}
