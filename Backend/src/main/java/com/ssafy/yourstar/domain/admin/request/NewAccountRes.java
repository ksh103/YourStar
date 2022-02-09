package com.ssafy.yourstar.domain.admin.request;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "NewAccountRes", description = "생성된 계정 정보")
public class NewAccountRes {
    @ApiModelProperty(value = "아이디")
    private String email;

    @ApiModelProperty(value = "비밀번호")
    private String password;

    @JsonCreator
    public NewAccountRes(@JsonProperty(value = "email") String email,
                         @JsonProperty(value = "password") String password) {
        this.email = email;
        this.password = password;
    }
}
