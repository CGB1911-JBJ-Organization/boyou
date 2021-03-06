package com.cy.boyou.sys.vo;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 此类用于将传给表现层的数据转化成json格式
 */
@Setter
@Getter
@ToString
public class JsonResult implements Serializable{
	private static final long serialVersionUID = 1152147947827081153L;
	private int state=1;//1 表示OK,0表示Error
	private String message="OK";
	/**借助此属性封装业务数据*/
	private Object data;//此属性一般用于存储业务层返回给控制层的数据
	
	public JsonResult(String message) {
		this.message=message;
	}
	public JsonResult(Object data){
		this.data=data;
	}
	public JsonResult(Throwable e) {
		this.state=0;
		this.message=e.getMessage();
	}
	public JsonResult() {
	}

	
}

