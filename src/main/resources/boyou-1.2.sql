/*==============================================================*/
/* DB name:      Boyou                                  */
/* Created on:     2019/2/22 23:10:29                           */
/*==============================================================*/

/*���ݿ���:boyou*/
CREATE DATABASE IF NOT EXISTS `boyou`  DEFAULT CHARACTER SET utf8;
USE `boyou`;

/*�û�Ȩ�ޱ�*/
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '�û�id',
  `user_account` varchar(20) DEFAULT NULL COMMENT '�˺�',
  `user_pwd` varchar(20) DEFAULT NULL COMMENT '����',
  `user_salt` varchar(20) DEFAULT NULL COMMENT '��ֵ',
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
  `travel_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '����ID',
  `travel_name` varchar(30) DEFAULT NULL COMMENT '��������',
   `travel_theme` varchar(20)DEFAULT NULL COMMENT '��������',
  `travel_img` varchar(50)DEFAULT NULL COMMENT '����ͼƬ', 
   `travel_addr` varchar(20) DEFAULT NULL COMMENT '������ַ',
  `booking_notice` varchar(200) DEFAULT NULL COMMENT 'Ԥ����֪',
  `favorite_number` int(10) DEFAULT NULL COMMENT '�ղش���',
  PRIMARY KEY (`travel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



/*�μǱ� user_travels  travel_notes*/
/*�û�id,�μ���,ʱ��,�ص�,����,����,ͼƬ,*/
DROP TABLE IF EXISTS `user_travels`;
CREATE TABLE `user_travels` (
  `notesId` int(9) unsigned NOT NULL AUTO_INCREMENT COMMENT '�μ�ID',
  `userId` int(9) unsigned NOT NULL COMMENT '�û�ID',
  `createdTime` datetime NOT NULL COMMENT '�μǴ���ʱ��',
  `modifiedTime` datetime DEFAULT NULL COMMENT '�μ��޸�ʱ��',
  `peopleCount` int(3) DEFAULT NULL COMMENT '��������',
  `loveCount` int(10) DEFAULT NULL COMMENT '������',
  `averagePay` int(6) DEFAULT NULL COMMENT '�˾�����',
  `travelName` varchar(255) DEFAULT '' COMMENT '�μǱ�������',
  `background_img_url` varchar(255) DEFAULT NULL COMMENT '�μǱ���ͼƬĿ¼·��',
  PRIMARY KEY (`notesId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `travel_notes`;
CREATE TABLE `travel_notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '���',
  `notesId` int(9) unsigned NOT NULL COMMENT '�μ�ID',
  `day` int(3) NOT NULL COMMENT '�ڼ���',
  `address` varchar(50) DEFAULT NULL COMMENT '�ص�',
  `text` text COMMENT '�μ�����',
  `imgUrl` varchar(255) DEFAULT '' COMMENT 'ͼƬĿ¼·��',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/*��Ʊ�� tickets */
/*��ƱID,����ID,��Ʊ�۸�,��Ʊ����,*/
DROP TABLE IF EXISTS `tickets`;
CREATE TABLE `tickets` (
  `tickets_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '��Ʊid',
  `user_id` int(10) COMMENT '�û�id',
  `tickets_type` int(20) DEFAULT NULL COMMENT '��Ʊ����',
   `tickets_price` double DEFAULT NULL COMMENT '��Ʊ�۸�',
   `attractions_id` int(20) DEFAULT NULL COMMENT '����ID',
  PRIMARY KEY (`tickets_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert  into `notes_user`values (1,100,1,'�ܿ���','/img/558k',NULL,'����',NULL,NULL,'�滨'),
(null,200,1,'������','/img/558k',NULL,'����˹',NULL,NULL,'�滨'),
(null,300,1,'�ܺ�','/img/ahk',NULL,'����',NULL,NULL,'gh'),
(null,400,1,'�ܿ���','/img/533',NULL,'���',NULL,NULL,'�滨'),
(null,500,1,'�ܿ���','/img/5454k',NULL,'����',NULL,NULL,'�滨'),
(null,600,1,'�ܿ���','/img/5548k',NULL,'����',NULL,NULL,'fhf'),
(null,700,0,'�ܿ���','/img/asdak',NULL,'����',NULL,NULL,'��fd'),
(null,800,0,'�ܿ���','/img/dasd8k',NULL,'����',NULL,NULL,'�滨'),
(null,900,1,'�ܿ���','/img/gsdfg8k',NULL,'����',NULL,NULL,'2131��'),
(null,1000,1,'�ܿ���','/img/sdfg8k',NULL,'����',NULL,NULL,'�滨'),
(null,1100,0,'�ܿ���','/img/7748k',NULL,'����',NULL,NULL,'�滨');


