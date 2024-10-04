package com.example.Back_End.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.example.Back_End.models.Category;
import com.example.Back_End.repository.CategoriesRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v3/category")
public class CategoriesController {

    @Autowired
    private CategoriesRepository categoriesRepository;

    @GetMapping("/{codFranchise}")
    public ResponseEntity<List<Category>> listCategories(@PathVariable String codFranchise) {
        return ResponseEntity.ok(categoriesRepository.findByCodFranchise(codFranchise));
    }

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        return ResponseEntity.ok(categoriesRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<Category> saveCategory(@RequestBody Category category) {
        return ResponseEntity.ok(categoriesRepository.save(category));
    }

    @PutMapping("/{codCategory}")
    public ResponseEntity<Category> updateCategory(@PathVariable String codCategory, @RequestBody Category categoryDetails) {
        return categoriesRepository.findByCodCategory(codCategory)
                .map(category -> {
                    category.setNameCategory(categoryDetails.getNameCategory());
                    category.setDescription(categoryDetails.getDescription());
                    category.setCodFranchise(categoryDetails.getCodFranchise());
                    return ResponseEntity.ok(categoriesRepository.save(category));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{codCategory}")
    public ResponseEntity<String> deleteCategory(@PathVariable String codCategory) {
        return categoriesRepository.findByCodCategory(codCategory)
                .map(category -> {
                    categoriesRepository.delete(category);
                    return ResponseEntity.ok("Categoría eliminada correctamente.");
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
