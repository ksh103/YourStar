package com.ssafy.yourstar.domain.member.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MemberPasswordPostReq", description = "멤버 비밀번호 초기화시 필요 정보")
public class MemberPasswordPostReq {

    @ApiModelProperty(value="회원 Email", example="ssafy@ssafy.com")
    private String memberEmail;
    @ApiModelProperty(value="회원 이름", example="김싸피")
    private String memberName;
}
