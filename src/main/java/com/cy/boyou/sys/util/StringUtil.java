package com.cy.boyou.sys.util;

//import org.junit.Test;

public class StringUtil {
	/**
	 * 使用StringBuilder拼接字符串
	 * @param strs 按顺序的多个字符串参数
	 * @return 拼接后的字符串
	 */
	public static String joint(String... strs) {
		StringBuilder strTool = new StringBuilder();
		for (String str : strs) {
			strTool = strTool.append(str);
		}
		return strTool.toString();
	}
	
	/*
	 * @Test public void test() { System.out.println(joint("1","2","3","4")); }
	 */
}
