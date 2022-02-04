package com.ssafy.yourstar.domain.meeting.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MeetingJoinPostReq", description = "미팅룸 입장시 필요한 정보")
public class MeetingJoinPostReq {
    @ApiModelProperty(value = "팬미팅 구분 번호", required = true, example = "3")
    int meetingId;

    @ApiModelProperty(value = "회원 번호", required = true, example = "23")
    int memberId;

    @ApiModelProperty(value = "회원 닉네임", required = true, example = "왕감자")
    String memberNick;

    @ApiModelProperty(value = "회원 구분 번호", required = true, example = "1")
    int code;
}
