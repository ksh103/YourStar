package com.ssafy.yourstar.domain.member.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MemberLoginPostRequest", description = "멤버 로그인시 필요한 정보")
public class MemberLoginPostReq {
    @ApiModelProperty(value = "회원 Email", example="ssafy@ssafy.com")
    String memberEmail;
    @ApiModelProperty(value = "회원 Password", example="ssafy1234")
    String memberPassword;
}
