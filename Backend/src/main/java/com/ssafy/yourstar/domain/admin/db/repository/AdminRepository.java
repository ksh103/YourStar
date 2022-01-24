package com.ssafy.yourstar.domain.admin.db.repository;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Member, Integer> {
    Page<Member> findAllByCode(int code, Pageable pageable);
}
