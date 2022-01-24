package com.ssafy.yourstar.domain.member.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "member")
public class Member {

    @Id
    @Column(name = "member_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int memberId;

    @Column(name = "code")
    private int code;

    @Column(name = "manager_code")
    private int managerCode;

    @Column(name = "member_email")
    private String memberEmail;

    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "member_pw")
    private String memberPassword;

    @Column(name = "member_name")
    private String memberName;

    @Column(name = "member_nick")
    private String memberNick;

    @Column(name = "member_phonenum")
    private String memberPhone;

    @Column(name = "member_address")
    private String memberAddress;

    @Column(name = "member_birth")
    private Date memberBirth;

    @Column(name = "member_gender")
    private String memberGender;

    @Column(name = "is_approve")
    private Boolean isApprove;

    @Column(name = "is_login")
    private Boolean isLogin;
}
