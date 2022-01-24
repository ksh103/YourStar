package com.ssafy.yourstar.domain.qna.service;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.db.repository.MemberRepository;
import com.ssafy.yourstar.domain.qna.db.entity.QnaQuestion;
import com.ssafy.yourstar.domain.qna.db.repository.QnaQuestionRepository;
import com.ssafy.yourstar.domain.qna.request.QnaListGetReq;
import com.ssafy.yourstar.domain.qna.request.QnaQuestionModifyPutReq;
import com.ssafy.yourstar.domain.qna.request.QnaQuestionRegisterPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class QnaQuestionServiceImpl implements QnaQuestionService {

    @Autowired
    QnaQuestionRepository qnaQuestionRepository;

    @Autowired
    MemberRepository memberRepository;

    @Override
    public QnaQuestion qnaQuestionRegister(QnaQuestionRegisterPostReq qnaQuestionRegister) {
        QnaQuestion qnaQuestion = new QnaQuestion();

        qnaQuestion.setQuestionTitle(qnaQuestionRegister.getQuestionTitle());
        qnaQuestion.setQuestionContent(qnaQuestionRegister.getQuestionContent());

        // 질문과 사용자 매핑하기
        Member member = memberRepository.findById(qnaQuestionRegister.getMemberId()).get();
        qnaQuestion.setMember(member);

        return qnaQuestionRepository.save(qnaQuestion);
    }

    @Override
    public Page<QnaQuestion> qnaList(QnaListGetReq qnaList, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page - 1, size, Sort.by("questionId").descending());
        Page<QnaQuestion> qna = qnaQuestionRepository.findAllByMember_MemberId(qnaList.getMemberId(), pageRequest);
        return qna;
    }

    @Override
    public QnaQuestion qnaDetail(int questionId) {
        return qnaQuestionRepository.findById(questionId).get();
    }

    @Override
    public QnaQuestion qnaQuestionModify(QnaQuestionModifyPutReq qnaQuestionModify) {
        // 해당 QNA가 존재하면 수정. 존재하지 않으면 null 반환
        if (qnaQuestionRepository.findById(qnaQuestionModify.getQuestionId()).isPresent()) {
            QnaQuestion qnaQuestion = new QnaQuestion();

            qnaQuestion = qnaQuestionRepository.findById(qnaQuestionModify.getQuestionId()).get();
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
