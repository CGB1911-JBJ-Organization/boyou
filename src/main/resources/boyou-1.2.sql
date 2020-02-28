/*==============================================================*/
/* DB name:      Boyou                                  */
/* Created on:     2019/2/22 23:10:29                           */
/*==============================================================*/

/*数据库名:boyou*/
CREATE DATABASE IF NOT EXISTS `boyou`  DEFAULT CHARACTER SET utf8;
USE `boyou`;

/*用户权限表*/
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_account` varchar(20) DEFAULT NULL COMMENT '账号',
  `user_pwd` varchar(20) DEFAULT NULL COMMENT '密码',
  `user_salt` varchar(20) DEFAULT NULL COMMENT '盐值',
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
  `travel_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '景区ID',
  `travel_name` varchar(30) DEFAULT NULL COMMENT '景区名称',
   `travel_theme` varchar(20)DEFAULT NULL COMMENT '景区主题',
  `travel_img` varchar(50)DEFAULT NULL COMMENT '景区图片', 
   `travel_addr` varchar(20) DEFAULT NULL COMMENT '景区地址',
  `booking_notice` varchar(200) DEFAULT NULL COMMENT '预定须知',
  `favorite_number` int(10) DEFAULT NULL COMMENT '收藏次数',
  PRIMARY KEY (`travel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


/*游记表 user_travels  travel_notes*/
/*用户id,游记名,时间,地点,详情,类型,图片,*/
DROP TABLE IF EXISTS `user_travel`;
CREATE TABLE `user_travel` (
`notesId`  int(9) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '游记ID' ,
`userId`  int(9) UNSIGNED NOT NULL COMMENT '用户ID' ,
`createdTime`  datetime NOT NULL COMMENT '游记创建时间' ,
`modifiedTime`  datetime NULL DEFAULT NULL COMMENT '游记修改时间' ,
`peopleCount`  int(3) NULL DEFAULT NULL COMMENT '游玩人数' ,
`loveCount`  int(10) NULL DEFAULT NULL COMMENT '点赞数' ,
`averagePay`  int(6) NULL DEFAULT NULL COMMENT '人均花费' ,
`travelName`  varchar(255) NULL DEFAULT '' COMMENT '游记标题名称' ,
`background_img_url`  varchar(255) NULL COMMENT '游记背景图片目录路径' ,
PRIMARY KEY (`notesId`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `travel_notes`;
CREATE TABLE `travel_notes` (
`id`  int NOT NULL AUTO_INCREMENT COMMENT '序号' ,
`day`  int(3) NOT NULL COMMENT '第几天' ,
`address`  varchar(50) NULL COMMENT '地点' ,
`text`  text NULL COMMENT '游记内容' ,
`imgUrl`  varchar(255) NULL DEFAULT '' COMMENT '图片目录路径' ,
`notesId`  int(9) NOT NULL COMMENT '游记ID' ,
PRIMARY KEY (`id`),
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


/*门票表 tickets */
/*门票ID,景区ID,门票价格,门票类型,*/
DROP TABLE IF EXISTS `tickets`;
CREATE TABLE `tickets` (
  `tickets_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '门票id',
  `user_id` int(10) COMMENT '用户id',
  `tickets_type` int(20) DEFAULT NULL COMMENT '门票类型',
   `tickets_price` double DEFAULT NULL COMMENT '门票价格',
   `attractions_id` int(20) DEFAULT NULL COMMENT '景区ID',
  PRIMARY KEY (`tickets_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert  into `notes_user`values (1,100,1,'很开心','/img/558k',NULL,'美洲',NULL,NULL,'梨花'),
(null,200,1,'还不错','/img/558k',NULL,'俄罗斯',NULL,NULL,'梨花'),
(null,300,1,'很好','/img/ahk',NULL,'加州',NULL,NULL,'gh'),
(null,400,1,'很开心','/img/533',NULL,'鸿管',NULL,NULL,'梨花'),
(null,500,1,'很开心','/img/5454k',NULL,'予以',NULL,NULL,'梨花'),
(null,600,1,'很开心','/img/5548k',NULL,'美洲',NULL,NULL,'fhf'),
(null,700,0,'很开心','/img/asdak',NULL,'美洲',NULL,NULL,'梨fd'),
(null,800,0,'很开心','/img/dasd8k',NULL,'美洲',NULL,NULL,'梨花'),
(null,900,1,'很开心','/img/gsdfg8k',NULL,'美洲',NULL,NULL,'2131花'),
(null,1000,1,'很开心','/img/sdfg8k',NULL,'美洲',NULL,NULL,'梨花'),
(null,1100,0,'很开心','/img/7748k',NULL,'美洲',NULL,NULL,'梨花');


