package com.example.demo.entities;



import java.sql.Date;

import lombok.AllArgsConstructor;
//import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class DonorRequestDummy {

	int bloodbankid;
	int donorid;
	String status;
	Date requestdate;
	/*
	public DonorRequestDummy(int bloodbankid, int donorid, String status, Date requestdate) {
		super();
		this.bloodbankid = bloodbankid;
		this.donorid = donorid;
		this.status = status;
		this.requestdate = requestdate;
		
	}
	*/
	
	
}
