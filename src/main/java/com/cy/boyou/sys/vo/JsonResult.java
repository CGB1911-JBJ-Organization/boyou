package com.cy.boyou.sys.vo;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/*
 * 此类用于将传给表现层的数据转化成json格式
 */
@Getter
@Setter
@ToString
public class JsonResult implements Serializable{

	private static final long serialVersionUID = 551819891976247011L;
	
	/**状态码*/
	private int state=1;//1表示SUCCESS,0表示ERROR
	/**状态信息*/
	private String message="ok";
	/**正确数据*/
	private Object data;
	public JsonResult() {}
	
	public JsonResult(String message){
		this.message=message;
	}
	public JsonResult(String message, Integer state){
		this.message=message;
		this.state=state;
	}
	/**一般查询时调用，封装查询结果*/
	public JsonResult(Object data) {
		this.data=data;
	}
	public JsonResult(Object data,int state) {
		this.data=data;
		this.state=state;
	}
}
