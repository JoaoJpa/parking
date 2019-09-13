package com.itss.parking.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "TB_VEHICLE")
public class Vehicle {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)	
	@Column(name = "ID_VEHICLE")
	private Long id;
	
	@Column(name = "COLOR")
	private String color;
	
	@Column(name = "CAR_LICENSE_PLACE")
	private String carLicensePlace;
	
	@Column(name = "MODEL")
	private String model;
	
}
