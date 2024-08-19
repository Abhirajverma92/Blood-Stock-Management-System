package com.example.demo.servicies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.BloodRequest;
//import com.example.demo.entities.DonorRequest;
import com.example.demo.repositories.BloodRequestRepositry;

@Service
@Transactional
public class BloodRequestService {

	
	@Autowired
	private BloodRequestRepositry bloodrequestrepo;
	
	public BloodRequest createRequest( BloodRequest br) {
    	return bloodrequestrepo.save(br);
    }
	
	/*public void acceptRequest(int donorId) {
        bloodrequestrepo.updateStatusToAccepted(donorId);
    }

    public void rejectRequest(int donorId) {
        bloodrequestrepo.updateStatusToRejected(donorId);
    }*/
}
