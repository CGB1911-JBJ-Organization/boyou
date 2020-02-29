package com.cy.boyou.sys.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cy.boyou.sys.dao.NoteDao;
import com.cy.boyou.sys.entity.Note;
import com.cy.boyou.sys.service.NoteService;

import io.micrometer.core.instrument.util.StringUtils;




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

	@Override
	public int deleteNoteInPage(Integer id,Integer user) {
		//1.合法性验证
		if(id==null||id<=0)
		System.out.println("参数不合法,id="+id);
		if(user==null||user<=0)
		System.out.println("请登录");
		//2.执行禁用或启用操作
		int rows=noteDao.deleteNoteInPage(id, user);
		//3.判定结果,并返回
		if(rows==0)
		System.out.println("此游记可能已经不存在");
		return rows;
	}

}

