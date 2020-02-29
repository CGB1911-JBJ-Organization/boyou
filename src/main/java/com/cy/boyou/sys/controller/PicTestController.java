package com.cy.boyou.sys.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cy.boyou.sys.util.PicUtil;
import com.cy.boyou.sys.vo.JsonResult;

@RestController 
@RequestMapping("/pic/")
public class PicTestController {
	
	@RequestMapping("pictest")
	@ResponseBody
	public JsonResult deleteNoteInPage(MultipartFile pc1) throws Exception{
		System.out.println("pic测试");
		PicUtil.singleFileUpload(pc1);
		
			return new JsonResult("update ok");
	}

}
