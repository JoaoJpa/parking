package com.itss.parking.domain.request;

import com.itss.parking.domain.CarYard;
import com.itss.parking.domain.Client;
import com.itss.parking.domain.Vehicle;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CreateParkingRequest {
	private Vehicle vehicle;
	private CarYard carYard;
	private Client client;
	private Long numberSpace;
}
