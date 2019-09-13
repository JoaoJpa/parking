package com.itss.parking.controllers;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itss.parking.domain.Parking;
import com.itss.parking.domain.request.CreateParkingRequest;
import com.itss.parking.domain.request.FinalizedParkingRequest;
import com.itss.parking.service.IParkingService;

@RestController
@RequestMapping("parking")
public class ParkingController {
	
	@Autowired
	IParkingService parkingService;
	
	@GetMapping(path = "")
	public Iterable<Parking> findParking() {
		return parkingService.findParking();
	}
	
	@PostMapping(path = "")
	public Parking createNewParking(@RequestBody CreateParkingRequest registerNewParking) {
		return parkingService.createNewParking(registerNewParking);
	}
	
	@PutMapping(path = "/finalized")
	public Parking finalizedParking(@RequestBody FinalizedParkingRequest finalizedParkingRequest) throws ParseException {
		return parkingService.finalizedParking(finalizedParkingRequest);
	}

}
