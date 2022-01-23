package com.ssafy.yourstar.domain.qna.service;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.db.repository.MemberRepository;
import com.ssafy.yourstar.domain.qna.db.entity.QnaQuestion;
import com.ssafy.yourstar.domain.qna.db.repository.QnaQuestionRepository;
import com.ssafy.yourstar.domain.qna.request.QnaListGetReq;
import com.ssafy.yourstar.domain.qna.request.QnaQuestionReq;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
public class QnaQuestionServiceImpl implements QnaQuestionService {

    @Autowired
    QnaQuestionRepository qnaQuestionRepository;

    @Autowired
    MemberRepository memberRepository;

    @Override
    public QnaQuestion qnaQuestionRegister(QnaQuestionReq qnaQuestionRegister) {
        QnaQuestion qnaQuestion = new QnaQuestion();

        qnaQuestion.setQuestionTitle(qnaQuestionRegister.getQuestionTitle());
        qnaQuestion.setQuestionContent(qnaQuestionRegister.getQuestionContent());

        Member member = memberRepository.findById(4).get();
        System.out.println(member);
        qnaQuestion.setMember(member);

        return qnaQuestionRepository.save(qnaQuestion);
    }

    @Override
    public Page<QnaQuestion> qnaList(QnaListGetReq qnaList, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page - 1, size, Sort.by("questionId").descending());
        return qnaQuestionRepository.findAllByMember_MemberId(4, pageRequest);
    }

    @Override
    public QnaQuestion qnaDetail(int questionId) {
        return qnaQuestionRepository.findById(questionId).get();
    }

    @Override
    public QnaQuestion qnaQuestionModify(int questionId, QnaQuestionReq qnaQuestionModify) {
        // 해당 QNA가 존재하면 수정. 존재하지 않으면 null 반환
        if (qnaQuestionRepository.findById(questionId).isPresent()) {
            QnaQuestion qnaQuestion = new QnaQuestion();

            qnaQuestion = qnaQuestionRepository.findById(questionId).get();
            qnaQuestion.setQuestionTitle(qnaQuestionModify.getQuestionTitle());
            qnaQuestion.setQuestionContent(qnaQuestionModify.getQuestionContent());

            return qnaQuestionRepository.save(qnaQuestion);
        } else return null;
    }

    @Override
    public boolean qnaQuestionRemove(int questionId) {
        // 해당 QNA가 존재하면 삭제 후 true 반환. 그렇지 않으면 false 반환
        if (qnaQuestionRepository.findById(questionId).isPresent()) {
            qnaQuestionRepository.deleteById(questionId);
            return true;
        } else return false;
    }
}
