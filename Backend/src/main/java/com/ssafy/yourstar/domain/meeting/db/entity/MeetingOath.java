package com.ssafy.yourstar.domain.meeting.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@IdClass(MeetingOathID.class)
@ApiModel(value = "MeetingOath", description = "미팅룸 보안서약서 작성 유무")
@Table(name = "meeting_oath")
public class MeetingOath {
    @ApiModelProperty(value = "팬미팅 구분 번호", example = "7")
    @Id
    @Column(name = "meeting_id")
    private int meetingId;

    @ApiModelProperty(value = "회원 구분 번호", example = "1")
    @Id
    @Column(name = "member_id")
    private int memberId;

    @ApiModelProperty(value = "해당 팬미팅 보안서약서 작성 유무", example = "false")
    @Column(name = "is_oath")
    private boolean IsOath;
}
