-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: bsms
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `bloodbank`
--

DROP TABLE IF EXISTS `bloodbank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bloodbank` (
  `bloodbankid` int NOT NULL AUTO_INCREMENT,
  `bname` varchar(100) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `licenseno` varchar(50) NOT NULL,
  `foundationdate` date DEFAULT NULL,
  `status` bit(2) DEFAULT b'0',
  `contactno` varchar(15) DEFAULT NULL,
  `loginid` int DEFAULT NULL,
  `cityid` int DEFAULT NULL,
  PRIMARY KEY (`bloodbankid`),
  UNIQUE KEY `licenseno_UNIQUE` (`licenseno`),
  KEY `loginid_idx` (`loginid`),
  KEY `bcityid_idx` (`cityid`),
  CONSTRAINT `bcityid` FOREIGN KEY (`cityid`) REFERENCES `city` (`cityid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `loginid` FOREIGN KEY (`loginid`) REFERENCES `user` (`loginid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloodbank`
--

LOCK TABLES `bloodbank` WRITE;
/*!40000 ALTER TABLE `bloodbank` DISABLE KEYS */;
/*!40000 ALTER TABLE `bloodbank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bloodproduct`
--

DROP TABLE IF EXISTS `bloodproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bloodproduct` (
  `bloodproductid` int NOT NULL AUTO_INCREMENT,
  `bloodproductname` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`bloodproductid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloodproduct`
--

LOCK TABLES `bloodproduct` WRITE;
/*!40000 ALTER TABLE `bloodproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `bloodproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bloodstock`
--

DROP TABLE IF EXISTS `bloodstock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bloodstock` (
  `bsid` int NOT NULL AUTO_INCREMENT,
  `unitsavailable` int NOT NULL,
  `lastupdated` datetime DEFAULT NULL,
  `bloodproductexpiry` datetime DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `bloodproductid` int DEFAULT NULL,
  PRIMARY KEY (`bsid`),
  KEY `bloodproductid_idx` (`bloodproductid`),
  CONSTRAINT `fk_bloodproductid` FOREIGN KEY (`bloodproductid`) REFERENCES `bloodproduct` (`bloodproductid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloodstock`
--

LOCK TABLES `bloodstock` WRITE;
/*!40000 ALTER TABLE `bloodstock` DISABLE KEYS */;
/*!40000 ALTER TABLE `bloodstock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `cityid` int NOT NULL AUTO_INCREMENT,
  `cname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cityid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donationhistory`
--

DROP TABLE IF EXISTS `donationhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donationhistory` (
  `donationId` int NOT NULL AUTO_INCREMENT,
  `dondate` date DEFAULT NULL,
  `bloodproduct` int DEFAULT NULL,
  `donorid` int DEFAULT NULL,
  PRIMARY KEY (`donationId`),
  KEY `bloodproduct_idx` (`bloodproduct`),
  KEY `donorid_idx` (`donorid`),
  CONSTRAINT `bloodproduct` FOREIGN KEY (`bloodproduct`) REFERENCES `bloodproduct` (`bloodproductid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `donorid` FOREIGN KEY (`donorid`) REFERENCES `donor` (`donorid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donationhistory`
--

LOCK TABLES `donationhistory` WRITE;
/*!40000 ALTER TABLE `donationhistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `donationhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donor`
--

DROP TABLE IF EXISTS `donor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donor` (
  `donorid` int NOT NULL AUTO_INCREMENT,
  `dname` varchar(100) DEFAULT NULL,
  `adharno` varchar(45) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `contactno` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `loginid` int DEFAULT NULL,
  `bloodproduct` int DEFAULT NULL,
  PRIMARY KEY (`donorid`),
  UNIQUE KEY `adharno_UNIQUE` (`adharno`),
  KEY `loginid_idx` (`loginid`),
  KEY `bloodproductid_idx` (`bloodproduct`),
  CONSTRAINT `bloodproductid` FOREIGN KEY (`bloodproduct`) REFERENCES `bloodproduct` (`bloodproductid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donor`
--

LOCK TABLES `donor` WRITE;
/*!40000 ALTER TABLE `donor` DISABLE KEYS */;
/*!40000 ALTER TABLE `donor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospital` (
  `hospitalid` int NOT NULL AUTO_INCREMENT,
  `hname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `licenseno` varchar(45) NOT NULL,
  `loginid` int DEFAULT NULL,
  `cityid` int DEFAULT NULL,
  PRIMARY KEY (`hospitalid`),
  KEY `loginid` (`loginid`),
  KEY `hcityid_idx` (`cityid`),
  CONSTRAINT `hcityid` FOREIGN KEY (`cityid`) REFERENCES `city` (`cityid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `hospital_ibfk_2` FOREIGN KEY (`loginid`) REFERENCES `user` (`loginid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receiver`
--

DROP TABLE IF EXISTS `receiver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receiver` (
  `receiverid` int NOT NULL AUTO_INCREMENT,
  `rname` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `aadharno` varchar(45) DEFAULT NULL,
  `address` varchar(80) DEFAULT NULL,
  `loginid` int DEFAULT NULL,
  `cityid` int DEFAULT NULL,
  PRIMARY KEY (`receiverid`),
  UNIQUE KEY `aadharno_UNIQUE` (`aadharno`),
  KEY `loginid_idx` (`loginid`),
  KEY `rcityid_idx` (`cityid`),
  CONSTRAINT `fk_receivers_loginid` FOREIGN KEY (`loginid`) REFERENCES `user` (`loginid`),
  CONSTRAINT `rcityid` FOREIGN KEY (`cityid`) REFERENCES `city` (`cityid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receiver`
--

LOCK TABLES `receiver` WRITE;
/*!40000 ALTER TABLE `receiver` DISABLE KEYS */;
/*!40000 ALTER TABLE `receiver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `requestid` int NOT NULL AUTO_INCREMENT,
  `requestdate` date DEFAULT NULL,
  `bloodproduct` int DEFAULT NULL,
  `bloodbankid` int DEFAULT NULL,
  PRIMARY KEY (`requestid`),
  KEY `rbloodproduct_idx` (`bloodproduct`),
  KEY `rbbid_idx` (`bloodbankid`),
  CONSTRAINT `rbbid` FOREIGN KEY (`bloodbankid`) REFERENCES `bloodbank` (`bloodbankid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `rbloodproduct` FOREIGN KEY (`bloodproduct`) REFERENCES `bloodproduct` (`bloodproductid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `roleid` int NOT NULL AUTO_INCREMENT,
  `rolename` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Hosp');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `loginid` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `status` bit(2) NOT NULL DEFAULT b'0',
  `username` varchar(255) DEFAULT NULL,
  `roleids` int DEFAULT NULL,
  PRIMARY KEY (`loginid`),
  KEY `FKnjp9roe56nhgxjm2d5iuipbdr` (`roleids`),
  CONSTRAINT `FKnjp9roe56nhgxjm2d5iuipbdr` FOREIGN KEY (`roleids`) REFERENCES `roles` (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'asdf',_binary '\0','JDBC',1),(3,'asdf22',_binary '\0','JDBC22',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-02 15:59:18
