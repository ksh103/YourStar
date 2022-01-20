package com.ssafy.yourstar.domain.faq.db.repository;

import com.ssafy.yourstar.domain.faq.db.entity.Faq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FaqRepository extends JpaRepository<Faq, Integer> {
    Faq findByFaqId(int faqId);
}
