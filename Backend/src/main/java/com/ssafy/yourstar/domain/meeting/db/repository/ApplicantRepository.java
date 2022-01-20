package com.ssafy.yourstar.domain.meeting.db.repository;

import com.ssafy.yourstar.domain.meeting.db.entity.Applicant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicantRepository extends JpaRepository<Applicant, Long> {
}
