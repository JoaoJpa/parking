package com.itss.parking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.itss.parking.domain.CarYard;
import com.itss.parking.domain.Parking;

@Repository
public interface ParkingRepository extends PagingAndSortingRepository<Parking, Long>, JpaSpecificationExecutor<Parking>{

	@Query("select parking from Parking parking "
		 + "where "
		 + " parking.occupied is true and "
		 + " parking.finalized is false and "
		 + " parking.carYard = :carYard")
	List<Parking> findParkingOccupedNow(@Param("carYard") CarYard carYard);

}
