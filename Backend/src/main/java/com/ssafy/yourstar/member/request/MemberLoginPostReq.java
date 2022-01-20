package com.ssafy.yourstar.member.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("MemberLoginPostRequest")
public class MemberLoginPostReq {
    @ApiModelProperty(name="회원 Email", example="ssafy@ssafy.com")
    String memberEmail;
    @ApiModelProperty(name="회원 Password", example="ssafy1234")
    String memberPassword;
}
