package com.him.groomhim.product.repository;

import com.him.groomhim.product.entity.Product;
import com.him.groomhim.product.entity.Product_Beauty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Product_BeautyRepository extends JpaRepository<Product_Beauty, Long> {

    @Query("SELECT b, p FROM Product_Beauty b LEFT JOIN Product_Purpose p ON b.product = p.product WHERE b.beautyType = :beautyNo AND p.purposeType.purposeNo = :purposeNo")
    List<Object[]> recommendProduct(@Param("purposeNo") Long purposeNo, @Param("beautyNo") Long beautyNo);


}

