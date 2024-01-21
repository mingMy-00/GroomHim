package com.him.groomhim.question.dto;

import com.him.groomhim.question.entity.Comment;
import com.him.groomhim.question.entity.Question;
import com.him.groomhim.question.entity.QuestionHashTag;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;


@Getter
@NoArgsConstructor
public class QuestionResponse {

    private Long questionNo;
    private String questionTitle;
    private String questionContent;
    private int viewCount;
    private String writer;
    private String enrollDate;
    private List<String> tagNames = new ArrayList<>();



    @Builder
    public QuestionResponse(Long questionNo, String questionTitle, String questionContent, int viewCount, String writer, LocalDateTime enrollDate, List<QuestionHashTag> tagList){
        this.questionNo = questionNo;
        this.questionTitle = questionTitle;
        this.questionContent = questionContent;
        this.viewCount = viewCount;
        this.writer = writer;
        this.enrollDate = enrollDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        for(QuestionHashTag questionHashTag : tagList){
            this.tagNames.add(questionHashTag.getHashTag().getHashTagName());
        }


    }

}
