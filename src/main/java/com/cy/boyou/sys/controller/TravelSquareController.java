package com.cy.boyou.sys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cy.boyou.sys.service.TravelNotesService;
import com.cy.boyou.sys.vo.JsonResult;
import com.cy.boyou.sys.vo.TravelNotes;

@RestController
@RequestMapping("/travelSquare/")
public class TravelSquareController {
	
	@Autowired
	private TravelNotesService travelNotesService;
	
	public JsonResult dofindTravelNotes() {
		List<TravelNotes> list = travelNotesService.doFindTravelNotes();
		return new JsonResult(list);
	}
	
}
