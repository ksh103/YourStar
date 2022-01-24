package com.ssafy.yourstar.domain.admin.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "managerRegisterPostReq", description = "관계자 계정 생성시 필요한 정보")
public class ManagerRegisterPostReq {
    @ApiModelProperty(value = "소속사 이름(소문자, 띄어쓰기 X)", example = "smtown", required = true)
    String managerCodeName;

    @ApiModelProperty(value = "필요한 계정 수", example = "3", required = true)
    int accountCnt;
}
