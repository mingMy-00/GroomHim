//package com.him.groomhim.product.service;
//
//import com.him.groomhim.member.entity.Member;
//import com.him.groomhim.member.repository.MemberRepository;
//import com.him.groomhim.product.entity.Product;
//import com.him.groomhim.type.entity.BeautyType;
//import com.him.groomhim.type.repository.BeautyTypeRepository;
//import jakarta.transaction.Transactional;
//import org.assertj.core.api.Assertions;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.util.Arrays;
//import java.util.List;
//
//import static org.junit.Assert.*;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@Transactional
//public class ProductServiceTest {
//
//    @Autowired
//    ProductService productService;
//    @Autowired
//    BeautyTypeRepository beautyTypeRepository;
//
//
//
//
//    @Test
//    public void 화장품타입_이름(){
//        // given
//        String beautyName = "세럼";
//
//        // when
//        BeautyType beautyType = beautyTypeRepository.findByBeautyName(beautyName);
//
//        // then
//        Assertions.assertThat(beautyType.getBeautyName()).isEqualTo(beautyName);
//    }
//
//}