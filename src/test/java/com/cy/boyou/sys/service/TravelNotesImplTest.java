package com.cy.boyou.sys.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TravelNotesImplTest {
	
	@Autowired
	private TravelNotesService travelNotesService;
	
	@Test
	public void test() {
		travelNotesService.doFindTravelNotes();
		//travelNotesService.findToTravelSquare();
	}
}
