package com.cy.boyou.sys.entity;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 门票信息
 * @author 801
 *
 */
@Setter
@Getter
@ToString
public class Ticket {
	private Integer ticketsId;
	private Integer userId;
	private String ticketsType;//门票类型
	private String ticketsPrice;
	private String attractionsId;//景区id

}
