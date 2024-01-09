package com.him.groomhim.tag.repository;

import com.him.groomhim.tag.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {

    Tag findByTagName(String tagName);



}
