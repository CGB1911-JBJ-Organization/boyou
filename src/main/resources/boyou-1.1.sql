/*==============================================================*/
/* DB name:      Boyou                                  */
/* Created on:     2019/2/22 23:10:29                           */
/*==============================================================*/

/*���ݿ���:boyou*/
CREATE DATABASE IF NOT EXISTS`boyou`  DEFAULT CHARACTER SET utf8;
USE `boyou`;

/*�û�Ȩ�ޱ�*/
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '�û�id',
  `user_account` varchar(20) DEFAULT NULL COMMENT '�˺�',
  `user_pwd` varchar(20) DEFAULT NULL COMMENT '����',
  `user_name` varchar(20) DEFAULT NULL COMMENT '�ǳ�',
  `user_birthday` date DEFAULT NULL COMMENT '����',
  `user_type` int(20) DEFAULT NULL COMMENT '�û�״̬1��ͨ2VIP3�ο�4����',
  `note_number` int(20) DEFAULT NULL COMMENT '�μ�����',
  `travel_number` int(20) DEFAULT NULL COMMENT '��Ʊ����',
  `user_sex` char(1)  COMMENT '�û��Ա�',
  `user_address` varchar(200) DEFAULT NULL COMMENT'��ַ',
  `user_email` 	varchar(100) DEFAULT NULL COMMENT'����',
  `head_img` varchar(50)DEFAULT NULL COMMENT 'ͷ���ַ', 
  `travel_attractions-id` int(11) COMMENT '����ID',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



/*������ travelAttractions */
/*����ID,��������,��������,������ַ,������ͼ,Ԥ����֪,�ղش���*/
DROP TABLE IF EXISTS `travel_attractions`;
CREATE TABLE `travel_attractions` (
  `travel_attractions-id` int(11) NOT NULL AUTO_INCREMENT COMMENT '����ID',
  `travel_name` varchar(30) DEFAULT NULL COMMENT '��������',
   `travel_theme` varchar(20)DEFAULT NULL COMMENT '��������',
  `travel_img` varchar(50)DEFAULT NULL COMMENT '����ͼƬ', 
   `travel_addr` varchar(20) DEFAULT NULL COMMENT '������ַ',
  `booking_notice` varchar(200) DEFAULT NULL COMMENT 'Ԥ����֪',
  `favorite_number` int(10) DEFAULT NULL COMMENT '�ղش���',
  `modified_user` varchar(20) DEFAULT NULL COMMENT '�޸��μ��û�',
  
  PRIMARY KEY (`travel_attractions-id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


/*�μǱ� travel_notes*/
/*�û�id,�μ���,ʱ��,�ص�,����,����,ͼƬ,*/
DROP TABLE IF EXISTS `notes_user`;
CREATE TABLE `notes_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) COMMENT '�û�id',
  `note_text` varchar(1000) DEFAULT NULL COMMENT '�μ��ı�',
   `note_image` varchar(200)DEFAULT NULL COMMENT 'ͼƬ��ַ',
   `note_time` datetime DEFAULT NULL COMMENT '�μǷ���ʱ��',
  `create_time` datetime DEFAULT NULL COMMENT '�μǴ���ʱ��',
  `modified_time` datetime DEFAULT NULL COMMENT '�μ��޸�ʱ��',
  `created_user` varchar(20) DEFAULT NULL COMMENT '�����μ��û�',
  `modified_user` varchar(20) DEFAULT NULL COMMENT '�޸��μ��û�',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

/*��Ʊ�� tickets */
/*��ƱID,����ID,��Ʊ�۸�,��Ʊ����,*/
DROP TABLE IF EXISTS `tickets`;
CREATE TABLE `tickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '��Ʊid',
  `user_id` int(10) COMMENT '�û�id',
  `tickets_type` int(20) DEFAULT NULL COMMENT '��Ʊ����',
   `tickets_price` double DEFAULT NULL COMMENT '��Ʊ�۸�',
   `note_time` datetime DEFAULT NULL COMMENT '����ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

