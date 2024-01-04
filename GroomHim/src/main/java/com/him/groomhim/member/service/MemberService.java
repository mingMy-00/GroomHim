package com.him.groomhim.member.service;
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
}
