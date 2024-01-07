package com.him.groomhim.tag;

import com.him.groomhim.member.entity.SkinType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "SKIN_TYPE_TAG")
public class SkinTypeTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne// 양방향
    @JoinColumn(name = "SKIN_TYPE_NO") // 연관관계 주인
    private SkinType skinType;

    @ManyToOne // 단방향
    @JoinColumn(name = "TAG_NO") // 연관관계 주인
    private Tag tag;

}
