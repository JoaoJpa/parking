package com.itss.parking.domain.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UpdateVehicleRequest {
	
	private Long id;
	private String carLicensePlace;
	private String model;
	private String color;
}