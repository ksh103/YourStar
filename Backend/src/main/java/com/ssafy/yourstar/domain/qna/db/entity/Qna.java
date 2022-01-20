package com.ssafy.yourstar.domain.qna.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "qna")
@ApiModel(value = "QNA")
public class Qna {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "qna_id")
    @ApiModelProperty(value = "QNA 구분 번호")
    private int qnaId;

    @Column(name = "qna_title")
    @ApiModelProperty(value = "QNA 제목")
    private String qnaTitle;

    @Column(name = "qna_content")
    @ApiModelProperty(value = "QNA 내용")
    private String qnaContent;

    @Column(name = "qna_reg_dt")
    @ApiModelProperty(value = "QNA 생성 시간")
    LocalDateTime qnaRegDt;
}
