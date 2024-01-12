package com.him.groomhim.type.entity;

import com.him.groomhim.product.entity.Product_Beauty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "BEAUTY_TYPE")
@Setter
@Getter
@NoArgsConstructor
public class BeautyType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEAUTY_NO")
    private Long beautyNo;

    @Column(name = "BEAUTY_NAME")
    private String beautyName;

    @OneToMany(mappedBy = "beautyType", cascade = CascadeType.ALL)
    private List<SkinBeauty> skinBeautyList;

    @OneToMany(mappedBy = "beautyType", cascade = CascadeType.ALL)
    private List<Product_Beauty> productBeautyList;

}
