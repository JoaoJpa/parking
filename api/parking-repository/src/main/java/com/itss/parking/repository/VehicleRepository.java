package com.itss.parking.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.itss.parking.domain.Vehicle;

@Repository
public interface VehicleRepository extends PagingAndSortingRepository<Vehicle, Long>, JpaSpecificationExecutor<Vehicle>{

	Vehicle findByCarLicensePlace(String carPlace);

}
