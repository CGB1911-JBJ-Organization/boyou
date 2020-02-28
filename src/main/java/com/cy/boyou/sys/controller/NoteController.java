package com.cy.boyou.sys.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cy.boyou.sys.entity.Note;
import com.cy.boyou.sys.service.NoteService;
import com.cy.boyou.sys.service.TravelNotesService;
import com.cy.boyou.sys.vo.JsonResult;
import com.cy.boyou.sys.vo.TravelNotes;



@RestController 
@RequestMapping("/note/")
public class NoteController {
	
	@Autowired
	private NoteService noteService;
	
	@RequestMapping("doFindObjectById")
	public Map doFindObjectById(Integer id) throws Exception{
		Map noteObject=
		noteService.findObjectById(id);
		System.out.println("pageObject="+noteObject);
		return noteObject;
	}
}
