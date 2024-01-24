package com.him.groomhim.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Set;

@Getter
@NoArgsConstructor
public class QuestionUpdateRequest {

    private Long questionNo;

    private String questionTitle;

    private String questionContent;

    private Set<String> questionTags;

}
