package com.him.groomhim.member.controller;

import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/login.me")
    public Member loginMember(@RequestBody final Member param) {
        //System.out.println("로그인회원" + loginMember.getMemberId());
        Member loginMember = memberService.findLoginMember(param);
        //System.out.println(loginMember.getMemberBirth());
        //System.out.println(loginMember.getMemberName());
        return loginMember;
    }
}
