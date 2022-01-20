package com.ssafy.yourstar.domain.meeting.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "applicant")
public class Applicant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meeting_id")
    int meetingId;

    @Column(name = "member_id")
    int memberId;

    @Column(name = "applicant_warn_count")
    int applicantWarnCount;
}
