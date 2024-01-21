package com.him.groomhim.question.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;


@Getter
@NoArgsConstructor
public class QuestionPageResponse {

    private List<QuestionResponse> questions;
    private int totalPage;

    @Builder
    public QuestionPageResponse(List<QuestionResponse> questions, int totalPage){
        this.questions = questions;
        this.totalPage = totalPage;
    }
}
