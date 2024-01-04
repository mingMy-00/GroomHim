package com.him.groomhim.member.controller;

import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/login.me")
    public Member loginMember(@RequestBody final Member param) {
        Member loginMember = memberService.findLoginMember(param);
        return loginMember;
    }
}
