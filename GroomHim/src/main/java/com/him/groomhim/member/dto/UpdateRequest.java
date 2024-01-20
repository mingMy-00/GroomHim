package com.him.groomhim.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UpdateRequest {
    private Long memberNo;
    private String memberPassword;
    private String memberNickname;
    private String memberGender;
    private Date memberBirth;
    private String memberPhone;
    private String updateType;
}
