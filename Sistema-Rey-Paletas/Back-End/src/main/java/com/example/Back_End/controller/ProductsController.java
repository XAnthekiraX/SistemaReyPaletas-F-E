package com.example.Back_End.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.models.Products;
import com.example.Back_End.respository.ProductsRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v3")
public class ProductsController {

    @Autowired
    private ProductsRepository productsRepository;

    @GetMapping("/products")
    public List<Products> listProducts() {
        return productsRepository.findAll();
    }

    @GetMapping("/products/{productId}")
    public ResponseEntity<Products> listProductsById(@PathVariable String productId) {
        Products products = productsRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Producto con ID " + productId + " no existe"));

        return ResponseEntity.ok(products);

    }

    // Método para manejar las solicitudes POST en la ruta "/products"
    @PostMapping("/products")
    public ResponseEntity<Products> saveProducts(@RequestBody Products product) {
        // Llama al método 'save' del repositorio para guardar el producto
        productsRepository.save(product);

        // Retorna una respuesta exitosa con un mensaje de confirmación
        return ResponseEntity.ok(product);
    }

    @PutMapping("/products/{productId}")
    public ResponseEntity<Products> updateProducts(@PathVariable String productId,
            @RequestBody Products productsRequest) {

        // Busca el producto existente por ID
        Products existingProduct = productsRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Producto con ID " + productId + " no encontrado"));

        // Actualiza los campos del producto existente, excluyendo la clave primaria
        existingProduct.setName(productsRequest.getName());
        existingProduct.setPrice(productsRequest.getPrice());
        existingProduct.setCategoryId(productsRequest.getCategoryId());

        // Guarda los cambios en la base de datos
        Products updatedProduct = productsRepository.save(existingProduct);
        return ResponseEntity.ok(updatedProduct);
    }

    @DeleteMapping("/products/{productId}")
    public ResponseEntity<Map<String, Boolean>> deleteProducts(@PathVariable String productId) {

        Products products = productsRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Producto con ID " + productId + " no encontrado"));

        productsRepository.delete(products);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted" + productId, Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}
