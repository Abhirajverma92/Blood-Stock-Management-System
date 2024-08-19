package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Receiver;

public interface ReceiverRepository extends JpaRepository<Receiver, Integer> {
	

}
