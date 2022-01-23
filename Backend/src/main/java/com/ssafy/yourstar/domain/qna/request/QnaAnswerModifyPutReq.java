package com.ssafy.yourstar.domain.qna.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "QnaAnswerModifyPutReq", description = "QNA 수정 시 필요한 정보")
public class QnaAnswerModifyPutReq {
    @ApiModelProperty(value = "답변 id", example = "3", required = true)
    int answerId;

    @ApiModelProperty(value = "QNA 답변 내용", example = "안녕하세요. yourstar 안내팀입니다. 해당 문의사항은 ... ", required = true)
    String answerContent;
}
