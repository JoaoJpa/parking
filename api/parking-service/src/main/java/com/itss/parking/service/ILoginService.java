package com.itss.parking.service;

import com.itss.parking.domain.request.LoginRequest;
import com.itss.parking.domain.request.CreateUserRequest;
import com.itss.parking.domain.result.LoginResult;


public interface ILoginService {

	LoginResult login(LoginRequest loginRequest);

	LoginResult createNewUser(CreateUserRequest registerUserRequest);
}
