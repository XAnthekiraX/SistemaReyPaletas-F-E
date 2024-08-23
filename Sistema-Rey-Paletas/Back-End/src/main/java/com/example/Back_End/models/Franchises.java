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
    @Column(name = "franchises_id")
    private Long franchisesId;

    @Column(name = "cod_franchise")
    private String codFranchise;

    @Column(name = "city")
    private String city;

    @Column(name = "country")
    private String country;

    @Column(name = "status")
    private String status;
}
