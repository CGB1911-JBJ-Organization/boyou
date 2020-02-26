/*==============================================================*/
/* DB name:      Boyou                                  */
/* Created on:     2019/2/22 23:10:29                           */
/*==============================================================*/

/*数据库名:boyou*/
CREATE DATABASE IF NOT EXISTS`boyou`  DEFAULT CHARACTER SET utf8;
USE `boyou`;

/*用户权限表*/
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_account` varchar(20) DEFAULT NULL COMMENT '账号',
  `user_pwd` varchar(20) DEFAULT NULL COMMENT '密码',
  `user_name` varchar(20) DEFAULT NULL COMMENT '昵称',
  `user_birthday` date DEFAULT NULL COMMENT '生日',
  `user_type` int(20) DEFAULT NULL COMMENT '用户状态1普通2VIP3游客4管理',
  `note_number` int(20) DEFAULT NULL COMMENT '游记数量',
  `travel_number` int(20) DEFAULT NULL COMMENT '门票数量',
  `user_sex` char(1)  COMMENT '用户性别',
  `user_address` varchar(200) DEFAULT NULL COMMENT'地址',
  `user_email` 	varchar(100) DEFAULT NULL COMMENT'邮箱',
  `head_img` varchar(50)DEFAULT NULL COMMENT '头像地址', 
  `travel_attractions-id` int(11) COMMENT '景区ID',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



/*景区表 travelAttractions */
/*景区ID,景区名称,景区主题,景区地址,景区美图,预定须知,收藏次数*/
DROP TABLE IF EXISTS `travel_attractions`;
CREATE TABLE `travel_attractions` (
  `travel_attractions-id` int(11) NOT NULL AUTO_INCREMENT COMMENT '景区ID',
  `travel_name` varchar(30) DEFAULT NULL COMMENT '景区名称',
   `travel_theme` varchar(20)DEFAULT NULL COMMENT '景区主题',
  `travel_img` varchar(50)DEFAULT NULL COMMENT '景区图片', 
   `travel_addr` varchar(20) DEFAULT NULL COMMENT '景区地址',
  `booking_notice` varchar(200) DEFAULT NULL COMMENT '预定须知',
  `favorite_number` int(10) DEFAULT NULL COMMENT '收藏次数',
  `modified_user` varchar(20) DEFAULT NULL COMMENT '修改游记用户',
  
  PRIMARY KEY (`travel_attractions-id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


/*游记表 travel_notes*/
/*用户id,游记名,时间,地点,详情,类型,图片,*/
DROP TABLE IF EXISTS `notes_user`;
CREATE TABLE `notes_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) COMMENT '用户id',
  `note_text` varchar(1000) DEFAULT NULL COMMENT '游记文本',
   `note_image` varchar(200)DEFAULT NULL COMMENT '图片地址',
   `note_time` datetime DEFAULT NULL COMMENT '游记发生时间',
  `create_time` datetime DEFAULT NULL COMMENT '游记创建时间',
  `modified_time` datetime DEFAULT NULL COMMENT '游记修改时间',
  `created_user` varchar(20) DEFAULT NULL COMMENT '创建游记用户',
  `modified_user` varchar(20) DEFAULT NULL COMMENT '修改游记用户',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

/*门票表 tickets */
/*门票ID,景区ID,门票价格,门票类型,*/
DROP TABLE IF EXISTS `tickets`;
CREATE TABLE `tickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '门票id',
  `user_id` int(10) COMMENT '用户id',
  `tickets_type` int(20) DEFAULT NULL COMMENT '门票类型',
   `tickets_price` double DEFAULT NULL COMMENT '门票价格',
   `note_time` datetime DEFAULT NULL COMMENT '景区ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

