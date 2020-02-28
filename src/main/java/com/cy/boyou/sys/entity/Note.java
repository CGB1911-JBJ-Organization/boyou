package com.cy.boyou.sys.entity;

import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 此类用于封装游记每天的游记内容
 * @author LEF
 *
 */

@Getter
@Setter
@ToString
public class Note implements Serializable{
	private static final long serialVersionUID = -1417492562519229420L;
	private Integer id;//序号
	private Integer notesId;//游记ID
	private Integer day;//第几天
	private String address;//地点
	private String text;//游记内容
	private String imgUrl;//图片目录路径
}
