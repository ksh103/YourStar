package com.ssafy.yourstar.domain.meeting.response;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingImgPath;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MeetingApplyGetRes", description = "팬미팅 등록 이미지 파일 첨부 응답")
public class MeetingGetRes extends BaseResponseBody {

    @ApiModelProperty(value = "팬미팅 등록 이미지 파일 정보")
    MeetingImgPath meetingImgPath;

    public static MeetingGetRes of (Integer statusCode, String message, MeetingImgPath meetingImgPath) {
        MeetingGetRes res = new MeetingGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setMeetingImgPath(meetingImgPath);
        return res;
    }
}
