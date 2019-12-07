/*
 Navicat Premium Data Transfer

 Source Server         : PTUDWNC
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : remotemysql.com:3306
 Source Schema         : SiLmQ4Ybi8

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 07/12/2019 15:09:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ub_chat_messages
-- ----------------------------
DROP TABLE IF EXISTS `ub_chat_messages`;
CREATE TABLE `ub_chat_messages`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tutor_id` int(11) NULL DEFAULT NULL,
  `student_id` int(11) NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_city
-- ----------------------------
DROP TABLE IF EXISTS `ub_city`;
CREATE TABLE `ub_city`  (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_complain_status
-- ----------------------------
DROP TABLE IF EXISTS `ub_complain_status`;
CREATE TABLE `ub_complain_status`  (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ub_complain_status
-- ----------------------------
INSERT INTO `ub_complain_status` VALUES (1, 'WAITING');
INSERT INTO `ub_complain_status` VALUES (2, 'RESOLVING');
INSERT INTO `ub_complain_status` VALUES (3, 'RESOLVED');

-- ----------------------------
-- Table structure for ub_contracts
-- ----------------------------
DROP TABLE IF EXISTS `ub_contracts`;
CREATE TABLE `ub_contracts`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tutor_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `course_id` bigint(11) NOT NULL,
  `start_time` datetime(0) NOT NULL,
  `finish_time` datetime(0) NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `is_paid` tinyint(4) NOT NULL DEFAULT 0,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `tutor_id`(`tutor_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `course_id`(`course_id`) USING BTREE,
  CONSTRAINT `ub_contracts_ibfk_1` FOREIGN KEY (`tutor_id`) REFERENCES `ub_tutors` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `ub_contracts_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `ub_users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `ub_contracts_ibfk_3` FOREIGN KEY (`course_id`) REFERENCES `ub_course` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_course
-- ----------------------------
DROP TABLE IF EXISTS `ub_course`;
CREATE TABLE `ub_course`  (
  `id` bigint(255) NOT NULL AUTO_INCREMENT,
  `price` bigint(19) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `tutor_id` int(11) NOT NULL,
  `rate` tinyint(5) NULL DEFAULT NULL,
  `status` tinyint(2) NOT NULL DEFAULT 1,
  `description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_district
-- ----------------------------
DROP TABLE IF EXISTS `ub_district`;
CREATE TABLE `ub_district`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `city_id` int(11) NOT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_feedback_course
-- ----------------------------
DROP TABLE IF EXISTS `ub_feedback_course`;
CREATE TABLE `ub_feedback_course`  (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NULL DEFAULT NULL,
  `course_id` int(11) NULL DEFAULT NULL,
  `rate` tinyint(2) NULL DEFAULT NULL,
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_payment_history
-- ----------------------------
DROP TABLE IF EXISTS `ub_payment_history`;
CREATE TABLE `ub_payment_history`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_number` int(11) NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `contract_id` bigint(20) NOT NULL,
  `bank_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_request_teaching
-- ----------------------------
DROP TABLE IF EXISTS `ub_request_teaching`;
CREATE TABLE `ub_request_teaching`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `student_id` bigint(11) NULL DEFAULT NULL,
  `course_id` bigint(11) NULL DEFAULT NULL,
  `status_id` tinyint(4) NOT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `status_id`(`status_id`) USING BTREE,
  CONSTRAINT `ub_request_teaching_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `ub_status_teaching` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_roles
-- ----------------------------
DROP TABLE IF EXISTS `ub_roles`;
CREATE TABLE `ub_roles`  (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ub_roles
-- ----------------------------
INSERT INTO `ub_roles` VALUES (1, 'USER', '2019-12-07 13:47:07', '2019-12-07 06:47:08');
INSERT INTO `ub_roles` VALUES (2, 'TUTOR', '2019-12-07 13:47:16', NULL);
INSERT INTO `ub_roles` VALUES (3, 'ADMIN', '2019-12-07 13:47:22', NULL);

-- ----------------------------
-- Table structure for ub_sale_reports
-- ----------------------------
DROP TABLE IF EXISTS `ub_sale_reports`;
CREATE TABLE `ub_sale_reports`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tutor_id` bigint(20) NOT NULL,
  `type_report` tinyint(4) NOT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_skills
-- ----------------------------
DROP TABLE IF EXISTS `ub_skills`;
CREATE TABLE `ub_skills`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `subject_id` int(11) NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_status_course
-- ----------------------------
DROP TABLE IF EXISTS `ub_status_course`;
CREATE TABLE `ub_status_course`  (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ub_status_course
-- ----------------------------
INSERT INTO `ub_status_course` VALUES (1, 'AVAILABLE');
INSERT INTO `ub_status_course` VALUES (2, 'NON_AVAILABLE');

-- ----------------------------
-- Table structure for ub_status_teaching
-- ----------------------------
DROP TABLE IF EXISTS `ub_status_teaching`;
CREATE TABLE `ub_status_teaching`  (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ub_status_teaching
-- ----------------------------
INSERT INTO `ub_status_teaching` VALUES (1, 'WAITING', '2019-12-07 14:34:18', '2019-12-07 14:34:43');
INSERT INTO `ub_status_teaching` VALUES (2, 'APPROVED', '2019-12-07 14:34:27', '2019-12-07 14:34:45');
INSERT INTO `ub_status_teaching` VALUES (3, 'REJECTED', '2019-12-07 14:34:55', '2019-12-07 14:35:06');
INSERT INTO `ub_status_teaching` VALUES (4, 'FINISHED', '2019-12-07 14:35:03', '2019-12-07 14:35:08');

-- ----------------------------
-- Table structure for ub_subjects
-- ----------------------------
DROP TABLE IF EXISTS `ub_subjects`;
CREATE TABLE `ub_subjects`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_teaching_history
-- ----------------------------
DROP TABLE IF EXISTS `ub_teaching_history`;
CREATE TABLE `ub_teaching_history`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tutor_id` bigint(20) NULL DEFAULT NULL,
  `student_id` bigint(20) NULL DEFAULT NULL,
  `course_id` bigint(11) NULL DEFAULT NULL,
  `start_time` date NULL DEFAULT NULL,
  `finish_time` date NULL DEFAULT NULL,
  `course_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `tutor_id`(`tutor_id`) USING BTREE,
  INDEX `student_id`(`student_id`) USING BTREE,
  INDEX `course_id`(`course_id`) USING BTREE,
  CONSTRAINT `ub_teaching_history_ibfk_1` FOREIGN KEY (`tutor_id`) REFERENCES `ub_tutors` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `ub_teaching_history_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `ub_users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_tutor_skill
-- ----------------------------
DROP TABLE IF EXISTS `ub_tutor_skill`;
CREATE TABLE `ub_tutor_skill`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `skill_id` int(11) NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_tutors
-- ----------------------------
DROP TABLE IF EXISTS `ub_tutors`;
CREATE TABLE `ub_tutors`  (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(11) NULL DEFAULT NULL,
  `introduce` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `rate` float(1, 0) NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `ub_tutors_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `ub_users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_type_report
-- ----------------------------
DROP TABLE IF EXISTS `ub_type_report`;
CREATE TABLE `ub_type_report`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ub_type_report
-- ----------------------------
INSERT INTO `ub_type_report` VALUES (1, 'DAY', '2019-12-07 15:05:44', NULL);
INSERT INTO `ub_type_report` VALUES (2, 'WEEK', NULL, NULL);
INSERT INTO `ub_type_report` VALUES (3, '30_DAY', NULL, NULL);
INSERT INTO `ub_type_report` VALUES (4, '60_DAY', NULL, NULL);
INSERT INTO `ub_type_report` VALUES (5, 'ALL', NULL, '2019-12-07 08:06:33');

-- ----------------------------
-- Table structure for ub_user_complain
-- ----------------------------
DROP TABLE IF EXISTS `ub_user_complain`;
CREATE TABLE `ub_user_complain`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `contract_id` bigint(20) NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `note` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `status` tinyint(5) NOT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  CONSTRAINT `ub_user_complain_ibfk_1` FOREIGN KEY (`status`) REFERENCES `ub_complain_status` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ub_users
-- ----------------------------
DROP TABLE IF EXISTS `ub_users`;
CREATE TABLE `ub_users`  (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `role_id` tinyint(4) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `city_id` int(11) NULL DEFAULT NULL,
  `is_active` tinyint(5) NOT NULL DEFAULT 1,
  `district_id` int(11) NULL DEFAULT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_at` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`, `username`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE,
  CONSTRAINT `ub_users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `ub_roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ub_users
-- ----------------------------
INSERT INTO `ub_users` VALUES (1, 'thanhtinh', 3, 'thanhtinh', '$2b$10$0vF8IdjBhhtjfIoTvezBcu1VDescrgL3qOqx1sHG0Rc0WDG.Ryfme', 'thanhtinhpas@gmail.com', NULL, NULL, 1, NULL, '2019-12-07 06:56:20', '2019-12-07 06:56:20');

SET FOREIGN_KEY_CHECKS = 1;
