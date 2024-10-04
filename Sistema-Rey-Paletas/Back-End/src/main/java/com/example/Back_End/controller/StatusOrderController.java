package com.example.Back_End.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.models.StatusOrder;
import com.example.Back_End.repository.StatusOrderRepository;

@RestController
@RequestMapping("/api/v3/status")
public class StatusOrderController {
    @Autowired
    private StatusOrderRepository statusOrderRepository;

    // Obtener todos los estados de orden
    @GetMapping
    public List<StatusOrder> getAllStatusOrders() {
        return statusOrderRepository.findAll();
    }

    // Crear un nuevo estado de orden
    @PostMapping
    public StatusOrder createStatusOrder(@RequestBody StatusOrder statusOrder) {
        return statusOrderRepository.save(statusOrder);
    }

    // Actualizar un estado de orden por statusId
    @PutMapping("/{statusId}")
    public ResponseEntity<StatusOrder> updateStatusOrder(@PathVariable Long statusId,
            @RequestBody StatusOrder statusOrderDetails) {
        StatusOrder statusOrder = statusOrderRepository.findById(statusId)
                .orElseThrow(() -> new ResourceNotFoundException("Estado de orden no encontrado"));
        statusOrder.setStatusName(statusOrderDetails.getStatusName());
        return ResponseEntity.ok(statusOrderRepository.save(statusOrder));
    }

    // Eliminar un estado de orden por statusId
    @DeleteMapping("/{statusId}")
    public ResponseEntity<Void> deleteStatusOrder(@PathVariable Long statusId) {
        StatusOrder statusOrder = statusOrderRepository.findById(statusId)
                .orElseThrow(() -> new ResourceNotFoundException("Estado de orden no encontrado"));
        statusOrderRepository.delete(statusOrder);
        return ResponseEntity.noContent().build(); // Devuelve 204 No Content
    }
}
