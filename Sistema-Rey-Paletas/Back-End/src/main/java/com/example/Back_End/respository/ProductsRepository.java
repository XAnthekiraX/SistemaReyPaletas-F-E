package com.example.Back_End.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Back_End.models.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, String> {
    
}
