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

    @Override
    public Faq faqModify(Faq faq) {
        // FAQ 존재하면 수정
        if (faqRepository.findById(faq.getFaqId()).isPresent()) {
            return faqRepository.save(faq);
        } else return null;
    }

    @Override
    public boolean faqRemove(int faqId) {
        if (faqRepository.findById(faqId).isPresent()) {
            faqRepository.deleteById(faqId);
            return true;
        } else return false;
    }
}
