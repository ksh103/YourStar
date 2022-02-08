package com.ssafy.yourstar.domain.meeting.response;

import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "MeetingGameResultListGetRes", description = "팬미팅 게임 우승 내역 정보")
public class MeetingGameResultListGetRes extends BaseResponseBody {
    
    @ApiModelProperty(value = "팬미팅 게임 정보")
    List<String> list;

    public static MeetingGameResultListGetRes of(Integer statusCode, String message, List<String> list) {
        MeetingGameResultListGetRes res = new MeetingGameResultListGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }
}
