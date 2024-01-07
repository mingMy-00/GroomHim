package com.him.groomhim.member.service;

import com.him.groomhim.common.dto.MsgResponseDto;
import com.him.groomhim.common.exception.CustomException;
import com.him.groomhim.common.exception.ErrorCode;
import com.him.groomhim.common.exception.SuccessCode;
import com.him.groomhim.member.dto.SignUpRequest;
import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public Member findLoginMember(final Member params) {
        return memberRepository.findByMemberIdAndMemberPwd(params.getMemberId(), params.getMemberPwd());
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
