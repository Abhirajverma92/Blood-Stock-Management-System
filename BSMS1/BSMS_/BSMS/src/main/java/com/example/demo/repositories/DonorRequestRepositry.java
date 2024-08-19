package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
//import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.DonorRequest;



@Repository
public interface DonorRequestRepositry extends JpaRepository<DonorRequest, Integer> {

	/*@Transactional
    @Modifying
    @Query("UPDATE DonorRequest d SET d.status = 'accepted' WHERE d.donor.id = ?1")
    void updateStatusToAccepted(int donorId);

    @Transactional
    @Modifying
    @Query("UPDATE DonorRequest d SET d.status = 'rejected' WHERE d.donor.id = ?1")
    void updateStatusToRejected(int donorId);
    */
}
