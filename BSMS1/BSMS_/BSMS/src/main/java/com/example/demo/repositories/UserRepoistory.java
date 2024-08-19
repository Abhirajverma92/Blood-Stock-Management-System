package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.BloodBank;
import com.example.demo.entities.User;

@Repository
public interface UserRepoistory extends JpaRepository<User, Integer> {
	/*
	 * @Query(value="select userid from user") public List<User> findByLoginId(int
	 * loginId);
	 */
	
}
