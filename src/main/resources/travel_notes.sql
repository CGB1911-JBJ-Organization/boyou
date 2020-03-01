/*
Navicat MySQL Data Transfer

Source Server         : mosen
Source Server Version : 50729
Source Host           : localhost:3306
Source Database       : boyou

Target Server Type    : MYSQL
Target Server Version : 50729
File Encoding         : 65001

Date: 2020-03-01 10:21:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `travel_notes`
-- ----------------------------
DROP TABLE IF EXISTS `travel_notes`;
CREATE TABLE `travel_notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '序号',
  `notesId` int(9) unsigned NOT NULL COMMENT '游记ID',
  `day` int(3) NOT NULL COMMENT '第几天',
  `address` varchar(50) DEFAULT NULL COMMENT '地点',
  `text` text COMMENT '游记内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of travel_notes
-- ----------------------------
INSERT INTO `travel_notes` VALUES ('1', '452459', '1', '长沙', '你的答案》\r\n\r\n作词 Lyrics：林晨阳 刘涛\r\n\r\n作曲 Music：刘涛\r\n\r\n演唱Singer：阿冗\r\n\r\n制作人 Produced by 刘涛\r\n\r\n编曲 Arranger：谭侃侃\r\n\r\n吉他 Guitar：谭侃侃\r\n\r\n键盘 Keyboards：谭侃侃\r\n\r\n合声 Backing vocals：金天 胡阁\r\n\r\n录音棚 Recording studio：北京好乐无荒录音棚\r\n\r\n录音师 Recording Engineer：吴佳敏\r\n\r\n混音师 Mixing Engineer：刘三斤\r\n\r\n母带后期混音师 Mastering Engineer：刘三斤\r\n\r\n监制 Executive producer: 陶诗\r\n\r\nOP/SP：好乐无荒\r\n\r\n封面设计：kidult.\r\n\r\n鸣谢：万物体验家；不要音乐\r\n\r\n也许世界就这样\r\n\r\n我也还在路上\r\n\r\n没有人能诉说\r\n\r\n也许我只能沉默\r\n\r\n眼泪湿润眼眶\r\n\r\n可又不甘懦弱\r\n\r\n低着头 期待白昼\r\n\r\n接受所有的嘲讽\r\n\r\n向着风 拥抱彩虹\r\n\r\n勇敢的向前走\r\n\r\n黎明的那道光\r\n\r\n会越过黑暗\r\n\r\n打破一切恐惧我能\r\n\r\n找到答案\r\n\r\n哪怕要逆着光\r\n\r\n就驱散黑暗\r\n\r\n丢弃所有的负担\r\n\r\n不再孤单\r\n\r\n不再孤单\r\n\r\n也许世界就这样\r\n\r\n我也还在路上\r\n\r\n没有人能诉说\r\n\r\n也许我只能沉默\r\n\r\n眼泪湿润眼眶\r\n\r\n可又不甘懦弱\r\n\r\n低着头 期待白昼\r\n\r\n接受所有的嘲讽\r\n\r\n向着风 拥抱彩虹\r\n\r\n勇敢的向前走\r\n\r\n黎明的那道光\r\n\r\n会越过黑暗\r\n\r\n打破一切恐惧我能\r\n\r\n找到答案\r\n\r\n哪怕要逆着光\r\n\r\n就驱散黑暗\r\n\r\n丢弃所有的负担\r\n\r\n不再孤单\r\n\r\n不再孤单\r\n\r\n黎明的那道光\r\n\r\n会越过黑暗\r\n\r\n打破一切恐惧我能\r\n\r\n找到答案\r\n\r\n哪怕要逆着光\r\n\r\n就驱散黑暗\r\n\r\n有一万种的力量\r\n\r\n淹没孤单\r\n\r\n不再孤单 未经许可,不得翻唱或使用');
INSERT INTO `travel_notes` VALUES ('2', '452459', '2', '北京', '嚣张 - 卢凯彤 (Ellen Joyce Loo)\r\n\r\n词：周耀辉\r\n\r\n曲：卢凯彤\r\n\r\n编／监：何山／蔡德才／卢凯彤\r\n\r\n在头上有花 突然就会开出晶莹下昼\r\n\r\n右臂有些逆麟 破损受伤经常有\r\n\r\n在眉下有霜 突然落到心中铺平内疚\r\n\r\n就发怪的梦 就算尾巴独角多罕有\r\n\r\n若没有人选你 就别靠人保佑\r\n\r\n用鲸鱼浮出水的温柔 做美好的兽\r\n\r\n若没有人选我 但未够人荒谬\r\n\r\n为着能够 就有好理由\r\n\r\n让我邀请我们 走\r\n\r\n大城没耳朵 未能像我听到音乐在奏\r\n\r\n盛世太少味蕾 你伸脷尖舔铜锈\r\n\r\n未来没法选 但前面有一班珍禽异兽\r\n\r\n就干怪的事 就趁尾巴独角还原后\r\n\r\n若没有人选你 就别靠人保佑\r\n\r\n用白蛇盘于草的温柔 做美好的兽\r\n\r\n若没有人选我 但未够人荒谬\r\n\r\n为着能够 就有好理由\r\n\r\n没有几多要等候\r\n\r\n若没有人选你 在暴雨狂风后\r\n\r\n用自由而嚣张的温柔 做美好的兽\r\n\r\n若没有人选我 但未怕人依旧\r\n\r\n为着能够 就有好理由\r\n\r\n让我邀请我们 走');
INSERT INTO `travel_notes` VALUES ('3', '123456', '1', '美国', '感受停在我发端的指尖 如何瞬间冻结时间 记住望着我坚定的双眼 也许已经没有明天 面对浩瀚的星海 我们微小得像尘埃 漂浮在一片无奈 缘分让我们相遇乱世以外 命运却要我们危难中相爱 也许未来遥远在光年之外 我愿守候未知里为你等待 我没想到为了你我能疯狂到 山崩海啸没有你根本不想逃 我的大脑为了你已经疯狂到 脉搏心跳没有你根本不重要 一双围在我胸口的臂弯 足够抵挡天旋地转 一种执迷不放手的倔强 足以点燃所有希望 宇宙磅礴而冷漠 我们的爱微小却闪烁 颠簸却如此忘我 缘分让我们相遇乱世以外 命运却要我们危难中相爱 也许未来遥远在光年之外 我愿守候未知里为你等待 我没想到为了你我能疯狂到 山崩海啸没有你根本不想逃 我的大脑为了你已经疯狂到 脉搏心跳没有你根本不重要 也许航道以外是醒不来的梦 乱世以外...');
INSERT INTO `travel_notes` VALUES ('4', '123456', '2', '洛杉矶', '歌曲：《彩虹》\r\n\r\n作曲：周杰伦\r\n\r\n作词：周杰伦\r\n\r\n演唱：周杰伦\r\n\r\n歌词：\r\n\r\n哪里有彩虹告诉我\r\n\r\n能不能把我的愿望还给我\r\n\r\n为什么天这么安静\r\n\r\n所有的云都跑到我这里\r\n\r\n有没有口罩一个给我\r\n\r\n释怀说了太多就成真不了\r\n\r\n也许时间是一种解药\r\n\r\n也是我现在正服下的毒药\r\n\r\n看不见你的笑，我怎么睡得着\r\n\r\n你的声音这么近我却抱不到\r\n\r\n没有地球太阳还是会绕\r\n\r\n没有理由我也能自己走\r\n你要离开，我知道很简单\r\n\r\n你说依赖，是我们的阻碍\r\n\r\n就算放开，但能不能别没收我的爱\r\n\r\n当作我最后才明白\r\n\r\n有没有口罩一个给我\r\n\r\n释怀说了太多就成真不了\r\n\r\n也许时间是一种解药\r\n\r\n也是我现在正服下的毒药\r\n\r\n看不见你的笑，我怎么睡得着\r\n\r\n你的声音这么近我却抱不到\r\n\r\n没有地球太阳还是会绕\r\n\r\n没有理由我也能自己走\r\n\r\n你要离开，我知道很简单\r\n\r\n你说依赖，是我们的阻碍\r\n\r\n就算放开，但能不能别没收我的爱\r\n\r\n当作我最后才明白\r\n\r\nRAP\r\n\r\n看不见你的笑，要我怎么睡得着\r\n\r\n你的身影这么近我却抱不到\r\n\r\n没有地球太阳开始会绕会绕\r\n\r\n没有理由我也能自己走掉\r\n\r\n释怀说了太多就成真不了\r\n\r\n也许时间是一种解药解药\r\n\r\n也是我现在正服下的毒药\r\n\r\n你要离开，我知道很简单\r\n\r\n你说依赖，是我们的阻碍\r\n\r\n就算放开，但能不能别没收我的爱\r\n\r\n当作我最后才明白');
