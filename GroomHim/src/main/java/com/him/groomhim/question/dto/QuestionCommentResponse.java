package com.him.groomhim.question.dto;

import com.him.groomhim.question.entity.Comment;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class QuestionCommentResponse {

    private QuestionResponse questionResponse;

    private List<CommentResponse> comments;

    @Builder
    public QuestionCommentResponse(QuestionResponse questionResponse, List<CommentResponse> comments){
        this.questionResponse = questionResponse;
        this.comments = comments;
    }
}
