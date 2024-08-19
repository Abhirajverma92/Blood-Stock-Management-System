package com.example.demo.entities;

//import javax.persistence.*;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "hospital")
@AllArgsConstructor
@NoArgsConstructor
public class Hospital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hospitalid")
    private int hospitalid;

    @Column(name = "hname")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "location")
    private String location;

    @Column(name = "licenseno", unique = true, nullable = false)
    private String licenseNo;

    @Column(name = "contactno")
    private String contactNo;

    @ManyToOne
    @JoinColumn(name = "loginid")
    private User user;

    @ManyToOne
    @JoinColumn(name = "cityid")
    private City city;

    
 // Getters and Setters
	public int getHospitalId() {
		return hospitalid;
	}

	public void setHospitalId(int hospitalId) {
		this.hospitalid = hospitalId;
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

	public Hospital(int hospitalId) {
		super();
		this.hospitalid = hospitalId;
	}

    
    
    
}
