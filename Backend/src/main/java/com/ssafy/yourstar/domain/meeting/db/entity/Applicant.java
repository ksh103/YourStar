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
}
