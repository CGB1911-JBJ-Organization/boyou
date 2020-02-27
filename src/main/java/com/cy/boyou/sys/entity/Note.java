package com.cy.boyou.sys.entity;



import java.io.Serializable;
import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 游记
 * @author 801
 *
 */
@Setter
@Getter
@ToString
public class Note implements Serializable {/**
	 * 
	 */
	private static final long serialVersionUID = -1348142498277345453L;
	private Integer notesId;
	private Integer userId;
	private String noteText;//游记正文
	private String noteImage;
	private Date noteTime;//游记内容发生时间
	private String noteAddr;
	private Date createTime;//游记创建时间
	private Date modifiedTime;//游记修改时间
	private String createdUser;

}
