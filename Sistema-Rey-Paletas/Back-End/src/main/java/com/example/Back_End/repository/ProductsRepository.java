package com.example.Back_End.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Back_End.models.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {

    @Query(value = "SELECT * FROM products WHERE cod_franchise = :codFranchise ORDER BY name_product ASC", nativeQuery = true)
    List<Products> getProductsByFranchise(@Param("codFranchise") String codFranchise);

    Optional<Products>findByCodProduct(String codProduct);
    Optional<Products> findByCodProductAndCodFranchise(String codProduct, String codFranchise);

    // Buscar por código de franquicia y nombre de producto con LIKE (insensible a mayúsculas)
    @Query("SELECT p FROM Products p WHERE p.codFranchise = :codFranchise AND LOWER(p.name) LIKE LOWER(CONCAT('%', :productName, '%'))")
    List<Products> findByCodFranchiseAndNameLikeIgnoreCase(@Param("codFranchise") String codFranchise, @Param("productName") String productName);
}
