package com.example.Back_End.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.models.Franchises;
import com.example.Back_End.repository.FranchiseRepository;

import java.util.List;
import java.util.Optional;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v3/franchises")
public class FranchiseController {

    @Autowired
    private FranchiseRepository franchiseRepository;

    @GetMapping
    public List<Franchises> listFranchises() {
        return franchiseRepository.findAll(Sort.by(Sort.Direction.ASC, "franchisesId"));
    }

    @GetMapping("/code/{codFranchise}")
    public ResponseEntity<Optional<Franchises>> getFranchisesByCode(@PathVariable String codFranchise) {
        Optional<Franchises> franchises = franchiseRepository.findByCodFranchise(codFranchise);
        if (franchises.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(franchises);
    }

    @PostMapping
    public Franchises createFranchise(@RequestBody Franchises franchise) {
        return franchiseRepository.save(franchise);
    }

    @PutMapping("/{franchisesId}")
    public ResponseEntity<Franchises> updateFranchise(@PathVariable Long franchisesId,
            @RequestBody Franchises franchiseRequest) {
        Franchises franchise = franchiseRepository.findById(franchisesId)
                .orElseThrow(() -> new ResourceNotFoundException("ID " + franchisesId + " no existe"));

        franchise.setCity(franchiseRequest.getCity());
        franchise.setCodFranchise(franchiseRequest.getCodFranchise());
        franchise.setCountry(franchiseRequest.getCountry());
        franchise.setStatus(franchiseRequest.getStatus());

        return ResponseEntity.ok(franchiseRepository.save(franchise));
    }

    @DeleteMapping("/{franchisesId}")
    public ResponseEntity<Map<String, Boolean>> deleteFranchise(@PathVariable Long franchisesId) {
        Franchises franchise = franchiseRepository.findById(franchisesId)
                .orElseThrow(() -> new ResourceNotFoundException("ID " + franchisesId + " no existe"));

        franchiseRepository.delete(franchise);
        return ResponseEntity.ok(Map.of("deleted", true));
    }
}
