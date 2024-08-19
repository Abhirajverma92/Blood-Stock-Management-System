package com.example.demo.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "bloodrequest")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BloodRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;


    @ManyToOne
    @JoinColumn(name = "loginid")
    private User user;
    
    @ManyToOne
    @JoinColumn(name="bloodbankid")
    private BloodBank bloodbankid;

    
    @Column(name = "status")
    private String status;

    @Column(name="quantity")
    private int quantity;
    
    @Column(name = "requestdate")
    private Date requestDate;
    
    @ManyToOne
    @JoinColumn(name="bloodproductid")
    private BloodProduct bloodproduct;

	
    
    /*
 // Getters and Setters
    public BloodBank getBloodbankid() {
		return bloodbankid;
	}

	public void setBloodbankid(BloodBank bloodbankid) {
		this.bloodbankid = bloodbankid;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	
    
 
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Hospital getHospital() {
		return hospital;
	}

	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}

	public Receiver getReceiver() {
		return receiver;
	}

	public void setReceiver(Receiver receiver) {
		this.receiver = receiver;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}*/

	

	

	

	

    
    
    
}

	    
	


