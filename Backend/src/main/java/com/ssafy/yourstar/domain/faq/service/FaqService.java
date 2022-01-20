package com.ssafy.yourstar.domain.faq.service;

import com.ssafy.yourstar.domain.faq.db.entity.Faq;
import com.ssafy.yourstar.domain.faq.request.FaqRegisterPostReq;

import java.util.List;

public interface FaqService {
    Faq faqRegister(FaqRegisterPostReq faqRegister); // FAQ 등록

}
