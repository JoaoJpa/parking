package com.itss.parking.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.itss.parking.domain.Client;
import com.itss.parking.domain.request.CreateClientRequest;
import com.itss.parking.repository.ClientRepository;
import com.itss.parking.service.IClientService;

@Service
@Transactional(isolation = Isolation.READ_UNCOMMITTED)
public class ClientServiceImpl implements IClientService {

	@Autowired
	ClientRepository clientRepository;
	
	@Override
	public Iterable<Client> findClient() {
		return clientRepository.findAll();
	}

	@Override
	public Client createNewClient(CreateClientRequest registerNewVehicle) {
		return clientRepository.save(Client.builder()
				.name(registerNewVehicle.getName())
				.cpf(registerNewVehicle.getCpf())
				.phone(registerNewVehicle.getCpf())
				.build());
	}

}
