package com.ssafy.yourstar.domain.faq.service;

import com.ssafy.yourstar.domain.faq.db.entity.Faq;
import com.ssafy.yourstar.domain.faq.db.repository.FaqRepository;
import com.ssafy.yourstar.domain.faq.request.FaqRegisterPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaqServiceImpl implements FaqService{

    @Autowired
    FaqRepository faqRepository;

    @Override
    public Faq faqRegister(FaqRegisterPostReq faqRegister) {
        Faq faq = new Faq();

        faq.setFaqTitle(faqRegister.getFaqTitle());
        faq.setFaqContent(faqRegister.getFaqContent());

        return faqRepository.save(faq);
    }

    @Override
    public List<Faq> faqList() {
        return faqRepository.findAll();
    }
}
