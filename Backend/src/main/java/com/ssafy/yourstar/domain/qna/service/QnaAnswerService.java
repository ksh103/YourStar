package com.ssafy.yourstar.domain.qna.service;

import com.ssafy.yourstar.domain.qna.db.entity.QnaAnswer;
import com.ssafy.yourstar.domain.qna.request.QnaAnswerModifyPutReq;
import com.ssafy.yourstar.domain.qna.request.QnaAnswerRegisterPostReq;

public interface QnaAnswerService {
    QnaAnswer qnaAnswerRegister(QnaAnswerRegisterPostReq qnaAnswerRegister);    // QNA 답변 등록
    QnaAnswer qnaAnswerModify(QnaAnswerModifyPutReq qnaAnswerModify);     // QNA 답변 수정
    boolean qnaAnswerRemove(int answerId);   // QNA 답변 삭제
}
