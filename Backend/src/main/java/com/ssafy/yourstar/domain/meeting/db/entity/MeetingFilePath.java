package com.ssafy.yourstar.domain.meeting.db.entity;

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
@Table(name = "meeting_file_path")
@ApiModel(value = "팬미팅 녹화 및 스크린샷(추억보관함)")
public class MeetingFilePath {
    @ApiModelProperty(value = "파일 구분 번호")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_id")
    private int fileId;

    @ApiModelProperty(value = "회원 번호", required = true)
    @Column(name = "member_id")
    private int memberId;

    @ApiModelProperty(value = "팬미팅 구분 번호", required = true)
    @Column(name = "meeting_id")
    private int meetingId;

    @ApiModelProperty(value = "파일명", required = true)
    @Column(name = "file_name")
    private String fileName;

    @ApiModelProperty(value = "파일 크기", required = true)
    @Column(name = "file_size")
    private Long fileSize;

    @ApiModelProperty(value = "파일 확장자명", required = true)
    @Column(name = "file_content_type")
    private String fileContentType;

    @ApiModelProperty(value = "파일이 저장된 주소", required = true)
    @Column(name = "file_url")
    private String fileUrl;

    @ApiModelProperty(value = "파일 등록 시간")
    @CreationTimestamp
    @Column(name = "file_reg_dt")
    private LocalDateTime fileRegDt = LocalDateTime.now();

    @ApiModelProperty(value = "openvidu record id")
    @Column(name = "record_id")
    private String recordId;
}
