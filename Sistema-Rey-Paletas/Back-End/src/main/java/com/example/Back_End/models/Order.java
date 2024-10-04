package com.example.Back_End.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOrder; // ID único de la orden

    @Column(name = "cod_order", nullable = false, unique = true)
    private String codOrder; // Código único de la orden

    @Column(name = "cod_franchise", nullable = false)
    private String codFranchise; // Código de la franquicia

    @Column(name = "order_date", nullable = false)
    private LocalDateTime orderDate; // Fecha de creación de la orden

    @Column(name = "total_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalAmount; // Monto total de la orden

    @Column(name = "status_order", nullable = false)
    private Long statusOrder; // Estado de la orden (ID del estado)

    @Column(name = "payment_method", nullable = false)
    private Long paymentMethod; // ID del método de pago
}
