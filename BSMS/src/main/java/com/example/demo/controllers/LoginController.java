package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.servicies.LoginService;

@RestController
public class LoginController {
	
	@Autowired
	private LoginService slogin;
	
	@PostMapping("/insertlogin")
	public User insertlogin(@RequestBody User l) {
		return slogin.save(l);
	}
	
	@GetMapping("/getalllogin")
	public List<User> getAlllogin(){
		return slogin.getAllSubject();
	}
}
