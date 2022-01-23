package com.ssafy.yourstar.domain.qna.service;

import com.ssafy.yourstar.domain.qna.db.entity.QnaQuestion;
import com.ssafy.yourstar.domain.qna.request.QnaListGetReq;
import com.ssafy.yourstar.domain.qna.request.QnaQuestionReq;
import org.springframework.data.domain.Page;

public interface QnaQuestionService {
    Page<QnaQuestion> qnaList(QnaListGetReq qnaList, int page, int size);    // QNA 전체 조회
    QnaQuestion qnaDetail(int questionId);                 // QNA 상세 조회
    QnaQuestion qnaQuestionRegister(QnaQuestionReq qnaQuestionRegister);    // QNA 등록
    QnaQuestion qnaQuestionModify(int questionId, QnaQuestionReq qnaQuestionModify);     // QNA 수정
    boolean qnaQuestionRemove(int questionId);   // QNA 삭제
}
