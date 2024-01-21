package com.him.groomhim.question.controller;

import com.him.groomhim.question.dto.QuestionCreateRequest;
import com.him.groomhim.question.dto.QuestionPageResponse;
import com.him.groomhim.question.dto.QuestionResponse;
import com.him.groomhim.question.entity.Question;
import com.him.groomhim.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class QuestionController {

    private final QuestionService questionService;

    /**
     *
     * @param request 질문 생성 DTO
     * @return 질문 번호를 리턴
     */
    @PostMapping("/question")
    public Long insertQuestion(@RequestBody QuestionCreateRequest request){
        Long questionNo = questionService.save(request);
        return questionNo;
    }

    @GetMapping("page/question")
    public QuestionPageResponse selectQuestion(@RequestParam(value = "pageNo") int pageNo, Pageable pageable){

        System.out.println("page = "+pageNo);
        QuestionPageResponse questionPageResponse = questionService.selectQuestion(pageNo-1, pageable);
        return questionPageResponse;
    }
}
