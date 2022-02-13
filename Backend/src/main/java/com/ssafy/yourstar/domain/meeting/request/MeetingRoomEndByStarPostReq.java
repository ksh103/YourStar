package com.ssafy.yourstar.domain.meeting.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MeetingRoomEndByStarPostReq", description = "팬미팅 종료")
public class MeetingRoomEndByStarPostReq {
    @ApiModelProperty(value = "팬미팅 구분 번호", required = true, example = "3")
    int meetingId;
}
