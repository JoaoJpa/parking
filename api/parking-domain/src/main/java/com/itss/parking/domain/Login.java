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
@Table(name = "TB_LOGIN")
public class Login {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)	
	@Column(name = "ID_LOGIN")
	private Long id;
	
	@Column(name = "NAME_USER")
	private String userName;
	
	@Column(name = "USER_ID")
	private String userId;
	
	@Column(name = "PASSWORD")
	private String password;

}
