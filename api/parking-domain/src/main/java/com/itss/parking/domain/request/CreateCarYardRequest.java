package com.itss.parking.domain.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CreateCarYardRequest {

	private String description;
	private Double rate;
	private Long carSpaces;

}
