package com.ssafy.yourstar.domain.meeting.response;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordImgPath;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "MeetingRecordImgDetailGetRes", description = "추억 보관함 스크린샷 파일 정보")
public class MeetingRecordImgDetailGetRes extends BaseResponseBody {

    @ApiModelProperty(value = "팬미팅 등록 이미지 파일 정보")
    List<MeetingRecordImgPath> list;

    public static MeetingRecordImgDetailGetRes of (Integer statusCode, String message, List<MeetingRecordImgPath> list) {
        MeetingRecordImgDetailGetRes res = new MeetingRecordImgDetailGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }
}
