
---
title: '[机器学习] 用 MySQL 来演示 KNN算法  The K Nearest Neighbor Algorithm (Prediction) Demonstration by MySQL'
permlink: mysql-knn-the-k-nearest-neighbor-algorithm-prediction-demonstration-by-mysql
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-11 13:55:24
categories:
- cn
tags:
- cn
- cn-programming
- machine-learning
- mysql
- steemstem
thumbnail: https://helloacm.com/wp-content/uploads/2016/07/KNN.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p><a href="https://justyy.com/archives/2887">机器学习</a>这几年越来越火, 特别是相关算法五花八门, 但最有名的就那么几种, 而在这几种中, 要数KNN算法最为简单, 高效并且有鲁棒性 (Robustness).&nbsp;</p>
<p>我们先来看一问题: 已知正方形和三角形的归类, 请问绿色的圆是属于三角还是属于正方形?&nbsp;</p>
<p>The <a href="https://helloacm.com/a-short-introduction-to-k-nearest-neighbors-algorithm/">K Nearest Neighbor</a> (KNN) Algorithm is well known by its simplicity and robustness in the domain of data mining and <a href="https://helloacm.com/the-machine-learning-case-study-how-to-predict-weight-over-heightgender-using-linear-regression/">machine learning</a>. It is actually a method based on the statistics. It can be easily described as the following diagram.&nbsp;</p>
<p><img src="https://helloacm.com/wp-content/uploads/2016/07/KNN.png" width="220" height="199"/></p>
<p><em>// Image </em><a href="https://helloacm.com/the-k-nearest-neighbor-algorithm-prediction-demonstration-by-mysql/"><em>credited</em></a><em>.&nbsp;</em></p>
<p>Known blue squares and red triangles, you are asked to predict if the green circle belongs to the squares or the triangles. If we choose K=3, then the minimal distances (closest) to the green circle are 2 triangles and 1 square, therefore, the circle belongs to the triangles. However, if we choose K=5, then we have 3 squares and 2 triangles, which will vote the cirlce to the squares group.&nbsp;</p>
<p>&nbsp;这里的KNN 指的是 K-nearest neighbour 翻译过来就是 K个最近的邻居, 如果我们指定K=3, 那么和绿色圆最近的是2个三角形和1个正方形, 所以按多数为主的标准, 我们预测这个圆属于三角, 相反, 如果K=5的情况, 和圆最近的有3个正方形和2个三角形, 这时候我们就按多数投正方形. &nbsp;</p>
<h3>用 MYSQL 来演示 KNN算法 &nbsp;USING KNN AS PREDICTION ALGORITHM DEMONSTRATION BY MYSQL</h3>
<p>我们先创建一个表含有两个字段x和y,&nbsp;</p>
<p>&nbsp;By the similar principle, KNN can be used to make predictions by averaging (or with weights by <a href="https://helloacm.com/how-to-compute-minkowski-euclidean-and-cityblock-distance-in-c/">distance</a>) the closest candidates. For example, if we have the following data (<a href="https://helloacm.com/how-to-generate-100k-test-data-to-mysql-database/">MySQL</a> table <em>test1</em>): &nbsp;</p>
<pre><code>mysql&gt; select * from test1;<br>
+------+------+<br>
| x &nbsp;&nbsp;&nbsp;| y &nbsp;&nbsp;&nbsp;|<br>
+------+------+<br>
| &nbsp;&nbsp;&nbsp;1 | &nbsp;&nbsp;23 |<br>
| &nbsp;1.2 | &nbsp;&nbsp;17 |<br>
| &nbsp;3.2 | &nbsp;&nbsp;12 |<br>
| &nbsp;&nbsp;&nbsp;4 | &nbsp;&nbsp;27 |<br>
| &nbsp;5.1 | &nbsp;&nbsp;&nbsp;8 |<br>
+------+------+<br>
5 rows in set (0.04 sec)</code></pre>
<p>&nbsp;假设已知一个新点x=6.5, 我们想通过KNN (K=2)来预测y的值, 那么我们可以通过以下SQL语句来查找和6.5最近的两个点:&nbsp;</p>
<p>&nbsp;We want to predict when x=6.5, the value of y. First of all, for simplicity, we choose K=2, we need to find two points that have the shortest distance to 6.5, so the SQL will be: &nbsp;</p>
<pre><code>mysql&gt; select x,y from test1 order by abs(6.5-x) limit 2;<br>
+------+------+<br>
| x &nbsp;&nbsp;&nbsp;| y &nbsp;&nbsp;&nbsp;|<br>
+------+------+<br>
| &nbsp;5.1 | &nbsp;&nbsp;&nbsp;8 |<br>
| &nbsp;&nbsp;&nbsp;4 | &nbsp;&nbsp;27 |<br>
+------+------+<br>
2 rows in set (0.00 sec)</code></pre>
<p>&nbsp;然后需要做的就是平均这两个点的y值, 用一个嵌套SQL语句就可以了:&nbsp;</p>
<p>&nbsp;Now, the task is just to average their corresponding y values. So using a nested SQL statement is trivial: &nbsp;</p>
<pre><code>mysql&gt; select avg(y) as predicted from (select y from test1 order by abs(6.5-x) limit 2) as KNN;<br>
+-----------+<br>
| predicted |<br>
+-----------+<br>
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17.5 |<br>
+-----------+<br>
1 row in set (0.00 sec)</code></pre>
<p>&nbsp;KNN算法简单 但是有一个很大的问题是这个算法是属于 lazy <a href="https://justyy.com/archives/1626">算法</a>, 意思是拿到数据 (training set) 后并不是马上训练(甚至是并没有训练这个过程)而是等需要预测的时候实时去找最近的K个邻居, 所以当数据量大的时候 效率就比较低了.&nbsp;</p>
<p>&nbsp;KNN is lazy, meaning that it does not train dataset immediately (actually there is no training). When the input is given to the KNN model, it will look for K nearest neighbours at real time, which is slow and inefficient if the dataset is large.&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>Originally published at <a href="https://steemit.com/">https://steemit.com</a> Thank you for reading my post, feel free to FOLLOW and Upvote <a href="https://steemit.com/@justyy">@justyy</a> which motivates me to create more quality posts.</p>
<p>原创首发于 <a href="https://steemit.com/">https://steemit.com</a> 非常感谢阅读, 欢迎FOLLOW和Upvote <a href="https://steemit.com/@justyy">@justyy</a> &nbsp;能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;&nbsp;// 已同步到我的<a href="https://justyy.com/">中文博客 </a>和<a href="https://justyy.com/"> </a><a href="https://helloacm.com">英文算法博客</a>。&nbsp;</p>
<ul>
  <li>&nbsp;<a href="https://justyy.com/archives/5043">[机器学习] 用 MySQL 来演示 KNN算法</a></li>
  <li>&nbsp;<a href="https://helloacm.com/the-k-nearest-neighbor-algorithm-prediction-demonstration-by-mysql/">The K Nearest Neighbor Algorithm (Prediction) Demonstration by MySQL</a></li>
</ul>
<p><strong>近期热贴 Recent Popular Posts</strong>&nbsp;</p>
<ul>
  <li>&nbsp;<a href="https://steemit.com/cn/@justyy/200steem-1-sp">第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！ </a>&nbsp;</li>
  <li><a href="https://steemit.com/cn/@justyy/the-fox">The Fox 英式午餐</a></li>
  <li><a href="https://steemit.com/cn/@justyy/4cqkxe">如果大家要是一直生一直生直到生到女儿, 岂不是男女比例失调啊?&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/adsense-steemit">从互联网广告(Adsense)来谈谈 影响 SteemIt 的收入因素&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/how-to-claim-bcc-btc-hard-fork-via-c-program-linux-bcc-bitcoin-cash">How to Claim BCC? BTC Hard-Fork via C program (Linux) 小白教程: 怎么领取 BCC (Bitcoin Cash) ?&nbsp;</a></li>
</ul>
</html>

- - -

This page is synchronized from the post: [[机器学习] 用 MySQL 来演示 KNN算法  The K Nearest Neighbor Algorithm (Prediction) Demonstration by MySQL](https://steemit.com/@justyy/mysql-knn-the-k-nearest-neighbor-algorithm-prediction-demonstration-by-mysql)
