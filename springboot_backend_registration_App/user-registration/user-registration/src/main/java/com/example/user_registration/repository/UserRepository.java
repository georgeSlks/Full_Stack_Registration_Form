package com.example.user_registration.repository;

import com.example.user_registration.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // define custom queries.
    // future : addresses no seperate table.
}