package com.cy.boyou.sys.service;

import org.springframework.stereotype.Service;

import com.cy.boyou.sys.entity.User;

public interface BoyouUserService {
	
	User findUserByUserName(String username);
}
