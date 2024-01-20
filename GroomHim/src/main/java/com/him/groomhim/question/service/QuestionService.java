package com.him.groomhim.question.service;

import com.him.groomhim.question.dto.QuestionCreateRequest;
import com.him.groomhim.question.entity.Question;
import com.him.groomhim.question.entity.QuestionHashTag;
import com.him.groomhim.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
