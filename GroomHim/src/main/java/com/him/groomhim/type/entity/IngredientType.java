package com.him.groomhim.type.entity;

import com.him.groomhim.product.entity.Product_Ingredient;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "INGREDIENT_TYPE")
@Setter
@Getter
@NoArgsConstructor
public class IngredientType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "INGREDIENT_NO")
    private Long ingredientNo;

    @Column(name="INGREDIENT_NAME")
    private String ingredientName;

    @OneToMany(mappedBy = "ingredient")
    private List<Product_Ingredient> productIngredientList;

}
