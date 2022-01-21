package com.ssafy.yourstar.domain.meeting.response;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

@Getter
@Setter
@ApiModel(value = "MeetingPendingGetRes", description = "승인 대기 중인 팬미팅 응답 정보")
public class MeetingPendingGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "페이징 처리된 컨텐츠")
    Page<Meeting> meetingPage;

    // 페이징한 컨텐츠 정보와 statusCode, message를 모아서 리턴하는 응답
    public static MeetingPendingGetRes of(Integer statusCode, String message, Page<Meeting> meetingPage) {
        MeetingPendingGetRes res = new MeetingPendingGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setMeetingPage(meetingPage);

        return res;
    }
}
