package com.cy.boyou.sys.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cy.boyou.sys.dao.NoteDao;
import com.cy.boyou.sys.entity.Note;
import com.cy.boyou.sys.service.NoteService;




@Service
public class NoteServiceImpl implements NoteService {
	@Autowired
	private NoteDao noteDao;
	
	@Override
	public Map<String, Object> findObjectById(Integer noteId) {
		if(noteId==null||noteId<1)
			throw new IllegalArgumentException("输入游记id不正确");
		List<Note> note=noteDao.findNoteById(noteId);
		Map<String,Object> map=new HashMap<>();
		map.put("note", note);
		return map;
	}

}
