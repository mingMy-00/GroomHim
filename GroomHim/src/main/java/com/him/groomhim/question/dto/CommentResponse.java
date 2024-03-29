package com.him.groomhim.question.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@NoArgsConstructor
public class CommentResponse {

    private Long commentNo;

    private String writer;

    private Long memberNo;

    private String commentContent;

    private String enrollDate;

    @Builder
    public CommentResponse(Long commentNo, String writer, String commentContent, LocalDateTime enrollDate, Long memberNo){
        this.commentNo = commentNo;
        this.writer = writer;
        this.memberNo = memberNo;
        this.commentContent = commentContent;
        this.enrollDate = enrollDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:MM"));
    }

}
