package com.itss.parking.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.itss.parking.domain.Vehicle;
import com.itss.parking.domain.request.CreateVehicleRequest;
import com.itss.parking.domain.request.UpdateVehicleRequest;
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

	@Override
	public Vehicle updateVehicle(UpdateVehicleRequest updateVehicleRequest) {
		
		Optional<Vehicle> vehicle = vehicleRepository.findById(updateVehicleRequest.getId());
		
		if(!vehicle.isPresent()) {
			return null;
		}
		
		Vehicle vehicleUpdate = setVehicleUpdate(updateVehicleRequest, vehicle.get());
		return vehicleRepository.save(vehicleUpdate);
	}

	private Vehicle setVehicleUpdate(UpdateVehicleRequest updateVehicleRequest, Vehicle vehicle) {
		Vehicle vehicleUpdate = vehicle;
		vehicleUpdate.setColor(updateVehicleRequest.getColor());
		vehicleUpdate.setColor(updateVehicleRequest.getModel());
		return vehicleUpdate;
	}
}
