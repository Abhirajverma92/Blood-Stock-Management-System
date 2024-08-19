package com.example.demo.entities;



import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "donor")
public class Donor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "donorid")
    private int donorId;

    @Column(name = "dname")
    private String name;

    @Column(name = "adharno", unique = true, nullable = false)
    private String adharNo;

    @Column(name = "gender")
    private String gender;

    @Column(name = "address")
    private String address;

    @Column(name = "contactno")
    private String contactNo;

    @Column(name = "email")
    private String email;

    @Column(name = "dob")
    @Temporal(TemporalType.DATE)
    private Date dob;

    @ManyToOne
    @JoinColumn(name = "loginid")
    private User user;

    @ManyToOne
    @JoinColumn(name = "bloodproduct")
    private BloodProduct bloodProduct;

    @ManyToOne
    @JoinColumn(name = "cityid")
    private City city;

    
 public Donor(int donorId2) {
		this.donorId=donorId2;
	}

	// Getters and Setters
	public int getDonorId() {
		return donorId;
	}

	public void setDonorId(int donorId) {
		this.donorId = donorId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAdharNo() {
		return adharNo;
	}

	public void setAdharNo(String adharNo) {
		this.adharNo = adharNo;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public BloodProduct getBloodProduct() {
		return bloodProduct;
	}

	public void setBloodProduct(BloodProduct bloodProduct) {
		this.bloodProduct = bloodProduct;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

    
    
}

