package com.ssafy.yourstar.domain.meeting.db.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
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
@ApiModel(value = "Meeting", description = "팬미팅 주요 정보")
public class Meeting {
    @ApiModelProperty(value = "팬미팅 구분 번호", example = "7")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meeting_id")
    private int meetingId;

    @ApiModelProperty(value = "소속사 코드", required = true, example = "3")
    @Column(name = "manager_code")
    private int managerCode;

    @ApiModelProperty(value = "팬미팅 이름", required = true, example = "아이돌 박동준 1차 팬미팅")
    @Column(name = "meeting_name")
    private String meetingName;

    @ApiModelProperty(value = "팬들이 팬미팅 신청 시작하는 날짜 및 시간", required = true, example = "1996-09-25 04:30:50")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(name = "meeting_open_date")
    private LocalDateTime meetingOpenDate;

    @ApiModelProperty(value = "팬미팅 시작 날짜 및 시간", required = true, example = "1996-09-25 04:30:50")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(name = "meeting_start_date")
    private LocalDateTime meetingStartDate;

    @ApiModelProperty(value = "팬미팅 종료 날짜 및 시간", required = true, example = "1996-09-25 04:30:50")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(name = "meeting_end_date")
    private LocalDateTime meetingEndDate;

    @ApiModelProperty(value = "팬미팅 참여 가능 인원", required = true, example = "10")
    @Column(name = "meeting_cnt")
    private int meetingCnt;

    @ApiModelProperty(value = "팬미팅 참여 가격", required = true, example = "100000")
    @Column(name = "meeting_price")
    private int meetingPrice;

    @ApiModelProperty(value = "팬미팅 설명", required = true, example = "아이돌 박동준의 첫 팬미팅에 참여해보세요 !")
    @Column(name = "meeting_description")
    private String meetingDescription;

    @ApiModelProperty(value = "관리자의 팬미팅 승인 상태", required = true, example = "false")
    @Column(name = "is_approve")
    private boolean isApprove;
}
