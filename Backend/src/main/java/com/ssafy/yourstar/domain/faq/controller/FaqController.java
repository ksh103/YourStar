package com.ssafy.yourstar.domain.faq.controller;

import com.ssafy.yourstar.domain.faq.db.entity.Faq;
import com.ssafy.yourstar.domain.faq.request.FaqRegisterPostReq;
import com.ssafy.yourstar.domain.faq.service.FaqService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@Slf4j
@RestController
@Api(value = "FAQ API")
@RequestMapping("/api/faq")
public class FaqController {

    @Autowired
    FaqService faqService;

    @ApiOperation(value = "FAQ 등록")
    @PostMapping
    public ResponseEntity<BaseResponseBody> faqRegister(@RequestBody FaqRegisterPostReq faqRegister) {
        log.info("faqRegister - 호출");
        faqService.faqRegister(faqRegister);

        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }

    @ApiOperation(value = "FAQ 전체 조회")
    @GetMapping
    public Page<Faq> faqList(@ApiParam(value = "페이지 번호")@RequestParam int page, @ApiParam(value = "페이지당 게시글 개수") @RequestParam int size) {
        log.info("faqList - 호출");
        return faqService.faqList(page, size);
    }

    @ApiOperation(value = "FAQ 수정")
    @PutMapping("/{faqId}")
    public ResponseEntity<BaseResponseBody> faqModify(@RequestBody Faq faq) {
        log.info("faqModify - 호출");
        if (faqService.faqModify(faq) == null) {    // 해당 FAQ 게시물 존재하지 않는 경우
            log.error("faqModify - This faqId doesn't exist.");
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "This faqId doesn't exist."));
        } else {    // 정상 작동
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }
    }

    @ApiOperation(value = "FAQ 삭제")
    @DeleteMapping("/{faqId}")
    public ResponseEntity<BaseResponseBody> faqRemove(@PathVariable int faqId) {
        log.info("faqRemove - 호출");
        if (faqService.faqRemove(faqId)) {  // 정상 작동
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } else {    // 해당 FAQ 게시물 존재하지 않는 경우
            log.error("faqRemove - This faqId doesn't exist.");
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "This faqId doesn't exist."));
        }
    }
}
