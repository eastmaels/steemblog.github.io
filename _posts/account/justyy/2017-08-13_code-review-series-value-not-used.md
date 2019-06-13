
---
title: '[Code Review Series] - Value Not Used [坑爹的代码] - 变量未使用'
permlink: code-review-series-value-not-used
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-13 10:28:12
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- code-review
thumbnail: https://justyy.com/wp-content/uploads/2017/08/value-not-used.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>I thought it will be nice to share some code-review experience from time to time. A <a href="https://helloacm.com/what-i-like-most-about-git-and-code-review/">code-review</a> is important and necessary for PR (Pull Requests) to merge to the development/release branch. But sometimes, a minimal 2 reviewers are not sufficient e.g. once, a PR with irrelevant change has been merged to development branch even with 2 reviewers 'Approved'. Later... these reviewers were 'punished' by bringing in <a href="https://helloacm.com/zero-warning-culture-in-development-team/">donuts</a>!&nbsp;</p>
<p>The feeling when you care so much to not break something and then you find out later that the value is not used. PS: It is strange that the <a href="https://helloacm.com/resharper-refactoring-changes-behavior/">R#</a> has not identified these as useless code.</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/08/value-not-used.jpg" width="708" height="480"/></p>
<p>工作中<a href="https://justyy.com/archives/1689">代码审核</a>是非常重要的，我觉得有时候分享这些坑是件很有意义的事情。有一次，有一个PR（代码提交）被2个工程师成功审核了，但是之后发现那个PR带了一些不该带的改动，结果就是那两个评审被惩罚带些吃的（<a href="https://justyy.com/archives/2046">甜甜圈</a>）给大家分享。</p>
<p>每次你都很小心，生怕把功能给改错了(即使有少量的<a href="https://justyy.com/archives/1806">单元测试</a>,但是你还是不放心), 后来你发现,这代码绝B是个坑,浪费了你大好的时间,结果这变量声明了根本就没有用到..</p>
<p>很奇怪的是, 像 <a href="https://justyy.com/archives/1024">Resharper</a>这样的代码质量工具竟然没有把无用的代码给标灰。。。</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>&nbsp;Originally published at <a href="https://steemit.com/">https://steemit.com</a> Thank you for reading my post, feel free to FOLLOW and Upvote <a href="https://steemit.com/@justyy">@justyy</a> which motivates me to create more quality posts.</p>
<p>原创首发于 <a href="https://steemit.com/">https://steemit.com</a> 非常感谢阅读, 欢迎FOLLOW和Upvote <a href="https://steemit.com/@justyy">@justyy</a> &nbsp;能激励我创作更多更好的内容.&nbsp;&nbsp;</p>
<p>// 已同步到我的<a href="https://justyy.com">中文博客</a>和<a href="https://codingforspeed.com">英文博客</a>。&nbsp;</p>
<ul>
  <li>&nbsp;<a href="https://justyy.com/archives/5053">[坑爹的代码] – 变量未使用</a></li>
  <li>&nbsp;<a href="https://helloacm.com/code-review-value-not-used/">[Code Review] – Value Not Used</a></li>
</ul>
<p>&nbsp;<strong>近期热贴 Recent Popular Posts</strong>&nbsp;</p>
<ul>
  <li>&nbsp;<a href="https://steemit.com/cn/@justyy/200steem-1-sp">第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！ </a>&nbsp;</li>
  <li><a href="https://steemit.com/cn/@justyy/steemit-don-t-let-steemit-ruin-your-life">别让SteemIt毁了你原本的生活 (新老用户都应该看一看) Don’t Let SteemIt Ruin Your Life!</a></li>
  <li><a href="https://steemit.com/steemit/@justyy/technically-images-can-be-stored-on-blockchain-steemit">Technically Images can be Stored on BlockChain 差一点 SteemIt 就可以把图片也存在区块链上了</a></li>
  <li><a href="https://steemit.com/cn/@justyy/adsense-steemit">从互联网广告(Adsense)来谈谈 影响 SteemIt 的收入因素</a></li>
  <li><a href="https://steemit.com/cn/@justyy/mysql-knn-the-k-nearest-neighbor-algorithm-prediction-demonstration-by-mysql">[机器学习] 用 MySQL 来演示 KNN算法 The K Nearest Neighbor Algorithm (Prediction) Demonstration by MySQL</a></li>
  <li><a href="https://steemit.com/cn/@justyy/xy-xy-yzz">XY + XY = YZZ 大白 + 大白 = 白胖胖&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/the-fox">The Fox 英式午餐</a></li>
  <li><a href="https://steemit.com/cn/@justyy/early-autumn-2017-cambridge-uk-photography">Early Autumn 2017, Cambridge, UK (Photography) 英国慢节奏的村庄生活 – 每日散步村口溜娃&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/software-engineer-interview-question-how-to-improve-dynamic-programming-space-complexity">Software Engineer Interview Question – How to Improve Dynamic Programming Space Complexity? 进一步改进动态规化的空间复杂度&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/24-poker-game-24">24 Poker Game 24点扑克游戏&nbsp;</a></li>
</ul>
</html>

- - -

This page is synchronized from the post: [[Code Review Series] - Value Not Used [坑爹的代码] - 变量未使用](https://steemit.com/@justyy/code-review-series-value-not-used)
