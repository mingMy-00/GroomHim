package com.him.groomhim.question.dto;

import com.him.groomhim.question.entity.Question;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Set;


/**
 * 게시글 작성용 요청 DTO
 */
@Getter
@NoArgsConstructor
public class QuestionCreateRequest {
    private String questionTitle;
    private String questionContent;
    private Set<String> questionTags;
    private Long memberId;

    @Builder
    public QuestionCreateRequest(String questionTitle, String questionContent, Long memberId){
        this.questionTitle = questionTitle;
        this.questionContent = questionContent;
        this.memberId = memberId;
    }

    public Question toEntity(){
        return Question.builder()
                .questionTitle(questionTitle)
                .questionContent(questionTitle)
                .build();
    }
}
