package com.him.groomhim.member.entity;

import com.him.groomhim.type.entity.SkinType;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_NO", nullable = false)
    private Long memberNo;

    @Column(name = "MEMBER_ID", length = 50, nullable = false, unique = true)
    private String memberId;

    @Column(name = "MEMBER_PWD", length = 50)
    private String memberPwd;

    @Column(name = "MEMBER_EMAIL", length = 100, nullable = false, unique = true)
    private String memberEmail;

    @Column(name = "MEMBER_NAME", length = 50, nullable = false)
    private String memberName;

    @Column(name = "MEMBER_PHONE", length = 50)
    private String memberPhone;

    @Column(name = "MEMBER_NICKNAME", length = 50, nullable = false, unique = true)
    private String memberNickname;

    @Column(name = "MEMBER_GENDER", length = 10)
    private String memberGender;

    @Column(name = "MEMBER_ADDRESS", length = 100)
    private String memberAddress;

    @Column(name = "MEMBER_BIRTH")
    private Date memberBirth;

    @Column(name = "MEMBER_PROFILE", length = 500)
    private String memberProfile;

    @OneToOne
    @JoinColumn(name = "SKIN_ID")
    private SkinType skinType;

    //회원가입용 생성자
    public Member(String memberId, String memberPwd, String memberEmail,
                  String memberName,String memberPhone, String memberNickname,
                  String memberGender, String memberAddress, Date memberBirth){
        this.memberId = memberId;
        this.memberPwd = memberPwd;
        this.memberEmail = memberEmail;
        this.memberName = memberName;
        this.memberPhone = memberPhone;
        this.memberNickname = memberNickname;
        this.memberGender = memberGender;
        this.memberAddress = memberAddress;
        this.memberBirth = memberBirth;
    }
}