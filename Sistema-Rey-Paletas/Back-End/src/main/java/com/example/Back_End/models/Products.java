package com.example.Back_End.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "products")
public class Products {

    @Id
    @Column(name = "product_id")
    private Long productId;

    @Column(name = "cod_product", nullable = false)
    private String codProduct;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "cod_category", nullable = false)
    private String categoryId;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column (name = "cod_franchise", nullable = false)
    private String codFranchise;


}
