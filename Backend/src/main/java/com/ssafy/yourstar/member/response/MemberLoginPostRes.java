package com.ssafy.yourstar.member.response;

import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/** 회원 로그인 API ([POST] /api//members/login) 요청에 대한 응답값 정의 */

@Getter
@Setter
@ApiModel("MemberLoginPostResponse")
public class MemberLoginPostRes extends BaseResponseBody {
    @ApiModelProperty(name="JWT 인증 토큰")
    String accessToken;

    public static MemberLoginPostRes of(Integer statusCode, String message, String accessToken) {
        MemberLoginPostRes res = new MemberLoginPostRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setAccessToken(accessToken);
        return res;
    }
}
