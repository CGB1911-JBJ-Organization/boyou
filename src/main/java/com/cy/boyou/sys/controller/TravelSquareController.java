package com.cy.boyou.sys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.cy.boyou.sys.service.TravelNotesService;
import com.cy.boyou.sys.vo.TravelSquareNotes;

@Controller
@RequestMapping("/travelSquare/")
public class TravelSquareController {
	
	@Autowired
	private TravelNotesService travelNotesService;
	
	@RequestMapping("dofindTravelNotes")
	public String dofindTravelNotes(Model model) {
		List<TravelSquareNotes> list = travelNotesService.findToTravelSquare();
		model.addAttribute("travelNotesList", list);
		return "sys/travelSquare_list";
	}
	
}
