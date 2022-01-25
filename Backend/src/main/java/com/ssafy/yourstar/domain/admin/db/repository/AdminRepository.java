package com.ssafy.yourstar.domain.admin.db.repository;

import com.ssafy.yourstar.domain.member.db.entity.ManagerGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<ManagerGroup, Integer> {
     ManagerGroup findByManagerCodeName(String mangerCodeName);
}
