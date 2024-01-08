package com.him.groomhim.member.controller;

import com.him.groomhim.common.dto.MsgResponseDto;
import com.him.groomhim.member.dto.SignUpRequest;
import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/login.me")
    public Member loginMember(@RequestBody final Member param) {
        Member loginMember = memberService.findLoginMember(param);
        System.out.println(loginMember);
        return loginMember;
    }

    @PostMapping("/findId")
    public String findId(@RequestBody Map<String, String> requestData) {
        String memberEmail = requestData.get("memberEmail");
        //System.out.println(email);
        Member m = memberService.findMemberEmail(memberEmail);

        if(m != null) {
            memberService.sendUsernames(memberEmail, m);
            return "성공";
        }
        return "없음";
    }

    @PostMapping(value = "/signUp")
    public MsgResponseDto signUpMember(@RequestBody SignUpRequest signUpRequest){
        return memberService.signUpMember(signUpRequest);
    }
    @GetMapping("/checkDuplicateId")
    public MsgResponseDto checkDuplicateId (@RequestParam("value") String memberId){
        System.out.println("아이디 체크");
        return memberService.checkDuplicateId(memberId);
    }
    @GetMapping("/checkDuplicateNickname")
    public MsgResponseDto checkDuplicateNickname (@RequestParam("value") String memberNickname){
        System.out.println("닉네임 체크");
        return memberService.checkDuplicateNickname(memberNickname);
    }
    @GetMapping("/checkDuplicateEmail")
    public MsgResponseDto checkDuplicateEmail (@RequestParam("value") String memberEmail){
        System.out.println("이메일 체크");
        return memberService.checkDuplicateEmail(memberEmail);
    }

}
