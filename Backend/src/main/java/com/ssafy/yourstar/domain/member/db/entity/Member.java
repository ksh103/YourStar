package com.ssafy.yourstar.domain.member.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "member")
@ApiModel(value = "Member", description = "회원 정보")
public class Member {

    @ApiModelProperty(value = "회원 번호", example = "1")
    @Id
    @Column(name = "member_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int memberId;

    @ApiModelProperty(value = "회원 구분 번호", example = "1")
    @Column(name = "code")
    private int code;

    @ApiModelProperty(value = "소속사 코드(관계자)", example = "1")
    @Column(name = "manager_code")
    private int managerCode;

    @ApiModelProperty(value = "회원 email", example = "ssafy@ssafy.com")
    @Column(name = "member_email")
    private String memberEmail;

    @ApiModelProperty(value = "회원 비밀번호", example = "ssafy1234")
    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "member_pw")
    private String memberPassword;

    @ApiModelProperty(value = "회원 이름", example = "김싸피")
    @Column(name = "member_name")
    private String memberName;

    @ApiModelProperty(value = "회원 닉네임", example = "핫식스")
    @Column(name = "member_nick")
    private String memberNick;

    @ApiModelProperty(value = "회원 휴대폰 번호", example = "010111223344")
    @Column(name = "member_phonenum")
    private String memberPhone;

    @ApiModelProperty(value = "회원 주소", example = "부산광역시")
    @Column(name = "member_address")
    private String memberAddress;

    @ApiModelProperty(value = "회원 생일", example = "1999-01-01")
    @Column(name = "member_birth")
    private Date memberBirth;

    @ApiModelProperty(value = "회원 성별", example = "여자/남자")
    @Column(name = "member_gender")
    private String memberGender;

    @ApiModelProperty(value = "회원가입 승인 여부", example = "0")
    @Column(name = "is_approve")
    private Boolean isApprove;

    @ApiModelProperty(value = "로그인 여부", example = "0")
    @Column(name = "is_login")
    private Boolean isLogin;
}
