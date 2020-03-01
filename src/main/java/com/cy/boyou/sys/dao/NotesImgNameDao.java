package com.cy.boyou.sys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.cy.boyou.sys.entity.ImgName;

@Mapper
public interface NotesImgNameDao {
	
	List<ImgName> doFindImgUrlsByNotesIdAndDay(Integer notesId, Integer day);
}
