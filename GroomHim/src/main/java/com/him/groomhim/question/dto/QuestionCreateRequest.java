package com.him.groomhim.question.dto;

import com.him.groomhim.member.entity.Member;
import com.him.groomhim.question.entity.Question;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
    private Member member;

    @Builder
    public QuestionCreateRequest(String questionTitle, String questionContent, Member member){
        this.questionTitle = questionTitle;
        this.questionContent = questionContent;
        this.member = member;
    }

    public Question toEntity(){
        return Question.builder()
                .questionTitle(questionTitle)
                .questionContent(questionContent)
                .member(member)
                .build();
    }
}
