package com.cy.boyou.sys.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cy.boyou.sys.entity.Note;
import com.cy.boyou.sys.service.NoteService;
import com.cy.boyou.sys.vo.JsonResult;



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
	
	@RequestMapping("deleteNoteInPage")
	@ResponseBody
	public JsonResult doValidById(Integer id,Integer user){
		noteService.deleteNoteInPage(id, user);//"admin"用户将来是登陆用户
			return new JsonResult("update ok");
	}

}
