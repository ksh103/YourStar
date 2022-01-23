package com.ssafy.yourstar.domain.qna.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "QnaQuestionModifyPutReq", description = "QNA 질문 수정 시 필요한 정보")
public class QnaQuestionModifyPutReq {
    @ApiModelProperty(value = "질문 id", example = "3", required = true)
    int questionId;

    @ApiModelProperty(value = "QNA 질문 제목", example = "이메일 변경하고 싶습니다.", required = true)
    String questionTitle;

    @ApiModelProperty(value = "QNA 질문 내용", example = "지금 사용하는 이메일 안쓰게 돼서 바꾸고 싶어요.", required = true)
    String questionContent;
}
