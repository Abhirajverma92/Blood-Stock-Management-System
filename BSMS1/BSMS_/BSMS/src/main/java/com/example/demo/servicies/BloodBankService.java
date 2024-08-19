package com.example.demo.servicies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.BloodBank;
import com.example.demo.repositories.BloodBankRepositry;

@Service
@Transactional
public class BloodBankService {

	@Autowired
	private BloodBankRepositry bloodbankrepositry;
	
	public List<BloodBank>  getBloodBankByLocation(int cityid){
		System.out.println(cityid);
		return bloodbankrepositry.getBloodBankByCity(cityid);
	}
	
	
	public BloodBank getById(int id) {
		return bloodbankrepositry.findById(id).get();
	}
	
}

