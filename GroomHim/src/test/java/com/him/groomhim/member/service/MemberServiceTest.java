package com.him.groomhim.member.service;

import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.repository.MemberRepository;
import com.him.groomhim.member.service.MemberService;
import com.him.groomhim.type.entity.SkinType;
import com.him.groomhim.type.repository.SkinTypeRepository;
import jakarta.transaction.Transactional;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class MemberServiceTest {


    @Autowired
    MemberRepository memberRepository;
    @Autowired
    MemberService memberService;
    @Autowired
    SkinTypeRepository skinTypeRepository;


    @Test
    public void 스킨타입_업데이트() throws Exception{
        // given
        SkinType skinType = new SkinType();
        skinType.setSkinName("수부지");
        Member member = memberRepository.findByMemberNo(1004L);
        skinTypeRepository.save(skinType);

        // when
        memberService.updateSkinType(member.getMemberNo(),skinType.getSkinNo());

        // then
        Member findMember = memberRepository.findByMemberNo(member.getMemberNo());
        assertEquals("피부상태가 맞지 않음", member.getSkinType().getSkinName(), "수부지");
    }

}