package com.ssafy.yourstar.domain.meeting.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@ApiModel(value = "MeetingRecordImgPathPostReq", description = "팬미팅 싸인 저장 정보(Base64 활용)")
public class MeetingRecordImgPathPostReq {
    @ApiModelProperty(value = "팬미팅 구분 번호", required = true)
    @Column(name = "meeting_id")
    private int meetingId;

    @ApiModelProperty(value = "회원 번호", required = true)
    @Column(name = "member_id")
    private int memberId;

    @ApiModelProperty(value = "파일이 저장된 주소", required = true)
    @Column(name = "file_url")
    private String fileUrl;
}
