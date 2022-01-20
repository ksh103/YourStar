package com.ssafy.yourstar.domain.meeting.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "meeting")
@ApiModel(value = "팬미팅 주요 정보")
public class Meeting {
    @ApiModelProperty(value = "팬미팅 구분 번호")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meeting_id")
    int meetingId;

    @ApiModelProperty(value = "소속사 코드", required = true)
    @Column(name = "manager_code")
    int managerCode;

    @ApiModelProperty(value = "팬미팅 이름", required = true)
    @Column(name = "meeting_name")
    String meetingName;

    @ApiModelProperty(value = "팬들이 팬미팅 신청 시작하는 날짜 및 시간", required = true)
    @Column(name = "meeting_open_date")
    LocalDateTime meetingOpenDate;

    @ApiModelProperty(value = "팬미팅 시작 날짜 및 시간", required = true)
    @Column(name = "meeting_start_date")
    LocalDateTime meetingStartDate;

    @ApiModelProperty(value = "팬미팅 종료 날짜 및 시간", required = true)
    @Column(name = "meeting_end_date")
    LocalDateTime meetingEndDate;

    @ApiModelProperty(value = "팬미팅 참여 가능 인원", required = true)
    @Column(name = "meeting_cnt")
    int meetingCnt;

    @ApiModelProperty(value = "팬미팅 참여 가격", required = true)
    @Column(name = "meeting_price")
    int meetingPrice;

    @ApiModelProperty(value = "팬미팅 설명", required = true)
    @Column(name = "meeting_description")
    String meetingDescription;

    @ApiModelProperty(value = "관리자의 팬미팅 승인 상태", required = true)
    @Column(name = "isApprove")
    boolean isApprove;
}
