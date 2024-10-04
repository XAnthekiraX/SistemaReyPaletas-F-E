package com.example.Back_End.repository;

import java.util.Optional;
import java.util.List;

import com.example.Back_End.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByCodFranchise(String codFranchise);

    Optional<Order> findByCodOrder(String codOrder);

    List<Order> findByCodFranchiseAndStatusOrder(String codFranchise, Long statusOrder);

    List<Order> findByCodFranchiseAndPaymentMethod(String codFranchise, Long paymentMethod);
}
