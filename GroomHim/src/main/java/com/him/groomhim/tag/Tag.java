package com.him.groomhim.tag;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TAG_NO",nullable = false)
    private Long tagNo;

    @Column(name = "TAG_NAME", nullable = false, length = 100)
    private String tagName;

    @OneToMany(mappedBy = "tag") // 조회만 가능, 양방향
    private List<ProductTag> productTagList; // 해당 태그를 가진 상품 리스트

}
