package com.him.groomhim.question.repository;

import com.him.groomhim.question.entity.HashTag;
import com.him.groomhim.question.entity.Question;
import com.him.groomhim.question.entity.QuestionHashTag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionHashTagRepository extends JpaRepository<QuestionHashTag, Long> {
    QuestionHashTag findByQuestionAndHashTag(Question question, HashTag hashTag);

    QuestionHashTag save(QuestionHashTag questionHashTag);

    void deleteAllByQuestion(Question question);
}
