package com.ssafy.yourstar.domain.qna.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "QnaRegisterPostReq", description = "QNA 등록시 필요한 정보")
public class QnaRegisterPostReq {
    @ApiModelProperty(name = "QNA 제목", example = "환불해주세요.", required = true)
    String qnaTitle;

    @ApiModelProperty(name = "QNA 내용", example = "박동준 팬미팅 결제했는데 환불해주세요.", required = true)
    String qnaContent;
}
