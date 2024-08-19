package com.example.demo.controllers;

/*

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//limport org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BloodBank;
import com.example.demo.entities.Donor;
//import com.example.demo.entities.Request;
import com.example.demo.servicies.BloodBankService;
import com.example.demo.servicies.DonorService;
//import com.example.demo.servicies.DonorService;


@RestController
@RequestMapping("/api/donors")
@CrossOrigin(origins="http://localhost:3000")
public class DonorController {

	/*@Autowired
    private BloodBankService bloodBankService;

    @GetMapping("/bloodbanks/{cityId}")
    public ResponseEntity<List<BloodBank>> getBloodBanks(@PathVariable int cityId) {
        List<BloodBank> bloodBanks = bloodBankService.getBloodBanksByCityId(cityId);
        return ResponseEntity.ok(bloodBanks);
    }*/
	/*
	@GetMapping("/donor")
	@Autowired
	private DonorService donorservice;
	public List<Donor> getAllDonors() {
		System.out.println("getAll");
		return donorservice.findAll();
	}*/
	
	/*@GetMapping("/{donorId}/available-bloodbanks")
    public ResponseEntity<List<BloodBank>> getBloodBanksForDonation(@PathVariable int donorId) {
        try {
            List<BloodBank> bloodBanks = donorservice.getBloodBanksForDonor(donorId);
            return ResponseEntity.ok(bloodBanks);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build(); // Return 404 if donor not found
        }
    }
    */
	/*@PostMapping("/select-city")
    public String handleCitySelection(@RequestParam("cityid") int cityId, Module model) {
        List<BloodBank> bloodBanks = donorservice.getBloodBanksForCity(cityId);
        model.addAttribute("bloodBanks", bloodBanks);
        return "blood-bank-list"; // Thymeleaf template name
    }
	
	@Autowired
	private DonorService donorservice;
	
	@PostMapping("/requestblood")
	public Request addNewBloodRequest(@RequestBody RequestDummy request) throws Exception
	{
		return donorservice.saveBloodRequest(request);
	}
	
	
}
*/
	
	

