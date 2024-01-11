package com.him.groomhim.product.service;

import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.repository.MemberRepository;
import jakarta.transaction.Transactional;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class ProductServiceTest {

    @Autowired
    ProductService productService;


    @Test
    public void 상품추천_해결용(){
        // given
        Long memberNo = 1004L;
        String beautyName = "세럼";

        // when
        List<Object[]> result = productService.recommendProduct(memberNo,beautyName);

        // then
        for(Object[] arr : result){
            System.out.println(Arrays.toString(arr));
        }
    }

}