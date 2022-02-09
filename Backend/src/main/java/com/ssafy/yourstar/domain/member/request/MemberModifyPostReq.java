package com.ssafy.yourstar.domain.member.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "MemberModifyPostRequest", description = "멤버 정보 수정시 필요 정보")
public class MemberModifyPostReq {

    @ApiModelProperty(value = "회원 Password", example="1234")
    private String memberPassword;

    @ApiModelProperty(value = "회원 닉네임", example="싸피6기")
    private String memberNick;

    @ApiModelProperty(value = "회원 휴대전화", example="01000000000")
    private String memberPhone;

    @ApiModelProperty(value = "회원 주소", example="부산광역시")
    private String memberAddress;
}
