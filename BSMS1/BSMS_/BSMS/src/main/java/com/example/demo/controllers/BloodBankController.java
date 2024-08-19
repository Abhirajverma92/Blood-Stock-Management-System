package com.example.demo.controllers;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BloodBank;
import com.example.demo.servicies.BloodBankService;





@RestController
public class BloodBankController {
	
	
	@Autowired
	private BloodBankService bloodbankservice;
	@GetMapping("/blood-bank/{cityid}")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<BloodBank> getBloodBankByCity(@PathVariable(value = "cityid") int cityid){
		return bloodbankservice.getBloodBankByLocation(cityid);
	}
	
	
}
