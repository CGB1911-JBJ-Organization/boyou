package com.cy.boyou.sys.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cy.boyou.sys.entity.Note;
import com.cy.boyou.sys.util.PicUtil;
import com.cy.boyou.sys.vo.JsonResult;
import com.cy.boyou.sys.vo.NoteVo;
import com.cy.boyou.sys.vo.TravelNotes;

@RestController 
@RequestMapping("/pic/")
public class PicTestController {
	
	@RequestMapping("pictest")
	@ResponseBody
	public JsonResult deleteNoteInPage(TravelNotes travelNotes,String userName ,MultipartFile pc1,MultipartFile pc2,MultipartFile pc3) throws Exception{
		System.out.println("pic测试");
		//返回图片路劲赋值给Note
		String imgUrl1=PicUtil.singleFileUpload(userName,pc1);
		imgUrl1=imgUrl1.replaceAll("\\\\", "/");
		imgUrl1=imgUrl1.replaceAll("src/main/resources/static/", "");
		System.out.println("imgUrl:"+imgUrl1);
		
		String imgUrl2=PicUtil.singleFileUpload(userName,pc2);
		imgUrl2=imgUrl2.replaceAll("\\\\", "/");
		imgUrl2=imgUrl2.replaceAll("src/main/resources/static/", "");
		System.out.println("imgUr2:"+imgUrl2);
		
		String imgUrl3=PicUtil.singleFileUpload(userName,pc3);
		imgUrl3=imgUrl3.replaceAll("\\\\", "/");
		imgUrl3=imgUrl3.replaceAll("src/main/resources/static/", "");
		System.out.println("imgUr3:"+imgUrl3);
		
		/*
		 * for (NoteVo s : travelNotes.getNotesVoList()) { System.out.println("list遍历");
		 * System.out.println(s); }
		 */
		
			System.out.println("平均消费"+travelNotes.getAveragePay());
			System.out.println("人数"+travelNotes.getPeopleCount());
		return new JsonResult("update ok");
	}

}
