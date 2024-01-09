package com.him.groomhim.type.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

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

    @OneToMany(mappedBy = "beautyType")
    private ArrayList<SkinBeauty> skinBeautyList;

    @OneToMany(mappedBy = "beautyType")
    private ArrayList<Product_Beauty> productBeautyList;



}
