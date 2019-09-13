package com.itss.parking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itss.parking.domain.Client;
import com.itss.parking.domain.request.CreateClientRequest;
import com.itss.parking.service.IClientService;

@RestController
@RequestMapping("client")
public class ClientController {
	
	@Autowired
	IClientService clientService;
	
	@GetMapping(path = "")
	public Iterable<Client> findClient() {
		return clientService.findClient();
	}
	
	@PostMapping(path = "")
	public Client createNewClient(@RequestBody CreateClientRequest registerNewVehicle) {
		return clientService.createNewClient(registerNewVehicle);
	}

}
