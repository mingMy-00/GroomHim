package com.him.groomhim.type.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "SKIN_BEAUTY")
@Setter
@Getter
@NoArgsConstructor
public class SkinBeauty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SKIN_BEAUTY_NO")
    private Long skinBeautyNo;

    @ManyToOne
    @JoinColumn(name = "SKIN_NO")
    private SkinType skinType;

    @ManyToOne
    @JoinColumn(name = "BEAUTY_NO")
    private BeautyType beautyType;
}
