package com.cy.boyou.sys.entity;

import java.io.Serializable;
import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class User implements Serializable{
		private static final long serialVersionUID = 5053909074079096841L;
		private Integer userId;
		private String userAccount;
		private String userPwd;
		private String userNanme;
		private String userSalt;//盐值
		private String userEmail;
		private String userAddress;
		private Integer noteNumber;//游记数量
		private Integer travelNumber;
		private Date birthday;
		private String headImg;//头像地址
		private String userSex;

	
}
