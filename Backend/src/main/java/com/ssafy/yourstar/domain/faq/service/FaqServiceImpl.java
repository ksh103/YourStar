package com.ssafy.yourstar.domain.faq.service;

import com.ssafy.yourstar.domain.faq.db.entity.Faq;
import com.ssafy.yourstar.domain.faq.db.repository.FaqRepository;
import com.ssafy.yourstar.domain.faq.request.FaqReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaqServiceImpl implements FaqService{

    @Autowired
    FaqRepository faqRepository;

    @Override
    public Faq faqRegister(FaqReq faqRegister) {
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
    public Faq faqModify(int faqId, FaqReq faqModify) {
        Faq faq = new Faq();

        faq.setFaqId(faqId);
        faq.setFaqTitle(faqModify.getFaqTitle());
        faq.setFaqContent(faqModify.getFaqContent());

        return faqRepository.save(faq);
    }

    @Override
    public boolean faqRemove(int faqId) {
        Faq faq = faqRepository.findByFaqId(faqId);
        faqRepository.delete(faq);
        return true;
    }
}
