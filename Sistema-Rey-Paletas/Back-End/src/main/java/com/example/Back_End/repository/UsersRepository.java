package com.example.Back_End.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Back_End.models.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    
    // Método para buscar un usuario por su CI
    Optional<Users> findByCi(String ci);

    @Query(value = "SELECT * FROM users WHERE (email = :emailOrCi OR ci = :emailOrCi) AND password_hash = :password", nativeQuery = true)
    Optional<Users> getAuthUser(@Param("emailOrCi") String emailOrCi, @Param("password") String password);
    
}
