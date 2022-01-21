package com.ssafy.yourstar.domain.notice.service;

import com.ssafy.yourstar.domain.notice.db.entity.Notice;
import com.ssafy.yourstar.domain.notice.request.NoticeReq;
import org.springframework.data.domain.Page;

import java.util.List;

public interface NoticeService {
    Notice noticeRegister(NoticeReq noticeRegister);    // 공지사항 등록
    Page<Notice> noticeList(int page, int size);    // 공지사항 전체 조회
    Notice noticeDetail(int noticeId);        // 공지사항 상세 조회
    Notice noticeModify(int noticeId, NoticeReq noticeModify);     // 공지사항 수정
    boolean noticeRemove(int noticeId);   // 공지사항 삭제
}
