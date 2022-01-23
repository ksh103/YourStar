package com.ssafy.yourstar.domain.qna.db.entity;

import com.ssafy.yourstar.domain.member.db.entity.Member;
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
@Table(name = "qna_question")
@ApiModel(value = "QNA - 질문")
public class QnaQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    @ApiModelProperty(value = "질문 구분 번호")
    private int questionId;

    @Column(name = "question_title")
    @ApiModelProperty(value = "질문 제목", required = true)
    private String questionTitle;

    @Column(name = "question_content")
    @ApiModelProperty(value = "질문 내용", required = true)
    private String questionContent;

    @Column(name = "question_reg_dt")
    @CreationTimestamp
    @ApiModelProperty(value = "질문 생성 시간")
    LocalDateTime questionRegDt;

    // QNA 답변 테이블과 매핑
    @OneToOne(mappedBy = "questionId")
    private QnaAnswer qnaAnswer;

    // 회원 테이블과 매핑
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
