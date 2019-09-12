package com.itss.parking.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.itss.parking.domain.CarYard;

@Repository
public interface CarYardRepository extends PagingAndSortingRepository<CarYard, Long>, JpaSpecificationExecutor<CarYard>{

}
