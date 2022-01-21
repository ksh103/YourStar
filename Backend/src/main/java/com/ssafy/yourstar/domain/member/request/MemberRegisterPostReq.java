package com.ssafy.yourstar.domain.member.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Getter
@Setter
@ApiModel("MemberRegisterPostRequest")
public class MemberRegisterPostReq {
    @ApiModelProperty(name="회원 code", example="3")
    private String code;

    @ApiModelProperty(name="회원 Email", example="ssafy@ssafy.com")
    private String memberEmail;

    @ApiModelProperty(name="회원 Password", example="1234")
    private String memberPassword;

    @ApiModelProperty(name="회원 이름", example="김싸피")
    private String memberName;

    @ApiModelProperty(name="회원 닉네임", example="싸피6기")
    private String memberNick;

    @ApiModelProperty(name="회원 휴대전화", example="01000000000")
    private String memberPhone;

    @ApiModelProperty(name="회원 주소", example="부산광역시")
    private String memberAddress;

    @ApiModelProperty(name="회원 생일", example="1900-00-00")
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date memberBirth;

    @ApiModelProperty(name="회원 성별", example="여자/남자")
    private String memberGender;

    @ApiModelProperty(name="로그인 여부", example="0")
    private boolean isLogin;

    @ApiModelProperty(name="소속 코드", example ="0")
    private int managerCode;
}
