package com.him.groomhim.question.dto;

import com.him.groomhim.member.entity.Member;
import com.him.groomhim.question.entity.Comment;
import com.him.groomhim.question.entity.Question;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


/**
 * 댓글 작성용 요청 DTO
 */
@Getter
@NoArgsConstructor
public class CommentCreateRequest {


    private String commentContent;

    private Member member;

    private Question question;


    @Builder
    public CommentCreateRequest(Member member, String commentContent, Question question) {
        this.member = member;
        this.commentContent = commentContent;
        this.question = question;
    }

    public Comment toEntity(Question findQuestion){
        return 
        Comment.builder()
                .question(findQuestion)
                .commentContent(commentContent)
                .member(member)
                .build();
    }
}
