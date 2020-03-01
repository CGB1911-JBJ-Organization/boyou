package com.cy.boyou.sys.service.impl;

import org.springframework.stereotype.Service;

import com.cy.boyou.sys.dao.BoyouUserDao;
import com.cy.boyou.sys.entity.User;
import com.cy.boyou.sys.service.BoyouUserService;

@Service
public class BoyouUserServiceImpl implements BoyouUserService{
	
	private BoyouUserDao boyouUserDao;

	@Override
	public User findUserByUserName(String username) {
		User user = boyouUserDao.findUserByUserName(username);
		return user;
	}
	
	
}
