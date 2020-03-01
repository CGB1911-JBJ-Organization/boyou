package com.cy.boyou.sys.service.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cy.boyou.sys.dao.NoteDao;
import com.cy.boyou.sys.dao.NotesImgNameDao;
import com.cy.boyou.sys.dao.TravelNotesDao;
import com.cy.boyou.sys.entity.ImgName;
import com.cy.boyou.sys.entity.Note;
import com.cy.boyou.sys.entity.Travel;
import com.cy.boyou.sys.vo.NoteVo;
import com.cy.boyou.sys.vo.TravelNotes;
import com.cy.boyou.sys.vo.TravelSquareNotes;
import com.cy.boyou.sys.service.TravelNotesService;

@Service
public class TravelNotesServiceImpl implements TravelNotesService {
	
	@Autowired
	private TravelNotesDao travelNotesDao;
	@Autowired
	private NoteDao noteDao;
	@Autowired
	private NotesImgNameDao notesImgNameDao;
	
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
		List<NoteVo> notes = entitys.getNotesVoList();
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

	@Override
	public List<TravelNotes> doFindTravelNotes() {
		//查询游记信息
		List<TravelNotes> list = travelNotesDao.doFindTravelNotes(null);
			//System.out.println(list);
		//获取游记对象集合的迭代器
		ListIterator<TravelNotes> itr = list.listIterator();
		//迭代每个游记对象,并对其游记内容进行初始化
		while (itr.hasNext()) {
			TravelNotes travelNotes = (TravelNotes) itr.next();
			//查询游记内容
			List<NoteVo> notes = noteDao.findNoteByNotesId(travelNotes.getNotesId());
			//迭代查询到的游记内容集合，并对游记内容对象的图片信息集合初始化
			Iterator<NoteVo> iterator = notes.iterator();
			while (iterator.hasNext()) {
				NoteVo note = (NoteVo) iterator.next();
				List<ImgName> imgNameList = notesImgNameDao.doFindImgUrlsByNotesIdAndDay(note.getNotesId(), note.getDay());
				//初始化游记内容Vo对象的图片信息集合
				note.setImgNameList(imgNameList);
				
			}
			//初始化游记的游记内容
			travelNotes.setNotesVoList(notes);
		}
		System.out.println(list);
		return list;
	}
	
	public List<TravelSquareNotes> findToTravelSquare(){
		List<TravelNotes> l = travelNotesDao.doFindTravelNotes(null);
		List<TravelSquareNotes> list = new ArrayList<>();
		for (TravelNotes travelNotes : l) {
			travelNotes.setNotesVoList(noteDao.findNoteByNotesId(travelNotes.getNotesId()));
			TravelSquareNotes tsn = new TravelSquareNotes(travelNotes);
			List<ImgName> imgNameList = notesImgNameDao.doFindImgUrlsByNotesIdAndDay(travelNotes.getNotesId(), null);
			tsn.setImgUrlList(imgNameList);
			list.add(tsn);
		}
		System.out.println(list);
		return list;
	}
}
