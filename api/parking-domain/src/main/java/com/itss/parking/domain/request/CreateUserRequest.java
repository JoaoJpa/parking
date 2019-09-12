package com.itss.parking.domain.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CreateUserRequest {

	private String newUser;
	private String newName;
	private String newPassword;
	private String confirmPassword;
}
