package com.example.Back_End.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Back_End.models.Franchises;//Importa la clase Model Franchises

@Repository
public interface FranchiseRepository extends JpaRepository<Franchises, Long> {
    // JpaRepository proporciona métodos CRUD (Create, Read, Update, Delete) listos para usar para la entidad Person
}
