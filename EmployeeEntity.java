package com.example.demo;

import lombok.Data;
import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
@Data
@Entity
@Table(name="emp_db")

public class EmployeeEntity {
    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
  @Column(name="Name")
    private String name;
      @Column(name="Email")
    private String email;
      @Column(name="Phone")
    private String phone;
}
