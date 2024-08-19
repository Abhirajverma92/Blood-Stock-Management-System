package com.example.demo.entities;

//import javax.persistence.*;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "donorrequest")
@AllArgsConstructor
@NoArgsConstructor
public class DonorRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "requestid")
    private int requestId;

    @Column(name = "requestdate")
    private Date requestDate;

    /*@ManyToOne
    @JoinColumn(name = "bloodproduct")
    private BloodProduct bloodProduct;
  */
    @ManyToOne
    @JoinColumn(name = "bloodbankid")
    private BloodBank bloodBank;

    @ManyToOne
    @JoinColumn(name = "donorid")
    private Donor donor;

    @Column(name = "status")
    private String status;

 // Getters and setters
	public int getRequestId() {
		return requestId;
	}

	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}

	public Date getRequestDate() {
		return requestDate;
	}

	public void setRequestDate(Date requestDate) {
		this.requestDate = requestDate;
	}

	/*public BloodProduct getBloodProduct() {
		return bloodProduct;
	}

	public void setBloodProduct(BloodProduct bloodProduct) {
		this.bloodProduct = bloodProduct;
	}*/

	public BloodBank getBloodBank() {
		return bloodBank;
	}

	public void setBloodBank(BloodBank bloodBank) {
		this.bloodBank = bloodBank;
	}

	public Donor getDonor() {
		return donor;
	}

	public void setDonor(Donor donor) {
		this.donor = donor;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public DonorRequest(Date requestDate, BloodBank bloodBank, Donor donor, String status) {
		super();
		this.requestDate = requestDate;
		this.bloodBank = bloodBank;
		this.donor = donor;
		this.status = status;
	}
     
	
    
    
}


    
    


