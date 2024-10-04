package com.example.Back_End.controller;

import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.models.Order;
import com.example.Back_End.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v3/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    // Obtener todas las órdenes
    @GetMapping
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Obtener órdenes por franquicia
    @GetMapping("/franchise/{codFranchise}")
    public List<Order> getOrdersByFranchise(@PathVariable String codFranchise) {
        return orderRepository.findByCodFranchise(codFranchise);
    }

    // Obtener órdenes por franquicia y estado de pago
    @GetMapping("/franchise/{codFranchise}/status/{statusOrder}")
    public List<Order> getOrdersByFranchiseAndStatus(@PathVariable String codFranchise, @PathVariable Long statusOrder) {
        return orderRepository.findByCodFranchiseAndStatusOrder(codFranchise, statusOrder);
    }

    // Obtener órdenes por franquicia y método de pago
    @GetMapping("/franchise/{codFranchise}/payment/{paymentMethod}")
    public List<Order> getOrdersByFranchiseAndPayment(@PathVariable String codFranchise, @PathVariable Long paymentMethod) {
        return orderRepository.findByCodFranchiseAndPaymentMethod(codFranchise, paymentMethod);
    }

    // Crear una nueva orden
    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderRepository.save(order);
    }

    // Actualizar una orden por codOrder
    @PutMapping("/{codOrder}")
    public ResponseEntity<Order> updateOrder(@PathVariable String codOrder, @RequestBody Order orderDetails) {
        Order order = orderRepository.findByCodOrder(codOrder)
                .orElseThrow(() -> new ResourceNotFoundException("Orden no encontrada"));
        order.setCodFranchise(orderDetails.getCodFranchise());
        order.setOrderDate(orderDetails.getOrderDate());
        order.setTotalAmount(orderDetails.getTotalAmount());
        order.setStatusOrder(orderDetails.getStatusOrder());
        order.setPaymentMethod(orderDetails.getPaymentMethod());
        return ResponseEntity.ok(orderRepository.save(order));
    }

    // Eliminar una orden por codOrder
    @DeleteMapping("/{codOrder}")
    public ResponseEntity<Void> deleteOrder(@PathVariable String codOrder) {
        Order order = orderRepository.findByCodOrder(codOrder)
                .orElseThrow(() -> new ResourceNotFoundException("Orden no encontrada"));
        orderRepository.delete(order);
        return ResponseEntity.noContent().build(); // Devuelve 204 No Content
    }
}
