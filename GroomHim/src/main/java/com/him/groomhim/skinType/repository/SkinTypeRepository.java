package com.him.groomhim.skinType.repository;

import com.him.groomhim.skinType.entity.SkinType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkinTypeRepository extends JpaRepository<SkinType, Long> {

    SkinType findBySkinTypeName(String skinTypeName);
}

