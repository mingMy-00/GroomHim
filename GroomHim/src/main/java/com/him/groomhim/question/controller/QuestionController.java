package com.him.groomhim.question.controller;

import com.him.groomhim.question.dto.QuestionCommentResponse;
import com.him.groomhim.question.dto.QuestionCreateRequest;
import com.him.groomhim.question.dto.QuestionPageResponse;
import com.him.groomhim.question.dto.QuestionResponse;
import com.him.groomhim.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@Slf4j
public class QuestionController {

    private final QuestionService questionService;


    @PostMapping("/question")
    public Long insertQuestion(@RequestBody QuestionCreateRequest request){
        Long questionNo = questionService.save(request);
        return questionNo;
    }

    @GetMapping("/question")
    public QuestionPageResponse selectQuestions(@RequestParam(value = "pageNo") int pageNo, Pageable pageable){
        QuestionPageResponse questionPageResponse = questionService.selectQuestions(pageNo-1, pageable);
        return questionPageResponse;
    }

    @GetMapping("/question/{questionNo}")
    public QuestionCommentResponse selectQuestion(@PathVariable("questionNo") int questionNo){
        QuestionCommentResponse questionCommentResponse = questionService.selectQuestion(questionNo);
        return questionCommentResponse;
    }
}
