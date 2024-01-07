package com.him.groomhim.tag;

import com.him.groomhim.member.entity.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "MEMBER_TAG")
public class MemberTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_TAG_NO",nullable = false)
    private Long MemberTagNo;

    @ManyToOne // 양방향
    @JoinColumn(name = "MEMBER_NO") // 연관관계 주인
    private Member member;

    @ManyToOne // 단방향
    @JoinColumn(name = "TAG_NO") // 연관관계 주인
    private Tag tag;

}
