package com.ssafy.yourstar.domain.notice.db.repository;

import com.ssafy.yourstar.domain.notice.db.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Integer> {

}
