package com.him.groomhim.type.repository;

import com.him.groomhim.type.entity.BeautyType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BeautyTypeRepository extends JpaRepository<BeautyType, Long> {
    BeautyType findByBeautyName(String beautyName);
}
