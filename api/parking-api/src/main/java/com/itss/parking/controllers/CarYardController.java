package com.itss.parking.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itss.parking.domain.CarYard;
import com.itss.parking.domain.request.CreateCarYardRequest;
import com.itss.parking.domain.result.CarYardResult;
import com.itss.parking.service.ICarYardService;

@RestController
@RequestMapping("car-yard")
public class CarYardController {
	
	@Autowired
	private ICarYardService carYardService;
	
	@GetMapping(path = "")
	public List<CarYardResult> login() {
		return carYardService.findAll();
	}
	
	@PostMapping(path = "")
	public CarYard createNewCarYard(@RequestBody CreateCarYardRequest createCarYardRequest) {
		return carYardService.createNewCarYard(createCarYardRequest);
	}
}
