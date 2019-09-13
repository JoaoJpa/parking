package com.itss.parking.service;

import com.itss.parking.domain.Client;
import com.itss.parking.domain.request.CreateClientRequest;

public interface IClientService {

	Iterable<Client> findClient();

	Client createNewClient(CreateClientRequest registerNewVehicle);


}
