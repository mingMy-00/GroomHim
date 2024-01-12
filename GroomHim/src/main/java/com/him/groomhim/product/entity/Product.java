package com.him.groomhim.product.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
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

    @Column(name = "PRODUCT_COUNT" , nullable = false, columnDefinition = "integer default 0")
    private int count;

    @OneToMany(mappedBy = "product")
    private List<Product_Beauty> productBeautyList;

    @OneToMany(mappedBy = "product")
    private List<Product_Purpose> productPurposeList;

    @OneToMany(mappedBy = "product")
    private List<Product_Ingredient> productIngredientList;


}

