-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: i6e204.p.ssafy.io    Database: yourstar
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `applicant`
--

DROP TABLE IF EXISTS `applicant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applicant` (
  `meeting_id` int DEFAULT '0',
  `member_id` int NOT NULL,
  `applicant_game_score` int NOT NULL DEFAULT '0',
  `applicant_warn_count` int NOT NULL DEFAULT '0',
  KEY `meeting_id` (`meeting_id`),
  KEY `FK_member_TO_applicant` (`member_id`),
  CONSTRAINT `applicant_ibfk_1` FOREIGN KEY (`meeting_id`) REFERENCES `meeting` (`meeting_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_member_TO_applicant` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicant`
--

LOCK TABLES `applicant` WRITE;
/*!40000 ALTER TABLE `applicant` DISABLE KEYS */;
INSERT INTO `applicant` VALUES (1,87,200,0),(1,66,250,0),(1,67,0,0),(1,68,0,0),(1,69,0,0),(1,70,0,0),(1,71,0,0),(1,72,0,0),(1,73,0,0),(17,91,400,2),(17,88,350,0),(17,87,100,0),(17,66,350,0),(9,94,0,0);
/*!40000 ALTER TABLE `applicant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `faq_id` int NOT NULL AUTO_INCREMENT,
  `faq_title` varchar(20) NOT NULL,
  `faq_content` text NOT NULL,
  PRIMARY KEY (`faq_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
INSERT INTO `faq` VALUES (1,'YOUR STAR란 무엇인가요?','YOUR STAR란 비대면 시대에 맞춰 오프라인으로 진행되는 팬미팅의 현장감을 온라인에서도 생생히 즐길 수 있도록 다양한 서비스를 제공하는 국내 유일의 온라인 팬미팅 화상 서비스 입니다.'),(2,'팬미팅 티켓 요금은 얼마인가요?','팬미팅 티켓 요금은 스타 혹은 소속사에서 선정하므로 각 팬미팅 마다 가격이 상이할 수 있습니다.'),(3,'어디에서 팬미팅이 진행되나요?','웹사이트는 PC, 모바일 둘 다 접속 가능하지만 팬미팅은 PC버전에서만 지원하고 있습니다. 팬미팅에 참석하시는 분들은 PC버전으로 참석 부탁드립니다. '),(4,'팬미팅은 어떻게 신청할 수 있나요?','팬미팅 일정은 로그인 없이 볼 수 있지만 팬미팅 티켓 예매는 사이트에서 로그인 후 미팅 상세 페이지에서 신청할 수 있습니다. 티켓 오픈시간은 스타에 따라 다르니 미팅 상세보기 페이지에서 시간을 잘 참고해주시길 바랍니다.'),(5,'라이브로 볼 수 있는 방법은 없나요?','현재 라이브 서비스로 볼 수 있는 방법은 없으며, 추후에 라이브 서비스를 제공할 예정입니다.'),(6,'팬미팅 순서는 어떻게 되나요?','YOUR STAR에서는 기본적으로 공연모드, 1:1 팬싸인회 모드, QnA모드, 게임모드(OX게임, 초성게임)을 제공하고 있으며 스타에 따라 기능이 추가되거나 변경될 수 있습니다.');
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager_group`
--

DROP TABLE IF EXISTS `manager_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager_group` (
  `manager_code` int NOT NULL AUTO_INCREMENT,
  `manager_code_name` varchar(20) NOT NULL,
  `manager_account_cnt` int DEFAULT '0',
  `manager_star_account_cnt` int DEFAULT NULL,
  PRIMARY KEY (`manager_code`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager_group`
--

LOCK TABLES `manager_group` WRITE;
/*!40000 ALTER TABLE `manager_group` DISABLE KEYS */;
INSERT INTO `manager_group` VALUES (0,'0',0,0),(1,'starship',2,1),(2,'fantagio',2,1),(3,'jyp',3,1),(4,'planaent',2,7),(5,'fncent',1,9),(6,'cube',2,1),(7,'hybe',1,5),(8,'creker',2,11),(9,'esaram',1,1),(10,'smtown',3,5),(11,'antenna',1,1),(12,'dongjunworld',1,1),(13,'ssafy',11,9);
/*!40000 ALTER TABLE `manager_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meeting`
--

DROP TABLE IF EXISTS `meeting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meeting` (
  `meeting_id` int NOT NULL AUTO_INCREMENT,
  `manager_code` int NOT NULL DEFAULT '0',
  `meeting_name` varchar(50) DEFAULT NULL,
  `meeting_open_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `meeting_start_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `meeting_end_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `meeting_cnt` int DEFAULT '0',
  `meeting_price` int DEFAULT NULL,
  `meeting_description` text,
  `is_approve` tinyint(1) DEFAULT NULL,
  `meeting_reg_dt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`meeting_id`),
  KEY `FK_manager_group_TO_meeting` (`manager_code`),
  CONSTRAINT `FK_manager_group_TO_meeting` FOREIGN KEY (`manager_code`) REFERENCES `manager_group` (`manager_code`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeting`
--

LOCK TABLES `meeting` WRITE;
/*!40000 ALTER TABLE `meeting` DISABLE KEYS */;
INSERT INTO `meeting` VALUES (1,1,'정세운 팬미팅〈레쓰꽁 럭키!〉','2022-01-03 20:00:00','2022-01-23 14:00:00','2022-01-23 16:00:00',10,100000,'정세운 팬미팅 - 행운미래전략실 3본부',1,'2022-02-14 13:51:33'),(2,2,'CHA EUN-WOO On-line Fanmeeting','2021-12-10 18:00:00','2021-12-25 20:00:00','2022-02-15 11:31:30',20,38500,'2021 Just One 10 Minute ~Into You~',1,'2022-02-14 14:10:34'),(3,3,'이준호 팬미팅','2022-01-05 17:00:00','2022-01-22 18:00:00','2022-01-22 21:00:00',15,110000,'JUNHO THE MOMENT',1,'2022-02-14 14:16:01'),(4,4,'빅톤 팬미팅','2022-01-14 20:00:00','2022-02-05 17:00:00','2022-02-05 19:00:00',30,90000,'순간순간을 기록하는 우리들만의 세상으로 당신을 초대합니다!',1,'2022-02-14 14:18:53'),(5,5,'2022 SF9 LIVE FANTASY','2022-01-30 12:00:00','2022-01-21 19:00:00','2022-01-21 21:30:00',18,132000,'＃3 IMPERFECT',1,'2022-02-14 14:20:50'),(6,6,'BTOB OFFICIAL FANCLUB MELODY 4TH FAN MEETING','2021-12-01 14:00:00','2022-01-01 18:00:00','2022-01-01 20:00:00',7,33000,'［Welcome to BTOB’s Home］비투비와 멜로디의 우당탕탕 스윗 홀리데이, 즐거움과 웃음이 갇그한 비투비의 집으로 초대합니다!',1,'2022-02-14 14:23:26'),(7,7,'2022 TOMORROW X TOGETHER FANLIVE MOA X TOGETHER','2022-02-25 20:00:00','2022-03-05 18:00:00','2022-03-05 20:30:00',5,77000,'2022 TOMORROW X TOGETHER FANLIVE MOA X TOGETHER',1,'2022-02-14 14:25:50'),(8,4,'2021 Apink Fanmeeting [Pink Eve]','2021-12-07 20:00:00','2021-12-31 19:00:00','2021-12-31 21:00:00',25,33000,'꿈결같이 찾아온 Apink 10주년. 놓칠 수 없는 PANDA와 Apink만의 특별한 축제!',1,'2022-02-14 14:28:04'),(9,3,'ITZY The 1st Fan Meeting','2022-01-14 20:00:00','2022-02-19 17:00:00','2022-02-19 18:30:00',10,66000,'“있지 믿지, 날자!”',1,'2022-02-15 01:59:05'),(10,8,'THE BOYZ FAN CON : THE B-ZONE','2021-11-16 20:00:00','2021-12-05 17:00:00','2021-12-05 19:00:00',22,39000,'Best We THE BOYZ! 더보이즈가 준비한 더비들을 위한 플레이그라운드 우리만의 공간',1,'2022-02-15 02:06:28'),(11,3,'TWICE 4TH WORLD TOUR ‘Ⅲ’','2021-11-29 20:00:00','2021-12-25 18:00:00','2021-12-25 20:00:00',30,132000,'TWICE 4TH WORLD TOUR ‘Ⅲ’',1,'2022-02-15 02:14:32'),(12,9,'My favorite SOO YOUNG FANMEETING','2022-01-21 18:00:00','2022-02-16 18:00:00','2022-02-16 19:30:00',5,33000,'My favorite SOO YOUNG FANMEETING',1,'2022-02-15 15:19:13'),(13,10,'NCT 127 2ND TOUR ‘NEO CITY : SEOUL','2022-02-17 14:00:00','2022-02-19 17:00:00','2022-02-19 19:00:00',10,100000,'THE LINK',1,'2022-02-15 15:29:18'),(14,11,'권진아 단독공연 ＇우리의 방식＇','2022-01-25 18:00:00','2022-02-20 18:00:00','2022-02-20 20:00:00',3,75000,'호흡과 호흡 사이, 무대와 객석 사이에 담긴 한 편의 이야기. 오늘을 오늘답게 살아가는 우리의 시간. 나의 모양대로 살아가는 우리를 위한.',1,'2022-02-15 15:37:27'),(15,3,'2PM ONLINE FANMEETING 〈Dear. HOTTEST〉','2022-01-12 20:00:00','2022-02-12 17:00:00','2022-02-12 19:00:00',14,49000,'13TH ANNIVERSARY ONLINE FANMEETING',1,'2022-02-15 15:45:27'),(16,3,'DAY6 (Even of Day) : Right Through Me','2022-02-16 17:00:00','2022-03-12 18:00:00','2022-03-12 20:00:00',6,39000,'Right Through Me',1,'2022-02-15 16:11:42'),(17,12,'아이돌 박동준 팬미팅 - ☆★','2022-02-17 10:00:00','2022-02-17 10:10:00','2022-02-17 10:29:36',5,9900,'아이돌 박동준의 첫 팬미팅에 참여해보세요 !',1,'2022-02-16 08:56:42'),(18,0,'GIRLS’ GENERATION 10th Anniversary','2022-01-02 19:00:00','2022-01-11 20:00:00','2022-01-11 22:00:00',20,89000,'GIRLS’ GENERATION 10th Anniversary - Holiday to Remember -',1,'2022-02-17 02:31:51'),(19,0,'CanDelight Shop','2021-12-01 12:00:00','2022-01-02 15:00:00','2022-01-02 17:00:00',30,118000,'CHOI MINHO FANMEETING - The Best CHOI\'s MINHO(최민호 팬미팅 - 더 베스트 초이스 민호)',1,'2022-02-17 02:39:56'),(21,0,'나훈아 AGAIN 테스형','2022-01-01 20:00:00','2022-01-08 19:00:00','2022-01-08 22:00:00',30,138900,'힘들고 답답한 세상 어렵게 비대면 팬미팅을 개최하게 되어 여러분을 초대합니다. 평범한 일상마저 가두어 버린 세상 요놈의 코로나를 멱살이라도 비틀어 답답한 세상에 희망가를 소리쳐 부를까 합니다. 상처받은 우리 모두와 함께 꿈을 노래하려 합니다. 함께 자리해 주십시오. 테스형- 세상이 왜 이래!',1,'2022-02-17 05:04:34'),(22,0,'CHOI MINHO FANMEETING TOUR ENCORE','2022-01-01 19:00:00','2022-02-06 19:00:00','2022-02-06 22:00:00',15,79000,'CHOI MINHO FANMEETING TOUR ENCORE - The Best CHOI\'s MINHO(최민호 팬미팅 투어 인코어 - 더 베스트 초이스 민호)',1,'2022-02-17 05:09:12'),(23,0,'INTO YURI','2022-02-08 13:00:00','2022-03-13 15:00:00','2022-03-13 18:00:00',30,89800,'유리 1st 팬미팅',1,'2022-02-17 05:11:46'),(24,0,'2022 ASTRO AROHA Festival [Be Mine]','2022-02-28 19:00:00','2022-03-28 17:00:00','2022-03-28 19:00:00',30,98000,'2022 ASTRO AROHA Festival [Be Mine]’(2022 아스트로 아로하 페스티벌 [비 마인]',1,'2022-02-17 05:18:41'),(25,0,'One Fine Day','2022-02-16 20:00:00','2022-03-01 15:00:00','2022-03-01 16:30:00',40,87900,'유연석의 두 번째 팬미팅 ‘One Fine Day’',1,'2022-02-17 05:22:04'),(26,0,'HAPPY SSOM DAY','2022-02-01 15:00:00','2022-03-01 15:30:00','2022-03-01 17:00:00',35,78000,'정소민의 첫 단독 팬미팅 해피 쏨데이(HAPPY SSOM DAY)',1,'2022-02-17 05:26:01'),(27,0,'GOLDEN DAY','2022-02-03 13:00:00','2022-03-23 17:00:00','2022-03-23 19:30:00',80,97000,'3월 23일에 첫 단독 팬미팅을 마련한 골든차일드는 이날 데뷔곡 ‘담다디’, 미니 2집 타이틀곡 ‘너라고 (It’s U)’ 등의 무대는 물론, 그동안 공개되지 않았던 수록곡들의 퍼포먼스, 관객들과 소통할 수 있는 다양한 이벤트 등을 준비해 팬들을 즐겁게 할 예정입니다 ! \n골든차일드와 함께해요 !',1,'2022-02-17 05:28:51'),(28,0,'Crank Up','2022-01-01 16:00:00','2022-02-01 20:00:00','2022-02-01 21:20:00',40,10899,'이종석의 겨울 팬미팅 크랭크 업(Crank Up)',1,'2022-02-17 05:35:05'),(29,0,'공유 Live Make A Wish','2022-02-10 12:00:00','2022-03-10 19:00:00','2022-03-10 20:20:00',30,145000,'배우 공유의 첫 비대면 팬미팅 \'Live Make A Wish\'',1,'2022-02-17 05:39:00'),(30,0,'아이돌 박동준의 팬미팅❤','2022-02-18 12:00:00','2022-02-18 13:00:00','2022-02-18 14:00:00',5,99000,'아이돌 박동준과 함께 팬미팅',0,'2022-02-17 06:11:43'),(31,0,'아이돌 박동준 팬미팅❤','2022-02-18 12:00:00','2022-02-18 13:00:00','2022-02-18 15:00:00',5,99000,'아이돌 박동준과 함께 팬미팅!',0,'2022-02-17 06:14:54');
/*!40000 ALTER TABLE `meeting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meeting_img_path`
--

DROP TABLE IF EXISTS `meeting_img_path`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meeting_img_path` (
  `file_id` int NOT NULL AUTO_INCREMENT,
  `meeting_id` int NOT NULL,
  `file_name` varchar(500) NOT NULL,
  `file_size` bigint NOT NULL,
  `file_content_type` varchar(500) NOT NULL,
  `file_url` varchar(500) NOT NULL,
  `file_reg_dt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`file_id`),
  KEY `FK_meeting_TO_meeting_img_path` (`meeting_id`),
  CONSTRAINT `FK_meeting_TO_meeting_img_path` FOREIGN KEY (`meeting_id`) REFERENCES `meeting` (`meeting_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeting_img_path`
--

LOCK TABLES `meeting_img_path` WRITE;
/*!40000 ALTER TABLE `meeting_img_path` DISABLE KEYS */;
INSERT INTO `meeting_img_path` VALUES (1,1,'1.jpg',185887,'image/jpeg','/upload/220f8f48-1890-4a9d-9749-e6d977bf5f82.jpg','2022-02-14 13:51:33'),(2,2,'2.jpg',202903,'image/jpeg','/upload/764daf5b-f302-4843-8522-eeffb83b8234.jpg','2022-02-14 14:10:34'),(3,3,'3.jpg',337562,'image/jpeg','/upload/c2a83920-7dfb-45f8-bb13-25d345f2c0fd.jpg','2022-02-14 14:16:01'),(4,4,'4.jpg',306080,'image/jpeg','/upload/cd0c2c10-96e9-4d02-9a88-a0b6207961b7.jpg','2022-02-14 14:18:53'),(5,5,'5.jpg',995807,'image/jpeg','/upload/302b3771-4608-44e9-8075-3083560d1d08.jpg','2022-02-14 14:20:50'),(6,6,'6.jpg',1334925,'image/jpeg','/upload/af52c97f-f7d1-4727-8b03-83db4a357e44.jpg','2022-02-14 14:23:26'),(7,7,'7.jpg',237949,'image/jpeg','/upload/b6a75666-58a1-44da-9249-db8cadcbee9d.jpg','2022-02-14 14:25:50'),(8,8,'8.jpg',200513,'image/jpeg','/upload/8c674a73-9f38-4f7c-8774-2831ac3a0356.jpg','2022-02-14 14:28:04'),(9,9,'9.jpg',69274,'image/jpeg','/upload/34f60bca-ea74-4dab-a868-150e0d26f298.jpg','2022-02-15 01:59:05'),(10,10,'10.jpg',294654,'image/jpeg','/upload/1e80f92d-9adb-4280-be1b-6c4369c50077.jpg','2022-02-15 02:06:28'),(11,11,'11.jpg',325154,'image/jpeg','/upload/931cb51d-e7af-4b8f-9f70-192b2a5101e2.jpg','2022-02-15 02:14:32'),(12,12,'12.jpg',136831,'image/jpeg','/upload/1fa74e32-3844-489e-92e4-c29d67b806ad.jpg','2022-02-15 15:19:13'),(13,13,'13.jpg',553820,'image/jpeg','/upload/3ba21d6e-61e6-4330-ab90-f4e42b6699e1.jpg','2022-02-15 15:29:18'),(14,14,'14.jpg',101230,'image/jpeg','/upload/7bafdc12-e549-4e7e-9d75-d3f3edb1bb8b.jpg','2022-02-15 15:37:27'),(15,15,'15.jpg',80351,'image/jpeg','/upload/a7ccb33f-27de-4cca-9c01-4a106e856393.jpg','2022-02-15 15:45:27'),(16,16,'16.jpg',112553,'image/jpeg','/upload/b03db2f8-f553-4cbc-9d9a-2d5920c5e01b.jpg','2022-02-15 16:11:42'),(17,17,'아이돌_박동준.jpg',77548,'image/jpeg','/upload/894f5144-8eb0-4496-be61-d0bd3b25212c.jpg','2022-02-16 08:56:42'),(19,18,'20170711-27452_12.jpg',44724,'image/jpeg','/upload/6d93e2a0-7b4a-4e3b-ab34-9a0ecc82b714.jpg','2022-02-17 02:31:51'),(20,19,'CanDelight Shop.jpg',63616,'image/jpeg','/upload/cf54eb34-e3ef-40bb-8745-55d14b0b061f.jpg','2022-02-17 02:39:56'),(22,21,'AKR20171104000700005_01_i_P4.jpg',65876,'image/jpeg','/upload/ebfbd06f-b17e-489c-9523-74b103a9d843.jpg','2022-02-17 05:04:34'),(23,22,'1637743129_1613952.jpg',50347,'image/jpeg','/upload/258b9a1d-b358-4392-86a3-99c905a5d601.jpg','2022-02-17 05:09:12'),(24,23,'IMG_20181216_150447.jpg',98793,'image/jpeg','/upload/0c975806-3e00-45e2-8284-4044add0afc2.jpg','2022-02-17 05:11:46'),(25,24,'PS21031300084.jpg',188499,'image/jpeg','/upload/2fb1372e-b378-405b-933e-6bb7b9923f4a.jpg','2022-02-17 05:18:41'),(26,25,'913913_363512_183.jpg',205342,'image/jpeg','/upload/c6d40aba-2f3c-4e13-896f-0c3c2518b3e3.jpg','2022-02-17 05:22:04'),(27,26,'201902140833580710_1.jpg',18952,'image/jpeg','/upload/fa707acd-4ae5-40e6-959f-8e2c7eb9c060.jpg','2022-02-17 05:26:01'),(28,27,'89911154.1.jpg',171242,'image/jpeg','/upload/dd1c6e55-ed71-4188-8ad1-2e483042c816.jpg','2022-02-17 05:28:51'),(29,28,'DhJbYcyU0AAT5dL.jpg',173244,'image/jpeg','/upload/33779266-0851-4056-8cc0-17d99ddb1af2.jpg','2022-02-17 05:35:05'),(30,29,'ffe2109059f13df452532d89f80b92e0.jpg',185844,'image/jpeg','/upload/87745a71-1fdb-4640-bbe3-c00916cca214.jpg','2022-02-17 05:39:00'),(31,30,'박동준',77554,'application/octet-stream','/upload/b89a18a9-2e45-4e91-9dd8-9633919c3f19.','2022-02-17 06:11:43'),(32,31,'박동준',77554,'application/octet-stream','/upload/d2eeb8b3-5f71-47cf-ada7-b8b5d6d4d152.','2022-02-17 06:14:54');
/*!40000 ALTER TABLE `meeting_img_path` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meeting_oath`
--

DROP TABLE IF EXISTS `meeting_oath`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meeting_oath` (
  `meeting_id` int NOT NULL,
  `member_id` int NOT NULL,
  `is_oath` tinyint NOT NULL DEFAULT '0',
  KEY `FK_member_TO_oath_idx` (`member_id`),
  KEY `FK_meeting_TO_oath_idx` (`meeting_id`),
  CONSTRAINT `FK_meeting_TO_oath` FOREIGN KEY (`meeting_id`) REFERENCES `meeting` (`meeting_id`),
  CONSTRAINT `FK_member_TO_oath` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeting_oath`
--

LOCK TABLES `meeting_oath` WRITE;
/*!40000 ALTER TABLE `meeting_oath` DISABLE KEYS */;
INSERT INTO `meeting_oath` VALUES (1,87,0),(1,66,0),(1,67,0),(1,68,0),(1,69,0),(1,70,0),(1,71,0),(1,72,0),(1,73,0),(17,91,1),(17,88,1),(17,87,1),(17,66,1),(17,89,1),(9,94,0);
/*!40000 ALTER TABLE `meeting_oath` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meeting_record_img_path`
--

DROP TABLE IF EXISTS `meeting_record_img_path`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meeting_record_img_path` (
  `file_id` int NOT NULL AUTO_INCREMENT,
  `meeting_id` int NOT NULL,
  `member_id` int NOT NULL,
  `file_name` varchar(500) NOT NULL,
  `file_url` text NOT NULL,
  `file_reg_dt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`file_id`),
  KEY `FK_meeting_TO_meeting_record_image_path_idx` (`meeting_id`),
  KEY `FK_member_TO_meeting_record_img_path_idx` (`member_id`),
  CONSTRAINT `FK_meeting_TO_meeting_record_img_path` FOREIGN KEY (`meeting_id`) REFERENCES `meeting` (`meeting_id`),
  CONSTRAINT `FK_member_TO_meeting_record_img_path` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeting_record_img_path`
--

LOCK TABLES `meeting_record_img_path` WRITE;
/*!40000 ALTER TABLE `meeting_record_img_path` DISABLE KEYS */;
INSERT INTO `meeting_record_img_path` VALUES (15,1,66,'1_66_.jpg','/home/ubuntu/upload/1_66_.jpg','2022-02-16 09:23:57'),(17,1,66,'1_66_.jpg','/home/ubuntu/upload/1_66_.jpg','2022-02-16 10:25:59'),(23,17,66,'17_66_.jpg','/home/ubuntu/upload/17_66_.jpg','2022-02-17 01:28:00'),(25,17,87,'17_87_.jpg','/home/ubuntu/upload/17_87_.jpg','2022-02-17 01:28:39'),(26,17,91,'17_91_.jpg','/home/ubuntu/upload/17_91_.jpg','2022-02-17 01:28:58'),(27,17,88,'17_88_.jpg','/home/ubuntu/upload/17_88_.jpg','2022-02-17 01:29:23');
/*!40000 ALTER TABLE `meeting_record_img_path` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meeting_record_video_path`
--

DROP TABLE IF EXISTS `meeting_record_video_path`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meeting_record_video_path` (
  `file_id` int NOT NULL AUTO_INCREMENT,
  `member_id` int NOT NULL,
  `meeting_id` int NOT NULL,
  `file_name` varchar(500) NOT NULL,
  `file_url` varchar(500) NOT NULL,
  `file_reg_dt` datetime DEFAULT CURRENT_TIMESTAMP,
  `recording_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`file_id`),
  KEY `FK_meeting_TO_meeting_record_video_path` (`meeting_id`),
  KEY `FK_member_TO_meeting_record_video_path` (`member_id`),
  CONSTRAINT `FK_meeting_TO_meeting_record_video_path` FOREIGN KEY (`meeting_id`) REFERENCES `meeting` (`meeting_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_member_TO_meeting_record_video_path` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeting_record_video_path`
--

LOCK TABLES `meeting_record_video_path` WRITE;
/*!40000 ALTER TABLE `meeting_record_video_path` DISABLE KEYS */;
INSERT INTO `meeting_record_video_path` VALUES (2,87,1,'정세운 팬미팅〈레쓰꽁 럭키!〉 1대1 미팅','https://i6e204.p.ssafy.io:8443/openvidu/recordings/1-onebyone-12/room-1_memberId-87.mp4','2022-02-16 09:23:26','1-onebyone-12'),(3,88,1,'정세운 팬미팅〈레쓰꽁 럭키!〉 1대1 미팅','https://i6e204.p.ssafy.io:8443/openvidu/recordings/1-onebyone-13/room-1_memberId-88.mp4','2022-02-16 09:23:43','1-onebyone-13'),(4,66,1,'정세운 팬미팅〈레쓰꽁 럭키!〉 1대1 미팅','https://i6e204.p.ssafy.io:8443/openvidu/recordings/1-onebyone-14/room-1_memberId-66.mp4','2022-02-16 09:24:00','1-onebyone-14'),(5,88,1,'정세운 팬미팅〈레쓰꽁 럭키!〉 1대1 미팅','https://i6e204.p.ssafy.io:8443/openvidu/recordings/1-onebyone-16/room-1_memberId-88.mp4','2022-02-16 10:25:32','1-onebyone-16'),(6,87,1,'정세운 팬미팅〈레쓰꽁 럭키!〉 1대1 미팅','https://i6e204.p.ssafy.io:8443/openvidu/recordings/1-onebyone-17/room-1_memberId-87.mp4','2022-02-16 10:25:48','1-onebyone-17'),(7,66,1,'정세운 팬미팅〈레쓰꽁 럭키!〉 1대1 미팅','https://i6e204.p.ssafy.io:8443/openvidu/recordings/1-onebyone-18/room-1_memberId-66.mp4','2022-02-16 10:26:05','1-onebyone-18'),(14,66,17,'아이돌 박동준 팬미팅 - ☆★ 1대1 미팅','https://i6e204.p.ssafy.io:8443/openvidu/recordings/17-onebyone-5/room-17_memberId-66.mp4','2022-02-17 01:28:04','17-onebyone-5'),(16,87,17,'아이돌 박동준 팬미팅 - ☆★ 1대1 미팅','https://i6e204.p.ssafy.io:8443/openvidu/recordings/17-onebyone-7/room-17_memberId-87.mp4','2022-02-17 01:28:47','17-onebyone-7'),(17,91,17,'아이돌 박동준 팬미팅 - ☆★ 1대1 미팅','https://i6e204.p.ssafy.io:8443/openvidu/recordings/17-onebyone-8/room-17_memberId-91.mp4','2022-02-17 01:29:09','17-onebyone-8'),(18,88,17,'아이돌 박동준 팬미팅 - ☆★ 1대1 미팅','https://i6e204.p.ssafy.io:8443/openvidu/recordings/17-onebyone-9/room-17_memberId-88.mp4','2022-02-17 01:29:32','17-onebyone-9');
/*!40000 ALTER TABLE `meeting_record_video_path` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_id` int NOT NULL AUTO_INCREMENT,
  `member_email` varchar(30) NOT NULL,
  `code` int NOT NULL DEFAULT '3',
  `manager_code` int NOT NULL DEFAULT '0',
  `member_pw` varchar(100) NOT NULL,
  `member_name` varchar(30) DEFAULT NULL,
  `member_nick` varchar(30) DEFAULT NULL,
  `member_phonenum` varchar(12) DEFAULT '01000000000',
  `member_address` varchar(40) DEFAULT '서울시',
  `member_birth` varchar(10) DEFAULT '1900-01-01',
  `member_gender` varchar(6) DEFAULT 'male',
  `is_approve` tinyint(1) DEFAULT '0',
  `is_login` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`member_id`,`member_email`),
  UNIQUE KEY `member_email_UNIQUE` (`member_email`),
  UNIQUE KEY `member_id_UNIQUE` (`member_id`),
  UNIQUE KEY `member_nick_UNIQUE` (`member_nick`),
  KEY `FK_member_code_TO_member` (`code`),
  CONSTRAINT `FK_member_code_TO_member` FOREIGN KEY (`code`) REFERENCES `member_code` (`code`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (2,'your_star@naver.com',1,0,'$2a$10$JtKrtPnNmx5kCgJqIFXpZuGxIxrSb0BaFZx45/dcMPfQNgs7Fj6tG','Your Star','Your Star','051-970-7114','부산광역시 강서구 송정동 녹산산업중로 333','2021-07-07','관리',1,1),(3,'star1@starship.com',4,1,'$2a$10$a4OowFgcyQVPze.tzrCJlecSwbos9zHlPODKZnZL1WsBqlyYlyzMm','starship 스타1','starship 스타1',NULL,NULL,NULL,NULL,1,0),(4,'manager1@starship.com',2,1,'$2a$10$kOgenw0O4k1IQOmNmkMJbuiXKWvUm3.ibmd067uWGTpUTYGijTb4S','starship 관계자1','starship 관계자1',NULL,NULL,NULL,NULL,1,1),(5,'manager2@starship.com',2,1,'$2a$10$MjnXzKHOUHIwUIx2w5ZDROhwepegmpfqxXHXOBVszumehx/io4lP2','starship 관계자2','starship 관계자2',NULL,NULL,NULL,NULL,1,0),(6,'star1@fantagio.com',4,2,'$2a$10$fN4S9EVJDgp5kzMlVtH06uwRwUUrqf1Qmq3cstnS8rychB1zkCULS','fantagio 스타1','fantagio 스타1',NULL,NULL,NULL,NULL,1,1),(7,'manager1@fantagio.com',2,2,'$2a$10$Y6kIF50oH1nxIQNF4JpLZ.ZYXSXyGQRftC3ezHkAbyf2ta2mQTgOy','fantagio 관계자1','fantagio 관계자1',NULL,NULL,NULL,NULL,1,0),(8,'manager2@fantagio.com',2,2,'$2a$10$BwdnCY9bKFo30TCYTDdlqufEnJBxKCBVJCqvL9dKMwRX6JwWGhzfm','fantagio 관계자2','fantagio 관계자2',NULL,NULL,NULL,NULL,1,0),(9,'star1@jyp.com',4,3,'$2a$10$wVDXYxrMYp/nvgU5sfcjqec1dBJcX5AwEdMo4rfVOREiZKzbDoCG2','jyp 스타1','jyp 스타1',NULL,NULL,NULL,NULL,1,0),(10,'manager1@jyp.com',2,3,'$2a$10$AIB8ZS9oZ.N7t6qeiL7lsu5pKC5aLbD4fZs4VJI7NCjTI.e.Ss4Ca','jyp 관계자1','jyp 관계자1',NULL,NULL,NULL,NULL,1,0),(11,'manager2@jyp.com',2,3,'$2a$10$rqv9KkxrkFtXkbkqjSPQDOdZdhXn54zD7qNCQ0FDqXWCOD449jLDW','jyp 관계자2','jyp 관계자2',NULL,NULL,NULL,NULL,1,0),(12,'manager3@jyp.com',2,3,'$2a$10$3sm21dTxYocdxgZUl8WrT.LbMY7I/tNfahDU84jXAlNAHUeLdsvny','jyp 관계자3','jyp 관계자3',NULL,NULL,NULL,NULL,1,1),(13,'star1@planaent.com',4,4,'$2a$10$GJfVrWvv35PhWTXFFwrD0OsxXZwzHEF/TUhWHhg9hZRHzEqsR80/a','planaent 스타1','planaent 스타1',NULL,NULL,NULL,NULL,1,0),(14,'star2@planaent.com',4,4,'$2a$10$i0hACTip5MAnj.g3Go3igOgGPCn4kIAYBGCrtzdRCf55I4YhK57b.','planaent 스타2','planaent 스타2',NULL,NULL,NULL,NULL,1,0),(15,'star3@planaent.com',4,4,'$2a$10$MT8I2VIfpaIzj581FBye9.fyymYJ6v5oeo62fMIl1vfxvWfGT7whq','planaent 스타3','planaent 스타3',NULL,NULL,NULL,NULL,1,0),(16,'star4@planaent.com',4,4,'$2a$10$tzMlsjYu0LuEz6.rvFrA5.VPZRH/tz0DSb9jr6SLHU/bdS42lsFTW','planaent 스타4','planaent 스타4',NULL,NULL,NULL,NULL,1,0),(17,'star5@planaent.com',4,4,'$2a$10$4tX2p0G8XoXTInI52UJoyeOeSvDsx9pnMKbx3/rIsqR.Aqw18szQe','planaent 스타5','planaent 스타5',NULL,NULL,NULL,NULL,1,0),(18,'star6@planaent.com',4,4,'$2a$10$k92FQKkubk7UE7fEB51EZOG0Bd5hBN2RxpOlgARwZasO3xZbSeXXO','planaent 스타6','planaent 스타6',NULL,NULL,NULL,NULL,1,0),(19,'star7@planaent.com',4,4,'$2a$10$fFtDsLW7PXbNPKVU009OcOvNTl3ECvSw/hmcXUroxV2jDXRVFvqMO','planaent 스타7','planaent 스타7',NULL,NULL,NULL,NULL,1,0),(20,'manager1@planaent.com',2,4,'$2a$10$H6rNz8bxH4MjJileJdpvu.tB50onWpaacPDiG6BfT2Xw/wJKWfAmK','planaent 관계자1','planaent 관계자1',NULL,NULL,NULL,NULL,1,0),(21,'manager2@planaent.com',2,4,'$2a$10$WbPd1dhPljQa5fboP7o7jepvxN1r/4AHNcaymHWpzQXLWsr.7w2Fq','planaent 관계자2','planaent 관계자2',NULL,NULL,NULL,NULL,1,0),(22,'star1@SF9.com',4,5,'$2a$10$oLquZln.PRKwBPYPi.wMSeo.kMP1kEeB/VDo8qiL13mKn9Qhnqm1y','SF9 스타1','SF9 스타1',NULL,NULL,NULL,NULL,1,0),(23,'star2@SF9.com',4,5,'$2a$10$AP7fSLB1OgiWrcmcVTlDxOqnqWX6yHIaWHAvaFjK0814cSGScpsjO','SF9 스타2','SF9 스타2',NULL,NULL,NULL,NULL,1,0),(24,'star3@SF9.com',4,5,'$2a$10$yhPGLVNXh2eSj6DhcGhsxu6I/dVhcQQrgdbDk0Gnh.sVDJIQ9KkfS','SF9 스타3','SF9 스타3',NULL,NULL,NULL,NULL,1,0),(25,'star4@SF9.com',4,5,'$2a$10$Xo80MkajY3/T0cJlu/JnaO0O3n4LgMA14.qfLUBTIqaJdIM5b1dh6','SF9 스타4','SF9 스타4',NULL,NULL,NULL,NULL,1,0),(26,'star5@SF9.com',4,5,'$2a$10$qX4uP6FNHG24LyQr/oRINe9/qhEkujGVAZnTg.hEcw9da6o9vMlKK','SF9 스타5','SF9 스타5',NULL,NULL,NULL,NULL,1,0),(27,'star6@SF9.com',4,5,'$2a$10$/IVQj0uwmOEBT9d5kfnPXuEMlQvg5LqXIiRswlEoKpu2LUDXNYiQq','SF9 스타6','SF9 스타6',NULL,NULL,NULL,NULL,1,0),(28,'star7@SF9.com',4,5,'$2a$10$nlaKSWYunsrr98KCTmNJAOyfHJus5MVb4qvekv51l8.JOU17A8xQe','SF9 스타7','SF9 스타7',NULL,NULL,NULL,NULL,1,0),(29,'star8@SF9.com',4,5,'$2a$10$NAa9SfkJ4/CsKVMC.4v1zOoHMpl283UPA1ygLbX/77wJ4iPofyaX.','SF9 스타8','SF9 스타8',NULL,NULL,NULL,NULL,1,0),(30,'star9@SF9.com',4,5,'$2a$10$yMwUYX.GQz.6pJO4bMWhoeLTL0aiHGeDf.ikVm0Y5sHhDM1jyUmze','SF9 스타9','SF9 스타9',NULL,NULL,NULL,NULL,1,0),(31,'manager1@SF9.com',2,5,'$2a$10$fVOZlM62FVhI60zr048luufKRFNiyXdF668oUqjPmW415niSMnDI6','SF9 관계자1','SF9 관계자1',NULL,NULL,NULL,NULL,1,0),(32,'star1@cube.com',4,6,'$2a$10$IJLlW2sMoK9HbM2hvJhwZetP5zZ73S4v8Ny.ak.V5C4RBQDX.jGOO','cube 스타1','cube 스타1',NULL,NULL,NULL,NULL,1,0),(33,'manager1@cube.com',2,6,'$2a$10$sNQzzOAEn8EqtloLJ52b3.xzYSpWn7Zaxgs7JWwpI0FkEfrkcts0a','cube 관계자1','cube 관계자1',NULL,NULL,NULL,NULL,1,0),(34,'manager2@cube.com',2,6,'$2a$10$oPMdqYfT8Hppf4jqncZ7jOVn/ajm2zk0bi5e35eVkn3F8V9Q3WhdK','cube 관계자2','cube 관계자2',NULL,NULL,NULL,NULL,1,0),(35,'star1@hybe.com',4,7,'$2a$10$Hsw7RVJnaU4enp2EKsqfjuZP7HvMtrwdAZoidDhKnhdmLM/xnJ2Be','hybe 스타1','hybe 스타1',NULL,NULL,NULL,NULL,1,0),(36,'star2@hybe.com',4,7,'$2a$10$uhLkHsl7HRvX/elwwQw7uOGFzT3re6R2tBef5bNHWwWKRvXB0JnxS','hybe 스타2','hybe 스타2',NULL,NULL,NULL,NULL,1,0),(37,'star3@hybe.com',4,7,'$2a$10$B3wiDrkWaLkIwMenlKFvoOJRH9DxoJcUCsHYJupow1owiayMPglNK','hybe 스타3','hybe 스타3',NULL,NULL,NULL,NULL,1,0),(38,'star4@hybe.com',4,7,'$2a$10$z61MakbOwe3bvnzWqP1uDOtnEuRa6ewrWS0EnjpiRAv8C3vpWnUXS','hybe 스타4','hybe 스타4',NULL,NULL,NULL,NULL,1,0),(39,'star5@hybe.com',4,7,'$2a$10$LGtbpab1okooEus0TvwmjeNNgN7wysMn9SQxGLQ4Y4yVLtUAlabxa','hybe 스타5','hybe 스타5',NULL,NULL,NULL,NULL,1,0),(40,'manager1@hybe.com',2,7,'$2a$10$othCREzzdcz3OWMlLn6F4OkJgLkMP7oI/368Y2Vwar6Wl8lzWPh0i','hybe 관계자1','hybe 관계자1',NULL,NULL,NULL,NULL,1,0),(41,'star1@creker.com',4,8,'$2a$10$zQAgzbKePrz94yTxkZUZQe/HKbB/9ciEK5a.XRpTkfCaGlBHivQIK','creker 스타1','creker 스타1',NULL,NULL,NULL,NULL,1,0),(42,'star2@creker.com',4,8,'$2a$10$wdLJo/JLAibsgRHQfdbZd.YTl2Tg5lJ6h15OnZlbTgsLAG/eNmM2G','creker 스타2','creker 스타2',NULL,NULL,NULL,NULL,1,0),(43,'star3@creker.com',4,8,'$2a$10$oFAwYXMiXe3O1obriY/0H.oXlkj7xRYYzQvH12tF5JjuSLrGpIK3.','creker 스타3','creker 스타3',NULL,NULL,NULL,NULL,1,0),(44,'star4@creker.com',4,8,'$2a$10$uc6gcJ.Xhr8wuDDA4etWeuiiEfR4QpFIE5YX9CgUEKpPUNcE96tJ2','creker 스타4','creker 스타4',NULL,NULL,NULL,NULL,1,0),(45,'star5@creker.com',4,8,'$2a$10$oagipIEefu/qKH9aPeENT.oxy7XNnlrZBm8sj9pTqlUgUuYVVOvrC','creker 스타5','creker 스타5',NULL,NULL,NULL,NULL,1,0),(46,'star6@creker.com',4,8,'$2a$10$aO6mDwpxmXqonIEuWoR/T.Go0yalYlGK6WAveqmDIKg428Nc30OoW','creker 스타6','creker 스타6',NULL,NULL,NULL,NULL,1,0),(47,'star7@creker.com',4,8,'$2a$10$q/teSJwtGfcgqNHhCGW7vOS3mjYTecBLqV.MJLxi0iIM9teUqjmI2','creker 스타7','creker 스타7',NULL,NULL,NULL,NULL,1,0),(48,'star8@creker.com',4,8,'$2a$10$7Sk6RVWNqUwF2dpaI7u0xOQqc3naKoATdo6P..MNaRBrLnKRPkBKO','creker 스타8','creker 스타8',NULL,NULL,NULL,NULL,1,0),(49,'star9@creker.com',4,8,'$2a$10$.broJc06pd0IM3aTe2XZMuumEiDXCOWZahUi8r6AioTt8FMcaJPi.','creker 스타9','creker 스타9',NULL,NULL,NULL,NULL,1,0),(50,'star10@creker.com',4,8,'$2a$10$53Fz8x5RFv3RuU1UszEh9ukAXIoRm3XPe/BMUlsLhuj4ahqgBSzR.','creker 스타10','creker 스타10',NULL,NULL,NULL,NULL,1,0),(51,'star11@creker.com',4,8,'$2a$10$/Dgk.rAQo.EVyvT9ApO8d.rfig4PLS8Q36sWt2qZFq/CyMOzld7W2','creker 스타11','creker 스타11',NULL,NULL,NULL,NULL,1,0),(52,'manager1@creker.com',2,8,'$2a$10$MAup54F7nag/6iVcLPLmS.r1DrBBFdh/hEZ2XZNNd/FErqVcgfDxi','creker 관계자1','creker 관계자1',NULL,NULL,NULL,NULL,1,0),(53,'manager2@creker.com',2,8,'$2a$10$A45U4ofoUBrB8qHnPCF.o.avUcJsQw7eBO6LBq6R.kt7NZWKhx5sW','creker 관계자2','creker 관계자2',NULL,NULL,NULL,NULL,1,0),(54,'star1@esaram.com',4,9,'$2a$10$OsrtAhaBT6o2agEcFxt1/eV2ABpaUFR40NDepBmaq1yWfM8H6hv9O','esaram 스타1','esaram 스타1',NULL,NULL,NULL,NULL,1,0),(55,'manager1@esaram.com',2,9,'$2a$10$446jCmwj7I/VCU8rG5eMyu9Ry8AJKpm5WFh./QeuNzl3vgit8usyO','esaram 관계자1','esaram 관계자1',NULL,NULL,NULL,NULL,1,0),(56,'star1@smtown.com',4,10,'$2a$10$8DweHxBNyYcJdKbrPWyKjeB2.Kvl8imgvBq45PRs.Eee8aTh1akMG','smtown 스타1','smtown 스타1',NULL,NULL,NULL,NULL,1,0),(57,'star2@smtown.com',4,10,'$2a$10$0dtbFwULmQ3LMyGay/XbSO7jDEwlkB/EJYljMZZLTSaIyddVBBySC','smtown 스타2','smtown 스타2',NULL,NULL,NULL,NULL,1,0),(58,'star3@smtown.com',4,10,'$2a$10$kWAF5zJoQE.O.JA7KAenI.n5gfEJVHPPh7pJLpNd3p.Vo/Tw1AQ.q','smtown 스타3','smtown 스타3',NULL,NULL,NULL,NULL,1,0),(59,'star4@smtown.com',4,10,'$2a$10$uOtl1S8/Uyy6exuS8WXeVOE3qh/jd2MNUUHL/GmTKRWDIcjK7jJ.i','smtown 스타4','smtown 스타4',NULL,NULL,NULL,NULL,1,0),(60,'star5@smtown.com',4,10,'$2a$10$oe5fqQGa78pxwqLpBGVBpeohtouQjpaV9001QOeBRUmjM3KIhNEfy','smtown 스타5','smtown 스타5',NULL,NULL,NULL,NULL,1,0),(61,'manager1@smtown.com',2,10,'$2a$10$SOVLXkeAibh/NoOmTbTDs.xA8ue1IfXbIFc4JIx8mrpxVYAKeB.NS','smtown 관계자1','smtown 관계자1',NULL,NULL,NULL,NULL,1,1),(62,'manager2@smtown.com',2,10,'$2a$10$GiV4Eb4hsZvTvRhfvt0J1OifjWha67qJlMyhiVAYuFkwLmSRGOvPS','smtown 관계자2','smtown 관계자2',NULL,NULL,NULL,NULL,1,0),(63,'manager3@smtown.com',2,10,'$2a$10$g5ZGq3Dxs4wiQIptPcuaEOugj84a/X8tHI39HODLwF5UUTUURIl6i','smtown 관계자3','smtown 관계자3',NULL,NULL,NULL,NULL,1,0),(64,'star1@antenna.com',4,11,'$2a$10$Z1.3tFYZPWkj9Jpi0G9ZTe2PyzM/lHFtyI.Yu/PlmYj1e5d.YmNNa','antenna 스타1','antenna 스타1',NULL,NULL,NULL,NULL,1,0),(65,'manager1@antenna.com',2,11,'$2a$10$xydfNRoXI8Yz0wCnSjmg.OBMdmrVL9p7QCaXrMjhSRG/uJ9kPcXlO','antenna 관계자1','antenna 관계자1',NULL,NULL,NULL,NULL,1,0),(66,'dmstjd3256@naver.com',3,0,'$2a$10$64wyNbMoe.jdXIBS5QQhiuVjzDm./MwwS7WppBxmJFYYh6Wze4Fta','손은성','SilverCastle','01095606840','부산 사하구 제석로95번길 22-5 (당리동, 우림그린맨션)','1996-08-17','남자',1,1),(67,'ssafy1@ssafy.com',3,0,'$2a$10$Qj/AqRtpayKxLzmS1v/8QuTmjtklZLRiJtKOpTgnC1dbzJ7qICEru','김싸피1','싸피1','01011111111','부산광역시','1999-01-01','여자',1,0),(68,'ssafy2@ssafy.com',3,0,'$2a$10$n.9pTKT8OkVqGj8M/Nzy4OikvhzjYKZm0aDMn6pSZ/VHVGfg4yYzu','김싸피2','싸피2','01022222222','서울특별시','1999-01-01','남자',1,1),(69,'ssafy3@ssafy.com',3,0,'$2a$10$xhVsET.fa1PG2gIjRfUtHOfjS/8JlY/gExt0zEjLCRCvoLzNyJ3MS','김싸피3','싸피3','01033333333','울산광역시','1999-01-01','여자',1,1),(70,'ssafy4@ssafy.com',3,0,'$2a$10$935QuVtgYlD19l4nY2Sn6.q7vm/pJ1aWZkkPZYkG/thr7lpLjQ.Ku','김싸피4','싸피4','01044444444','대구광역시','1999-01-01','남자',1,1),(71,'ssafy5@ssafy.com',3,0,'$2a$10$hJMiLGlZQtx7dVddHsHpAOwvkTCWTgOfsUg9gLNOluXCp/2F4A2GK','김싸피5','싸피5','01055555555','인천광역시','1999-01-01','여자',1,1),(72,'ssafy6@ssafy.com',3,0,'$2a$10$El.TMYp88ipNyGxC8GvzWeMPIGndEr9N0sP31jq71JzpvZvsMXRtu','김싸피6','싸피6','01066666666','광주광역시','1999-01-01','남자',1,1),(73,'ssafy7@ssafy.com',3,0,'$2a$10$qGfmzOQCllTbhgCiIyPRnOxKN9.8r13XtTLRtkdbr2ySQfQTN.SKO','김싸피7','싸피7','01077777777','대전광역시','1999-01-01','여자',1,1),(74,'ssafy8@ssafy.com',3,0,'$2a$10$/pYcYIWvWHjbrrFknrdAR.kYXs5n3vpaeHuu4lqNBOp49Q/xEHMu2','김싸피8','싸피8','01088888888','서울특별시','1999-01-01','남자',1,1),(75,'ssafy9@ssafy.com',3,0,'$2a$10$GBsjiJllp/o7Dt1pRHmlcOD0w7wSdS2T/rQPypBYyTF4cvTwtJzJe','김싸피9','싸피9','01099999999','부산광역시','1999-01-01','여자',1,1),(76,'ssafy10@ssafy.com',3,0,'$2a$10$Cbisvqp5rdW5Q3oO.VnFX.5JJF04nlI2Y6maG9i0q38qbzzWlh312','김싸피10','싸피10','01001010101','울산광역시','1999-01-01','남자',1,1),(77,'ssafy11@ssafy.com',3,0,'$2a$10$zZ9j7mPs1WkBcFoc7SvRNuXiD.0mlXJlKLKXzhJR65AuzFGtxyHoi','김싸피11','싸피11','01002020202','대구광역시','1999-01-01','여자',1,1),(78,'ssafy12@ssafy.com',3,0,'$2a$10$QziJkfBHLZYaBq/ibuWaMeuilx70Ib/ivjHxD/joOMRco1TYjq0mu','김싸피12','싸피12','01003030303','인천광역시','1999-01-01','남자',1,1),(79,'ssafy13@ssafy.com',3,0,'$2a$10$CiOY6dJh/SLofzv/6QoWz.x.6qIPoKy6.ilfa/fdcGQ9mQ1IgZZtO','김싸피13','싸피13','01004040404','광주광역시','1999-01-01','여자',1,1),(80,'ssafy14@ssafy.com',3,0,'$2a$10$.uYADZ.1/Qx9A14Bb1wrVuULpAVo9dnBvpNp0AkFl0GHsueEQNIea','김싸피14','싸피14','01005050505','대전광역시','1999-01-01','남자',1,1),(81,'ssafy15@ssafy.com',3,0,'$2a$10$4pFK489Rjo0K4vto3c3r3udtAk1iNz9OhXywTjHuUjJD45S7SqObC','김싸피15','싸피15','01006060606','부산광역시','1999-01-01','여자',1,1),(82,'ssafy16@ssafy.com',3,0,'$2a$10$HPZsxczeT6udp0F5zWARueMQokvuOebSbmpb5YiWkhmx8n3VYbxX.','김싸피16','싸피16','01007070707','서울특별시','1999-01-01','남자',1,1),(83,'ssafy17@ssafy.com',3,0,'$2a$10$uFJq6nGZELYkiXlqabHd5u2Xme2/vMf1UDfkfY9eQpI02tL12.tBG','김싸피17','싸피17','01008080808','광주광역시','1999-01-01','여자',1,1),(84,'ssafy18@ssafy.com',3,0,'$2a$10$4DM9kR1tsIjFijmRhfmae.2v41LFFU977HwmjsfYvmBec2p0zIeyu','김싸피18','싸피18','01009090909','대전광역시','1999-01-01','남자',1,1),(85,'ssafy19@ssafy.com',3,0,'$2a$10$eOBGg/QHaZ3IAr3Y4g6UiuW3DphvWGuLh4gjGkM.sLasZKT.jDe8C','김싸피19','싸피19','01010101010','인천광역시','1999-01-01','여자',1,1),(86,'ssafy20@ssafy.com',3,0,'$2a$10$k2xDN43iwMHrZ4y3ag72/u4T..7EW3GBHPrh7JsLhyr2lQ246Ojie','김싸피20','싸피20','01020202020','대구광역시','1999-01-01','남자',1,1),(87,'11992345@hanmail.net',3,0,'$2a$10$wsGaaWnr6objvoX3EzhV5.pIuNkqoNGoX/WCEgEciPhROltWT6/Xm','강소현','왕감자','01035597371','부산 북구 의성로67번길 48 (덕천동, 영진빌라)','1997-10-24','여자',1,0),(88,'wltmfdl123@naver.com',3,0,'$2a$10$/F5iWT/dYOAyUWARK/m3LOwMaBvx9/ZHk6XiHJwNIKVLV0KO3RHfq','김지슬','『zl존zl슬』','01082219535','서울 강남구 가로수길 5 (신사동)','1997-01-22','여자',1,0),(89,'star1@dongjunworld.com',4,12,'$2a$10$oSViByqsRBHXog1y6hpFuOgoEaUa2DMjAe9KlvKzvUg/jptS8wRMy','dongjunworld 스타1','dongjunworld 스타1',NULL,NULL,NULL,NULL,1,1),(90,'manager1@dongjunworld.com',2,12,'$2a$10$l.qtf7t6qKlK5ISoh1odh.quM48xzngbvGpCC9YIemczctGnC8sHO','dongjunworld 관계자1','dongjunworld 관계자1',NULL,NULL,NULL,NULL,1,0),(91,'kublaihkan@naver.com',3,0,'$2a$10$IMk9THuY0YcpBcQBN2w9RO.VKirs5OPiWBd8NCu8o2bRKgrFlSgOS','안영원','포에버','01023010736','부산 부산진구 거제천로40번길 31 (양정동, 시청어린이집)','1996-09-25','남자',1,0),(94,'wltn1873@naver.com',3,0,'$2a$10$pEWjfAdGoTvcuvWPAYiGtOQ/ACI1iniMVlBO/6UwxtP.BBBaK2awq','지수민','수민이가최고','01047431874','부산 강서구 가달1로 7 (생곡동)','1998-01-11','여자',1,1),(95,'star1@ssafy.com',4,13,'$2a$10$tSUoM1F88ttE6ruJHBpele.mOgoRf8HAeD.RnFWI39S.6uh24E4eq','ssafy 스타1','ssafy 스타1',NULL,NULL,NULL,NULL,1,0),(96,'manager1@ssafy.com',2,13,'$2a$10$O6xrREiJslswp5QY5FdbA.HIWrF4G/zMpdV9S6d0.YGNYsnkWNRZe','ssafy 관계자1','ssafy 관계자1',NULL,NULL,NULL,NULL,1,0),(97,'manager2@ssafy.com',2,13,'$2a$10$pLv9c9qTu9di3EXZKRRZfuQDIzQRsVeDQsvGMv4pLZd8NMYX57cGC','ssafy 관계자2','ssafy 관계자2',NULL,NULL,NULL,NULL,1,0),(98,'manager3@ssafy.com',2,13,'$2a$10$57UFOvCpv/jz7pkP1u8AmeVlLRMQ8.l6QlvnkLcHTpmgQxQTIBeIK','ssafy 관계자3','ssafy 관계자3',NULL,NULL,NULL,NULL,1,0),(112,'bhj499956@gmail.com',3,0,'$2a$10$tEnG9EGqlzKnD0i22izNG.EdKs8HO0P1NWGJGyHzmexknnF1lNX7e','정우영','통신보안','01012345671','부산 강서구 낙동남로 369 (녹산동)','2022-02-15','남자',1,1),(113,'qwe@naver.com',3,0,'$2a$10$1u5ejWAc6GjtdPMngjhN0uJZ.kXa.W0Ma78veQ/mIZVWtBRpz4SQa','qwerqwer','qwer','0103291083','경기 성남시 분당구 판교역로 4 (백현동)','2022-02-09','남자',0,0),(114,'qwer@naver.com',3,0,'$2a$10$J773KsnekpptpvMBkR4U/OJm53qVxoxP6/vwLkazfyjcmiqjCkC5O','qwerqwer','qwerqwer','01093810912','경기 성남시 분당구 판교역로 4 (백현동)','2022-02-04','남자',0,0),(115,'qwerqwer@naver.com',3,0,'$2a$10$S7uuR9UPnDr1e9zVr7BsyOkqGfhngp.EOEZWoK3Ijdjlj0pPF5AnG','qwerqwer','qwerqwerqwer','0108309183','대전 동구 판교1길 3 (판암동)','2022-02-03','남자',0,0);
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member_code`
--

DROP TABLE IF EXISTS `member_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member_code` (
  `code` int NOT NULL DEFAULT '3',
  `code_name` varchar(10) NOT NULL DEFAULT '일반회원',
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_code`
--

LOCK TABLES `member_code` WRITE;
/*!40000 ALTER TABLE `member_code` DISABLE KEYS */;
INSERT INTO `member_code` VALUES (1,'관리자'),(2,'관계자'),(3,'일반 회원'),(4,'스타');
/*!40000 ALTER TABLE `member_code` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `notice_id` int NOT NULL AUTO_INCREMENT,
  `notice_title` varchar(30) NOT NULL,
  `notice_content` text NOT NULL,
  `notice_reg_dt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`notice_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qna_answer`
--

DROP TABLE IF EXISTS `qna_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qna_answer` (
  `answer_id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `answer_content` text NOT NULL,
  `answer_reg_dt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`answer_id`),
  KEY `FK_qna_question_TO_qna_answer` (`question_id`),
  CONSTRAINT `FK_qna_question_TO_qna_answer` FOREIGN KEY (`question_id`) REFERENCES `qna_question` (`question_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qna_answer`
--

LOCK TABLES `qna_answer` WRITE;
/*!40000 ALTER TABLE `qna_answer` DISABLE KEYS */;
/*!40000 ALTER TABLE `qna_answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qna_question`
--

DROP TABLE IF EXISTS `qna_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qna_question` (
  `question_id` int NOT NULL AUTO_INCREMENT,
  `member_id` int NOT NULL,
  `question_title` varchar(20) NOT NULL,
  `question_content` varchar(1000) NOT NULL,
  `question_reg_dt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`question_id`),
  KEY `FK_member_TO_qna_question` (`member_id`),
  CONSTRAINT `FK_member_TO_qna_question` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qna_question`
--

LOCK TABLES `qna_question` WRITE;
/*!40000 ALTER TABLE `qna_question` DISABLE KEYS */;
/*!40000 ALTER TABLE `qna_question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-17 15:37:55
