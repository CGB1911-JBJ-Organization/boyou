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
		private Integer userId;//id
		private String userAccount;//用户名
		private String userPwd;//密码
		private String userSalt;//盐值
		private String userName;//昵称
		private Date birthday;//生日
		private Integer userType;//用户类型
		private Integer noteNumber;//游记数量
		private Integer tNumber;//游记数量
		private String userSex;//用户性别
		private String userAddress;
		private String userEmail;
		private String headImg;//头像地址
		private Integer travelNumber;//景区ID

	
}
