package com.him.groomhim.question.controller;

import com.him.groomhim.common.dto.MsgResponseDto;
import com.him.groomhim.question.dto.*;
import com.him.groomhim.question.entity.Comment;
import com.him.groomhim.question.service.CommentService;
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
    private final CommentService commentService;


    @PostMapping("/question")
    public Long insertQuestion(@RequestBody QuestionCreateRequest request){
        return questionService.save(request);
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

    @PostMapping("/question/{questionNo}/comment")
    public MsgResponseDto insertComment(@RequestParam(name = "memberNo") Long memberNo, @PathVariable("questionNo") int questionNo,@RequestBody CommentCreateRequest commentCreateRequest){
        return commentService.save(memberNo, questionNo, commentCreateRequest);
    }

}
