package com.ssafy.yourstar.domain.meeting.response;

import com.ssafy.yourstar.domain.meeting.db.entity.MeetingGame;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "MeetingGameListGetRes", description = "팬미팅 게임 내역 정보")
public class MeetingGameListGetRes extends BaseResponseBody {
    
    @ApiModelProperty(value = "팬미팅 게임 정보")
    List<MeetingGame> list;

    public static MeetingGameListGetRes of(Integer statusCode, String message, List<MeetingGame> list) {
        MeetingGameListGetRes res = new MeetingGameListGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }
}
