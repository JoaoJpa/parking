package com.itss.parking.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.itss.parking.domain.Client;

@Repository
public interface ClientRepository extends PagingAndSortingRepository<Client, Long>, JpaSpecificationExecutor<Client>{

}
