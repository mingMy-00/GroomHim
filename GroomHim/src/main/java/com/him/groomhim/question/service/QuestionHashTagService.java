package com.him.groomhim.question.service;

import com.him.groomhim.question.entity.HashTag;
import com.him.groomhim.question.entity.Question;
import com.him.groomhim.question.entity.QuestionHashTag;
import com.him.groomhim.question.repository.QuestionHashTagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class QuestionHashTagService {

    private final HashTagService hashTagService;
    private final QuestionHashTagRepository questionHashTagRepository;

    @Transactional
    public void saveHashTags(Question question, Set<String> hashTags){
        Set<QuestionHashTag> questionHashTags = mapToQuestionHashTags(question, hashTags);
        for(QuestionHashTag t : questionHashTags ){
            question.addTagList(t); //Set을 list에 하나씩 넣어줌
        }
    }

    @Transactional
    private Set<QuestionHashTag> mapToQuestionHashTags(Question question, Set<String> hashTags){
        Set<QuestionHashTag> questionHashTags = hashTags.stream() //
                .map(tagName -> {
                    HashTag hashTag = hashTagService.findOrCreateHashTag(tagName); // 1. hashTag를 DB에서 찾아 없으면 생성해서 가져온다.
                    return findOrCreateQuestionHashTags(question, hashTag); // 2. 찾아온 hashTag와 question으로 해당하는 QuestionHashTag를 찾아온다.
                })
                .collect(Collectors.toSet()); //3. stream을 Set으로 변경
        return questionHashTags;
    }

    @Transactional
    private QuestionHashTag findOrCreateQuestionHashTags(Question question, HashTag hashTag){

        // 값이 null 일수있는 값에 Optional 감싸줌 만약 결과가 null이라면 빈 Optional을 반환
        Optional<QuestionHashTag> existingQuestionHashTag = Optional.ofNullable(questionHashTagRepository.findByQuestionAndHashTag(question, hashTag));
        
        // QuestionHashTag가 있다면 DB에서 가져와 반환 
        return existingQuestionHashTag.orElseGet(() -> {
            // 결과가 null이거나 비어있다면 즉, DB에 해당하는 QuestionHashTag가 없다면 생성.
            QuestionHashTag newQuestionHashTag = QuestionHashTag.builder().question(question).hashTag(hashTag).build();
            return questionHashTagRepository.save(newQuestionHashTag);
        });
    }

    @Transactional
    public void deleteAllByQuestion(Question question){
        questionHashTagRepository.deleteAllByQuestion(question);
    }










}
