-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (67,'Jason','123ss@gmail.com','123456'),(68,'Amy','amy123@yahoo.com.tw','amy0921'),(69,'Jessica','jessica0123@gmail.com','qq12345'),(70,'Alen','alenlin@kcc.com','alen0821'),(71,'Ivan ','Ivan737@gmail.com','eddgegg'),(72,'Jessica','jessicaee12@git.com','sdfgewrhw'),(74,'Mayumi','Mayi@gmail.com','fegojoe'),(77,'Allesa','Allesa@yahoo.com.tw','jekuwq'),(78,'Hanna','hanna@gmail.com','jdkfewe'),(82,'Alice','Alice@gmail.com','123456789'),(83,'Dan','Dan438291@gmail.com','fhejirew');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `author` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author` (`author`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'article1','Est eiusmod cillum qui et aute ipsum reprehenderit voluptate proident laboris ex tempor. Cillum aliqua eiusmod consectetur amet sunt esse tempor adipisicing proident velit reprehenderit aliquip esse. Cillum velit occaecat aliqua anim proident sit irure culpa irure. Deserunt magna elit cillum voluptate occaecat culpa elit irure aute excepteur ut ipsum ut reprehenderit. Deserunt reprehenderit est ex veniam id ipsum cupidatat consequat est qui laboris ad nulla veniam.',67),(2,'article2','Ipsum est ullamco do mollit nisi laborum exercitation. Excepteur aute Lorem amet sunt. Nostrud id laboris reprehenderit commodo laborum do enim id aliqua voluptate. Consectetur enim voluptate et sunt eu reprehenderit id do aliquip aliquip enim. Qui ut ex quis non. Nulla nisi fugiat ex ut ut. Eu ullamco duis ea minim velit nisi et fugiat in.',67),(3,'article3','Laborum incididunt velit velit fugiat do nostrud. Quis occaecat proident anim velit sunt. Eu fugiat consectetur anim amet consectetur. Esse commodo sunt reprehenderit labore aute labore.',67),(4,'article4','Officia consequat amet occaecat nulla. Lorem proident ea anim laboris dolor non exercitation. Magna sit elit nostrud deserunt et officia eiusmod pariatur.',67),(5,'article5','Nisi est nisi elit reprehenderit laboris consequat amet fugiat labore et ut ex qui ullamco. Deserunt amet dolore est laboris ad sunt adipisicing pariatur cillum nulla do minim pariatur aliquip. Enim anim consequat ea dolore. Dolore veniam excepteur et veniam. Ea esse nisi sunt occaecat ad velit. Laboris incididunt magna velit non sit ea est exercitation minim laboris deserunt. Irure occaecat amet deserunt deserunt cupidatat aute pariatur excepteur anim sint eu.',67),(6,'article6','Non ea ex deserunt reprehenderit deserunt ut mollit. Non enim elit quis laborum ut esse enim amet fugiat. Ea in ipsum consequat amet tempor fugiat.',67),(7,'article7','Deserunt laborum consequat exercitation veniam voluptate. Cillum duis ea cupidatat elit fugiat mollit. Consequat et pariatur aliquip esse ad irure enim aliquip ullamco. Fugiat id fugiat cupidatat ullamco labore. Minim proident consectetur deserunt sit et ipsum reprehenderit. Sint tempor non nulla id adipisicing fugiat nisi dolor. Dolore veniam dolor non esse veniam labore.',67),(8,'article8','Do dolore cupidatat consequat est esse sint ea pariatur mollit pariatur. Aliquip esse occaecat laborum non exercitation consequat consectetur pariatur. Fugiat incididunt aliquip excepteur ipsum non. Nisi reprehenderit sit voluptate sint ea veniam commodo voluptate ipsum est. Voluptate culpa anim do Lorem esse non. Velit cupidatat enim laboris deserunt qui cupidatat dolor proident.',67),(9,'journey1','Fugiat cupidatat consectetur non aliquip cupidatat in dolore magna eu excepteur. Proident ex aliqua cillum sint dolore aute duis nostrud fugiat. Minim ea Lorem irure incididunt deserunt est voluptate. Commodo veniam sunt mollit est non ea cillum id. Eu ipsum officia deserunt fugiat aliquip ea. Proident duis proident amet officia qui. Nostrud et labore labore nostrud elit.',68),(10,'journey2','Eiusmod ea fugiat et duis voluptate tempor velit irure est aliquip. Laborum exercitation nulla ea elit et laboris ullamco tempor. Cillum duis ullamco voluptate laborum ut officia mollit. Enim nulla ea fugiat sunt aliqua minim pariatur magna commodo esse aliquip culpa. Commodo incididunt occaecat nostrud officia nulla incididunt ad et culpa. Id nisi irure qui id tempor in occaecat ea ea sunt. Magna qui commodo nisi fugiat ex officia sit veniam.',68),(11,'journey3','Labore eiusmod eu officia ullamco ut magna nostrud nulla velit. Ut aute labore officia mollit qui tempor mollit esse nisi magna. Enim voluptate duis excepteur aliqua nulla laborum exercitation Lorem id.',68),(12,'journey4','Irure dolor consectetur velit aliquip nulla deserunt sit dolore adipisicing irure. Aliqua minim excepteur anim deserunt adipisicing quis dolor est. Aliquip sint adipisicing occaecat ullamco. Amet fugiat velit eiusmod culpa exercitation dolor amet elit do cillum dolore. In sunt do ipsum et magna tempor aute ea do dolor qui nostrud non. Nostrud incididunt qui in ea esse. Et aute ipsum nulla in velit voluptate nulla dolore ea quis Lorem culpa.',68),(13,'journey5','Nulla aute elit consectetur consequat aliqua nisi magna. Duis est commodo occaecat deserunt consequat pariatur do cillum nulla irure occaecat ea. Amet laboris irure non ipsum veniam officia consequat nostrud. Ipsum non dolor eiusmod deserunt deserunt dolore Lorem reprehenderit ea quis sit minim tempor. Est irure ex incididunt qui adipisicing cupidatat ex velit eu anim nulla.',68),(14,'journey6','Consectetur sit Lorem ullamco tempor adipisicing excepteur do fugiat sunt incididunt aliquip. Enim ex quis mollit consectetur minim aliqua. Laborum exercitation culpa consectetur ipsum ea. Voluptate aute velit magna nostrud sit officia incididunt aliqua dolor incididunt ad.',68),(15,'journey7','Do ut eu minim excepteur commodo voluptate duis velit ullamco. Dolore commodo consectetur commodo aute fugiat nulla. Proident exercitation non magna esse veniam id culpa anim. Duis aliqua mollit laborum officia elit labore et. Culpa commodo do labore tempor ipsum adipisicing.',68),(16,'journey8','Ex commodo quis et nisi adipisicing minim laborum non labore laboris irure ea commodo. Minim aliqua proident aliquip laboris ea. Officia et ea duis consequat laboris nulla culpa excepteur et deserunt.',68),(17,'journey9','Mollit exercitation culpa occaecat cupidatat velit occaecat esse enim. Consequat elit ullamco sint aliquip elit cillum ut consequat culpa ea eiusmod sit. Velit qui aliqua mollit minim irure enim ex aute cillum amet aliqua reprehenderit exercitation ut. Adipisicing laborum laboris sunt amet.',68),(18,'journey10','Dolor dolore labore tempor ad duis laborum velit magna reprehenderit velit. Aute ullamco id voluptate ad est qui dolor excepteur. Anim id aliqua occaecat cupidatat ad ut et ipsum proident ullamco excepteur adipisicing commodo.',68),(19,'journey11','Excepteur ut in ex minim dolor proident irure laborum irure incididunt. Nisi laborum cupidatat pariatur consequat eiusmod anim. Nisi pariatur sint est non. Veniam officia officia sint nulla fugiat ipsum. Aliquip cupidatat id est ea consectetur Lorem.',68),(20,'journey12','Tempor ipsum reprehenderit ut aliqua amet nisi esse sint nisi magna adipisicing. Enim sint consectetur nostrud occaecat irure voluptate. Est id laboris non minim officia fugiat sit incididunt id enim mollit ut. Est sint quis consequat officia velit. Voluptate mollit magna aliqua cillum sunt. Occaecat nisi veniam irure sit aliqua fugiat occaecat aliquip amet.',68),(21,'diary1','Lorem est voluptate do labore aliqua ullamco. Cillum excepteur velit consequat enim mollit consequat. Veniam occaecat adipisicing irure non. Sint ad laborum commodo magna magna. Esse minim irure magna minim excepteur ipsum exercitation qui veniam tempor duis velit esse ad. Irure esse ullamco eu aliquip nisi et cillum do quis ad amet aliquip.',69),(22,'diary2','Magna ut culpa nulla occaecat exercitation id ut laboris eu. Commodo pariatur fugiat esse fugiat. Dolore veniam nulla veniam et mollit occaecat laborum velit eu. Id veniam cupidatat ea ut cillum esse consequat officia amet eu non. Sunt cillum esse officia cupidatat pariatur in consectetur amet commodo anim labore nostrud. Fugiat duis veniam eiusmod commodo. Ullamco elit exercitation do eiusmod minim deserunt ut ex.',69),(23,'diary3','Nisi eiusmod adipisicing officia minim cupidatat dolor amet ex incididunt voluptate qui id occaecat. Amet mollit duis dolore magna cillum cupidatat. Dolore et ad incididunt id sit adipisicing aliquip. Ipsum aute veniam elit aliquip. Ipsum eiusmod velit culpa aliquip aute nisi excepteur Lorem proident.',69),(24,'diary4','Cupidatat eiusmod velit eiusmod ea. Aute culpa anim magna ut pariatur cupidatat veniam ea proident. Esse laborum est laboris duis dolor. Ullamco anim nostrud aliquip minim aliqua qui ea Lorem ullamco. Incididunt eu mollit amet dolor ipsum ut do culpa et duis sunt. Eu laboris aliqua do culpa eu aute ipsum labore.',69),(25,'diary5','Dolor laboris sit minim proident et commodo nulla laborum duis ex eiusmod anim. Dolor eu eiusmod laboris aute enim nulla duis. Qui ipsum reprehenderit dolor proident reprehenderit non tempor qui nulla est ullamco mollit est.',69),(26,'diary6','Dolor ut irure voluptate ad amet. Et laborum ad Lorem enim aliquip irure exercitation. Amet qui nisi pariatur aliquip pariatur officia aute eu ut ad proident. Esse eiusmod consectetur non nostrud non nisi magna et in aliqua dolore minim occaecat. Velit minim sunt aliqua minim.',69),(27,'diary7','Reprehenderit Lorem laboris anim esse incididunt fugiat occaecat laboris laboris consectetur. Officia ad eu exercitation do incididunt. Pariatur culpa laborum sint culpa ut occaecat velit reprehenderit commodo culpa consectetur fugiat elit excepteur. Mollit elit commodo ipsum eiusmod minim adipisicing est esse ex magna. Labore ex aute laboris sit nulla aliqua cupidatat enim qui velit consequat. Laboris excepteur id incididunt eu consequat.',69),(28,'diary8','Deserunt dolor laborum do ex deserunt magna duis. Laborum non minim aliqua tempor quis reprehenderit occaecat id et sunt. Consequat commodo qui ea dolore aliquip consectetur.',69),(29,'diary9','Consectetur est cupidatat occaecat consectetur. Excepteur pariatur in aliqua proident ut consequat aute elit aliquip aliqua ea nisi. Occaecat reprehenderit cillum adipisicing quis ad.',69),(30,'diary10','In ipsum adipisicing Lorem consectetur esse esse elit deserunt veniam et. In veniam magna excepteur deserunt eu fugiat id occaecat excepteur voluptate cillum tempor do. Voluptate veniam sunt fugiat do enim aliquip ullamco proident esse. Velit eu officia tempor reprehenderit reprehenderit officia commodo ut qui.',69),(31,'book1','Minim labore nostrud aliqua officia minim duis ullamco nisi veniam nostrud commodo officia. Aliqua tempor nisi incididunt elit adipisicing incididunt adipisicing laboris eu voluptate sunt aliquip minim proident. Anim incididunt proident ad laboris sit proident aliquip officia do sunt. Dolor elit velit veniam officia ut et ullamco.',70),(32,'book2','Est dolore commodo voluptate enim commodo velit proident ad non aliquip laborum tempor duis. Aliqua nostrud consectetur est esse minim mollit proident. Qui sunt adipisicing reprehenderit et cupidatat pariatur id anim consequat. Sint excepteur anim reprehenderit aliquip.',70),(33,'book3','Deserunt eu eu sint consequat id nulla excepteur est veniam velit pariatur minim elit. Deserunt qui consequat quis sit incididunt aliquip fugiat ut. Consequat aliquip qui commodo nisi enim ullamco Lorem reprehenderit duis. Lorem laborum aliquip duis excepteur proident. Aute nisi ut ullamco sit deserunt occaecat voluptate id adipisicing consectetur quis ullamco. Nulla nisi ullamco sint enim in voluptate voluptate enim ad deserunt qui. Ut deserunt enim incididunt cillum.',70),(34,'book4','Laborum proident duis laboris non adipisicing cillum nulla quis ea dolore. Velit consectetur nisi ad velit dolore. Proident labore velit culpa laboris nostrud enim ex dolor laborum id quis reprehenderit. Ullamco ut do do Lorem quis.',70),(35,'book5','Mollit ex aute cillum sint. Commodo ipsum dolore adipisicing officia minim. Minim ullamco proident laboris duis ut dolor eiusmod. Esse consectetur ipsum officia nulla commodo Lorem in magna anim non eu ipsum laboris incididunt. Mollit eu culpa ipsum anim consectetur qui. Nostrud ut aute ad commodo commodo enim voluptate enim exercitation.',70),(36,'book6','Consequat sunt ex dolore proident eiusmod pariatur ipsum. Reprehenderit duis dolore proident sint est mollit ea ea in. Irure commodo tempor aute cupidatat culpa. Deserunt amet in adipisicing sunt nisi ea exercitation veniam cillum. Fugiat et dolore nisi in aliquip in.',70),(37,'book7','Ea consectetur ea tempor duis id eiusmod incididunt voluptate. Laborum ullamco consequat culpa quis. Tempor ipsum non pariatur ad esse nulla. Ut deserunt nisi sit veniam eiusmod eu cillum mollit proident duis.',70),(38,'book8','Irure nostrud occaecat voluptate tempor enim do pariatur in ipsum enim proident pariatur. Occaecat ullamco adipisicing ullamco dolor quis id est officia cupidatat est fugiat dolor ut. Do velit non ea est deserunt exercitation magna nisi magna. Labore anim quis ullamco do laboris nulla et sunt sunt sint incididunt id velit. Culpa sint qui dolor ex dolor exercitation nisi quis nisi veniam aliqua est.',70),(39,'book9','Esse velit magna pariatur ad elit nulla nostrud minim. Occaecat in non aliquip labore pariatur sint non magna nulla elit eu nostrud. Nostrud Lorem aliquip do sit non Lorem sit cillum.',70);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-31 22:00:31
