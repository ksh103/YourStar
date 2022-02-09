package com.ssafy.yourstar.domain.qna.db.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "qna_answer")
@ApiModel(value = "QnaAnswer", description = "QNA 답변")
public class QnaAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id")
    @ApiModelProperty(value = "답변 구분 번호")
    private int answerId;

    @Column(name = "answer_content")
    @ApiModelProperty(value = "답변 내용", required = true)
    private String answerContent;

    @Column(name = "answer_reg_dt")
    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @ApiModelProperty(value = "답변 생성 시간")
    LocalDateTime answerRegDt;

    // QNA 질문 테이블과 매핑
    @OneToOne
    @JoinColumn(name = "questionId")
    @JsonBackReference
    private QnaQuestion questionId;

}
