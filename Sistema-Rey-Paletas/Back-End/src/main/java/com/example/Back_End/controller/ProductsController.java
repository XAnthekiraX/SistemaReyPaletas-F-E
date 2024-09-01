package com.example.Back_End.controller;

import com.example.Back_End.models.Products;
import com.example.Back_End.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v3")
public class ProductsController {

    @Autowired
    private ProductsRepository productsRepository;

    // Obtener productos por franquicia
    @GetMapping("/products/{codFranchise}")
    public ResponseEntity<List<Products>> getProductsByFranchise(@PathVariable String codFranchise) {
        List<Products> products = productsRepository.getProductsByFranchise(codFranchise);
        if (products.isEmpty()) {
            return ResponseEntity.noContent().build(); // Si no hay productos, responde con 204 No Content
        }
        return ResponseEntity.ok(products); // Si hay productos, responde con 200 OK
    }

    @PostMapping("/products")
    public Products saveProducts(@RequestBody Products product) {

        return productsRepository.save(product);

    }

}
