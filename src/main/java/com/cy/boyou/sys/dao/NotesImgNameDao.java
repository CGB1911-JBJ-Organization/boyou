package com.cy.boyou.sys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.cy.boyou.sys.entity.ImgName;

@Mapper
public interface NotesImgNameDao {
	
	@Select("select * from notes_img where notesId=#{notesId} and day=#{day}")
	List<ImgName> doFindImgUrlsByNotesIdAndDay(Integer notesId, Integer day);
}
