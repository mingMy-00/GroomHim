package com.him.groomhim.product.entity;

import com.him.groomhim.tag.ProductTag;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_NO",nullable = false)
    private Long productNo;

    @Column(name = "PRODUCT_NAME", nullable = false, length = 200)
    private String productName;

    @Column(name="PRODUCT_PRICE", nullable = false, length = 200)
    private int price;

    @Column(name="PRODUCT_CONTENT", nullable = false, length = 1000)
    private String content;

    @Column(name="PRODUCT_PROFILE", nullable = false, length = 500)
    private String profile;

    @Column(name = "PRODUCT_PURPOSE", nullable = false, length = 50)
    private String purpose;

    @OneToMany(mappedBy = "product") // 조회만 가능, 양방향
    private List<ProductTag> productTagList; // 해당 상품에 등록된 태그 리스트


}

