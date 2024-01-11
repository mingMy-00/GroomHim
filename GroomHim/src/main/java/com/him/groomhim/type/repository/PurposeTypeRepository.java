package com.him.groomhim.type.repository;

import com.him.groomhim.type.entity.PurposeType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurposeTypeRepository extends JpaRepository<PurposeType, Long> {
    PurposeType findByPurposeName(String purposeName);
}
