package com.ssafy.yourstar.domain.meeting.db.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@IdClass(ApplicantID.class)
@Table(name = "applicant")
public class Applicant {
    @Id
    @Column(name = "meeting_id")
    private int meetingId;

    @Id
    @Column(name = "member_id")
    private int memberId;

    @Column(name = "applicant_warn_count")
    private int applicantWarnCount;

    @ManyToOne
    // insertable : 엔티티 저장시 이 필드도 같이 저장한다. false로 설정하면 데이터베이스에 저장하지 않는다. 읽기 전용일때 사용한다.
    // updatable : 엔티티 수정시 이 필드도 같이 저장한다. false로 설정하면 데이터베이스에 저장하지 않는다. 읽기 전용일때 사용한다.
    @JoinColumn(name = "meeting_id", insertable = false, updatable = false)
    private Meeting meeting;
}
