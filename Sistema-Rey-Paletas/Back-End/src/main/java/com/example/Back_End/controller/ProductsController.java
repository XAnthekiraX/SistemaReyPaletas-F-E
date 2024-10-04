package com.example.Back_End.controller;

import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.models.Products;
import com.example.Back_End.repository.ProductsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v3/products")
public class ProductsController {

    @Autowired
    private ProductsRepository productsRepository;

    @GetMapping("/{codFranchise}")
    public ResponseEntity<List<Products>> getProductsByFranchise(@PathVariable String codFranchise) {
        List<Products> products = productsRepository.getProductsByFranchise(codFranchise);
        return products.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(products);
    }

    @PostMapping
    public Products saveProducts(@RequestBody Products product) {
        return productsRepository.save(product);
    }

    @PutMapping("/{codFranchise}/{codProduct}")
    public ResponseEntity<Products> updateProductByFranchise(@PathVariable String codFranchise,
            @PathVariable String codProduct, @RequestBody Products productDetails) {
        Products product = productsRepository.findByCodProductAndCodFranchise(codProduct, codFranchise)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado"));
        
        product.setName(productDetails.getName());
        product.setCodFranchise(productDetails.getCodFranchise());
        product.setCodCategory(productDetails.getCodCategory());
        product.setPrice(productDetails.getPrice());
        product.setImage(productDetails.getImage());
        
        return ResponseEntity.ok(productsRepository.save(product));
    }

    @DeleteMapping("/{codProduct}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable String codProduct) {
        Products product = productsRepository.findByCodProduct(codProduct)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado"));
        productsRepository.delete(product);
        return ResponseEntity.ok(Map.of("deleted", true));
    }
}
