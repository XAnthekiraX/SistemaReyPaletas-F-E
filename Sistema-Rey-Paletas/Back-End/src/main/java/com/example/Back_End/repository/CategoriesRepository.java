package com.example.Back_End.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Back_End.models.Category;

@Repository
public interface CategoriesRepository extends JpaRepository<Category, Long> {

    List<Category> findByCodFranchise(String codFranchise);

    // También necesitas asegurarte de que haya un método para encontrar por
    // codCategory
    Optional<Category> findByCodCategory(String codCategory);
}
