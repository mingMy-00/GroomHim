package com.him.groomhim.question.controller;

import com.him.groomhim.question.dto.QuestionCreateRequest;
import com.him.groomhim.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;

    /**
     *
     * @param request 질문 생성 DTO
     * @return 질문 번호를 리턴
     */
    @PostMapping("/insertQuestion")
    public Long insertQuestion(@RequestBody QuestionCreateRequest request){
        Long questionNo = questionService.save(request);
        return questionNo;
    }
}
