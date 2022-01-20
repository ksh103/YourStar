package com.ssafy.yourstar.domain.meeting.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MeetingApplyByUserPostReq", description = "팬이 팬미팅 신청시 필요한 정보")
public class MeetingApplyByUserPostReq {
    @ApiModelProperty(value = "팬미팅 구분 번호", required = true)
    int meetingId;

    @ApiModelProperty(value = "회원 구분 번호", required = true)
    int memberId;
}
