package com.example.demo.servicies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Receiver;
import com.example.demo.repositories.ReceiverRepository;

@Service
public class ReceiverService {
	
	@Autowired
	ReceiverRepository rrepo;
	
	
	public Receiver getById(int id) {
		return rrepo.findById(id).get();
	}
	

}
