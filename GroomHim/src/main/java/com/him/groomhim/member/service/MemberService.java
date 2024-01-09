package com.him.groomhim.member.service;

import com.him.groomhim.common.dto.MsgResponseDto;
import com.him.groomhim.common.exception.CustomException;
import com.him.groomhim.common.exception.ErrorCode;
import com.him.groomhim.common.exception.SuccessCode;
import com.him.groomhim.member.dto.SignUpRequest;
import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class MemberService {

    @Autowired
    JavaMailSender mailSender;

    private final MemberRepository memberRepository;


    public Member findLoginMember(final Member params) {
        return memberRepository.findByMemberIdAndMemberPwd(params.getMemberId(), params.getMemberPwd());
    }

    public Member findMemberEmail(final String memberEmail) {
        return memberRepository.findByMemberEmail(memberEmail);
    }


    public void sendUsernames(String memberEmail, Member m) {
        //이메일을 보내기 위한 객체
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        //setTo는 보낼 이메일 주소
        simpleMailMessage.setTo(memberEmail);
        //setSubject는 제목
        simpleMailMessage.setSubject("아이디 찾기");

        StringBuffer sb = new StringBuffer();
        //StringBuffer은 문자열을 더해주는 것.
        sb.append("가입하신 아이디는");
        sb.append(System.lineSeparator());
        sb.append(m.getMemberId()).append("입니다.");

        simpleMailMessage.setText(sb.toString());

        new Thread(new Runnable() {
            public void run() {
                mailSender.send(simpleMailMessage);
            }
        }).start();
    }

    public MsgResponseDto signUpMember(SignUpRequest m) {
        System.out.println(m);
        Member member = new Member(
                m.getMemberId(), m.getMemberPwd(), m.getMemberEmail(),
                m.getMemberName(), m.getMemberPhone(), m.getMemberNickname(),
                m.getMemberGender(), m.getMemberAddress(), m.getMemberBirth());
        memberRepository.save(member);
        return new MsgResponseDto(SuccessCode.LOG_IN);
    }

    public MsgResponseDto checkDuplicateId(String userId) {
        boolean duplicateId = memberRepository.existsByMemberId(userId);
        if (duplicateId || userId.isEmpty()) {
            return new MsgResponseDto(new CustomException(ErrorCode.ALREADY_EXIST));
        } else {
            return new MsgResponseDto(SuccessCode.CHECK_DATA);
        }
    }

    public MsgResponseDto checkDuplicateNickname(String memberNickname) {
        boolean duplicateNickname = memberRepository.existsByMemberNickname(memberNickname);
        if (duplicateNickname || memberNickname.isEmpty()) {
            return new MsgResponseDto(new CustomException(ErrorCode.ALREADY_EXIST));
        } else {
            return new MsgResponseDto(SuccessCode.CHECK_DATA);
        }
    }

    public MsgResponseDto checkDuplicateEmail(String memberEmail) {
        boolean duplicateEmail = memberRepository.existsByMemberEmail(memberEmail);
        if (duplicateEmail || memberEmail.isEmpty()) {
            return new MsgResponseDto(new CustomException(ErrorCode.ALREADY_EXIST));
        } else {
            return new MsgResponseDto(SuccessCode.CHECK_DATA);
        }
    }





}
