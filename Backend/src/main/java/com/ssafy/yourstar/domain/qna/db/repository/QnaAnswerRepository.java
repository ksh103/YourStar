package com.ssafy.yourstar.domain.qna.db.repository;

import com.ssafy.yourstar.domain.qna.db.entity.QnaAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface QnaAnswerRepository extends JpaRepository<QnaAnswer, Integer> {
}
