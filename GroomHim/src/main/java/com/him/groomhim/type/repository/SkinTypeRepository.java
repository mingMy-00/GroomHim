package com.him.groomhim.type.repository;

import com.him.groomhim.type.entity.SkinType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkinTypeRepository extends JpaRepository<SkinType, Long> {
    SkinType findBySkinNo(Long skinNo);
    SkinType findBySkinName(String skinTypeName);

}
