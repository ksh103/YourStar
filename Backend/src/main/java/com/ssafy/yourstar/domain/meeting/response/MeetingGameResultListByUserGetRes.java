package com.ssafy.yourstar.domain.meeting.response;

import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "MeetingGameResultListByUserGetRes", description = "팬미팅 게임 우승 내역(회원)")
public class MeetingGameResultListByUserGetRes extends BaseResponseBody {
    
    @ApiModelProperty(value = "팬미팅 게임 정보")
    List<String> list;

    public static MeetingGameResultListByUserGetRes of(Integer statusCode, String message, List<String> list) {
        MeetingGameResultListByUserGetRes res = new MeetingGameResultListByUserGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }
}
