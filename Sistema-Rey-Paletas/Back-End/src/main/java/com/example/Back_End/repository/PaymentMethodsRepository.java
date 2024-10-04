package com.example.Back_End.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Back_End.models.PaymentMethods;

@Repository
public interface PaymentMethodsRepository extends JpaRepository<PaymentMethods, Long> {
    // Método para buscar métodos de pago por código de franquicia
    List<PaymentMethods> findByCodFranchise(String codFranchise);
}
