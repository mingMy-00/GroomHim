package com.him.groomhim.member.controller;



import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.service.KakaoLoginService;
import com.him.groomhim.member.service.MemberService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class KakaoLoginController {

    private final KakaoLoginService kakaoLoginService;

    @RequestMapping(value="kakao-login", method=RequestMethod.GET)
    public Member kakaoLogin(@RequestParam(value = "code", required = false) String code){
        System.out.println("code = " + code);
        String access_Token = kakaoLoginService.getAccessToken(code);
        return kakaoLoginService.getUserInfo(access_Token);
    }
}