package com.cy.boyou.sys.vo;

import java.io.Serializable;
import java.util.List;

import com.cy.boyou.sys.entity.ImgName;
import com.cy.boyou.sys.vo.TravelNotes;

import lombok.Getter;
import lombok.Setter;

/**
 * 此类封装游记广场的游记列表需要的游记数据
 * @author LEF
 *
 */
@Getter
@Setter
public class TravelSquareNotes extends TravelNotes implements Serializable{

	private static final long serialVersionUID = -354232602837134785L;
	
	//整个游记的图片信息
	private List<ImgName> imgUrlList;

	@Override
	public String toString() {
		return "TravelSquareNotes [imgUrlList=" + imgUrlList + ", toString()=" + super.toString() + "]";
	}
	

	public TravelSquareNotes(TravelNotes t) {
		super();
		/* this.setId(t.getId()); */
		this.setNotesId(t.getNotesId());
		this.setUserId(t.getUserId());
		this.setTravelName(t.getTravelName());
		this.setCreatedTime(t.getCreatedTime());
		this.setModifiedTime(t.getModifiedTime());
		this.setPeopleCount(t.getPeopleCount());
		this.setPeopleCount(t.getPeopleCount());
		this.setLoveCount(t.getLoveCount());
		this.setAveragePay(t.getAveragePay());
		this.setBackgroundImgUrl(t.getBackgroundImgUrl());
		this.setNotesVoList(t.getNotesVoList());
		/* this.setImgUrl(t.getImgUrl()); */
	}
	
	
	
}
