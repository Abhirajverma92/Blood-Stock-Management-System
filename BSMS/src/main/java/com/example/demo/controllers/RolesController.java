package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Role;
//import com.example.demo.entities.Login;
//import com.example.demo.entities.Role;
//import com.example.demo.entities.Roles;
import com.example.demo.servicies.RolesService;

@RestController
public class RolesController {
	
	@Autowired
	RolesService rservice;
	
	@PostMapping("/insertroles")
	public Role insertRoles(@RequestBody Role r) {
		return rservice.save(r);
	}
	
}
