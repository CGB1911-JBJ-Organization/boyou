package com.cy.boyou.sys.vo;



import java.io.Serializable;
import java.util.List;

import com.cy.boyou.sys.entity.Travel;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 此类封装整个游记
 * @author 801
 *
 */
@Getter
@Setter
public class TravelNotes extends Travel implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -1348142498277345453L;
	
	private List<NoteVo> notesVoList;

	@Override
	public String toString() {
		return "TravelNotes [notesVoList=" + notesVoList + ", getNotesVoList()=" + getNotesVoList() + ", getNotesId()="
				+ getNotesId() + ", getUserId()=" + getUserId() + ", getTravelName()=" + getTravelName()
				+ ", getCreatedTime()=" + getCreatedTime() + ", getModifiedTime()=" + getModifiedTime()
				+ ", getPeopleCount()=" + getPeopleCount() + ", getLoveCount()=" + getLoveCount() + ", getAveragePay()="
				+ getAveragePay() + ", getBackgroundImgUrl()=" + getBackgroundImgUrl() + "]";
	}



}
