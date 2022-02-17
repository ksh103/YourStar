package com.ssafy.yourstar.domain.meeting.response;

import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MeetingRecordVidoeDetailGetRes", description = "추억 보관함 녹화 영상 파일 정보")
public class MeetingRecordVidoeDetailGetRes extends BaseResponseBody {

    @ApiModelProperty(value = "팬미팅 등록 이미지 파일 정보")
    String fileUrl;

    public static MeetingRecordVidoeDetailGetRes of (Integer statusCode, String message, String fileUrl) {
        MeetingRecordVidoeDetailGetRes res = new MeetingRecordVidoeDetailGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setFileUrl(fileUrl);

        return res;
    }
}
