package com.him.groomhim.product.entity;

import com.him.groomhim.type.entity.PurposeType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "PRODUCT_PURPOSE")
@Setter
@Getter
@NoArgsConstructor
public class Product_Purpose {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_PURPOSE_NO")
    private Long productPurposeNo;

    @ManyToOne
    @JoinColumn(name = "PRODUCT_NO")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "PURPOSE_NO")
    private PurposeType purpose;

}
