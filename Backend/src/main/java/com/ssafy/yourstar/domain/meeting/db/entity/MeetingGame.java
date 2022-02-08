package com.ssafy.yourstar.domain.meeting.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "meeting_game")
@ApiModel(value = "MeetingGame", description = "팬미팅 게임")
public class MeetingGame {
    @ApiModelProperty(value = "팬미팅 게임 구분 번호", example = "7")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meeting_game_id")
    private int meetingGameId;

    @ApiModelProperty(value = "팬미팅 구분 번호")
    @Column(name = "meeting_id")
    private int meetingId;

    @ApiModelProperty(value = "회원 구분 번호")
    @Column(name = "member_id")
    private int memberId;

    @ApiModelProperty(value = "팬미팅 게임 종류", required = true, example = "훈민정음")
    @Column(name = "meeting_game_name")
    private String meetingGameName;
}
