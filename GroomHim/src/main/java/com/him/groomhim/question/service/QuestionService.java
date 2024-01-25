package com.him.groomhim.question.service;

import com.him.groomhim.question.dto.*;
import com.him.groomhim.question.entity.Comment;
import com.him.groomhim.question.entity.Question;
import com.him.groomhim.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
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
@Slf4j
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
    public QuestionPageResponse selectAllQuestion(int page, Pageable pageable){
        pageable = PageRequest.of(page, 10, Sort.Direction.DESC, "enrollDate"); // 페이징 정보
        Page<Question> questionPage = questionRepository.findAll(pageable); // 모든 회원 조회
        List<Question> questionList = questionPage.getContent(); //

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
                    .writer(question.getWriter())
                    .commentCount(question.commentCount(question.getCommentList()))
                    .build();
            questionResponseList.add(questionResponse);
        }
        return QuestionPageResponse.builder().questions(questionResponseList).totalPage(questionPage.getTotalPages()).build();
    }

    public QuestionPageResponse searchQuestion(QuestionSearchRequest questionSearchRequest, Pageable pageable){
        log.info("questionSearchRequest={}",questionSearchRequest);
        log.info("keyword = {}",questionSearchRequest.getKeyword());
        log.info("tag size = {}",questionSearchRequest.getTagNames().size());

        pageable = PageRequest.of(0, 10, Sort.Direction.DESC, questionSearchRequest.getCondition()); // 페이징 정보
        Page<Question> questionPage;

        if(!questionSearchRequest.getKeyword().equals("") && questionSearchRequest.getTagNames().size() != 0){ // 제목과 태그로 검색
            log.info("제목과 태그로 검색");
            questionPage = questionRepository.findByQuestionTagAndTitleContaining(questionSearchRequest.getTagNames(),questionSearchRequest.getKeyword(),pageable);
        } else if (questionSearchRequest.getKeyword().equals("") && questionSearchRequest.getTagNames().size() != 0) { // 태그만 검색
            log.info("태그만 검색");
            questionPage = questionRepository.findByQuestionTagContaining(questionSearchRequest.getTagNames(),pageable);
        }else { // 제목만 검색
            log.info("제목만 검색");
            questionPage = questionRepository.findByQuestionTitleContaining(questionSearchRequest.getKeyword(),pageable);
        }
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
                    .writer(question.getWriter())
                    .commentCount(question.commentCount(question.getCommentList()))
                    .build();
            questionResponseList.add(questionResponse);
        }
        return QuestionPageResponse.builder().questions(questionResponseList).totalPage(questionPage.getTotalPages()).build();

    }

    @Transactional
    public QuestionCommentResponse selectQuestion(Long questionNo){
        Question findQuestion = questionRepository.findByQuestionNo(questionNo);
        findQuestion.setViewCount(findQuestion.getViewCount()+1); // 조회수 업데이트
        List<Comment> commentList = findQuestion.getCommentList();


        QuestionResponse questionResponse = QuestionResponse.builder()
                .questionNo(findQuestion.getQuestionNo())
                .questionTitle(findQuestion.getQuestionTitle())
                .questionContent(findQuestion.getQuestionContent())
                .viewCount(findQuestion.getViewCount())
                .enrollDate(findQuestion.getEnrollDate())
                .tagList(findQuestion.getTagList())
                .writer(findQuestion.getWriter())
                .memberNo(findQuestion.getMember().getMemberNo())
                .build();

        List<CommentResponse> comments = commentList.stream()
                .map(comment -> {
                    return CommentResponse.builder()
                            .commentNo(comment.getCommentNo())
                            .commentContent(comment.getCommentContent())
                            .writer(comment.getMember().getMemberName())
                            .memberNo(comment.getMember().getMemberNo())
                            .enrollDate(comment.getEnrollDate())
                            .build();
                }).collect(Collectors.toList());

        return QuestionCommentResponse.builder().questionResponse(questionResponse).comments(comments).build();
    }

    @Transactional
    public Long updateQuestion(QuestionUpdateRequest questionUpdateRequest){
        Question findQuestion = questionRepository.findByQuestionNo(questionUpdateRequest.getQuestionNo()); // 1. 게시글 번호로 게시글 조회
        questionHashTagService.deleteAllByQuestion(findQuestion); // 2. 조회해온 게시글의 QuestionHashTag 모두 삭제
        questionHashTagService.saveHashTags(findQuestion, questionUpdateRequest.getQuestionTags()); // 3. 새로운 hashtag를 생성하거나 조회해서 다시 QuestionHashTag 생성
        findQuestion.setQuestionTitle(questionUpdateRequest.getQuestionTitle()); // 4. 게시글의 제목 업데이트
        findQuestion.setQuestionContent(questionUpdateRequest.getQuestionContent()); // 5. 게시글의 내용 업데이트
        return findQuestion.getQuestionNo();
    }

    @Transactional
    public void deleteQuestion(Long questionNo){
        questionRepository.deleteByQuestionNo(questionNo);
    }

}
