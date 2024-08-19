package com.example.demo.servicies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.User;
import com.example.demo.repositories.LoginRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class LoginService {

	@Autowired
	LoginRepo rlogin;

	public User save(User l) {
		return rlogin.save(l);
	}

	public List<User> getAllSubject() {
		// TODO Auto-generated method stub
		return rlogin.findAll();
	}
}
