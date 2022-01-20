package com.ssafy.yourstar.domain.faq.service;

import com.ssafy.yourstar.domain.faq.db.entity.Faq;
import com.ssafy.yourstar.domain.faq.request.FaqReq;

import java.util.List;

public interface FaqService {
    Faq faqRegister(FaqReq faqRegister);    // FAQ 등록
    List<Faq> faqList();    // FAQ 전체 조회
    Faq faqModify(int faqId, Faq faq);     // FAQ 수정
}
