package com.itss.parking.service;

import java.text.ParseException;

import com.itss.parking.domain.Parking;
import com.itss.parking.domain.request.CreateParkingRequest;
import com.itss.parking.domain.request.FinalizedParkingRequest;

public interface IParkingService {

	Iterable<Parking> findParking();

	Parking createNewParking(CreateParkingRequest registerNewParking);

	Parking finalizedParking(FinalizedParkingRequest finalizedParkingRequest) throws ParseException;


}
