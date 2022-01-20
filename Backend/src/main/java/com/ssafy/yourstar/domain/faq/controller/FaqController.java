package com.ssafy.yourstar.domain.faq.controller;

import com.ssafy.yourstar.domain.faq.db.entity.Faq;
import com.ssafy.yourstar.domain.faq.request.FaqReq;
import com.ssafy.yourstar.domain.faq.service.FaqService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


@Slf4j
@RestController
@Api(value = "FAQ API")
@RequestMapping("/api/faq")
public class FaqController {

    @Autowired
    FaqService faqService;

    @ApiOperation(value = "FAQ 등록")
    @PostMapping
    public ResponseEntity<BaseResponseBody> faqRegister(@RequestBody FaqReq faqRegister, HttpServletRequest request) {
        log.info("faqRegister - 호출");
        faqService.faqRegister(faqRegister);

        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }

    @ApiOperation(value = "FAQ 전체 조회")
    @GetMapping
    public List<Faq> faqList() {
        log.info("faqList - 호출");
        return faqService.faqList();
    }

    @ApiOperation(value = "FAQ 수정")
    @PutMapping("/{faqId}")
    public ResponseEntity<BaseResponseBody> faqModify(@PathVariable int faqId, @RequestBody FaqReq faqModify, HttpServletRequest request) {
        log.info("faqModify - 호출");
        faqService.faqModify(faqId, faqModify);
        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }

    @ApiOperation(value = "FAQ 삭제")
    @DeleteMapping("/{faqId}")
    public ResponseEntity<BaseResponseBody> faqRemove(@PathVariable int faqId, HttpServletRequest request) {
        log.info("faqRemove - 호출");
        faqService.faqRemove(faqId);
        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }

}
