package com.boyou.sys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 此Controller主要负责响应一些页面
 */
@Controller
@RequestMapping("/")
public class PageController {
	
	
	@RequestMapping("doIndexBY")
	public String doIndexBY() {
		return "details";
	}
	
	@RequestMapping("{module}/{moduleUI}")
	public String doModuleUI(@PathVariable String moduleUI) {
		return "sys/"+moduleUI;
	}

}
