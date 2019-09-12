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
@Table(name = "TB_CARYARD")
public class CarYard {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)	
	@Column(name = "ID_CARYARD")
	private Long id;
	
	@Column(name = "DESCRIPTION")
	private String description;
	
	@Column(name = "RATE")
	private Double rate;
	
	@Column(name = "CAR_SPACES")
	private Long carSpaces;

}
