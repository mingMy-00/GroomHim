package com.him.groomhim.question.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.BatchSize;

import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class HashTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "HASHTAG_NO", nullable = false)
    private Long hashTagNo;

    @Column(name = "HASHTAG_NAME", length = 20, nullable = false)
    private String hashTagName;

    @OneToMany(mappedBy = "hashTag" ,cascade=CascadeType.ALL , orphanRemoval = true)
    private List<QuestionHashTag> questions;

    @Builder
    public HashTag(String hashTagName){
        this.hashTagName = hashTagName;
    }
}
