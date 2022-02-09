package com.ssafy.yourstar.domain.faq.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@ApiModel(value = "Faq", description = "자주 묻는 질문")
@Table(name = "faq")
public class Faq {
    @ApiModelProperty(value = "FAQ 구분 번호")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "faq_id")
    private int faqId;

    @ApiModelProperty(value = "FAQ 제목", required = true)
    @Column(name = "faq_title")
    private String faqTitle;

    @ApiModelProperty(value = "FAQ 내용", required = true)
    @Column(name = "faq_content")
    private String faqContent;

}
