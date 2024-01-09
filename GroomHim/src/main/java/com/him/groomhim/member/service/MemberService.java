package com.him.groomhim.member.service;

import com.him.groomhim.common.dto.MsgResponseDto;
import com.him.groomhim.common.exception.CustomException;
import com.him.groomhim.common.exception.ErrorCode;
import com.him.groomhim.common.exception.SuccessCode;
import com.him.groomhim.member.dto.SignUpRequest;
import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.repository.MemberRepository;
import com.him.groomhim.product.entity.Product;
import com.him.groomhim.product.repository.ProductTagRepository;
import com.him.groomhim.skinType.entity.SkinType;
import com.him.groomhim.skinType.repository.SkinTypeRepository;
import com.him.groomhim.tag.ProductTag;
import com.him.groomhim.tag.Tag;
import com.him.groomhim.tag.repository.TagRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

    @Autowired
    JavaMailSender mailSender;

    private final MemberRepository memberRepository;
    private final ProductTagRepository productTagRepository;
    private final TagRepository tagRepository;
    private final SkinTypeRepository skinTypeRepository;

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

    @Transactional
    public ArrayList<Product> skinTest(Member member, String skinTypeName, String[] tagNames){

        // 0. 객체 가져오기
        SkinType skinType = skinTypeRepository.findBySkinTypeName(skinTypeName);

        ArrayList<Long> tagNoList = new ArrayList<>();

        for(String tagName : tagNames){
            tagNoList.add(tagRepository.findByTagName(tagName).getTagNo());
        }

        // 1. 회원 피부타입 update (member, skinType)
        member.setSkinTypeNo(skinType.getSkinTypeNo());

        // 2. 회원 태그를 기반으로 상품 select (tagNo)
        // ArrayList<ProductTag> productTags = productTagRepository.recommendProduct(tagNoList);




    }


}
