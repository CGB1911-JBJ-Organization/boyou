package com.cy.boyou.sys.service;

import java.util.Map;

public interface NoteService {
	Map<String, Object> findObjectById(Integer noteId);
	
	int deleteNoteInPage(Integer id,Integer user);
}

