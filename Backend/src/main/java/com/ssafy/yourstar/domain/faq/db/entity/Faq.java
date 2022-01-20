package com.ssafy.yourstar.domain.faq.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "faq")
public class Faq {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "faq_id")
    private int faqId;

    @Column(name = "faq_title")
    private String faqTitle;

    @Column(name = "faq_content")
    private String faqContent;

}
