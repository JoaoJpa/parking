package com.itss.parking.service;

import com.itss.parking.domain.Vehicle;
import com.itss.parking.domain.request.CreateVehicleRequest;
import com.itss.parking.domain.request.UpdateVehicleRequest;

public interface IVehicleService {

	Vehicle findVehicle(String carPlace);

	Vehicle createNewVehicle(CreateVehicleRequest registerNewVehicle);

	Vehicle updateVehicle(UpdateVehicleRequest updateVehicleRequest);

}
