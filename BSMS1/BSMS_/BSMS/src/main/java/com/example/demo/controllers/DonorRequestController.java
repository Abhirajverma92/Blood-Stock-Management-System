package com.example.demo.controllers;




import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BloodBank;
import com.example.demo.entities.Donor;
import com.example.demo.entities.DonorRequest;
import com.example.demo.entities.DonorRequestDummy;
import com.example.demo.servicies.DonorRequestService;

//import lombok.Data;

//import org.springframework.http.HttpStatus;
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class DonorRequestController {

    @Autowired
    private DonorRequestService donorRequestService;
    
  //  @PostMapping("/blood-bank")
    @PostMapping("/donor-request")
    public DonorRequest createRequest(@RequestBody DonorRequestDummy donordummy) {
       
    	int did =donordummy.getBloodbankid();
    	int donorid=donordummy.getDonorid();
    	Date redate=donordummy.getRequestdate();
    	String status=donordummy.getStatus();
        
    	DonorRequest donorrequest=new DonorRequest();
    	donorrequest.setBloodBank(new BloodBank(did));
    	donorrequest.setDonor(new Donor(donorid));
    	donorrequest.setRequestDate(redate);
    	donorrequest.setStatus(status);
    	
    	
    	return donorRequestService.createRequest(donorrequest);
    	
    	
    }

    /*@PostMapping("/accept/{donorId}")
    public ResponseEntity<Void> acceptRequest(@PathVariable int donorId) {
        donorRequestService.acceptRequest(donorId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/reject/{donorId}")
    public ResponseEntity<Void> rejectRequest(@PathVariable int donorId) {
        donorRequestService.rejectRequest(donorId);
        return new ResponseEntity<>(HttpStatus.OK);
    }*/
    
    
}



