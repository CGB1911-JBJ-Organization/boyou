/*sql*/
/*�û�Ȩ�ޱ�*/
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '�û�id',
  `user_type` int(20) DEFAULT NULL COMMENT '�û�״̬1��ͨ2VIP3�ο�4����',
  `user_account` varchar(20) DEFAULT NULL COMMENT '�˺�',
  `user_pwd` varchar(20) DEFAULT NULL COMMENT '����',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*������ trvelAttractions */
����ID,��������,��������,������ַ,�շѽ�� ,������ͼ,��Ʊ����,Ԥ����֪,�ղش���

/*������ҳ(�û���Ϣ)�� personal_info */
�û�id,�Ա�,����,�ǳ�,ͷ��,�μ�����,��Ʊ����

/*�μǱ� travel_notes*/
�û�id,�μ���,ʱ��,�ص�,����,����,ͼƬ,

/*��Ʊ�� tickets */
�û�id,����ID,��Ʊ����,��Ʊ����,