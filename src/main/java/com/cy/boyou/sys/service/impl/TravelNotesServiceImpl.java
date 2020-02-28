package com.cy.boyou.sys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cy.boyou.sys.dao.NoteDao;
import com.cy.boyou.sys.dao.TravelNotesDao;
import com.cy.boyou.sys.entity.Note;
import com.cy.boyou.sys.entity.Travel;
import com.cy.boyou.sys.vo.TravelNotes;
import com.cy.boyou.sys.service.TravelNotesService;

@Service
public class TravelNotesServiceImpl implements TravelNotesService {
	
	@Autowired
	private TravelNotesDao travelNotesDao;
	
	@Autowired
	private NoteDao noteDao;
	
	@Override
	public int insertTravelNotes(TravelNotes entitys) {
		//参数校验
		
		//取出并调用接口增加游记信息
		Travel travel = entitys;
		int rows1 = travelNotesDao.insertTravelNotes(travel);
		//结果校验
		if (rows1 != 1) {
			
		}
		//取出游记内容
		int rows2 = 0;
		List<Note> notes = entitys.getNotes();
		//循环调用接口增加游记内容
		for (Note note : notes) {
			int rows = noteDao.insertNote(note);
			if(rows==1) {
				rows2++;
			}
		}
		//结果校验
		if (rows2 != notes.size()) {
			
		}
		//返回保存游记结果
		return rows1;
	}

}
