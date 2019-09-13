package com.itss.parking.service;

import com.itss.parking.domain.Vehicle;
import com.itss.parking.domain.request.CreateVehicleRequest;

public interface IVehicleService {

	Vehicle findVehicle(String carPlace);

	Vehicle createNewVehicle(CreateVehicleRequest registerNewVehicle);

}
