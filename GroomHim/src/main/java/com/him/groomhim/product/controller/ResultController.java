package com.him.groomhim.product.controller;

import com.him.groomhim.member.service.MemberService;
import com.him.groomhim.product.dto.SkinUpdateRequest;
import com.him.groomhim.product.entity.Product;
import com.him.groomhim.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ResultController {

    private final MemberService memberService;
    private final ProductService productService;


    @PostMapping("/result")
    public void updateSkinType(@RequestBody SkinUpdateRequest request){
        Long memberNo = request.getMemberNo();
        String skinType = request.getSkinType();

        log.info("memberNo = {}", memberNo);
        log.info("skinType = {}", skinType);
        memberService.updateSkinType(memberNo, skinType);
    }

    /**
     * 미용목적 화장품 추천 메서드
     * @param purposeList 목적 타입 리스트
     * @param beautyType 화장품 타입
     * @return 미용 목적 화장품 리스트

    @GetMapping("/beautyRecommend")
    public List<Product> recommendProduct(@RequestParam(value = "purposeArr[]") List<String> purposeList, String beautyName){
        return productService.recommendProduct(purposeList, beautyName);
    }
     */

    /**
     *해결 목적 화장품 추천 메서드
     * @param memberNo 회원 번호
     * @param beautyName 화장품 타입
     * @return 해결 목적 화장품 리스트
     */
    @PostMapping("/result/resolveRecommend")
    public List<Product> recommendProduct(@RequestParam Long memberNo,@RequestParam String beautyName){
        return productService.recommendProduct(memberNo, beautyName);
    }





}
