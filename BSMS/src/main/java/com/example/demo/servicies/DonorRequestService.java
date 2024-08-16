package com.example.demo.servicies;

//import java.sql.Date;
//import java.time.LocalDate;
//import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
//import org.springframework.web.bind.annotation.RequestBody;

//import com.example.demo.entities.BloodBank;
//import com.example.demo.entities.Donor;
import com.example.demo.entities.DonorRequest;
//import com.example.demo.entities.DonorRequestDummy;
//import com.example.demo.entities.Request;
//import com.example.demo.repositories.BloodBankRepositry;
import com.example.demo.repositories.DonorRequestRepositry;
//import com.example.demo.repositories.RequestRepositry;

@Service
@Transactional
public class DonorRequestService {

	
	    @Autowired
	    private DonorRequestRepositry donorRequestRepository;

	    /*public DonorRequest createRequest(int bloodBankId, int donorId, String status) {
	        if (!status.equals("pending") && !status.equals("rejected") && !status.equals("accepted")) {
	            throw new IllegalArgumentException("Invalid status: " + status);
	        }

	        DonorRequest donorRequest = new DonorRequest();
	        donorRequest.setRequestDate(Date.valueOf(LocalDate.now()));
	        donorRequest.setBloodBank(new BloodBank(bloodBankId)); 
	        donorRequest.setDonor(new Donor(donorId)); 
	        donorRequest.setStatus(status);

	        return donorRequestRepository.save(donorRequest);
	    }
     
	    public void acceptRequest(int donorId) {
	        donorRequestRepository.updateStatusToAccepted(donorId);
	    }

	    public void rejectRequest(int donorId) {
	        donorRequestRepository.updateStatusToRejected(donorId);
	    }
       */
	    public DonorRequest createRequest( DonorRequest dr) {
	    	return donorRequestRepository.save(dr);
	    }
	    
	   /* public void acceptRequest(int donorId) {
	        donorRequestRepository.updateStatusToAccepted(donorId);
	    }

	    public void rejectRequest(int donorId) {
	        donorRequestRepository.updateStatusToRejected(donorId);
	    }*/

}
