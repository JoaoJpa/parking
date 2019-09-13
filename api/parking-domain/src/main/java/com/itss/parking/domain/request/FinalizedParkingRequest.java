package com.itss.parking.domain.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class FinalizedParkingRequest {
	private Long idParking;
	private Double value;
	private Double duration;
	private String dateOut;
}
