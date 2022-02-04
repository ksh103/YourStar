package com.ssafy.yourstar.domain.meeting.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MeetingExitPostReq", description = "미팅룸 퇴장시 필요한 정보")
public class MeetingExitPostReq {
    @ApiModelProperty(value = "팬미팅 구분 번호", required = true, example = "3")
    int meetingId;

    @ApiModelProperty(value = "팬미팅 참여시 발급받은 회원 토큰", required = true, example = "tok_Js7KVlXoh9XRWS0")
    String token;
}
