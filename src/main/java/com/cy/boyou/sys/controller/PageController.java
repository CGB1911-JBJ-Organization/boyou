package com.cy.boyou.sys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * 此Controller主要负责响应页面
 */
@Controller
@RequestMapping("/")
public class PageController {
	
	/**
	 * 此方法用于响应网站首页
	 * @return 首页路径
	 */
	@RequestMapping("boyou")
	public String startPage() {
		return "boyou-index";
	}
	
	/**
	 * 此方法响应页面的请求
	 * @param pageName 页面名称
	 * @return 页面路径
	 */
	@RequestMapping("doPageUI/{pageName}")
	public String doPageUI(@PathVariable String pageName) {
		return "sys/"+pageName;
	}
	
	/**
	 * 此方法响应通用页面模块
	 * @param mudule 页面模块名称
	 * @return 模块文件路径
	 */
	@RequestMapping("doPageModule/{module}")
	public String doPageMudule(@PathVariable String module) {
		return "common/"+module;
	}

	
	/**
	 * 此方法响应后台
	 * @param moduleUI
	 * @return
	 */
	@RequestMapping("doManageUI/{moduleUI}")
	public String doManageUI(@PathVariable String moduleUI) {
		return "zzj/"+moduleUI;
	}
	
	/**
	 * 此方法响应加载登录界面
	 * @return
	 */
	@RequestMapping("doLoginUI/{pageName}")
	public String doLoginUI(@PathVariable String pageName){
			return "sys/"+pageName;
	}
}
