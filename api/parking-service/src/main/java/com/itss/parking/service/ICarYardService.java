package com.itss.parking.service;

import java.util.List;

import com.itss.parking.domain.CarYard;
import com.itss.parking.domain.request.CreateCarYardRequest;
import com.itss.parking.domain.result.CarYardResult;

public interface ICarYardService {

	List<CarYardResult> findAll();

	CarYard createNewCarYard(CreateCarYardRequest createCarYardRequest);

}
