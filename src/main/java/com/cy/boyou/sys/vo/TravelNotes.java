package com.cy.boyou.sys.vo;



import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.cy.boyou.sys.entity.Note;
import com.cy.boyou.sys.entity.Travel;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 此类封装整个游记
 * @author 801
 *
 */
@ToString
@Getter
@Setter
public class TravelNotes extends Travel implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -1348142498277345453L;
	private List<Note> notes;//游记内容

}
