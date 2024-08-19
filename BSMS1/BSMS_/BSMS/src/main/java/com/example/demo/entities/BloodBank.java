package com.example.demo.entities;



import jakarta.persistence.*;

import java.util.Date;

import jakarta.persistence.Id;
import lombok.NoArgsConstructor;
@NoArgsConstructor

@Entity
@Table(name = "bloodbank")
public class BloodBank {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bloodbankid")
    private int bloodbankid;

    @Column(name = "bname")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "location")
    private String location;

    @Column(name = "licenseno", unique = true, nullable = false)
    private String licenseNo;

    @Column(name = "foundationdate")
    @Temporal(TemporalType.DATE)
    private Date foundationDate;

    @Column(name = "status")
    private boolean status;

    @Column(name = "contactno")
    private String contactNo;

    @ManyToOne
    @JoinColumn(name = "loginid")
    private User user;

    @ManyToOne
    @JoinColumn(name = "cityid")
    private City city;

	

	public BloodBank(int bloodbankid) {
		super();
		this.bloodbankid = bloodbankid;
	}

	public int getBloodBankId() {
		return bloodbankid;
	}

	public void setBloodBankId(int bloodBankId) {
		this.bloodbankid = bloodBankId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getLicenseNo() {
		return licenseNo;
	}

	public void setLicenseNo(String licenseNo) {
		this.licenseNo = licenseNo;
	}

	public Date getFoundationDate() {
		return foundationDate;
	}

	public void setFoundationDate(Date foundationDate) {
		this.foundationDate = foundationDate;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

    // Getters and Setters
    
}

