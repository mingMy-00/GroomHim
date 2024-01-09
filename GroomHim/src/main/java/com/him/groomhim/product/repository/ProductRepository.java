package com.him.groomhim.product.repository;

import com.him.groomhim.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {


    List<Product> findByProductTag_Tag_TagName(String tagName)

}
