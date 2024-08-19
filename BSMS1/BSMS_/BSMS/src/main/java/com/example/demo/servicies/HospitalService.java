package com.example.demo.servicies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Hospital;
import com.example.demo.entities.User;
import com.example.demo.repositories.HospitalRepo;
import com.example.demo.repositories.LoginRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class HospitalService {

	@Autowired
	HospitalRepo rhospital;

	public Hospital save(Hospital h) {
		// TODO Auto-generated method stub
		return rhospital.save(h);
	}

	public List<Hospital> getAllHospitals() {
		// TODO Auto-generated method stub
		return rhospital.findAll();
	}
	
	public Hospital getById(int id) {
		return rhospital.findById(id).get();
	}
}
