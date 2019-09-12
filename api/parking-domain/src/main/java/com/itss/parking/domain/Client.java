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
@Table(name = "TB_CLIENT")
public class Client {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)	
	@Column(name = "ID_CLIENT")
	private Long id;
	
	@Column(name = "NAME")
	private String name;
	
	@Column(name = "CPF")
	private String cpf;
	
	@Column(name = "PHONE")
	private String phone;
	
}
