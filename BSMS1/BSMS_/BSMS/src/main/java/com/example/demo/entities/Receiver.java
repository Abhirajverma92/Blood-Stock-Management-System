package com.example.demo.entities;

//import javax.persistence.*;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "receiver")
public class Receiver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "receiverid")
    private int receiverid;

    @Column(name = "rname")
    private String name;

    @Column(name = "dob")
    @Temporal(TemporalType.DATE)
    private Date dob;

    @Column(name = "gender")
    private String gender;

    @Column(name = "email")
    private String email;

    @Column(name = "aadharno", unique = true)
    private String aadharNo;

    @Column(name = "address")
    private String address;

    @Column(name = "contactno", unique = true)
    private String contactNo;

    @ManyToOne
    @JoinColumn(name = "loginid")
    private User user;

    @ManyToOne
    @JoinColumn(name = "cityid")
    private City city;

 public Receiver(int rid) {
		// TODO Auto-generated constructor stub
	}

	// Getters and Setters
	public int getReceiverId() {
		return receiverid;
	}

	public void setReceiverId(int receiverId) {
		this.receiverid = receiverId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAadharNo() {
		return aadharNo;
	}

	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
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

    
    
    
}

