package com.example.Back_End.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Back_End.models.Franchises;//Importa la clase Model Franchises

@Repository
public interface FranchiseRepository extends JpaRepository<Franchises, Long> {

    // Método para encontrar una franquicia por su código
    Optional<Franchises> findByCodFranchise(String codFranchise);

}
