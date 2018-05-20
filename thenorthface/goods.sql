/*
Navicat MySQL Data Transfer

Source Server         : sss
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : goods

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-05-18 10:30:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `details`
-- ----------------------------
DROP TABLE IF EXISTS `details`;
CREATE TABLE `details` (
  `sid` tinyint(1) NOT NULL,
  `img1` varchar(500) NOT NULL,
  `img2` varchar(500) NOT NULL,
  `img3` varchar(500) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of details
-- ----------------------------
INSERT INTO `details` VALUES ('0', 'https://img2.thenorthface.com.cn/public/images/44/84/d9/5825b1603eef3ac7de2c53794bf18d122c18b5d7.jpg?1523958554#h', 'https://img3.thenorthface.com.cn/public/images/07/ca/65/7e47e48979ed431626e66a48238ce014e9dd093a.jpg?1523958554#h', 'https://img2.thenorthface.com.cn/public/images/04/99/c6/d36553315984c0018c204202cf0bd5f3f17998d6.jpg?1523958554#h');

-- ----------------------------
-- Table structure for `list`
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `sid` tinyint(1) NOT NULL,
  `list1` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `list2` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `list3` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `list4` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `list5` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', 'T恤/polo衫', '皮肤衣', '衬衫', '冲锋衣', '卫衣');

-- ----------------------------
-- Table structure for `picprice`
-- ----------------------------
DROP TABLE IF EXISTS `picprice`;
CREATE TABLE `picprice` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) NOT NULL,
  `news` varchar(200) NOT NULL,
  `price` varchar(50) NOT NULL,
  `noprice` varchar(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of picprice
-- ----------------------------
INSERT INTO `picprice` VALUES ('1', 'https://img1.thenorthface.com.cn/public/images/db/34/8a/fd021db41276114cfd0bf6f817e2883e92a798ca.jpg?1523451486#h', 'TheNorthFace北面春夏新品轻质透气户外运动男紧身裤|3LEA', '498.00', '¥498.00');
INSERT INTO `picprice` VALUES ('2', 'https://img2.thenorthface.com.cn/public/images/db/44/ca/ac67dc8b6fbe81d56b248c24801eb84d3e3ecf4b.jpg?1524479803#h', 'TheNorthFace北面春夏新品吸湿排汗户外运动女短袖T恤|3GC3', '398.00', '¥398.00');
INSERT INTO `picprice` VALUES ('3', 'https://img1.thenorthface.com.cn/public/images/8f/0b/e3/cb31e1422348bc8ee89c28d3772bc3fc1d67bd10.jpg?1524479700#h', 'TheNorthFace北面春夏新品吸湿排汗户外跑步男短袖T恤|3GBY', '498.00', '¥498.00');
INSERT INTO `picprice` VALUES ('4', 'https://img1.thenorthface.com.cn/public/images/c4/85/a5/e17e9bf3b66ef04359bc6e7efbb3f470c19fc262.png?1523964318#h', 'TheNorthFace北面春夏新品抓地缓震透气户外男跑步鞋|2VUT', '1198.00', '¥1198.00');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `pass` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '18267906005', '123456');
INSERT INTO `user` VALUES ('7', '18267905581', '172f1f662c331683b9116438fb009a15');
INSERT INTO `user` VALUES ('8', '18267905580', '59ee4a9ed641ef7152435a3b76092233');
INSERT INTO `user` VALUES ('9', '18267905587', '2c3a51285d24ffb34b14e35399b01339');
INSERT INTO `user` VALUES ('10', '18267905587', '2c3a51285d24ffb34b14e35399b01339');
INSERT INTO `user` VALUES ('11', '18267905543', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('12', '18356785543', 'bbb8aae57c104cda40c93843ad5e6db8');
INSERT INTO `user` VALUES ('13', '18267906605', '4ba36d23a78c7393b4900ef38019d8ff');
INSERT INTO `user` VALUES ('14', '18267906055', 'e11170b8cbd2d74102651cb967fa28e5');
INSERT INTO `user` VALUES ('15', '18267906550', 'bbb8aae57c104cda40c93843ad5e6db8');
INSERT INTO `user` VALUES ('16', '18267002234', 'e11170b8cbd2d74102651cb967fa28e5');
INSERT INTO `user` VALUES ('17', '18267901111', '25d55ad283aa400af464c76d713c07ad');
