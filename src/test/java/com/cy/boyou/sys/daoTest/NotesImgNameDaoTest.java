package com.cy.boyou.sys.daoTest;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cy.boyou.sys.dao.NotesImgNameDao;
import com.cy.boyou.sys.entity.ImgName;


@SpringBootTest
public class NotesImgNameDaoTest {
	
	@Autowired
	private NotesImgNameDao notesImgNameDao;
	
	@Test
	public void test() {
		List<ImgName> list = notesImgNameDao.doFindImgUrlsByNotesIdAndDay(123456, 1);
		System.out.println(list);
	}
}
