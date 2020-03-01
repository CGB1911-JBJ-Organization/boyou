/*
Navicat MySQL Data Transfer

Source Server         : mosen
Source Server Version : 50729
Source Host           : localhost:3306
Source Database       : boyou

Target Server Type    : MYSQL
Target Server Version : 50729
File Encoding         : 65001

Date: 2020-02-29 13:58:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `notes_img`
-- ----------------------------
DROP TABLE IF EXISTS `notes_img`;
CREATE TABLE `notes_img` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '序号(主键)',
  `notesId` int(9) NOT NULL COMMENT '游记Id',
  `day` int(3) NOT NULL COMMENT '第几天',
  `imgName` int(9) NOT NULL COMMENT '图片名称',
  `suffix` char(10) NOT NULL DEFAULT '.jpg' COMMENT '图片后缀名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of notes_img
-- ----------------------------
INSERT INTO `notes_img` VALUES ('1', '123456', '1', '1', '.jpg');
INSERT INTO `notes_img` VALUES ('2', '123456', '1', '2', '.jpg');
INSERT INTO `notes_img` VALUES ('3', '123456', '2', '3', '.jpg');
INSERT INTO `notes_img` VALUES ('4', '123456', '2', '4', '.jpg');
INSERT INTO `notes_img` VALUES ('5', '452459', '1', '5', '.jpg');
INSERT INTO `notes_img` VALUES ('6', '452459', '1', '6', '.jpg');
INSERT INTO `notes_img` VALUES ('7', '452459', '2', '7', '.jpg');
INSERT INTO `notes_img` VALUES ('8', '452459', '2', '8', '.jpg');
