package com.example.Back_End.controller;

import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.models.Products;
import com.example.Back_End.models.Users;
import com.example.Back_End.repository.ProductsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/products/searchByName")
    public ResponseEntity<List<Products>> searchProductsByNameAndFranchise(
            @RequestParam("codFranchise") String codFranchise,
            @RequestParam("productName") String productName) {

        // Buscar productos por nombre dentro de la franquicia usando LIKE
        List<Products> products = productsRepository.findByCodFranchiseAndNameLikeIgnoreCase(codFranchise, productName);

        // Si no se encuentran productos, retornar 204 No Content
        if (products.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        // Retornar la lista de productos encontrados
        return ResponseEntity.ok(products);
    }

    @PostMapping("/products")
    public Products saveProducts(@RequestBody Products product) {

        return productsRepository.save(product);

    }

    @PutMapping("/products/{codFranchise}/{codProduct}")
    public ResponseEntity<Products> updateProductByFranchise(
            @PathVariable String codFranchise,
            @PathVariable String codProduct,
            @RequestBody Products productDetails) {

        // Buscar el producto por su código de producto y código de franquicia
        Products product = productsRepository.findByCodProductAndCodFranchise(codProduct, codFranchise)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Producto con código " + codProduct + " y franquicia " + codFranchise + " no encontrado"));

        // Actualizar los detalles del producto con los valores enviados en el cuerpo de
        // la solicitud
        product.setName(productDetails.getName());
        product.setCodFranchise(productDetails.getCodFranchise());
        product.setCodCategory(productDetails.getCodCategory());
        product.setPrice(productDetails.getPrice());
        product.setImage(productDetails.getImage());

        // Guardar los cambios
        Products updatedProduct = productsRepository.save(product);

        // Retornar el producto actualizado
        return ResponseEntity.ok(updatedProduct);
    }

    @DeleteMapping("products/{codProduct}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable String codProduct) {

        Products products = productsRepository.findByCodProduct(codProduct)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con ID " + codProduct + " no encontrado"));

        productsRepository.delete(products);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}
