package com.him.groomhim.type.entity;

import com.him.groomhim.product.entity.Product_Purpose;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "PURPOSE_TYPE")
@Setter
@Getter
@NoArgsConstructor
public class PurposeType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PURPOSE_NO")
    private Long purposeNo;

    @Column(name = "PURPOSE_NAME")
    private String purposeName;

    @OneToMany(mappedBy = "purpose", cascade = CascadeType.ALL)
    private List<Product_Purpose> productPurposeList;
}
