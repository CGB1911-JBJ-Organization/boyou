package com.cy.boyou.sys.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.cy.boyou.sys.entity.User;

@Mapper
public interface BoyouHomePageDao {
	
	/**
	 * 对用户输入的user_id值进行查询操作并把值对象封装到user类
	 * @param userId 输入的user_id值
	 * @return 返回值用user类进行封装
	 */
	@Select("select * from user where user_id=#{userId}")
	User findSelectId(Integer userId);  
	
	/**
	 * 基于用户输入的信息(更新后的)进行修改操作
	 * @param 用户信息
	 * @return 影响行数
	 */
	int findUpdateId(User entity);
}
