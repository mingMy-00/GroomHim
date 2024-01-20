package com.him.groomhim.notice.entity;

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
@ToString
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NOTICE_NO", nullable = false)
    private Long noticeNo;

    @Column(name = "NOTICE_TITLE", length = 30, nullable = false)
    private String noticeTitle;

    @Column(name = "NOTICE_CONTENT", length = 1000, nullable = false)
    private String noticeContent;

    @Column(name = "ORIGIN_NAME", length = 1000)
    private String originName;

    @Column(name = "CHANGE_NAME", length = 1000)
    private String changeName;

    @Column(name = "ENROLL_DATE", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime enrollDate;

    @PrePersist
    protected void onCreate() {
        enrollDate = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        enrollDate = LocalDateTime.now(); // 수정 시간 갱신
    }

    public Notice(String noticeTitle, String noticeContent, String originName, String changeName) {
        this.noticeTitle = noticeTitle;
        this.noticeContent = noticeContent;
        this.originName = originName;
        this.changeName = changeName;
        this.enrollDate = LocalDateTime.now(); // 현재 날짜와 시간으로 초기화
    }
}
