package com.ssafy.yourstar.domain.qna.db.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@ApiModel(value = "QnaQuestion", description = "QNA 질문")
public class QnaQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    @ApiModelProperty(value = "질문 구분 번호")
    private int questionId;

    @Column(name = "member_id")
    @ApiModelProperty(value = "질문 작성자 구분 번호", required = true)
    private int memberId;

    @Column(name = "question_title")
    @ApiModelProperty(value = "질문 제목", required = true)
    private String questionTitle;

    @Column(name = "question_content")
    @ApiModelProperty(value = "질문 내용", required = true)
    private String questionContent;

    @Column(name = "question_reg_dt")
    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @ApiModelProperty(value = "질문 생성 시간")
    LocalDateTime questionRegDt;

    // QNA 답변 테이블과 매핑
    @OneToOne(mappedBy = "questionId", cascade = CascadeType.ALL)
    @JsonManagedReference
    private QnaAnswer qnaAnswer;

    // 회원 테이블과 매핑
    @OneToOne
    @JoinColumn(name = "member_id", updatable = false, insertable = false)
    private Member member;

}
