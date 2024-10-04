package com.example.Back_End.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Back_End.models.StatusOrder;

@Repository
public interface StatusOrderRepository extends JpaRepository<StatusOrder, Long> {
    
}