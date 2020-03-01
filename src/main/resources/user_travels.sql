/*
Navicat MySQL Data Transfer

Source Server         : mosen
Source Server Version : 50729
Source Host           : localhost:3306
Source Database       : boyou

Target Server Type    : MYSQL
Target Server Version : 50729
File Encoding         : 65001

Date: 2020-03-01 10:21:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user_travels`
-- ----------------------------
DROP TABLE IF EXISTS `user_travels`;
CREATE TABLE `user_travels` (
  `notesId` int(9) unsigned NOT NULL AUTO_INCREMENT COMMENT '游记ID',
  `userId` int(9) unsigned NOT NULL COMMENT '用户ID',
  `createdTime` datetime NOT NULL COMMENT '游记创建时间',
  `modifiedTime` datetime DEFAULT NULL COMMENT '游记修改时间',
  `peopleCount` int(3) DEFAULT NULL COMMENT '游玩人数',
  `loveCount` int(10) DEFAULT NULL COMMENT '点赞数',
  `averagePay` int(6) DEFAULT NULL COMMENT '人均花费',
  `travelName` varchar(255) DEFAULT '' COMMENT '游记标题名称',
  `background_img_url` varchar(255) DEFAULT NULL COMMENT '游记背景图片目录路径',
  `imgUrl` varchar(255) NOT NULL COMMENT '图片路径前缀',
  PRIMARY KEY (`notesId`)
) ENGINE=InnoDB AUTO_INCREMENT=452460 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_travels
-- ----------------------------
INSERT INTO `user_travels` VALUES ('123456', '456789', '2020-02-21 12:15:08', '2020-02-27 12:15:16', '8', '2048', '3000', '巴黎岛自由行完全攻略:从出行到游玩体验', null, '/dist/img/TravelSquare/picture/');
INSERT INTO `user_travels` VALUES ('452459', '346788', '2020-02-03 12:18:06', '2020-02-05 12:18:09', '3', '6666', '6200', '布鲁布鲁基', null, '/dist/img/TravelSquare/picture/');
