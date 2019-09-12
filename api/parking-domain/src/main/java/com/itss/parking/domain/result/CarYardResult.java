package com.itss.parking.domain.result;

import java.util.List;

import com.itss.parking.domain.CarYard;
import com.itss.parking.domain.Parking;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CarYardResult {
	
	private CarYard carYard;
	private List<Parking> parkingInCarYard;
}
