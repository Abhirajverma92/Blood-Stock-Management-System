package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "bloodproduct")
@AllArgsConstructor
@NoArgsConstructor
public class BloodProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bloodproductid")
    private int bloodProductid;

    @Column(name = "bloodproductname")
    private String name;

 // Getters and Setters
	public int getBloodProductId() {
		return bloodProductid;
	}

	public void setBloodProductId(int bloodProductId) {
		this.bloodProductid = bloodProductId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BloodProduct(int bloodProductId) {
		super();
		this.bloodProductid = bloodProductId;
	}
    
	
    
    
}
   
