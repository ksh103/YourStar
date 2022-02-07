package com.ssafy.yourstar.domain.member.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "manager_group")
@ApiModel(value = "ManagerGroup", description = "관계자 그룹")
public class ManagerGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "manager_code")
    @ApiModelProperty(value = "관계자 소속 코드")
    private int managerCode;

    @Column(name = "manager_code_name")
    @ApiModelProperty(value = "소속 코드명")
    String managerCodeName;

    @Column(name = "manager_account_cnt")
    @ApiModelProperty(value = "발급된 관계자 계정의 개수")
    int managerAccountCnt;

    @Column(name = "manager_star_account_cnt")
    @ApiModelProperty(value = "발급된 스타 계정의 개수")
    int managerStarAccountCnt;

    @OneToMany(mappedBy = "managerGroup", cascade = CascadeType.ALL)
    private List<Member> memberList = new ArrayList<>();
}
