package com.itss.parking.service.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.itss.parking.domain.Parking;
import com.itss.parking.domain.request.CreateParkingRequest;
import com.itss.parking.domain.request.FinalizedParkingRequest;
import com.itss.parking.repository.ParkingRepository;
import com.itss.parking.service.IParkingService;

@Service
@Transactional(isolation = Isolation.READ_UNCOMMITTED)
public class ParkingServiceImpl implements IParkingService {
	
	@Autowired
	ParkingRepository parkingRepository;

	@Override
	public Iterable<Parking> findParking() {
		return parkingRepository.findAll();
	}

	@Override
	public Parking createNewParking(CreateParkingRequest registerNewParking) {
		return parkingRepository.save(Parking.builder()
				.vehicle(registerNewParking.getVehicle())
				.carYard(registerNewParking.getCarYard())
				.client(registerNewParking.getClient())
				.dateIn(new Date())
				.numberSpace(registerNewParking.getNumberSpace())
				.occupied(Boolean.TRUE)
				.finalized(Boolean.FALSE)
				.pay(Boolean.FALSE)
				.build());
	}

	@Override
	public Parking finalizedParking(FinalizedParkingRequest finalizedParkingRequest) throws ParseException {
		Optional<Parking> parking = parkingRepository.findById(finalizedParkingRequest.getIdParking());
		if(parking.isPresent()) {
			Parking parkingUpdate = parking.get();
			parkingUpdate.setFinalized(Boolean.TRUE);
			parkingUpdate.setOccupied(Boolean.FALSE);
			parkingUpdate.setDateOut(new SimpleDateFormat("yyyy-MM-dd").parse(finalizedParkingRequest.getDateOut()));
			parkingUpdate.setValue(finalizedParkingRequest.getValue());
			parkingUpdate.setDuration(finalizedParkingRequest.getDuration());
			return parkingRepository.save(parkingUpdate);
		} 
		
		return null;
	}

	
}
