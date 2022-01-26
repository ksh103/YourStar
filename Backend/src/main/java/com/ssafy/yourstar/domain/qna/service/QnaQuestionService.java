package com.ssafy.yourstar.domain.qna.service;

import com.ssafy.yourstar.domain.qna.db.entity.QnaQuestion;
import com.ssafy.yourstar.domain.qna.request.QnaQuestionModifyPutReq;
import com.ssafy.yourstar.domain.qna.request.QnaQuestionRegisterPostReq;
import org.springframework.data.domain.Page;

public interface QnaQuestionService {
    Page<QnaQuestion> qnaList(int page, int size);    // QNA 전체 조회
    Page<QnaQuestion> qnaListByMemberId(int memberId, int page, int size); // QNA 멤버별 조회
    QnaQuestion qnaDetail(int questionId);                 // QNA 상세 조회
    QnaQuestion qnaQuestionRegister(QnaQuestionRegisterPostReq qnaQuestionRegister);    // QNA 질문 등록
    QnaQuestion qnaQuestionModify(QnaQuestionModifyPutReq qnaQuestionModify);     // QNA 질문 수정
    boolean qnaQuestionRemove(int questionId);   // QNA 질문 삭제
}
