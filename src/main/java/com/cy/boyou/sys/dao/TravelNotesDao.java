package com.cy.boyou.sys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.cy.boyou.sys.entity.Travel;
import com.cy.boyou.sys.vo.TravelNotes;

@Mapper
public interface TravelNotesDao {
	
	int insertTravelNotes(Travel entity);
	
	List<TravelNotes> doFindTravelNotes(Integer userId);
}
