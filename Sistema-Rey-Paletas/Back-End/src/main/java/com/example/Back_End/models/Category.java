package com.example.Back_End.models;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "categories")
public class Category {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @Column(name = "cod_category", unique = true, nullable = false)
    private String codCategory;

    @Column(name = "name_category", nullable = false)
    private String nameCategory;

    @Column(name = "description")
    private String description;

    // Solo se almacena el código de la franquicia
    @Column(name = "cod_franchise", nullable = false)
    private String codFranchise;

    

}
