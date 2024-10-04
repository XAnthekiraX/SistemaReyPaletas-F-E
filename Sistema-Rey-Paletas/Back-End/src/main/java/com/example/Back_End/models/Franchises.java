package com.example.Back_End.models;

import jakarta.persistence.*;
import lombok.*;

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

    @Column(name = "cod_franchise", unique = true, nullable = false)
    private String codFranchise;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "country", nullable = false)
    private String country;

    @Column(name = "status")
    private String status;

}
