package com.example.demo.controllers;



import java.sql.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BloodBank;
import com.example.demo.entities.*;

import com.example.demo.entities.Hospital;
import com.example.demo.entities.HospitalRequestDummy;
import com.example.demo.entities.Receiver;
import com.example.demo.entities.ReceiverRequestDummy;
import com.example.demo.servicies.BloodBankService;
import com.example.demo.servicies.BloodProductService;
import com.example.demo.servicies.BloodRequestService;
import com.example.demo.servicies.ReceiverService;
import com.example.demo.servicies.UserService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BloodRequestController {

	
	@Autowired
	private BloodRequestService bloodrequetservice;
	
	@Autowired
	BloodBankService bbservice;
	
	@Autowired
	BloodProductService bpservice;
	
	@Autowired
	ReceiverService rservice;
	
	@Autowired
	UserService uservice;
	/*
	 * @PostMapping("/bloodrequesthospital") public BloodRequest
	 * createRequest(@RequestBody HospitalRequestDummy hospitaldummy) {
	 * 
	 * int bloodbankid=hospitaldummy.getBloodbankid(); int
	 * bloodproductid=hospitaldummy.getBloodproductid(); int
	 * hid=hospitaldummy.getHospitalid(); String status=hospitaldummy.getStatus();
	 * int qty=hospitaldummy.getQuantity(); // BloodRequest bloodrequest=new
	 * BloodRequest(); bloodrequest.setBloodbankid(new BloodBank(bloodbankid));
	 * bloodrequest.setHospital(new Hospital(hid)); bloodrequest.setQuantity(qty);
	 * bloodrequest.setStatus(status); bloodrequest.setBloodproduct(bloodproductid);
	 * 
	 * 
	 * 
	 * return bloodrequetservice.createRequest(bloodrequest);
	 * 
	 * 
	 * }
	 */
	 
	
	@PostMapping("/bloodrequest")
    public BloodRequest createRequest(@RequestBody UserDummy udummy) {
        System.out.println(udummy);
    	int bloodbankid=udummy.getBloodbankid();
    	BloodBank bb = bbservice.getById(bloodbankid);
    	
    	int bloodproductid=udummy.getBloodproduct();
    	BloodProduct bp = bpservice.getById(bloodproductid);
    	
    	
    	int loginid=udummy.getLoginid();
    	User r=uservice.getById(loginid);
    	
    	String status=udummy.getStatus();
    	
    	int qty=udummy.getQuantity();
    	//
    	
    	
    	BloodRequest bloodrequest=new BloodRequest();
    	bloodrequest.setBloodbankid(bb);
    	bloodrequest.setUser(r);
    	bloodrequest.setQuantity(qty);
    	
    	Date requestdate=udummy.getRequestdate();
    	bloodrequest.setRequestDate(requestdate);
    	
    	bloodrequest.setStatus(status);
    	bloodrequest.setBloodproduct(bp);
    	
    
    	
    	return bloodrequetservice.createRequest(bloodrequest);
    	
    	
    }
	
	/*
	 * @PostMapping("/acceptrequest/{hospitalId}") public void
	 * acceptRequest(@PathVariable int hospitalId) {
	 * bloodrequetservice.acceptRequest(hospitalId); }
	 * 
	 * @PostMapping("/rejectrequest/{hospitalId}") public void
	 * rejectRequest(@PathVariable int hospitalId) {
	 * bloodrequetservice.rejectRequest(hospitalId); }
	 * 
	 * @PostMapping("/acceptrequest/{receiverid}") public void
	 * acceptRequestR(@PathVariable int receiverid) {
	 * bloodrequetservice.acceptRequest(receiverid); }
	 * 
	 * @PostMapping("/rejectrequest/{receiverid}") public void
	 * rejectRequestR(@PathVariable int receiverid) {
	 * bloodrequetservice.rejectRequest(receiverid); }
	 * 
	 * @GetMapping("/receivers/bloodbank/{bloodBankId}") public List<BloodBank>
	 * getReceiversByBloodBankId(@PathVariable int bloodBankId) { return
	 * bloodrequetservice.getrequestedBloodBankId(bloodBankId); }
	 * 
	 * @GetMapping("/receivers/hospital/{hospitalId}") public List<Hospital>
	 * getReceiversByHospitalId(@PathVariable int hospitalId) { return
	 * bloodrequetservice.getRequestByHospitalId(hospitalId); }
	 * 
	 * @GetMapping("/receiver/{receiverId}") public List<Receiver>
	 * getReceiverByReceiverId(@PathVariable int receiverId) { return
	 * bloodrequetservice.getRequestByReceiverId(receiverId); }
	 */
    
	
}