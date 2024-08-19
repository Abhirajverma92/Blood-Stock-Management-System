package com.example.demo.servicies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.*;

import com.example.demo.repositories.RolesRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class RolesService {

	@Autowired
	RolesRepo rrepo;

	public Role save(Role r) {
		// TODO Auto-generated method stub
		return rrepo.save(r);
	}

	
}
