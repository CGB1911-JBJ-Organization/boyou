package com.cy.boyou.sys.service;

import java.util.List;

import com.cy.boyou.sys.vo.TravelNotes;

public interface TravelNotesService {
	int insertTravelNotes(TravelNotes entity);
	
	List<TravelNotes> doFindTravelNotes();
}
