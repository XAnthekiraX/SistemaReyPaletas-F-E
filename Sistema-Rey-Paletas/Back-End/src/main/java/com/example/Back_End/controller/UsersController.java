package com.example.Back_End.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.models.Users;
import com.example.Back_End.repository.UsersRepository;

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

    // Validar CI, correo, y contraseña
    @GetMapping("/users/{emailOrCi}/password/{password}")
    public ResponseEntity<Map<String, Object>> validateUser(
            @PathVariable String emailOrCi,
            @PathVariable String password) {

        // Llamamos al método del repositorio que busca el usuario por email/CI y
        // contraseña
        Optional<Users> user = usersRepository.getAuthUser(emailOrCi, password);

        // Crear un mapa para la respuesta
        Map<String, Object> response = new HashMap<>();

        if (user.isPresent()) {
            response.put("success", true);
            response.put("user", user.get());
            return ResponseEntity.ok(response); // Si el usuario existe, responde con 200 OK
        } else {
            response.put("success", false);
            response.put("message", "Invalid email, CI, or password");
            return ResponseEntity.status(401).body(response); // Si no existe, responde con 401 Unauthorized
        }
    }

    @GetMapping("/users")
    public List<Users> listUsers() {
        return usersRepository.findAll(Sort.by(Sort.Direction.ASC, "ci"));
    }

    @GetMapping("/users/{ci}")
    public ResponseEntity<Users> listUsersById(@PathVariable String ci) {
        Users users = usersRepository.findByCi(ci)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con Ci " + ci + " no existe"));
        return ResponseEntity.ok(users);
    }

    @PostMapping("/users")
    public Users saveUsers(@RequestBody Users users) {
        return usersRepository.save(users);
    }

    @PutMapping("/users/{ci}")
    public ResponseEntity<Users> updateUsers(@PathVariable String ci, @RequestBody Users usersRequest) {

        // Encuentra al usuario por su CI
        Users users = usersRepository.findByCi(ci)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con CI " + ci + " no existe"));

        // Actualiza los campos con los valores de la solicitud
        users.setCodFranchise(usersRequest.getCodFranchise());
        users.setFirstName(usersRequest.getFirstName());
        users.setLastName(usersRequest.getLastName());
        users.setCi(usersRequest.getCi()); // Asegúrate de que esto esté asignado correctamente
        users.setEmail(usersRequest.getEmail());
        users.setPassword(usersRequest.getPassword());
        users.setRole(usersRequest.getRole());

        // Guarda los cambios en la base de datos
        Users updatedUsers = usersRepository.save(users);
        return ResponseEntity.ok(updatedUsers);
    }

    @DeleteMapping("users/{ci}")
    public ResponseEntity<Map<String, Boolean>> deleteUsers(@PathVariable String ci) {

        Users users = usersRepository.findByCi(ci)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con ID " + ci + " no encontrado"));

        usersRepository.delete(users);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }

}
