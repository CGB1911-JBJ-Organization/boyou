package com.cy.boyou.sys.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.cy.boyou.sys.entity.User;

@Mapper
public interface BoyouUserDao {

	/**
	 * 此方法用来根据用户名访问数据
	 *
	 */

	@Select("select * from user where userName=#{username}")
	User findUserByUserName(String username);

}
