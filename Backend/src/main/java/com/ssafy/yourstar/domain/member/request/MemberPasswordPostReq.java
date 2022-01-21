package com.ssafy.yourstar.domain.member.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberPasswordPostReq {

    @ApiModelProperty(name="회원 Email", example="ssafy@ssafy.com")
    private String memberEmail;
    @ApiModelProperty(name="회원 이름", example="김싸피")
    private String memberName;
}
