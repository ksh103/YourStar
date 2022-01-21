package com.ssafy.yourstar.domain.meeting.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@ApiModel(value = "MeetingApplyByStarPostReq", description = "스타가 팬미팅 신청이나 수정시 필요한 정보")
public class MeetingApplyByStarPostReq {
    @ApiModelProperty(value = "소속사 코드", required = true, example = "1")
    int managerCode;

    @ApiModelProperty(value = "팬미팅 이름", required = true, example = "아이돌 박동준 1차 팬미팅")
    String meetingName;

    @ApiModelProperty(value = "팬들이 팬미팅 신청 시작하는 날짜 및 시간", required = true, example = "1996-09-25 04:30:50")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    LocalDateTime meetingOpenDate;

    @ApiModelProperty(value = "팬미팅 시작 날짜 및 시간", required = true, example = "1996-09-25 04:30:50")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    LocalDateTime meetingStartDate;

    @ApiModelProperty(value = "팬미팅 종료 날짜 및 시간", required = true, example = "1996-09-25 04:30:50")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    LocalDateTime meetingEndDate;

    @ApiModelProperty(value = "팬미팅 참여 가능 인원", required = true, example = "10")
    int meetingCnt;

    @ApiModelProperty(value = "팬미팅 참여 가격", required = true, example = "100000")
    int meetingPrice;

    @ApiModelProperty(value = "팬미팅 설명", required = true, example = "아이돌 박동준의 첫 팬미팅에 참여해보세요 !")
    String meetingDescription;
}
