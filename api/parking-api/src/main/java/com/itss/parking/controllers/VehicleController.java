package com.itss.parking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.itss.parking.domain.Vehicle;
import com.itss.parking.domain.request.CreateVehicleRequest;
import com.itss.parking.service.IVehicleService;

@RestController
@RequestMapping("vehicle")
public class VehicleController {
	
	@Autowired
	IVehicleService vehicleService;
	
	@GetMapping(path = "/one")
	public Vehicle findVehicle(@RequestParam("carPlace") String carPlace) {
		return vehicleService.findVehicle(carPlace.toUpperCase());
	}
	
	@PostMapping(path = "")
	public Vehicle createNewVehicle(@RequestBody CreateVehicleRequest registerNewVehicle) {
		return vehicleService.createNewVehicle(registerNewVehicle);
	}

}
