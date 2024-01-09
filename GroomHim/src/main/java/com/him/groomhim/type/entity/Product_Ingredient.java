package com.him.groomhim.type.entity;

import com.him.groomhim.product.entity.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "PRODUCT_INGREDIENT")
@Setter
@Getter
@NoArgsConstructor
public class Product_Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_INGREDIENT_NO")
    private Long productIngredientNo;

    @ManyToOne
    @JoinColumn(name = "PRODUCT_NO")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "INGREDIENT_NO")
    private IngredientType ingredient;

}
