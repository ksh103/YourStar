package com.ssafy.yourstar.domain.qna.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "QnaListGetReq", description = "QNA 질문 전체 조회시 필요한 정보")
public class QnaListGetReq {
    @ApiModelProperty(value = "사용자 id", example = "3", required = true)
    int memberId;
}
