package com.ssafy.yourstar.domain.meeting.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@IdClass(ApplicantID.class)
@ApiModel(value = "Applicant", description = "팬미팅 신청자 정보")
@Table(name = "applicant")
public class Applicant {
    @ApiModelProperty(value = "팬미팅 구분 번호", example = "7")
    @Id
    @Column(name = "meeting_id")
    private int meetingId;

    @ApiModelProperty(value = "회원 구분 번호", example = "1")
    @Id
    @Column(name = "member_id")
    private int memberId;

    @ApiModelProperty(value = "해당 팬미팅에서 받은 경고 횟수", example = "1")
    @Column(name = "applicant_warn_count")
    private int applicantWarnCount;

    @ApiModelProperty(value = "해당 팬미팅 게임에서 얻은 점수", example = "100")
    @Column(name = "applicant_game_score")
    private int applicantGameScore;

//    @ManyToOne
//    // insertable : 엔티티 저장시 이 필드도 같이 저장한다. false로 설정하면 데이터베이스에 저장하지 않는다. 읽기 전용일때 사용한다.
//    // updatable : 엔티티 수정시 이 필드도 같이 저장한다. false로 설정하면 데이터베이스에 저장하지 않는다. 읽기 전용일때 사용한다.
//    @JoinColumn(name = "meeting_id", insertable = false, updatable = false)
//    private Meeting meeting;

}
