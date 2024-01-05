package com.him.groomhim.member.dto;

import lombok.Getter;
import lombok.ToString;

import java.sql.Date;

@Getter
@ToString
public class SignUpRequest {
    private String memberId;
    private String memberPwd;
    private String memberEmail;
    private String memberName;
    private String memberPhone;
    private String memberNickname;
    private String memberGender;
    private String memberAddress;
    private Date memberBirth;
}
