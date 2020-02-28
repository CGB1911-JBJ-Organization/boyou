package com.cy.boyou.sys.daoTest;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cy.boyou.sys.dao.NoteDao;
import com.cy.boyou.sys.entity.Note;

@SpringBootTest
public class NoteDaoTests {
	@Autowired
	private NoteDao noteDao;
	@Test
	public void updateNoteTest() {
		Note entity =new Note();
		entity.setNotesId(1);
		entity.setUserId(100);
		entity.setNoteText("老王");
		entity.setNoteImage("老蒋");
		entity.setNoteAddr("老浩");
		entity.setCreatedUser("老雷");
		entity.setCreatedUser(null);
		int rows = noteDao.updateNote(entity);
		System.out.println(rows);
		System.out.println("NoteDaoTests.updateNoteTest()");
	}
	
   @Test
   public void insertNoteTest() {
	   Note entity = new Note();
	   entity.setNotesId(null);
		entity.setUserId(200);
		entity.setNoteText("小王");
		entity.setNoteImage("小蒋");
		entity.setNoteAddr("小浩");
		entity.setCreatedUser("小雷");
		entity.setCreatedUser(null);
		int rows = noteDao.insertNote(entity);
		System.out.println("NoteDaoTests.insertNoteTest()");
		System.out.println(rows);
   }
   @Test
   public void findNoteByIdTest() {
	   Note user = noteDao.findNoteById(13);
	   System.out.println(user);
   }
}
