-- 1.利用user的email來尋找出他寫的article 的 title 與 content
SELECT article.title, article.content, user.email FROM user INNER JOIN article ON user.id =article.author;

-- 2.找出第7-12個文章
SELECT * FROM `article` LIMIT 6,6;
