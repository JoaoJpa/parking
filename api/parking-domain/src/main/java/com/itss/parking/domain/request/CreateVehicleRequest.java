package com.itss.parking.domain.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CreateVehicleRequest {
	private String carPlace;
	private String color;
	private String model;
}
