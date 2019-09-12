package com.itss.parking.domain.result;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class LoginResult {
	
	private Boolean loginOk;
	private String error;
	private String user;
	private String name;

}
