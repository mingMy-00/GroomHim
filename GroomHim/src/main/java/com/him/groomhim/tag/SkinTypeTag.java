package com.him.groomhim.tag;


import com.him.groomhim.skinType.entity.SkinType;
import jakarta.persistence.*;

@Entity
@Table(name = "SKIN_TYPE_TAG")
public class SkinTypeTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SKIN_TYPE_TAG_NO",nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "SKIN_TYPE_NO")
    private SkinType skinType;

    @ManyToOne
    @JoinColumn(name = "TAG_NO")
    private Tag tag;


}
