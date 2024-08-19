package com.example.demo.servicies;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepoistory;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

	@Autowired
	UserRepoistory urepo;


//	public User getById(int userid) {
//		// TODO Auto-generated method stub
//		return urepo.findById(userid).get();
//	}

	public User getById(int loginid) {
		return urepo.findById(loginid).get();
    }
	
	
}

