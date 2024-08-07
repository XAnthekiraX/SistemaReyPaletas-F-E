package com.example.Back_End.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "franchises")
public class Franchises {

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="franchises_id")
    private long franchisesId;

    // @Column Mapea este campo a la columna en la base de datos
    // El nombre del campo en la base de datos será 'city'
    @Column(name = "city")
    private String city; //=>El tipo de dato del campo sera de String

    @Column(name = "country")
    private String country; 

    @Column(name = "status")
    private String status; 
}
