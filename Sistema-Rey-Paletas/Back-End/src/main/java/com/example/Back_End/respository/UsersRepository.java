package com.example.Back_End.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Back_End.models.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    
}
