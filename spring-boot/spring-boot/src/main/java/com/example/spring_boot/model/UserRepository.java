package com.example.spring_boot.model;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends JpaRepository<aspnetuser, Long> {
    Optional<aspnetuser> findFirstByName(String name);
}