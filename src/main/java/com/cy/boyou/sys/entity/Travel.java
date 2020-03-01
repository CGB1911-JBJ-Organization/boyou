package com.cy.boyou.sys.entity;

import java.io.Serializable;
import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class Travel implements Serializable{
	
	
	private static final long serialVersionUID = 3233411459462277411L;
	private Integer notesId;//游记ID
	private Integer userId;//用户ID
	private String travelName;//游记标题名称
	private Date createdTime;//游记创建时间
	private Date modifiedTime;//游记修改时间
	private Integer peopleCount;//游玩人数
	private Integer loveCount;//点赞数
	private Integer averagePay;//人均花费
	private String backgroundImgUrl;//游记背景图片目录路径
}
