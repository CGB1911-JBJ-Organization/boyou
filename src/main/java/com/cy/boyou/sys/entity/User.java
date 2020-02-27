package com.cy.boyou.sys.entity;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class User {
	private int user_id;
	private String user_account;
	private String user_pwd;
	private String user_name;
	private Date user_birthday;
	private int user_type;
	private int note_number;
	private int travel_number;
	private String user_sex;
}
