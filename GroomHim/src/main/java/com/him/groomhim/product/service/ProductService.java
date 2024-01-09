package com.him.groomhim.product.service;


import com.him.groomhim.product.entity.Product;
import com.him.groomhim.product.repository.ProductTagRepository;
import com.him.groomhim.tag.ProductTag;
import com.him.groomhim.tag.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductTagRepository productTagRepository;

    public void createProductTag(Product product, Tag... tags){ // 상품 태그 등록
        for(Tag tag : tags){
            ProductTag productTag = new ProductTag(product,tag);
            productTagRepository.save(productTag);
        }

    }


}
