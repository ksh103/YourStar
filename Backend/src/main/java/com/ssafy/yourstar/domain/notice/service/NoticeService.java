package com.ssafy.yourstar.domain.notice.service;

import com.ssafy.yourstar.domain.notice.db.entity.Notice;
import com.ssafy.yourstar.domain.notice.request.NoticeReq;

import java.util.List;

public interface NoticeService {
    Notice noticeRegister(NoticeReq noticeRegister);    // FAQ 등록
    List<Notice> noticeList();    // FAQ 전체 조회
    Notice noticeModify(int noticeId, Notice notice);     // FAQ 수정
    boolean noticeRemove(int noticeId);   // FAQ 삭제
}
