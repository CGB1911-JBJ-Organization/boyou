package com.cy.boyou.sys.dao;

import org.apache.ibatis.annotations.Mapper;

import com.cy.boyou.sys.entity.Travel;

@Mapper
public interface TravelNotesDao {
	
	int insertTravelNotes(Travel entity);
}
