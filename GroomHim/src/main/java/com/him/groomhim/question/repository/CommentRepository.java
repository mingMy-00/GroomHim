package com.him.groomhim.question.repository;

import com.him.groomhim.question.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    void deleteByCommentNo(Long commentNo);

    Comment findByCommentNo(Long commentNo);
}
