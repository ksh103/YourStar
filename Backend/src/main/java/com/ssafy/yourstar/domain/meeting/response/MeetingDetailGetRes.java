package com.ssafy.yourstar.domain.meeting.response;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MeetingDetailGetRes", description = "팬미팅 상세정보 보기 응답")
public class MeetingDetailGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "미팅 상세 정보")
    Meeting meeting;

    public static MeetingDetailGetRes of (Integer statusCode, String message, Meeting meeting) {
        MeetingDetailGetRes res = new MeetingDetailGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setMeeting(meeting);

        return res;
    }
}
