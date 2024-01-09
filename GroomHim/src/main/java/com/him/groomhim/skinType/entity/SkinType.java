package com.him.groomhim.skinType.entity;

import com.him.groomhim.tag.ProductTag;
import com.him.groomhim.tag.SkinTypeTag;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "SKIN_TYPE")
@Setter
@Getter
@NoArgsConstructor
public class SkinType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SKIN_TYPE_NO",nullable = false)
    private Long SkinTypeNo;

    @Column(name = "SKIN_TYPE_NAME", nullable = false)
    private String SkinTypeName;

    @OneToMany(mappedBy = "skinType") // 조회만 가능, 양방향
    private List<SkinTypeTag> skinTypeTagList; // 해당 스킨타입에 등록된 태그 리스트
}
