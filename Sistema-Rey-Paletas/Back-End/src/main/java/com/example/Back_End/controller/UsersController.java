package com.example.Back_End.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.models.Users;
import com.example.Back_End.respository.UsersRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v3")
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping("/users")
    public List<Users> listUsers() {
        return usersRepository.findAll(Sort.by(Sort.Direction.ASC, "userId"));
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<Users> listUsersById(@PathVariable long userId) {
        Users users = usersRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con ID " + userId + " no existe"));
        return ResponseEntity.ok(users);
    }

    @PostMapping("/users")
    public Users saveUsers(@RequestBody Users users) {
        return usersRepository.save(users);
    }

    @PutMapping("users/{userId}")
    public ResponseEntity<Users> updateUsers(@PathVariable long userId, @RequestBody Users usersRequest) {

        Users users = usersRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con ID " + userId + " no existe"));

        users.setFranchiseId(usersRequest.getFranchiseId());
        users.setFirstName(usersRequest.getFirstName());
        users.setLastName(usersRequest.getLastName());
        users.setEmail(usersRequest.getEmail());
        users.setPassword(usersRequest.getPassword());
        users.setRole(usersRequest.getRole());

        Users updtUsers = usersRepository.save(users);
        return ResponseEntity.ok(updtUsers);

    }

    @DeleteMapping("users/{userId}")
    public ResponseEntity<Map<String, Boolean>> deleteUsers(@PathVariable long userId) {

        Users users = usersRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con ID " + userId + " no encontrado"));

        usersRepository.delete(users);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }

}
