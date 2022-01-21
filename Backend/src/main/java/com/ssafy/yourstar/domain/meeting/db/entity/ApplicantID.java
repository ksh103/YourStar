package com.ssafy.yourstar.domain.meeting.db.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicantID implements Serializable {
    private int meetingId;
    private int memberId;
}
