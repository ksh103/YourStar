package com.ssafy.yourstar.domain.qna.service;

import com.ssafy.yourstar.domain.qna.db.entity.QnaAnswer;
import com.ssafy.yourstar.domain.qna.db.entity.QnaQuestion;
import com.ssafy.yourstar.domain.qna.db.repository.QnaAnswerRepository;
import com.ssafy.yourstar.domain.qna.db.repository.QnaQuestionRepository;
import com.ssafy.yourstar.domain.qna.request.QnaAnswerModifyPutReq;
import com.ssafy.yourstar.domain.qna.request.QnaAnswerRegisterPostReq;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class QnaAnswerServiceImpl implements QnaAnswerService {

    @Autowired
    QnaAnswerRepository qnaAnswerRepository;

    @Autowired
    QnaQuestionRepository qnaQuestionRepository;

    @Override
    public QnaAnswer qnaAnswerRegister(QnaAnswerRegisterPostReq qnaAnswerRegister) {
        QnaAnswer qnaAnswer = new QnaAnswer();

        qnaAnswer.setAnswerContent(qnaAnswerRegister.getAnswerContent());

        // 질문과 답변 매핑하기
        QnaQuestion qnaQuestion = qnaQuestionRepository.findById(qnaAnswerRegister.getQuestionId()).get();
        qnaAnswer.setQuestionId(qnaQuestion);

        return qnaAnswerRepository.save(qnaAnswer);
    }

    @Override
    public QnaAnswer qnaAnswerModify(QnaAnswerModifyPutReq qnaAnswerModify) {
        // 해당 QNA가 존재하면 수정. 존재하지 않으면 null 반환
        if (qnaAnswerRepository.findById(qnaAnswerModify.getAnswerId()).isPresent()) {
            QnaAnswer qnaAnswer = new QnaAnswer();

            qnaAnswer = qnaAnswerRepository.findById(qnaAnswerModify.getAnswerId()).get();
            qnaAnswer.setAnswerContent(qnaAnswerModify.getAnswerContent());

            return qnaAnswerRepository.save(qnaAnswer);
        } else return null;
    }

    @Override
    public boolean qnaAnswerRemove(int answerId) {
        // 해당 QNA가 존재하면 삭제 후 true 반환. 그렇지 않으면 false 반환
        if (qnaAnswerRepository.findById(answerId).isPresent()) {
            qnaAnswerRepository.deleteById(answerId);
            return true;
        } else return false;
    }
}
