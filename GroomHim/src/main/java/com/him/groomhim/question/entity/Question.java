package com.him.groomhim.question.entity;

import com.him.groomhim.member.entity.Member;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Formula;

import java.time.LocalDateTime;
import java.util.*;


@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "QUESTION_NO", nullable = false)
    private Long questionNo;

    @Column(name="QUESTION_TITLE", length = 500,nullable = false)
    private String questionTitle;

    @Column(name="QUESTION_CONTENT", nullable = false)
    private String questionContent;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_NO",nullable = false)
    private Member member;

    private String writer;


    @BatchSize(size = 10)
    @OneToMany(mappedBy = "question" ,cascade=CascadeType.ALL , orphanRemoval = true)
    private Set<QuestionHashTag> questionHashTags = Collections.synchronizedSet(new HashSet<>()) ;

    
    @Column(name="VIEW_COUNT", nullable = false)
    @ColumnDefault("0")
    private int viewCount;

    @Column(name = "ENROLL_DATE", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime enrollDate;

//    @BatchSize(size = 10)
    @OneToMany(mappedBy = "question",cascade=CascadeType.ALL , orphanRemoval = true)
    private List<Comment> comments;

    @Formula("(select count(*) from comment c where c.question_no = QUESTION_NO)")
    private int commentCount;

    @Builder
    public Question(String questionTitle, String questionContent, Member member){
        this.questionTitle = questionTitle;
        this.questionContent = questionContent;
        this.member = member;
        this.writer = member.getMemberNickname();
    }

    @PrePersist // entity가 생성되기전에 실행
    protected void onCreate() {
        enrollDate = LocalDateTime.now();
    }


    public synchronized void addTagList(QuestionHashTag questionHashTag){
        this.questionHashTags.add(questionHashTag);
        questionHashTag.setQuestion(this);
    }

//    public int commentCount(List<Comment> commentList){
//        return commentList.size();
//    }



}
