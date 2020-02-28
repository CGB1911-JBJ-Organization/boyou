package com.cy.boyou.sys.dao;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cy.boyou.sys.entity.Note;



@SpringBootTest
public class NoteDaoTests {

	@Autowired
	private NoteDao noteDao;
	
	@Test
	public void findNoteById() {
		System.out.println("测试");
		List<Note> note=noteDao.findNoteById(2);
		System.out.println("note="+note);
	}
	
}










