package com.him.groomhim.product.entity;

import com.him.groomhim.type.entity.BeautyType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "PRODUCT_BEAUTY")
@Setter
@Getter
@NoArgsConstructor
public class Product_Beauty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_BEAUTY_NO")
    private Long productBeautyNo;

    @ManyToOne
    @JoinColumn(name = "PRODUCT_NO")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "BEAUTY_NO")
    private BeautyType beautyType;
}
