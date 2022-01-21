package com.ssafy.yourstar.domain.faq.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "FaqRegisterPostReq", description = "FAQ 등록 및 수정시 필요한 정보")
public class FaqRegisterPostReq {
    @ApiModelProperty(value = "FAQ 제목", example = "비속어 사용 및 부적절한 행위 제재 안내", required = true)
    String faqTitle;

    @ApiModelProperty(value = "FAQ 내용", example = "바로 강퇴에서 1회 경고, 2회 경고를 받을 시 강퇴로 변경되었습니다.", required = true)
    String faqContent;
}
