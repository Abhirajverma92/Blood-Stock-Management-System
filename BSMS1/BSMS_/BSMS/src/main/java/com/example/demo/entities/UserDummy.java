package com.example.demo.entities;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDummy {

	
	int loginid;
	int quantity;
	String status;
	
	int bloodproduct;
	
	int bloodbankid;
	Date requestdate;
	@Override
	public String toString() {
		return "UserDummy [loginid=" + loginid + ", quantity=" + quantity + ", status=" + status + ", bloodproduct="
				+ bloodproduct + ", bloodbankid=" + bloodbankid + ", requestdate=" + requestdate + "]";
	}
	
	

	
	
	

	
}
