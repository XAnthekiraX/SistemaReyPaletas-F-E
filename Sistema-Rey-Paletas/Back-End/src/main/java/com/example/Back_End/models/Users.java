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
    @Table(name = "users")
    public class Users {

        @Id

        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "user_id")
        private Long userId;

        @Column(name = "cod_franchise")
        private String codFranchise;

        @Column(name = "first_name")
        private String firstName;

        @Column(name = "last_name")
        private String lastName;

        @Column(name = "ci")
        private String ci;

        @Column(name = "email")
        private String email;

        @Column(name = "password_hash")
        private String password;

        @Column(name = "role")
        private String role;

    }
