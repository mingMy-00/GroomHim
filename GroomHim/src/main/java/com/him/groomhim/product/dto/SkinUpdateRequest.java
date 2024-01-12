package com.him.groomhim.product.dto;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class SkinUpdateRequest {
    private Long memberNo;
    private String skinType;
}
