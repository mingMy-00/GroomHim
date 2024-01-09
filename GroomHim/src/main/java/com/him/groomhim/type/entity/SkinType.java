package com.him.groomhim.type.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@Entity
@Table(name = "SKIN_TYPE")
@Setter
@Getter
@NoArgsConstructor
public class SkinType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SKIN_NO")
    private Long skinNo;

    @Column(name="SKIN_NAME")
    private String skinName;

    @OneToMany(mappedBy = "skinType")
    private ArrayList<SkinBeauty> skinBeautyArrayList;


}
