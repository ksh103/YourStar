package com.ssafy.yourstar.domain.meeting.response;

import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "MeetingGameResultListByStarGetRes", description = "팬미팅 게임 우승 내역(관계자)")
public class MeetingGameResultListByStarGetRes extends BaseResponseBody {
    
    @ApiModelProperty(value = "팬미팅 게임 정보")
    List<String> list;

    public static MeetingGameResultListByStarGetRes of(Integer statusCode, String message, List<String> list) {
        MeetingGameResultListByStarGetRes res = new MeetingGameResultListByStarGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }
}
