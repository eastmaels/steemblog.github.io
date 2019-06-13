
---
title: 'Software Engineer Interview Question - Dynamic Programming - Integer Break 软件工程师面试技巧之 动态规化 - 整数拆分'
permlink: software-engineer-interview-question-dynamic-programming-integer-break
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-06 15:37:33
categories:
- cn
tags:
- cn
- cn-programming
- dynamic-programming
- algorithms
- interview-question
thumbnail: http://www.ideserve.co.in/images/dynamic-programming-interview-questions.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p><a href="https://helloacm.com/dynamic-programming-perfect-squares/">Dynamic Programming</a> (DP) &nbsp;is one of the very important algorithm in Computer Science. Here is the simplest example of demonstrating the concept of DP if you want to tell you 5-year-old son.</p>
<p><img src="http://www.ideserve.co.in/images/dynamic-programming-interview-questions.png"/></p>
<p>Give 5 matches to your son, and ask: "How many matches do you have?"</p>
<p>-- The kid counts and says: Five.</p>
<p>Then, give one more match to your son and ask, how about now?</p>
<p>-- The kid says Six because he knows Five + One More equals Six... &nbsp;</p>
<p>The concept of DP is quite similar to this: breaking a problem into a smaller one + memorization of solutions to sub-problems.</p>
<blockquote>&nbsp;Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get. For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).&nbsp;</blockquote>
<p>We can use <a href="https://helloacm.com/dynamic-programming-perfect-squares/">Dynamic Programming</a> (DP) to solve this problem. The puzzle does not ask you exactly how to break the integer. If we use f(n) to denote that the maximum product to break the integer n, then we have the following recurrence formula:&nbsp;</p>
<p><img src="https://helloacm.com/wp-content/uploads/easy-latex-cache/tex_3d49ae1a81cd13f9bf93c1919788a556.png" width="363" height="21"/>&nbsp;&nbsp;for &nbsp;1 &lt;= j &lt; i &lt;= n</p>
<p>If we break the integer i-j, the intermediate result is f(i-j) otherwise we have to check if we break i into i-j and j. The time complexity is O(n^2) and the space complexity is O(n).&nbsp;</p>
<p><a href="https://justyy.com/archives/3457">动态规化</a> (Dynamic Programming) 是个计算机领域里很重要的算法，我在高中参加过三次信息学奥林匹克竞赛 (ACM)，每年必有一题用动归(DP)来解答. 动态规化其实就是 把问题分解成子问题+记忆子问题求解的一个过程。</p>
<p>你如何教你的孩子DP是什么呢？</p>
<p>比如：你给你的孩子5根火柴，你的孩子数了数然后说有5根。然后你再给你的孩子1根火柴然后问一共有多少根，这时候你的孩子会马上说出6根，因为他知道已经有5根了，再加上1根就是6根。</p>
<p>原理就是：把问题分析成更小的问题，并分而求之，子问题的解会被保存下来这样在求解更大的问题的时候就不需要再重新把中间结果再算一遍了。</p>
<p>动态规化的解法经常是较优的一种解法，我们来看这么一道<a href="https://justyy.com/archives/4992">面试题</a>：</p>
<p>给定一个正整数，将它拆分成至少两个正整数，求出这些正整数的最大乘积。比如 整数2，可以拆分成1+1， 乘积是1，当输入是10，需要分解成3+3+4，这样所得的最大乘积是36。</p>
<p>你会怎么解？暴力搜索？这种解法不好写，而且时间复杂度也大。可以用回溯+剪枝，但时间复杂度也相对较大，特别是当N较大的时候也会时间太久Time Exceeded.</p>
<p>动规解答这题就较为简单。这题并没有让你详细写出怎么拆分的方案，只需要解出最大的乘积即可。所以我们有以下的方案：</p>
<p><img src="https://helloacm.com/wp-content/uploads/easy-latex-cache/tex_3d49ae1a81cd13f9bf93c1919788a556.png" width="363" height="21"/>&nbsp;&nbsp;其中 1 &lt;= j &lt; i &lt;= n</p>
<p>我们用 f(n) 来表示整数N拆分后的最大乘积，那么我们当我们把整数 i 分解成两部分 i - j 和 j, &nbsp;那么 最大乘积是 f(i - j) * j 和 (i - j) * j 的较大值。我们需要O(N^2)循环来寻求最优拆分法。</p>
<p>动规在计算 f(n) 的时候会需要取决于 f(i - j)的值，这时候每个f(m) 的值就会被保存起来以供之后迭代使用。这也是一个记忆的过程。以下实现就相对简单好理解。空间复杂度也是O(N^2)</p>
<p>If we break the integer i-j, the intermediate result is f(i-j) otherwise we have to check if we break i into i-j and j. The time complexity is O(n^2) and the space complexity is O(n).&nbsp;</p>
<p><code>class Solution {</code></p>
<p><code>public:</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;int integerBreak(int n) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vector&lt;int&gt; f(n + 1, 0);</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f[1] = 0;</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f[2] = 1;</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 2; i &lt; n + 1; i ++) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int j = 1; j &lt; i; j ++) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f[i] = max(f[i], max(i - j, f[i - j]) * j);</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f[n];</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>};</code></p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.</p>
<p>非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>&nbsp;// 同步到我的<a href="https://justyy.com/">中文博客</a>和<a href="https://helloacm.com/">英文算法博客</a> &nbsp;</p>
<ul>
  <li>&nbsp;<a href="https://helloacm.com/dynamic-programming-integer-break/">Dynamic Programming – Integer Break</a></li>
  <li>&nbsp;<a href="https://justyy.com/archives/4999">软件工程师面试技巧之 动态规化 – 整数拆分</a></li>
</ul>
<h2>&nbsp;<strong>近期热贴 Recent Popular Posts</strong>&nbsp;</h2>
<ul>
  <li><a href="https://steemit.com/cn/@justyy/how-to-claim-bcc-btc-hard-fork-via-c-program-linux-bcc-bitcoin-cash">How to Claim BCC? BTC Hard-Fork via C program (Linux) 小白教程: 怎么领取 BCC (Bitcoin Cash) ?&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/i-wrote-a-chinese-chess-program-chinese-chess">I wrote a Chinese Chess Program 软件分享: 智慧中国象棋 (Chinese Chess)</a></li>
  <li><a href="https://steemit.com/cn/@justyy/planning-cards-agile-poker-game">Planning Cards – Agile Poker Game! 敏捷开发扑克游戏</a></li>
  <li><a href="https://steemit.com/cn/@justyy/software-engineer-interview-question-how-to-check-valid-sudoku-in-c-c">Software Engineer Interview Question - How to Check Valid Sudoku in C/C++? 软件工程师面试技巧之 如何检查数独的有效性</a></li>
  <li><a href="https://steemit.com/cn/@justyy/google-interview-question-print-message-google">Google Interview Question – Print Message - 去年 Google 的面试题 - 打印消息&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/software-engineer-interview-tips-using-hashtable-to-reduce-runtime-complexity">Software Engineer Interview Tips - Using Hashtable to Reduce Runtime Complexity 软件工程师面试技巧之 使用哈希表降复杂度&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/30">Technology-driven or Business-model-driven? 技术优先还是商业模式优先 – 献给在30多岁还在写代码的朋友们&nbsp;</a></li>
  <li>记录那些值得回忆的<a href="https://steemit.com/cn/@justyy/5hgpar">精彩瞬间</a>&nbsp;</li>
</ul>
</html>

- - -

This page is synchronized from the post: [Software Engineer Interview Question - Dynamic Programming - Integer Break 软件工程师面试技巧之 动态规化 - 整数拆分](https://steemit.com/@justyy/software-engineer-interview-question-dynamic-programming-integer-break)
