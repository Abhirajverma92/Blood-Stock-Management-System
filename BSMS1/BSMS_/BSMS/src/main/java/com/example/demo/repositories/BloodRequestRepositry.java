package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
//import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.BloodBank;
import com.example.demo.entities.BloodRequest;

import com.example.demo.entities.Hospital;
import com.example.demo.entities.Receiver;
import com.example.demo.entities.User;

@Repository
public interface BloodRequestRepositry extends JpaRepository<BloodRequest, Integer> {

	/*
	@Transactional
    @Modifying
    @Query("UPDATE BloodRequest b SET b.status = 'accepted' WHERE b.hospital.hospitalid = ?1")
    void updateStatusToAcceptedH(int hospitalId);

    @Transactional
    @Modifying
    @Query("UPDATE BloodRequest b SET b.status = 'rejected' WHERE b.hospital.hospitalid  = ?1")
    void updateStatusToRejectedH(int hospitalId);
    
    

	@Transactional
    @Modifying
    @Query("UPDATE BloodRequest b SET b.status = 'accepted' WHERE b.receiver.receiverid = ?1")
    void updateStatusToAcceptedR(int receiverId);

    @Transactional
    @Modifying
    @Query("UPDATE BloodRequest b SET b.status = 'rejected' WHERE b.receiver.receiverid  = ?1")
    void updateStatusToRejectedR(int receiverId);
    
    
    @Query("SELECT br.bloodbankid FROM BloodRequest br WHERE br.bloodbankid.bloodbankid = ?1")
    List<BloodBank> findRequestForBloodBankId(int bloodbankid);

    @Query("SELECT br.hospital FROM BloodRequest br WHERE br.hospital.hospitalid = ?1")
    List<Hospital> findReceiversByHospitalId(int hospitalId);@Transactional
    @Modifying
    @Query("UPDATE BloodRequest b SET b.status = 'accepted' WHERE b.hospital.hospitalid = ?1")
    void updateStatusToAcceptedH(int hospitalId);

    @Query("SELECT br.receiver FROM BloodRequest br WHERE br.receiver.receiverid = ?1")
    List<Receiver> findReceiverByReceiverId(int receiverId);
    */
    
	 
    

    
}