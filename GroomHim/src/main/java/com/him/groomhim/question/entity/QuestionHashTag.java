package com.him.groomhim.question.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.BatchSize;

@Entity
@Getter
@Setter
@NoArgsConstructor
@BatchSize(size=100)
public class QuestionHashTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "QUESTION_HASHTAG_NO")
    private Long QuestionHashTagNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_no")
    private Question question;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hashtag_no")
    private HashTag hashTag;


    @Builder
    public QuestionHashTag(Question question, HashTag hashTag){
        this.question = question;
        this.hashTag = hashTag;
    }

}
