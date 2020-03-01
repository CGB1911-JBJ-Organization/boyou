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
import com.cy.boyou.sys.vo.TravelNotes;

@RestController 
@RequestMapping("/pic/")
public class PicTestController {
	
	@RequestMapping("pictest")
	@ResponseBody
	public JsonResult deleteNoteInPage(TravelNotes travelNotes,String userName ,MultipartFile pc1) throws Exception{
		System.out.println("pic测试");
		//返回图片路劲赋值给Note
		String imgUrl=PicUtil.singleFileUpload(userName,pc1);
		System.out.println("imgUrl"+imgUrl);
		//在regex中"\\"表示一个"\"，在java中一个"\"也要用"\\"表示。这样，前一个"\\"代表regex中的"\"，
		//后一个"\\"代表java中的"\"，所以字符串转义一次，正则转义一次，那么一个斜扛要写4个;
		imgUrl=imgUrl.replaceAll("\\\\", "/");
		imgUrl=imgUrl.replaceAll("src/main/resources/static/", "");
		System.out.println("imgUrl:"+imgUrl);
			System.out.println(travelNotes.getAveragePay());
			System.out.println(travelNotes.getPeopleCount());
		return new JsonResult("update ok");
	}

}
