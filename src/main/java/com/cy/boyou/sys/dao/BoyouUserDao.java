package com.cy.boyou.sys.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cy.boyou.sys.entity.User;

@Mapper
public interface BoyouUserDao {

	/**
	 * 此方法用来根据用户名访问数据
	 *
	 */

	User findUserByUserName(String username);

}
