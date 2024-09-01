package com.example.Back_End.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Back_End.models.Category;
import com.example.Back_End.repository.CategoriesRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v3")
public class CategoriesController {

    @Autowired
    private CategoriesRepository categoriesRepository;
    
    @GetMapping("/category/{codFranchise}")
    public ResponseEntity<List<Category>> listCategories(@PathVariable String codFranchise) {
        List<Category> categories = categoriesRepository.findByCodFranchise(codFranchise);
        return ResponseEntity.ok(categories);
    }
    

    @PostMapping("/category")
    public Category saveCategories(@RequestBody Category category) {

        return categoriesRepository.save(category);
    }

    @PutMapping("/category/{codCategory}")
public ResponseEntity<Category> updateCategory(
        @PathVariable String codCategory,
        @RequestBody Category categoryDetails) {
    
    // Busca la categoría por codCategory
    var categoryOptional = categoriesRepository.findByCodCategory(codCategory);

    if (categoryOptional.isPresent()) {
        // Actualiza los campos de la categoría
        Category category = categoryOptional.get();
        category.setNameCategory(categoryDetails.getNameCategory());
        category.setDescription(categoryDetails.getDescription());

        // Guarda la categoría actualizada
        Category updatedCategory = categoriesRepository.save(category);
        return ResponseEntity.ok(updatedCategory);
    } else {
        return ResponseEntity.notFound().build();
    }
}


    @DeleteMapping("/category/{codCategory}")
    public ResponseEntity<String> deleteCategory(@PathVariable String codCategory) {
        // Busca la categoría por codCategory
        var categoryOptional = categoriesRepository.findByCodCategory(codCategory);

        if (categoryOptional.isPresent()) {
            // Elimina la categoría
            categoriesRepository.delete(categoryOptional.get());
            return ResponseEntity.ok("Categoría eliminada correctamente.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
