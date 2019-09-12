package com.itss.parking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itss.parking.domain.request.LoginRequest;
import com.itss.parking.domain.request.CreateUserRequest;
import com.itss.parking.domain.result.LoginResult;
import com.itss.parking.service.ILoginService;

@RestController
@RequestMapping("login")
public class LoginController {
	
	@Autowired
	ILoginService loginService;
	
	@PostMapping(path = "")
	public LoginResult login(@RequestBody LoginRequest loginRequest) {
		return loginService.login(loginRequest);
	}
	
	@PostMapping(path = "/new")
	public LoginResult createNewUser(@RequestBody CreateUserRequest registerUserRequest) {
		return loginService.createNewUser(registerUserRequest);
	}

}
