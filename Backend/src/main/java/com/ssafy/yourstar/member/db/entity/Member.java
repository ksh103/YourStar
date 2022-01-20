package com.ssafy.yourstar.member.db.entity;

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
    int memberId;

    @Column(name = "member_email")
    String memberEmail;

    @Column(name = "code")
    int code;

    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "member_pw")
    String memberPassword;

    @Column(name = "member_name")
    String memberName;

    @Column(name = "member_nick")
    String memberNick;

    @Column(name = "member_phonenum")
    String memberPhone;

    @Column(name = "member_address")
    String memberAddress;

    @Column(name = "member_birth")
    Date memberBirth;

    @Column(name = "member_gender")
    String memberGender;

    @Column(name = "is_Login")
    Boolean isLogin;

    @Column(name = "manager_code")
    int managerCode;
}
