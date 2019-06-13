
---
title: 'Software Engineer Interview Tips - Using Hashtable to Reduce Runtime Complexity 软件工程师面试技巧之 使用哈希表降复杂度'
permlink: software-engineer-interview-tips-using-hashtable-to-reduce-runtime-complexity
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-03 14:26:48
categories:
- cn
tags:
- cn
- cn-programming
- programming
- hashtable
thumbnail: https://justyy.com/wp-content/uploads/2017/08/cracking-the-coding-interview.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>I am recently reviewing the data structure &amp; algorithms. And the hash table is one of the key knowledge that you can't miss before you attend a <a href="https://helloacm.com/microsoft-interview-question-get-the-area-of-the-triangle/">coding interview</a>.</p>
<p>The hashtable has O(1) complexity of insert and lookup, whilst it has O(N) space complexity.</p>
<p>Take this for example, given an array of integers, please find the pairs that has difference of two.</p>
<p><code>{1, 3, 5, 6, 9}</code></p>
<p><code>Output: (1, 3), (3, 5)</code></p>
<p>The bruteforce O(N^2) code is straightforward:</p>
<p><code>for i = 0 to len - 1</code></p>
<p><code>&nbsp;&nbsp;for j = i + 1 to len</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if abs(arr[i] - arr[j]) = 2) then print_pair_at(i, j)</code></p>
<p>With <a href="https://helloacm.com/c-coding-exercise-use-hashtablepriority-queue-to-compute-the-relative-ranks/">Hashtable</a>, we store the numbers in the table at first iteration, then look it up the value +-2 in the second iteration, which makes O(N).</p>
<p><code>for i in arr:</code></p>
<p><code>&nbsp;&nbsp;put i in hash table</code></p>
<p><code>for i in arr:</code></p>
<p><code>&nbsp;&nbsp;if hash table contains (i - 2) then print(i, i - 2)</code></p>
<p><code>&nbsp;&nbsp;if hash table contains (i + 2) then print(i, i + 2)</code></p>
<p>最近在刷题，倒不是为了找工作，主要是为了练练脑子，日子过得太舒服，人脑不动容易变笨。</p>
<p>程序员应该都了解并能熟悉使用 Hash 哈希表，哈希表的插入和查找时间复杂度是O(1), 空间复杂度是O(N)。我们来看一道简单的面试题：</p>
<p>给定一个数组，找出相差为2的数对，比如：</p>
<p><code>{1, 3, 5, 6, 9}</code></p>
<p><code>输出为: (1, 3), (3, 5)</code></p>
<p>拿到这题的时候 第一感觉是 暴力是否可行? 暴力搜索 复杂度为 O(N^2), &nbsp;大概代码如下：</p>
<p><code>for i = 0 to len - 1</code></p>
<p><code>&nbsp;&nbsp;for j = i + 1 to len</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if abs(arr[i] - arr[j]) = 2) then print_pair_at(i, j)</code></p>
<p>有没有更快的方法呢？答案是有的， 我们可以使用哈希表保存数组里 的值，然后再第二遍查找的时候看看是不是已经在表里，如：</p>
<p><code>for i in arr:</code></p>
<p><code>&nbsp;&nbsp;put i in hash table</code></p>
<p><code>for i in arr:</code></p>
<p><code>&nbsp;&nbsp;if hash table contains (i - 2) then print(i, i - 2)</code></p>
<p><code>&nbsp;&nbsp;if hash table contains (i + 2) then print(i, i + 2)</code></p>
<p>以上就变成了 O(N) 的算法。</p>
<p>另： 再次推荐一下这本书，我从AMAZON买的，花了26英镑。很值。</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/08/cracking-the-coding-interview.jpg" width="1600" height="1470"/></p>
<p><br></p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>Originally Published in Steemit. Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.</p>
<p>原创首发 SteemIt, 非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>// 同步到 我的 <a href="https://helloacm.com/software-engineer-interview-tips-using-hashtable-to-reduce-runtime-complexity/">英文算法博客</a></p>
<p>// 同步到 我的 <a href="https://justyy.com/archives/4987">中文博客 JustYY</a></p>
<h2><strong>近期热贴 Recent Popular Posts</strong>&nbsp;</h2>
<ol>
  <li><a href="https://steemit.com/cn/@justyy/5hgpar">记录那些值得回忆的精彩瞬间</a></li>
  <li><a href="https://steemit.com/cn/@justyy/i-wrote-a-chinese-chess-program-chinese-chess">I wrote a Chinese Chess Program 软件分享: 智慧中国象棋 (Chinese Chess)</a></li>
  <li><a href="https://steemit.com/photography/@justyy/one-day-visit-to-fen-drayton-lake-photography-fen-drayton">One Day Visit to Fen Drayton Lake (Photography) - 村庄附近的 Fen Drayton 湖</a></li>
  <li><a href="https://steemit.com/cn/@justyy/luton-brookes">One Night in Luton. 回到Luton十一年前打工的酒巴Brookes喝酒</a></li>
  <li><a href="https://steemit.com/photography/@justyy/one-day-travel-photography-fen-drayton-lake-st-ives-fen-drayton-lake-st-ives">One Day Travel (Photography) Fen Drayton Lake + St Ives 英国 Fen Drayton Lake 坐公交到 St Ives 游玩</a></li>
  <li><a href="https://steemit.com/cn/@justyy/what-is-data-overfitting-in-machine-learning">What is Data Overfitting in Machine Learning? 机器学习中的过拟现象</a></li>
  <li><a href="https://steemit.com/cn/@justyy/just-throw-away-the-things-you-don-t-need">Just throw away the things you don't need 断舍离</a></li>
</ol>
</html>

- - -

This page is synchronized from the post: [Software Engineer Interview Tips - Using Hashtable to Reduce Runtime Complexity 软件工程师面试技巧之 使用哈希表降复杂度](https://steemit.com/@justyy/software-engineer-interview-tips-using-hashtable-to-reduce-runtime-complexity)
