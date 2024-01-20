package com.him.groomhim.notice.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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
    private String enrollDate;

    public Notice(String noticeTitle, String noticeContent) {
        this.noticeTitle = noticeTitle;
        this.noticeContent = noticeContent;
    }

    @PrePersist
    protected void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        enrollDate = now.format(formatter);
    }

    @PreUpdate
    protected void onUpdate() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        enrollDate = now.format(formatter);
    }

    public Notice(String noticeTitle, String noticeContent, String originName, String changeName) {
        this.noticeTitle = noticeTitle;
        this.noticeContent = noticeContent;
        this.originName = originName;
        this.changeName = changeName;
    }
}
