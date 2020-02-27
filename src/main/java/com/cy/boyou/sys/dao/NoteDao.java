package com.cy.boyou.sys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.cy.boyou.sys.entity.Note;
import com.cy.boyou.sys.entity.User;

@Mapper
public interface NoteDao {

	/**
	 * 更新游记信息
	 * @param entity
	 * @return
	 */
	int updateNote(Note entity);
	/**
	 * 基于id获取游记信息
	 * @param id
	 * @return
	 */
	Note findNoteById(Integer id);
	/**
	 * 写入游记信息
	 * @param entity
	 * @return
	 */
	int insertNote(Note entity);
	  /**
	   * 基于id执行数据删除
	   * @param ids
	   * @return
	   */
	  int deleteNoteInPage(Integer id);
	
     /**
      * 按条件统计游记记录总数
      * @param username
      * @return
      */
	int getNoteCount(String username);
	/**
	   * 基于条件查询当前页记录
	   * @param username 查询条件
	   * @param startIndex 当前页的起始设置
	   * @param pageSize 页面大小(每页最多显示多少条数据)
	   * @return
	   */
	  List<Note> findPageObjects(String username,Integer startIndex,Integer pageSize); //limit startIndex,pageSize




}
