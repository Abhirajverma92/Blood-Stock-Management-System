package com.example.demo.entities;



import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "bloodstock")
public class BloodStock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bsid")
    private int id;

    @Column(name = "unitsavailable")
    private int unitsAvailable;

    @Column(name = "lastupdated")
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastUpdated;

    @Column(name = "bloodproductexpiry")
    @Temporal(TemporalType.TIMESTAMP)
    private Date bloodProductExpiry;

    @Column(name = "qty")
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "bloodproductid")
    private BloodProduct bloodProduct;

    // Getters and Setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUnitsAvailable() {
		return unitsAvailable;
	}

	public void setUnitsAvailable(int unitsAvailable) {
		this.unitsAvailable = unitsAvailable;
	}

	public Date getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(Date lastUpdated) {
		this.lastUpdated = lastUpdated;
	}

	public Date getBloodProductExpiry() {
		return bloodProductExpiry;
	}

	public void setBloodProductExpiry(Date bloodProductExpiry) {
		this.bloodProductExpiry = bloodProductExpiry;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public BloodProduct getBloodProduct() {
		return bloodProduct;
	}

	public void setBloodProduct(BloodProduct bloodProduct) {
		this.bloodProduct = bloodProduct;
	}

   
    
    
    
}

