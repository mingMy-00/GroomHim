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
    public Long insertQuestion(@RequestBody QuestionCreateRequest questionCreateRequest){
        log.info("request = {}",questionCreateRequest);
        return questionService.save(questionCreateRequest);
    }

    @GetMapping("/question")
    public QuestionPageResponse selectAllQuestion(@RequestParam(value = "pageNo") int pageNo, Pageable pageable){
        QuestionPageResponse questionPageResponse = questionService.selectAllQuestion(pageNo-1, pageable);
        return questionPageResponse;
    }

    @GetMapping("/question/{questionNo}")
    public QuestionCommentResponse selectQuestion(@PathVariable("questionNo") Long questionNo){
        QuestionCommentResponse questionCommentResponse = questionService.selectQuestion(questionNo);
        return questionCommentResponse;
    }

    @PatchMapping("/question")
    public Long updateQuestion(@RequestBody QuestionUpdateRequest questionUpdateRequest){
        return questionService.updateQuestion(questionUpdateRequest);
    }

    @DeleteMapping("/question/{questionNo}")
    public void deleteQuestion(@PathVariable("questionNo") Long questionNo){
        questionService.deleteQuestion(questionNo);
    }

    @PostMapping("/question/{questionNo}/comment")
    public MsgResponseDto insertComment(@PathVariable("questionNo") Long questionNo, @RequestBody CommentCreateRequest commentCreateRequest){
        log.info("commentCreateRequest={}",commentCreateRequest);
        return commentService.save(questionNo, commentCreateRequest);
    }

    @DeleteMapping("/question/comment/{commentNo}")
    public void deleteComment(@PathVariable("commentNo") Long commentNo){
        commentService.deleteComment(commentNo);
    }

    @PatchMapping("/question/comment/{commentNo}")
    public void updateComment(@PathVariable("commentNo") Long commentNo, @RequestParam(name = "commentContent") String commentContent){
        commentService.updateComment(commentNo,commentContent);
    }

    @PostMapping(value = "/question/search")
    public QuestionPageResponse searchQuestion (@RequestBody QuestionSearchRequest questionSearchRequest, Pageable pageable){
        return questionService.searchQuestion(questionSearchRequest, pageable);
    }
}
