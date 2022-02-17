package com.ssafy.yourstar.domain.admin.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "managerRegisterPostReq", description = "관계자 계정 생성시 필요한 정보")
public class ManagerRegisterPostReq {

    @ApiModelProperty(value = "관계자 대표 이메일", example = "ssafy@ssafy.com", required = true)
    String managerEmail;

    @ApiModelProperty(value = "소속사 이름(소문자, 띄어쓰기 X)", example = "smtown", required = true)
    String managerCodeName;

    @ApiModelProperty(value = "필요한 스타 계정 수", example = "1", required = true)
    int starAccountCnt;

    @ApiModelProperty(value = "필요한 관계자 계정 수", example = "3", required = true)
    int accountCnt;
}
