package com.him.groomhim.question.service;

import com.him.groomhim.question.entity.HashTag;
import com.him.groomhim.question.repository.HashTagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class HashTagService {

    private final HashTagRepository hashTagRepository;

    @Transactional
    public HashTag findOrCreateHashTag(String tagName){

        Optional<HashTag> existingTag = Optional.ofNullable(hashTagRepository.findByHashTagName(tagName));

        return existingTag.orElseGet(() -> {
            HashTag newHashTag = HashTag.builder().hashTagName(tagName).build();
            return hashTagRepository.save(newHashTag);
        });

    }

}
