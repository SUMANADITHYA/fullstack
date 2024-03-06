package com.example.nexus.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.nexus.demo.model.Enquiry;

public interface EnquiryRepository extends JpaRepository<Enquiry,Long> {
    
}
