-- 1.利用user的email來尋找出他寫的article 的 title 與 content
SELECT * FROM `article` WHERE `author` IN (SELECT `id` FROM `user` WHERE `email` = '123ss@gmail.com');
SELECT * FROM `article` WHERE `author` IN (SELECT `id` FROM `user` WHERE `email` = 'amy123@yahoo.com.tw');
SELECT * FROM `article` WHERE `author` IN (SELECT `id` FROM `user` WHERE `email` = 'jessica0123@gmail.com');
SELECT * FROM `article` WHERE `author` IN (SELECT `id` FROM `user` WHERE `email` = 'alenlin@kcc.com');

-- 2.找出第7-12個文章
SELECT * FROM `article` WHERE `id` BETWEEN 7 AND 12 ORDER BY `id` ASC; 
