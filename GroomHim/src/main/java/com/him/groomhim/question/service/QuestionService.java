package com.him.groomhim.question.service;

import com.him.groomhim.question.dto.QuestionCreateRequest;
import com.him.groomhim.question.dto.QuestionPageResponse;
import com.him.groomhim.question.dto.QuestionResponse;
import com.him.groomhim.question.entity.Question;
import com.him.groomhim.question.entity.QuestionHashTag;
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
    public QuestionPageResponse selectQuestion(int page, Pageable pageable){
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
}
