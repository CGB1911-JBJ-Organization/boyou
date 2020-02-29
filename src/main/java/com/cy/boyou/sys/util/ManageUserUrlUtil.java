package com.cy.boyou.sys.util;

import java.io.File;
import java.io.IOException;

/**
 * 此类为用户路径管理器
 * 用于创建、维护用户文件路径。保存和删除用户文件。等。
 * @author LEF
 *
 */
public class ManageUserUrlUtil {
	
	/**
	 * 此方法用于创建文件或目录
	 * @param file 文件路径
	 * @return String 目录url
	 */
	protected static String createFile(String file) {
		File userFile = new File(file);
		try {
			//如果用户文件已存在则报错
			if (userFile.exists()) {
				System.err.println("用户文件或目录已存在");
				return null;
			}
			//如果用户文件不存在则创建
			userFile.createNewFile();
			return userFile.getAbsolutePath();
		} catch (IOException e) {
			// TODO 输出错误信息，并返回false
			System.err.println("用户文件或目录创建失败");
			e.printStackTrace();
			return null;
		}
	}
	
	/**
	 * 此方法用于创建用户目录
	 * @param prefix 路径前缀(/xxx/xx/), /结尾
	 * @param userId 用户ID
	 * @return String 用户目录url
	 */
	public static String createUserFile(String prefix, Integer userId) {
		String userFile = StringUtil.joint(prefix, userId.toString());
		return createFile(userFile);
	}
	
	/**
	 * 此方法用于创建游记目录
	 * @param prefix 路径前缀(/xxx/xx/), /结尾
	 * @param userId 用户ID
	 * @param notesId 游记ID
	 * @return String 游记目录url
	 */
	public static String createTravelNotesFile(String prefix, Integer userId, Integer notesId) {
		String notesFile = StringUtil.joint(prefix, userId.toString(), "/",notesId.toString());
		return createFile(notesFile);
	}
	
	
	
	/*保存图片的方法*/
	/*删除图片的方法*/
	/*删除游记的方法*/
	/*注销用户删除用户目录的方法*/
	
	
	
	
	
	
	
	
}
