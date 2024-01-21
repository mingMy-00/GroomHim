package com.him.groomhim.question.entity;

import com.him.groomhim.member.entity.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="COMMENT_NO", nullable = false)
    private Long commentNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_NO")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "QUESTION_NO")
    private Question question;

    @Column(name = "ENROLL_DATE", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime enrollDate;


    @Column(name = "COMMENT_CONTENT", nullable = false)
    private String commentContent;


    @PrePersist // entity가 생성되기전에 실행
    protected void onCreate() {
        enrollDate = LocalDateTime.now();
    }


}
