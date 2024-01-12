package com.him.groomhim.product.service;

import com.him.groomhim.common.exception.CustomException;
import com.him.groomhim.common.exception.ErrorCode;
import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.repository.MemberRepository;
import com.him.groomhim.product.entity.Product;
import com.him.groomhim.product.repository.Product_BeautyRepository;
import com.him.groomhim.type.entity.BeautyType;
import com.him.groomhim.type.entity.PurposeType;
import com.him.groomhim.type.repository.BeautyTypeRepository;
import com.him.groomhim.type.repository.PurposeTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final MemberRepository memberRepository;
    private final Product_BeautyRepository product_beautyRepository;
    private final BeautyTypeRepository beautyTypeRepository;
    private final PurposeTypeRepository purposeTypeRepository;

    /*


    public List<Product> recommendProduct(List<String> purposeList, String beautyName){
        BeautyType beautyType = beautyTypeRepository.findByBeautyName(beautyName);
        PurposeType purposeType = purposeTypeRepository.
    }
 */
    public List<Product> recommendProduct(Long memberNo, String beautyName){
        BeautyType beautyType = beautyTypeRepository.findByBeautyName(beautyName);
        Member findMember = memberRepository.findByMemberNo(memberNo);
        PurposeType purposeType = purposeTypeRepository.findByPurposeName(findMember.getSkinType().getSkinName());


        if(findMember.getSkinType() != null){
            return product_beautyRepository.recommendProduct(purposeType, beautyType);
        }else{
            throw new CustomException(ErrorCode.SKINTYPE_NOT_FOUND);
        }

    }

}
