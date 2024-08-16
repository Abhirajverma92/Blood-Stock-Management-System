package com.example.demo.servicies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.BloodBank;
import com.example.demo.entities.BloodProduct;
import com.example.demo.repositories.BloodBankRepositry;
import com.example.demo.repositories.BloodProductRepositry;

@Service
@Transactional
public class BloodProductService {

	@Autowired
	private BloodProductRepositry bprepo;
	
	
	public BloodProduct getById(int id) {
		return bprepo.findById(id).get();
	}
	
}