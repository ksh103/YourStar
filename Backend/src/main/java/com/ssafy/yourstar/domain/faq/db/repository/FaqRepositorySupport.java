package com.ssafy.yourstar.domain.faq.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.yourstar.domain.faq.db.entity.Faq;
import com.ssafy.yourstar.domain.faq.db.entity.QFaq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class FaqRepositorySupport {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QFaq qFaq = QFaq.faq;

    public Faq findByFaqId(int faqId) {
        return jpaQueryFactory.selectFrom(qFaq).where(qFaq.faqId.eq(faqId)).fetchOne();
    }
}
