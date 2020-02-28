package com.cy.boyou.sys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cy.boyou.sys.service.TravelNotesService;
import com.cy.boyou.sys.vo.JsonResult;
import com.cy.boyou.sys.vo.TravelNotes;

@RestController
@RequestMapping("/travelNotes/")
public class TravelNotesController {
	
	@Autowired
	private TravelNotesService travelNotesService;
	
	@RequestMapping("doInsertTravelNotes")
	public JsonResult doInsertTravelNotes(TravelNotes entitys) {
		System.out.println("测试游记");
		System.out.println(entitys);
		travelNotesService.insertTravelNotes(entitys);
		return new JsonResult("保存成功");
	}
}
