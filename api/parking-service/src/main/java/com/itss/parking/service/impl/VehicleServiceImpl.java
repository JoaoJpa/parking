package com.itss.parking.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.itss.parking.domain.Vehicle;
import com.itss.parking.domain.request.CreateVehicleRequest;
import com.itss.parking.repository.VehicleRepository;
import com.itss.parking.service.IVehicleService;

@Service
@Transactional(isolation = Isolation.READ_UNCOMMITTED)
public class VehicleServiceImpl implements IVehicleService{
	
	@Autowired
	private VehicleRepository vehicleRepository;

	@Override
	public Vehicle findVehicle(String carPlace) {
		return vehicleRepository.findByCarLicensePlace(carPlace);
	}

	@Override
	public Vehicle createNewVehicle(CreateVehicleRequest registerNewVehicle) {
		return vehicleRepository.save(Vehicle.builder()
				.carLicensePlace(registerNewVehicle.getCarPlace().toUpperCase())
				.color(registerNewVehicle.getColor())
				.model(registerNewVehicle.getModel())
				.build());
	}
}
