package com.him.groomhim.product.repository;


import com.him.groomhim.product.entity.Product;
import com.him.groomhim.tag.ProductTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.Collection;

public interface ProductTagRepository extends JpaRepository<ProductTag, Long> {

    /*
    select pTag from ProductTag pTag where pTag.tagNo = tagNo and 

     */

    String jpal = "select pTag from ProductTag pTag";
    String whereSql = "where";
    String s = "pTag.tagNo = :tagNo";


    @Query("SELECT pTag FROM PRODUCT_TAG pTag where pTag.tagNo in :tagNos")
    ArrayList<ProductTag> recommendProduct(@Param("tagNos")Collection<Long> tagNos);
}