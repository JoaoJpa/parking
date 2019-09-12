package com.itss.parking.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.itss.parking.domain.CarYard;
import com.itss.parking.domain.request.CreateCarYardRequest;
import com.itss.parking.domain.result.CarYardResult;
import com.itss.parking.repository.CarYardRepository;
import com.itss.parking.repository.ParkingRepository;
import com.itss.parking.service.ICarYardService;

@Service
@Transactional(isolation = Isolation.READ_UNCOMMITTED)
public class CarYardServiceImpl implements ICarYardService {

	@Autowired
	private CarYardRepository carYardRepository;
	
	@Autowired
	private ParkingRepository parkingRepository;

	@Override
	public List<CarYardResult> findAll() {
		List<CarYardResult> listResult = new ArrayList<>();
		carYardRepository.findAll().iterator().forEachRemaining(carYard -> {
			listResult.add(CarYardResult.builder()
					.carYard(carYard)
					.parkingInCarYard(parkingRepository.findParkingOccupedNow(carYard))
					.build());
		});	
		return listResult;
	}

	@Override
	public CarYard createNewCarYard(CreateCarYardRequest createCarYardRequest) {
		return carYardRepository.save(
				CarYard.builder()
				.description(createCarYardRequest.getDescription())
				.rate(createCarYardRequest.getRate())
				.carSpaces(createCarYardRequest.getCarSpaces())
				.build());
	}
}
