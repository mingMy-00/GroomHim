package com.him.groomhim.member.entity;

import com.him.groomhim.tag.SkinTypeTag;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;



@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "SKIN_TYPE")
public class SkinType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SKIN_TYPE_NO",nullable = false)
    private Long skinTypeNo;

    @Column(name="SKIN_TYPE_NAME", nullable = false)
    private String skinTypeName;

    @OneToMany(mappedBy = "skinType") // 조회만 가능, 양방향
    private List<SkinTypeTag> skinTypeTagList; // 해당 스킨타입에 등록된 태그 리스트

}