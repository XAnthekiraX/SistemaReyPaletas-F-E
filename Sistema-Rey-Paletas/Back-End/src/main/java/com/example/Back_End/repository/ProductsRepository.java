package com.example.Back_End.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Back_End.models.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {

    @Query(value = "SELECT * FROM products WHERE cod_franchise = :codFranchise", nativeQuery = true)
    List<Products> getProductsByFranchise(@Param("codFranchise") String codFranchise);
    
}
