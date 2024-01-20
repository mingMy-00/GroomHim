package com.him.groomhim.question.repository;

import com.him.groomhim.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;


public interface QuestionRepository extends JpaRepository<Question, Long> {


}
