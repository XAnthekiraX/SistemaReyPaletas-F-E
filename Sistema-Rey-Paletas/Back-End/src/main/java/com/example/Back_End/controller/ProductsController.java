package com.example.Back_End.controller;

import com.example.Back_End.models.Products;
import com.example.Back_End.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductsController {

    @Autowired
    private ProductsRepository productsRepository;

    // Obtener productos por franquicia
    @GetMapping("/franchise/{codFranchise}")
    public ResponseEntity<List<Products>> getProductsByFranchise(@PathVariable String codFranchise) {
        List<Products> products = productsRepository.getProductsByFranchise(codFranchise);
        if (products.isEmpty()) {
            return ResponseEntity.noContent().build();  // Si no hay productos, responde con 204 No Content
        }
        return ResponseEntity.ok(products);  // Si hay productos, responde con 200 OK
    }

    // Obtener productos por franquicia y código de producto
    @GetMapping("/franchise/{codFranchise}/product/{codProduct}")
    public ResponseEntity<List<Products>> getProductsByFranchiseAndId(
            @PathVariable String codFranchise, 
            @PathVariable String codProduct) {
        List<Products> products = productsRepository.getProductsByFranchiseAndId(codFranchise, codProduct);
        if (products.isEmpty()) {
            return ResponseEntity.noContent().build();  // Si no hay productos, responde con 204 No Content
        }
        return ResponseEntity.ok(products);  // Si hay productos, responde con 200 OK
    }
}
