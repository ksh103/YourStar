package com.ssafy.yourstar.domain.faq.controller;

import com.ssafy.yourstar.domain.faq.db.entity.Faq;
import com.ssafy.yourstar.domain.faq.request.FaqRegisterPostReq;
import com.ssafy.yourstar.domain.faq.service.FaqService;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.logging.Logger;

@RestController
@Api(value = "FAQ API")
@RequestMapping("/api/faq")
public class FaqController {
    private Logger logger;

    @Autowired
    FaqService faqService;

    @ApiOperation(value = "FAQ 등록")
    @PostMapping
    public ResponseEntity<BaseResponseBody> faqRegister(@RequestBody FaqRegisterPostReq faqRegister, HttpServletRequest request) {
        logger.info("faqRegister - 호출");
        Faq faq = faqService.faqRegister(faqRegister);

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }


}
