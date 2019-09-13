package com.itss.parking.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

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
@Table(name = "TB_PARKING")
public class Parking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)	
	@Column(name = "ID_PARKING")
	private Long id;
	
	@OneToOne
	@JoinColumn(name = "CAR_YARD")
	private CarYard carYard;
	
	@OneToOne
	@JoinColumn(name = "CLIENT")
	private Client client;
	
	@OneToOne
	@JoinColumn(name = "VEHICLE")
	private Vehicle vehicle;
	
	@Column(name = "DATE_IN")
	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", locale = "pt-BR", timezone = "Brazil/East")
	private Date dateIn;
	
	@Column(name = "DATE_OUT")
	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", locale = "pt-BR", timezone = "Brazil/East")
	private Date dateOut;
	
	@Column(name = "VALUE")
	private Double value;
	
	@Column(name = "DURATION")
	private Double duration;
	
	@Column(name = "OCCUPIED")
	private Boolean occupied;
	
	@Column(name = "FINALIZED")
	private Boolean finalized;
	
	@Column(name = "PAY")
	private Boolean pay;
	
	@Column(name = "NUMBER_SPACE")
	private Long numberSpace;

}
