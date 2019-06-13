
---
title: '软件工程师数据库面试技巧之 SQL中的第二名记录 Software Engineer Interview Question - The Second Highest'
permlink: sql-software-engineer-interview-question-the-second-highest
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-09 17:49:24
categories:
- cn
tags:
- cn
- cn-programming
- database
- steemstem
thumbnail: https://helloacm.com/wp-content/uploads/2015/01/sql.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>Question: Write a SQL query to get the second highest salary from the <strong>Employee </strong>table.&nbsp;</p>
<p>现在最吃香的工程师是 全栈工程师 (Full Stack), 因此你除了要好的算法数据结构知识外 你还需要懂数据库等计算机知识. 有人说, <a href="https://justyy.com/archives/4048">SQL</a>好简单, 其实SQL也可以考考你的逻辑, 比如有这么一个简单的 (含有两个字段, 三行记录) 的关系表 (假设表名为 Employee).</p>
<p>&nbsp;+----+--------+<br>
| Id | Salary |<br>
+----+--------+<br>
| 1 &nbsp;| 100 &nbsp;&nbsp;&nbsp;|<br>
| 2 &nbsp;| 200 &nbsp;&nbsp;&nbsp;|<br>
| 3 &nbsp;| 300 &nbsp;&nbsp;&nbsp;|<br>
+----+--------+</p>
<p>请输出第二高的记录, 也就是 ID = 2, Salary = 200.&nbsp;</p>
<p>如果不存在第二高, 比如 两条记录都是 100, 100, 那么应该返回 null. 而 100, 100, 90 应该返回90而不是100. 这样的话 &nbsp;" select * from Employee order by salary desc limit 1,1 " &nbsp;就不对了.</p>
<p>&nbsp;Another example, Input Salary Array = [100, 100], the output should be null; When array equals [100, 100, 90]. The output should be 90 (second highest salary) instead of 100. Therefore the common mistake is the following:&nbsp;</p>
<p>&nbsp;你也可以用 group by:&nbsp;</p>
<p>&nbsp;Some might correct this via group by:&nbsp;</p>
<p><code>select Salary as SecondHighestSalary from Employee group by Salary order by Salary limit 1,1&nbsp;</code></p>
<p>&nbsp;但是当第二高记录不存在时, 该SQL返回空而不是 null. &nbsp;</p>
<p>&nbsp;However, it will return empty instead of null when it does not exist.&nbsp;</p>
<p><code>Input: {"headers": {"Employee": ["Id", "Salary"]}, "rows": {"Employee": [[1, 100]]}}<br>
Output: {"headers": ["SecondHighestSalary"], "values": []}<br>
Expected: {"headers": ["SecondHighestSalary"], "values": [[null]]}</code></p>
<p>For example, given the above <strong>Employee</strong> table, the second highest salary is 200. If there is no second highest salary, then the query should return null.&nbsp;</p>
<p>&nbsp;The second largest number is always smaller than the largest number. We use a inner SQL to get the maximum salary and we just need to get the largest number that is smaller than this largest number.&nbsp;</p>
<p>so, if the numbers are 100, 100, 90, &nbsp;it should return 90 instead of 100, which makes " select * from Employee order by salary desc limit 1,1 " incorrect.</p>
<p><img src="https://helloacm.com/wp-content/uploads/2015/01/sql.png" width="512" height="512"/></p>
<p>SQL中有 max, min, 但这些都无法直接输出第二高(或者第二低), 但你可以这么想, 我取得了最高的, 剩下的取最高就是第二高了, 是不是很简单?&nbsp;</p>
<p>select max(Salary)<br>
from Employee<br>
where Salary &lt; <strong>(select max(Salary) from Employee)</strong></p>
<p>That is it, no tricks, no sorting, just two SQL selects and two group functions <strong>max</strong>&nbsp;</p>
<p>上面黑体的是子查询 先返回最大的记录为 300, 那么接下来意思就很明白了, 比最大值300小的最大值是多少? 200嘛.</p>
<p>&nbsp;PS: 当年我招程序员的<a href="https://justyy.com/archives/4992">面试</a>的时候 就拿了这一题作为第一题 (45分钟考卷, 10题左右, 这题是送分题)&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>Originally published at <a href="https://steemit.com/">https://steemit.com</a> Thank you for reading my post, feel free to FOLLOW and Upvote <a href="https://steemit.com/@justyy">@justyy</a> which motivates me to create more quality posts.</p>
<p>原创首发于 <a href="https://steemit.com/">https://steemit.com</a> 非常感谢阅读, 欢迎FOLLOW和Upvote <a href="https://steemit.com/@justyy">@justyy</a> &nbsp;能激励我创作更多更好的内容.&nbsp;&nbsp;</p>
<p>// 已同步到我的<a href="https://justyy.com">中文博客</a>和<a href="https://helloacm.com">英文算法博客</a>。&nbsp;</p>
<ul>
  <li>&nbsp;<a href="https://helloacm.com/sql-coding-exercise-second-highest-salary/">SQL Coding Exercise – Second Highest Salary</a></li>
  <li>&nbsp;<a href="https://justyy.com/archives/5026">软件工程师数据库面试技巧之 SQL中的第二名记录</a></li>
</ul>
<p>&nbsp;<strong>近期热贴 Recent Popular Posts</strong>&nbsp;</p>
<ul>
  <li>&nbsp;<a href="https://steemit.com/cn/@justyy/200steem-1-sp">第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！ </a>&nbsp;</li>
  <li><a href="https://steemit.com/cn/@justyy/how-to-claim-bcc-btc-hard-fork-via-c-program-linux-bcc-bitcoin-cash">How to Claim BCC? BTC Hard-Fork via C program (Linux) 小白教程: 怎么领取 BCC (Bitcoin Cash) ?&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically-steemit-chrome">为了 SteemIt 开发了一个 中文简体和繁体自动切换的Chrome浏览器插件 Chrome Extension to Switch between Simplified Chinese and Traditional Chinese Automatically</a></li>
  <li><a href="https://steemit.com/cn/@justyy/xy-xy-yzz">XY + XY = YZZ 大白 + 大白 = 白胖胖</a></li>
  <li><a href="https://steemit.com/cn/@justyy/24-poker-game-24">24 Poker Game 24点扑克游戏</a></li>
  <li><a href="https://steemit.com/cn/@justyy/software-engineer-interview-question-dynamic-programming-integer-break">Software Engineer Interview Question - Dynamic Programming - Integer Break 软件工程师面试技巧之 动态规化 - 整数拆分</a></li>
  <li><a href="https://steemit.com/cn/@justyy/30">Technology-driven or Business-model-driven? 技术优先还是商业模式优先 – 献给在30多岁还在写代码的朋友们&nbsp;</a></li>
</ul>
</html>

- - -

This page is synchronized from the post: [软件工程师数据库面试技巧之 SQL中的第二名记录 Software Engineer Interview Question - The Second Highest](https://steemit.com/@justyy/sql-software-engineer-interview-question-the-second-highest)
