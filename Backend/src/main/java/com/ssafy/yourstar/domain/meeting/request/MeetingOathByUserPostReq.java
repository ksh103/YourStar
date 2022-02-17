package com.ssafy.yourstar.domain.meeting.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MeetingOathByUserPostReq", description = "팬미팅 참여 시 보안서약서 작성 유무에 대한 정보")
public class MeetingOathByUserPostReq {
    @ApiModelProperty(value = "팬미팅 구분 번호", required = true, example = "3")
    int meetingId;

    @ApiModelProperty(value = "회원 구분 번호", required = true, example = "23")
    int memberId;
}
