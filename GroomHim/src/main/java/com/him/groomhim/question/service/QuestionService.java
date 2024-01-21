package com.him.groomhim.question.service;

import com.him.groomhim.question.dto.*;
import com.him.groomhim.question.entity.Comment;
import com.him.groomhim.question.entity.Question;
import com.him.groomhim.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final QuestionHashTagService questionHashTagService;

    /**
     *
     * @param request 질문 생성 DTO
     * @return 
     */
    @Transactional
    public Long save(QuestionCreateRequest request){
        Question savedQuestion = questionRepository.save(request.toEntity()); // 질문 저장 (DTO -> Entity)
        questionHashTagService.saveHashTags(savedQuestion,request.getQuestionTags()); // 태그 저장
        return savedQuestion.getQuestionNo();
    }

    @Transactional
    public QuestionPageResponse selectQuestions(int page, Pageable pageable){
        pageable = PageRequest.of(page, 10, Sort.Direction.DESC, "enrollDate");
        Page<Question> questionPage = questionRepository.findAll(pageable);
        List<Question> questionList = questionPage.getContent();

        List<QuestionResponse> questionResponseList = new ArrayList<>();

        // Entity => DTO
        for(Question question : questionList){
            QuestionResponse questionResponse = QuestionResponse.builder()
                    .questionNo(question.getQuestionNo())
                    .questionTitle(question.getQuestionTitle())
                    .questionContent(question.getQuestionContent())
                    .viewCount(question.getViewCount())
                    .enrollDate(question.getEnrollDate())
                    .tagList(question.getTagList())
                    .build();
            questionResponseList.add(questionResponse);
        }
        return QuestionPageResponse.builder().questions(questionResponseList).totalPage(questionPage.getTotalPages()).build();
    }

    @Transactional
    public QuestionCommentResponse selectQuestion(int questionNo){
        Question findQuestion = questionRepository.findByQuestionNo(questionNo);
        List<Comment> commentList = findQuestion.getCommentList();


        QuestionResponse questionResponse = QuestionResponse.builder()
                .questionNo(findQuestion.getQuestionNo())
                .questionTitle(findQuestion.getQuestionTitle())
                .questionContent(findQuestion.getQuestionContent())
                .viewCount(findQuestion.getViewCount())
                .enrollDate(findQuestion.getEnrollDate())
                .tagList(findQuestion.getTagList())
                .build();

        List<CommentResponse> comments = commentList.stream()
                .map(comment -> {
                    return CommentResponse.builder()
                            .commentNo(comment.getCommentNo())
                            .commentContent(comment.getCommentContent())
                            .writer(comment.getMember().getMemberName())
                            .enrollDate(comment.getEnrollDate())
                            .build();
                }).collect(Collectors.toList());

        return QuestionCommentResponse.builder().questionResponse(questionResponse).comments(comments).build();
    }

}
