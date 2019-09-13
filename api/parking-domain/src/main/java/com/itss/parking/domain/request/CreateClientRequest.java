package com.itss.parking.domain.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CreateClientRequest {

	private String name;
	private String cpf;
	private String phone;

}
