package com.ssafy.yourstar.domain.faq.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "FaqRegisterPostReq", description = "FAQ 등록시 필요한 정보")
public class FaqRegisterPostReq {
    @ApiModelProperty(value = "FAQ 제목", example = "회원탈퇴는 어떻게 할 수 있나요?", required = true)
    String faqTitle;

    @ApiModelProperty(value = "FAQ 내용", example = "회원정보수정페이지에서 회원탈퇴 버튼을 누르면 정상적으로 회원탈퇴가 진행됩니다.", required = true)
    String faqContent;
}
