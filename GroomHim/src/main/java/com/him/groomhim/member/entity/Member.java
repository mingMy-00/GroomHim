package com.him.groomhim.member.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_NO", nullable = false)
    private Long memberNo;

    @Column(name = "MEMBER_ID", length = 50, nullable = false, unique = true)
    private String memberId;

    @Column(name = "MEMBER_PWD", length = 50, nullable = false)
    private String memberPwd;

    @Column(name = "MEMBER_EMAIL", length = 100, nullable = false, unique = true)
    private String memberEmail;

    @Column(name = "MEMBER_NAME", length = 50, nullable = false)
    private String memberName;

    @Column(name = "MEMBER_PHONE", length = 50, nullable = false)
    private String memberPhone;

    @Column(name = "MEMBER_NICKNAME", length = 50, nullable = false, unique = true)
    private String memberNickname;

    @Column(name = "MEMBER_GENDER", length = 10, nullable = false)
    private String memberGender;

    @Column(name = "MEMBER_ADDRESS", length = 100, nullable = false)
    private String memberAddress;

    @Column(name = "MEMBER_BIRTH", nullable = false)
    private Date memberBirth;
    
}