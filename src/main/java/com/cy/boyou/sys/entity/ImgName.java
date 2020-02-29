package com.cy.boyou.sys.entity;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 此类封装notes_img表的表记录，就是游记的每天游记内容的图片信息
 * @author LEF
 *
 */
@Getter
@Setter
@ToString
public class ImgName implements Serializable{
	
	private static final long serialVersionUID = 4715790499132917865L;
	/**
	 * 序号
	 */
	private Integer id;
	
	/**
	 * 游记id
	 */
	private Integer notesId;
	
	/**
	 * 第几天
	 */
	private Integer day;
	
	/**
	 * 图片文件名字(编号)
	 */
	private Integer imgName;
	
	/**
	 * 图片文件后缀名
	 */
	private String suffix;
}
