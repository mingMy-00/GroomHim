package com.him.groomhim.question.controller;

import com.him.groomhim.common.dto.MsgResponseDto;
import com.him.groomhim.question.dto.*;
import com.him.groomhim.question.service.CommentService;
import com.him.groomhim.question.service.QuestionService;
import com.him.groomhim.question.service.QuestionViewService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
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
    private final QuestionViewService questionViewService;


    @PostMapping("/question")
    public Long insertQuestion(@RequestBody QuestionCreateRequest questionCreateRequest){
        log.info("request = {}",questionCreateRequest.getQuestionTags());
        return questionService.save(questionCreateRequest);
    }

    @GetMapping("/question")
    public QuestionPageResponse selectAllQuestion(@RequestParam(value = "pageNo") int pageNo, Pageable pageable){
        QuestionPageResponse questionPageResponse = questionService.selectAllQuestion(pageNo-1, pageable);
        return questionPageResponse;
    }

    @GetMapping("/question/{questionNo}")
    public QuestionCommentResponse selectQuestion(@PathVariable("questionNo") Long questionNo, HttpServletRequest request, HttpServletResponse response) {
        log.debug("Checking if question {} has been viewed.", questionNo);
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                log.info("Cookie found: name={}, value={}", cookie.getName(), cookie.getValue());
            }
        } else {
            log.info("No cookies found in the request.");
        }

        boolean isViewed = questionViewService.isViewed(request, questionNo);
        QuestionCommentResponse questionCommentResponse = questionService.selectQuestion(questionNo, !isViewed);
        if (!isViewed) {
            log.info("Question {} has not been viewed. Marking as viewed.", questionNo);
            questionViewService.markAsViewed(request, response, questionNo);
        }
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
