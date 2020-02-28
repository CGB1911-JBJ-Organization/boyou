/*sql*/
/*用户权限表*/
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_type` int(20) DEFAULT NULL COMMENT '用户状态1普通2VIP3游客4管理',
  `user_account` varchar(20) DEFAULT NULL COMMENT '账号',
  `user_pwd` varchar(20) DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*景区表 trvelAttractions */
景区ID,景区名称,景区主题,景区地址,收费金额 ,景区美图,门票类型,预定须知,收藏次数

/*个人主页(用户信息)表 personal_info */
用户id,性别,年龄,昵称,头像,游记数量,门票数量

/*游记表 travel_notes*/
用户id,游记名,时间,地点,详情,类型,图片,

/*门票表 tickets */
用户id,景区ID,门票数量,门票类型,