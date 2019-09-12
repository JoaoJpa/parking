package com.itss.parking.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.itss.parking.domain.Login;

@Repository
public interface LoginRepository extends PagingAndSortingRepository<Login, Long>, JpaSpecificationExecutor<Login>{

	Login findByUserId(String newUser);

}
