package com.him.groomhim.question.repository;

import com.him.groomhim.question.entity.Question;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long>{



    Question findByQuestionNo(Long questionNo);

    void deleteByQuestionNo(Long questionNo);

    Page<Question> findByQuestionTitleContaining(String keyword, Pageable pageable);

    @Query("SELECT q FROM Question q " +
            "LEFT JOIN QuestionHashTag qTag ON q.questionNo = qTag.question.questionNo " +
            "WHERE qTag.hashTag.hashTagNo IN (SELECT tag.hashTagNo FROM HashTag tag WHERE tag.hashTagName IN :tagNames)")
    Page<Question> findByQuestionTagContaining(@Param("tagNames") List<String> tagNames, Pageable pageable);

    @Query("SELECT q FROM Question q " +
            "LEFT JOIN QuestionHashTag qTag ON q.questionNo = qTag.question.questionNo " +
            "WHERE qTag.hashTag.hashTagNo IN (SELECT tag.hashTagNo FROM HashTag tag WHERE tag.hashTagName IN :tagNames) " +
            "AND q.questionTitle LIKE %:keyword%")
    Page<Question> findByQuestionTagAndTitleContaining(@Param("tagNames") List<String> tagNames,@Param("keyword") String keyword, Pageable pageable);
}
