package com.ssafy.yourstar.domain.faq.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FaqRegisterPostReq {
    @ApiModelProperty(name = "FAQ 제목", example = "비속어 사용 및 부적절한 행위 제재 안내")
    String faqTitle;

    @ApiModelProperty(name = "FAQ 내용", example = "바로 강퇴에서 1회 경고, 2회 경고를 받을 시 강퇴로 변경되었습니다.")
    String faqContent;
}
