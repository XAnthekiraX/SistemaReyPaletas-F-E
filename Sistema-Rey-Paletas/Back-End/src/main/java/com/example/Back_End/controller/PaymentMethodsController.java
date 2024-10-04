package com.example.Back_End.controller;

import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.models.PaymentMethods;
import com.example.Back_End.repository.PaymentMethodsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v3/payment")
public class PaymentMethodsController {

    @Autowired
    private PaymentMethodsRepository paymentMethodsRepository;

    // Obtener todos los métodos de pago
    @GetMapping
    public List<PaymentMethods> getAllPaymentMethods() {
        return paymentMethodsRepository.findAll();
    }

    // Obtener métodos de pago por franquicia
    @GetMapping("/franchise/{codFranchise}")
    public List<PaymentMethods> getPaymentMethodsByFranchise(@PathVariable String codFranchise) {
        return paymentMethodsRepository.findByCodFranchise(codFranchise);
    }

    // Crear un nuevo método de pago
    @PostMapping
    public ResponseEntity<PaymentMethods> savePaymentMethod(@RequestBody PaymentMethods paymentMethod) {
        PaymentMethods savedPaymentMethod = paymentMethodsRepository.save(paymentMethod);
        return ResponseEntity.status(201).body(savedPaymentMethod); // Devuelve 201 Created
    }

    // Actualizar un método de pago por paymentMethodId
    @PutMapping("/{paymentMethodId}")
    public ResponseEntity<PaymentMethods> updatePaymentMethod(
            @PathVariable Long paymentMethodId, @RequestBody PaymentMethods paymentMethodDetails) {
        
        PaymentMethods paymentMethod = paymentMethodsRepository.findById(paymentMethodId)
                .orElseThrow(() -> new ResourceNotFoundException("Método de pago no encontrado"));

        paymentMethod.setMethodName(paymentMethodDetails.getMethodName());
        paymentMethod.setCodFranchise(paymentMethodDetails.getCodFranchise());

        return ResponseEntity.ok(paymentMethodsRepository.save(paymentMethod));
    }

    // Eliminar un método de pago por paymentMethodId
    @DeleteMapping("/{paymentMethodId}")
    public ResponseEntity<Void> deletePaymentMethod(@PathVariable Long paymentMethodId) {
        PaymentMethods paymentMethod = paymentMethodsRepository.findById(paymentMethodId)
                .orElseThrow(() -> new ResourceNotFoundException("Método de pago no encontrado"));
        
        paymentMethodsRepository.delete(paymentMethod);
        return ResponseEntity.noContent().build(); // Devuelve 204 No Content
    }
}
