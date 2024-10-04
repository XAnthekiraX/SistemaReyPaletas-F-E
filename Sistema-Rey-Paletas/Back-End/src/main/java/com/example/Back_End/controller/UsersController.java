package com.example.Back_End.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.models.Users;
import com.example.Back_End.repository.UsersRepository;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v3/users")
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping("/{emailOrCi}/password/{password}")
    public ResponseEntity<Map<String, Object>> validateUser(@PathVariable String emailOrCi, @PathVariable String password) {
        Optional<Users> user = usersRepository.getAuthUser(emailOrCi, password);
        Map<String, Object> response = new HashMap<>();
        response.put("success", user.isPresent());
        response.put("user", user.orElse(null));
        response.put("message", user.isPresent() ? null : "Invalid email, CI, or password");
        return user.map(u -> ResponseEntity.ok(response)).orElseGet(() -> ResponseEntity.status(401).body(response));
    }

    @GetMapping
    public List<Users> listUsers() {
        return usersRepository.findAll(Sort.by("ci"));
    }

    @GetMapping("/{ci}")
    public ResponseEntity<Users> listUsersById(@PathVariable String ci) {
        return ResponseEntity.ok(usersRepository.findByCi(ci).orElseThrow(() -> new ResourceNotFoundException("Usuario con Ci " + ci + " no existe")));
    }

    @PostMapping
    public Users saveUsers(@RequestBody Users users) {
        return usersRepository.save(users);
    }

    @PutMapping("/{ci}")
    public ResponseEntity<Users> updateUsers(@PathVariable String ci, @RequestBody Users usersRequest) {
        Users users = usersRepository.findByCi(ci).orElseThrow(() -> new ResourceNotFoundException("Usuario con CI " + ci + " no existe"));
        users.setCodFranchise(usersRequest.getCodFranchise());
        users.setFirstName(usersRequest.getFirstName());
        users.setLastName(usersRequest.getLastName());
        users.setEmail(usersRequest.getEmail());
        users.setPassword(usersRequest.getPassword());
        users.setRole(usersRequest.getRole());
        return ResponseEntity.ok(usersRepository.save(users));
    }

    @DeleteMapping("/{ci}")
    public ResponseEntity<Map<String, Boolean>> deleteUsers(@PathVariable String ci) {
        Users users = usersRepository.findByCi(ci).orElseThrow(() -> new ResourceNotFoundException("Usuario con ID " + ci + " no encontrado"));
        usersRepository.delete(users);
        return ResponseEntity.ok(Map.of("deleted", true));
    }
}
