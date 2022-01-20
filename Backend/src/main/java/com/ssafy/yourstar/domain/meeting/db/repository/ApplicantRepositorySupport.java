package com.ssafy.yourstar.domain.meeting.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.yourstar.domain.meeting.db.entity.Applicant;
import com.ssafy.yourstar.domain.meeting.db.entity.QApplicant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class ApplicantRepositorySupport {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QApplicant qApplicant = QApplicant.applicant;

}
