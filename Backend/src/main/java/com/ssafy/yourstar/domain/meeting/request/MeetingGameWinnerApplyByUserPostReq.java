package com.ssafy.yourstar.domain.meeting.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MeetingGameWinnerApplyByUserPostReq", description = "게임 우승자 등록")
public class MeetingGameWinnerApplyByUserPostReq {
    @ApiModelProperty(value = "팬미팅 구분 번호", required = true, example = "3")
    int meetingId;

    @ApiModelProperty(value = "우승한 회원 번호", required = true, example = "23")
    int memberId;

    @ApiModelProperty(value = "진행된 게임 이름", required = true, example = "OX게임")
    String meetingGameName;
}
