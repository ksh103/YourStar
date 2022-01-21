package com.ssafy.yourstar.domain.faq.service;

import com.ssafy.yourstar.domain.faq.db.entity.Faq;
import com.ssafy.yourstar.domain.faq.request.FaqRegisterPostReq;

import java.util.List;

public interface FaqService {
    Faq faqRegister(FaqRegisterPostReq faqRegister);    // FAQ 등록
    List<Faq> faqList();    // FAQ 전체 조회
    Faq faqModify(Faq faq);     // FAQ 수정
    boolean faqRemove(int faqId);   // FAQ 삭제
}
