package com.cy.boyou.sys.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
/**
 * 景区信息
 * @author 801
 *
 */
@Setter
@Getter
@ToString
public class TravelAttraction {
	private Integer travelId;
	private String travelName;
	private String travelTheme;//景区主题
	private String travelImg;
	private String travel_addr;
	private String bookingNotice;//预定须知
	private String favoriteNumber;//收藏次数

}
