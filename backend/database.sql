-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (arm64)
--
-- Host: localhost    Database: testcheck
-- ------------------------------------------------------
-- Server version	8.0.32

CREATE SCHEMA IF NOT EXISTS `checkpoint4` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
USE `checkpoint4` ;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assets`
--

DROP TABLE IF EXISTS `assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `quantity` int DEFAULT NULL,
  `worth` int NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `assets_FK` FOREIGN KEY (`id`) REFERENCES `kingdom` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO assets VALUES
(1, "Stables", 40, 10000000, "https://image.lexica.art/full_jpg/7b562e01-fd69-415e-b1e3-046868a0b22d"),
(2, "Castles", 10, 999567640, "https://image.lexica.art/full_jpg/cb61ee9a-a506-48d2-867f-4b6360e33de0"),
(3, "Guards", 50000, 999999991, "https://image.lexica.art/full_jpg/ed8350f6-6e62-4de0-9ea1-f1c48a778e64"),
(4, "Wagons", 100, 80004500, "https://image.lexica.art/full_jpg/a74bb53f-95b4-4bed-af95-873b525dc387"),
(5, "Livestock", 8745, 25000000 ,"https://image.lexica.art/full_jpg/db215163-77e6-4127-9cb7-cee3aaae9154"),
(6, "Armor", 80000, 7094561, "https://image.lexica.art/full_jpg/2338156e-fd32-41ca-96f8-7f8a59e9a63e"),
(7, "Canons", 40, 18000000, "https://image.lexica.art/full_jpg/10437ce9-0655-4117-b6da-2154eef3c6b6"),
(8, "Horses", 15000, 65000000, "https://image.lexica.art/full_jpg/30e22df5-7ddb-422c-91a2-78371ddca9ae"),
(9, "Ship", 40, 230000000, "https://image.lexica.art/full_jpg/f6d79341-0a0c-47d8-a5ee-bc201710425f"),
(10, "Farm", 32, 500000, "https://image.lexica.art/full_jpg/619846c9-c6a5-4658-a4d6-88012cdfc049");

--
-- Dumping data for table `assets`
--

LOCK TABLES `assets` WRITE;
/*!40000 ALTER TABLE `assets` DISABLE KEYS */;
/*!40000 ALTER TABLE `assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kingdom`
--

DROP TABLE IF EXISTS `kingdom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kingdom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `kingdom_FK` FOREIGN KEY (`id`) REFERENCES `user` (`id`),
  CONSTRAINT `kingdom_FK_1` FOREIGN KEY (`id`) REFERENCES `assets` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kingdom`
--

LOCK TABLES `kingdom` WRITE;
/*!40000 ALTER TABLE `kingdom` DISABLE KEYS */;
/*!40000 ALTER TABLE `kingdom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roles` varchar(100) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'testcheck'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-03 11:18:31

