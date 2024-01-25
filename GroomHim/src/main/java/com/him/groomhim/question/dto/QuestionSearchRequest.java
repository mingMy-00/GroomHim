package com.him.groomhim.question.dto;

import com.him.groomhim.question.entity.Question;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Getter
@NoArgsConstructor
@ToString
public class QuestionSearchRequest {

    private String keyword;

    private List<String> tagNames;

    private String condition;

    @Builder
    public QuestionSearchRequest(String keyword, List<String> tagNames, String condition) {
        this.keyword = keyword;
        this.tagNames = tagNames;
        this.condition = condition;
    }
}
