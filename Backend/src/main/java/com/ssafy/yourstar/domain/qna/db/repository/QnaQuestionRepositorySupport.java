package com.ssafy.yourstar.domain.qna.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.yourstar.domain.member.db.entity.QMember;
import com.ssafy.yourstar.domain.qna.db.entity.QQnaQuestion;
import com.ssafy.yourstar.domain.qna.db.entity.QnaQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class QnaQuestionRepositorySupport {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QQnaQuestion qQnaQuestion = QQnaQuestion.qnaQuestion;
    QMember qMember = QMember.member;

    public List<QnaQuestion> findByMemberId(int memberId, Pageable pageable){
        List<QnaQuestion> qnaQuestions = jpaQueryFactory.selectFrom(qQnaQuestion)
                .where(qQnaQuestion.member.memberId.eq(memberId)).fetch();
        return qnaQuestions;
    }
}
