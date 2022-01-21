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

    public Optional<Applicant> findByMemberIdAndMeetingId(int memberId, int meetingId) {
        Applicant applicant = jpaQueryFactory.select(qApplicant).from(qApplicant)
                .where(qApplicant.memberId.eq(memberId).and(qApplicant.meetingId.eq(meetingId))).fetchOne();

        if (applicant == null) return Optional.empty();
        return Optional.ofNullable(applicant);
    }
}
