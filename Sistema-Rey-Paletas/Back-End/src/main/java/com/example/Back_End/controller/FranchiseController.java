package com.example.Back_End.controller;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.models.Franchises;
import com.example.Back_End.repository.FranchiseRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v3")
public class FranchiseController {

    @Autowired
    private FranchiseRepository franchiseRepository;

    // Método para manejar solicitudes Get
    @GetMapping("/franchises")
    public List<Franchises> listFranchises() {
        return franchiseRepository.findAll(Sort.by(Sort.Direction.ASC, "franchisesId"));
    }

    @GetMapping("/franchises/{franchisesId}")
    public ResponseEntity<Franchises> listFranchiseById(@PathVariable long franchisesId) {
        Franchises franchises = franchiseRepository.findById(franchisesId)
                .orElseThrow(() -> new ResourceNotFoundException("ID " + franchisesId + " no existe"));

        return ResponseEntity.ok(franchises);
    }

    // Método para manejar solicitudes Post
    @PostMapping("/franchises")
    public Franchises saveFranchises(@RequestBody Franchises franchises) {

        return franchiseRepository.save(franchises);
    }

    // Método para manejar solicitudes Put
    @PutMapping("/franchises/{franchisesId}")
    public ResponseEntity<Franchises> updateFranchise(@PathVariable Long franchisesId,
            @RequestBody Franchises franchiseRequest) {
        Franchises franchises = franchiseRepository.findById(franchisesId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("ID" + franchisesId + "NO EXISTENTE"));

        franchises.setCity(franchiseRequest.getCity());
        franchises.setCodFranchise(franchiseRequest.getCodFranchise());
        franchises.setCountry(franchiseRequest.getCountry());
        franchises.setStatus(franchiseRequest.getStatus());

        Franchises updtFranchises = franchiseRepository.save(franchises);
        return ResponseEntity.ok(updtFranchises);
    }

    // Método para manejar solicitudes Delete
    @DeleteMapping("/franchises/{franchisesId}")
    public ResponseEntity<Map<String, Boolean>> deleteFranchises(@PathVariable Long franchisesId) {
        Franchises franchises = franchiseRepository.findById(franchisesId)
                .orElseThrow(() -> new ResourceNotFoundException("ID " + franchisesId + " no existe"));

        franchiseRepository.delete(franchises);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }

}
