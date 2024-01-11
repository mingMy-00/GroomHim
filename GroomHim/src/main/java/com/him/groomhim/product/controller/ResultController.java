package com.him.groomhim.product.controller;

import com.him.groomhim.member.service.MemberService;
import com.him.groomhim.product.entity.Product;
import com.him.groomhim.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/result")
@RequiredArgsConstructor
public class ResultController {

    private final MemberService memberService;
    private final ProductService productService;

    @GetMapping("/")
    public void updateSkinType(@RequestParam Long memberNo, @RequestParam Long skinTypeNo){
        memberService.updateSkinType(memberNo, skinTypeNo);
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
    @GetMapping("/resolveRecommend")
    public List<Object[]> recommendProduct(@RequestParam Long memberNo, String beautyName){
        return productService.recommendProduct(memberNo, beautyName);
    }





}
