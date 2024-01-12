package com.him.groomhim.product.repository;

import com.him.groomhim.product.entity.Product;
import com.him.groomhim.product.entity.Product_Beauty;
import com.him.groomhim.type.entity.BeautyType;
import com.him.groomhim.type.entity.PurposeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Product_BeautyRepository extends JpaRepository<Product_Beauty, Long> {

    @Query("SELECT DISTINCT p FROM Product p "+
            "LEFT JOIN Product_Beauty beauty on p.productNo = beauty.product.productNo "+
            "LEFT JOIN Product_Purpose purpose ON p.productNo = purpose.product.productNo "+
            "WHERE beauty.beautyType = :beautyType AND purpose.purpose = :purposeType")
    List<Product> recommendProduct(@Param("purposeType") PurposeType purposeType, @Param("beautyType") BeautyType beautyType);




}


