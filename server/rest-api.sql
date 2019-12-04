/*
 Navicat Premium Data Transfer

 Source Server         : tinh
 Source Server Type    : MySQL
 Source Server Version : 100314
 Source Host           : localhost:3306
 Source Schema         : rest-api

 Target Server Type    : MySQL
 Target Server Version : 100314
 File Encoding         : 65001

 Date: 14/10/2019 22:44:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;


-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `birthday` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_at` datetime(0) NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`, `username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'thanhtinh', 'thanhtinh', '$2b$10$0vF8IdjBhhtjfIoTvezBcu1VDescrgL3qOqx1sHG0Rc0WDG.Ryfme', 'thanhtinhpas@gmail.com', '1997-05-09', '2019-06-21 09:48:04', '2019-06-21 09:48:04');
INSERT INTO `users` VALUES (2, 'quangtrieu', 'subscriber', '$2b$10$3elT0zOG6hF0KIHqN4l1gugHSrw/2Rje.v/LnwKsUvHyc4qxTsG.i', 'thanhtinhpas@gmail.com', '1998-05-21', '2019-06-22 09:33:44', '2019-06-22 09:42:36');
INSERT INTO `users` VALUES (3, 'thanhtinh', 'writer', '$2b$10$3elT0zOG6hF0KIHqN4l1gugHSrw/2Rje.v/LnwKsUvHyc4qxTsG.i', 'huutien@gmail.com', '1998-05-18', '2019-06-23 21:12:38', '2019-06-23 21:12:38');
INSERT INTO `users` VALUES (4, 'thanhtinh', 'editor', '$2b$10$3elT0zOG6hF0KIHqN4l1gugHSrw/2Rje.v/LnwKsUvHyc4qxTsG.i', 'hello@gmail.com', '1999-05-01', '2019-06-21 09:48:05', '2019-06-21 09:48:05');
INSERT INTO `users` VALUES (6, 'thanhtinh', 'admin', '$2b$10$3elT0zOG6hF0KIHqN4l1gugHSrw/2Rje.v/LnwKsUvHyc4qxTsG.i', 'hdbhdh', '2019-06-20', '2019-06-21 09:57:45', '2019-06-21 09:57:45');
INSERT INTO `users` VALUES (7, 'thanhtinh', 'trieu', '$2b$10$3elT0zOG6hF0KIHqN4l1gugHSrw/2Rje.v/LnwKsUvHyc4qxTsG.i', 'donaldtrieu@gmail.com', '06/06/2019', '2019-06-04 16:35:10', '2019-06-04 04:54:46');
INSERT INTO `users` VALUES (8, 'thanhtinh', 'awd', '$2b$2b$10$3elT0zOG6hF0KIHqN4l1gugHSrw/2Rje.v/LnwKsUvHyc4qxTsG.i', 'awd@gmail', '06/25/2019', '2019-06-21 09:48:05', '2019-06-21 09:48:05');
INSERT INTO `users` VALUES (9, 'thanhtinh', 'trieunq', '$2b$10$eYWgcp3twC0jFH/NMHwXROL/pOA0c6mAArAWWWgrr9HFfltX43qSO', 'nguyenquangtrieu02071998@gmail.com', '2019-06-06', '2019-06-21 09:48:05', '2019-06-21 09:48:05');
INSERT INTO `users` VALUES (10, NULL, 'tinh', '$2b$10$i06K9UBSGYo3pRswk8Mju.XrPF.dMcWsaqw43Jn/BScB/CeYAs9LG', 'thanhtinhpas1@gmail.com', '01/01/1997', '2019-10-14 10:41:54', '2019-10-14 10:41:54');
INSERT INTO `users` VALUES (11, NULL, 'tinh', '$2b$10$Lmgt0IiFOCCIyAOrm3Ju5uBWIkFBV0SOBGda2q3NeU4uGIjwtqsDq', NULL, NULL, '2019-10-14 10:43:17', '2019-10-14 10:43:17');
INSERT INTO `users` VALUES (12, NULL, 'tinh', '$2b$10$DjrtdPyS/KJ3OkFWuGqQv.cPOfDzgrv/mCNpeQvNP7MN1aGjnJnBW', 'thanhtinhpas1@gmail.com', '01/01/1997', '2019-10-14 10:43:20', '2019-10-14 10:43:20');

SET FOREIGN_KEY_CHECKS = 1;
