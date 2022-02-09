package com.ssafy.yourstar.domain.notice.db.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@ApiModel(value = "Notice", description = "공지사항")
@Table(name = "notice")
public class Notice {
    @ApiModelProperty(value = "공지사항 구분 번호")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notice_id")
    private int noticeId;

    @ApiModelProperty(value = "공지사항 제목", required = true)
    @Column(name = "notice_title")
    private String noticeTitle;

    @ApiModelProperty(value = "공지사항 내용", required = true)
    @Column(name = "notice_content")
    private String noticeContent;

    @ApiModelProperty(value = "공지사항 등록 시간")
    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(name = "notice_reg_dt")
    LocalDateTime noticeRegDt;

}