package com.him.groomhim.type.repository;

import com.him.groomhim.type.entity.BeautyType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BeautyTypeRepository extends JpaRepository<BeautyType, Long> {
    @Query("SELECT b FROM BeautyType b WHERE b.beautyName = :beautyName")
    BeautyType findByBeautyName(@Param("beautyName") String beautyName);
}
