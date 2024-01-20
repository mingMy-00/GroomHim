package com.him.groomhim.question.repository;

import com.him.groomhim.question.entity.HashTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HashTagRepository extends JpaRepository<HashTag, Long> {
    HashTag findByHashTagName(String tagName);
}
