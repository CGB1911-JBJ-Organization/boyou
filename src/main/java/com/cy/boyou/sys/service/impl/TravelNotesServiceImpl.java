package com.cy.boyou.sys.service.impl;

import java.util.ArrayList;
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
		List<NoteVo> notes = entitys.getNotesVo();
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
			List<Note> notes = noteDao.findNoteById(travelNotes.getNotesId());
				//System.out.println(notes);
			//创建游记内容Vo对象集合容器
			List<NoteVo> noteVoList = new ArrayList<>();
			//迭代查询到的游记内容集合，并对游记内容对象的图片信息集合初始化
			for (Note note : notes) {
				//创建游记内容Vo对象并初始化
				NoteVo noteVo = new NoteVo(note);
				//基于游记内容Vo对象的游记id和第几天查询图片
				List<ImgName> imgNameList = notesImgNameDao.doFindImgUrlsByNotesIdAndDay(noteVo.getNotesId(), noteVo.getDay());
				//初始化游记内容Vo对象的图片信息集合
				noteVo.setImgNameList(imgNameList);
				//将游记内容Vo对象加入集合中
				noteVoList.add(noteVo);
			}
			//初始化游记的游记内容
			travelNotes.setNotesVo(noteVoList);
		}
		System.out.println(list);
		return list;
	}

}
