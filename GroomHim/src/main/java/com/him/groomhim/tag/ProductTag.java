package com.him.groomhim.tag;

import com.him.groomhim.product.entity.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "PRODUCT_TAG")
public class ProductTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_TAG_NO",nullable = false)
    private Long productTagNo;

    @ManyToOne // 양방향
    @JoinColumn(name = "PRODUCT_NO") // 연관관계 주인
    private Product product;

    @ManyToOne // 양방향
    @JoinColumn(name = "TAG_NO") // 연관관계 주인
    private Tag tag;

    public ProductTag(Product product, Tag tag){
        this.product = product;
        this.tag = tag;
    }

}
