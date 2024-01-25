package com.him.groomhim.question.repository;

import com.him.groomhim.question.entity.Question;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.query.JpaQueryMethodFactory;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    Question findByQuestionNo(Long questionNo);

    void deleteByQuestionNo(Long questionNo);

    Page<Question> findByQuestionTitleContaining(String keyword, Pageable pageable);
}
