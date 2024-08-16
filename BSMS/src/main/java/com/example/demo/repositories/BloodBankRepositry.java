package com.example.demo.repositories;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.BloodBank;


@Repository
public interface BloodBankRepositry extends JpaRepository<BloodBank, Integer> {

    @Query(value = "SELECT * FROM bloodbank WHERE cityid = :cityid", nativeQuery = true)
    List<BloodBank> getBloodBankByCity(@Param("cityid") int cityid);
}
	