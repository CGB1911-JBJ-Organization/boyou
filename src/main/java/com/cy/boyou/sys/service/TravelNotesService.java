package com.cy.boyou.sys.service;

import java.util.List;

import com.cy.boyou.sys.vo.TravelNotes;
import com.cy.boyou.sys.vo.TravelSquareNotes;

public interface TravelNotesService {
	int insertTravelNotes(TravelNotes entity);
	
	List<TravelNotes> doFindTravelNotes();
	
	List<TravelSquareNotes> findToTravelSquare();
}
