package com.cy.boyou.sys.vo;

import java.io.Serializable;
import java.util.List;

import com.cy.boyou.sys.entity.ImgName;
import com.cy.boyou.sys.entity.Note;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


/**
 * 此类集成了游记的内容和图片列表
 * 游记内容vo对象
 * @author LEF
 *
 */
@Getter
@Setter
@NoArgsConstructor
public class NoteVo extends Note implements Serializable{

	private static final long serialVersionUID = 4495898188152050847L;
	/**
	 * 图片信息(一天游记可以有多个图片)
	 */
	List<ImgName> imgNameList;

	@Override
	public String toString() {
		return "Note [imgNameList=" + imgNameList + ", toString()=" + super.toString() + "]";
	}
	
	public NoteVo(Note note) {
		super();
		this.setId(note.getId());
		this.setNotesId(note.getNotesId());
		this.setDay(note.getDay());
		this.setAddress(note.getAddress());
		this.setText(note.getText());
		this.setImgUrl(note.getImgUrl());
	}
}
