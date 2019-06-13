
---
title: 'Software Engineer Interview Question – How to Improve Dynamic Programming Space Complexity?  进一步改进动态规化的空间复杂度'
permlink: software-engineer-interview-question-how-to-improve-dynamic-programming-space-complexity
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-07 18:11:18
categories:
- cn
tags:
- cn
- cn-programming
- dynamic-programming
- steemstem
thumbnail: https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>In <a href="https://steemit.com/cn/@justyy/software-engineer-interview-question-how-many-ways-from-a-to-c-via-b-a-b-c">yesterday's post</a>, we present the final ‘optimized’ solution using Dynamic Programming, which is implemented using a 2 dimensional array with iteration. Let’s review this code:&nbsp;</p>
<p><a href="https://steemit.com/cn/@justyy/software-engineer-interview-question-how-many-ways-from-a-to-c-via-b-a-b-c">昨天发了这个帖子</a>讲到动态规化的2种改进, 一种是记忆, 另一种是把递归改成迭代. 今天稍微想了一下, 还可以从空间复杂度里入手. 我们先看一下之前的’最优’方案:&nbsp;</p>
<p><code>function f($x, $y) {</code></p>
<p><code>&nbsp;&nbsp;$ans = array();</code></p>
<p><code>&nbsp;&nbsp;for ($i = 0; $i &lt;= $x; ++ $i) $ans[$i][0] = 1;</code></p>
<p><code>&nbsp;&nbsp;for ($i = 0; $i &lt;= $y; ++ $i) $ans[0][$i] = 1;</code></p>
<p><code>&nbsp;&nbsp;for ($i = 1; $i &lt;= $x; ++ $i) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;for ($j = 1; $j &lt;= $y; ++ $j) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ans[$i][$j] = $ans[$i - 1][$j] + $ans[$i][$j - 1];&nbsp;</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;return $ans[$x][$y];</code></p>
<p><code>}</code></p>
<p>&nbsp;We know that the time complexity is O(xy) and the space complexity is also O(xy) where a 2-D array is allocated. So, can we do better? If we take a look at the core iteration of this <a href="https://helloacm.com/c-coding-exercise-maximum-subarray-dynamic-programming-and-greedy-algorithm/">Dynamic Programming</a> (DP) algorithm:&nbsp;</p>
<p>&nbsp;<code>$ans[$i][$j] = $ans[$i - 1][$j] + $ans[$i][$j - 1];</code></p>
<p>&nbsp;We can see that in order to compute ans[i][j] we need to know ans[i – 1][j] and ans[i][j – 1]. So, we can visualize this as: we need the result of its previous row only i.e. we don’t need to know ans[i – 2][*] when we compute ans[i][*]. Therefore, we can compress the 2-D array into 1-D array, where we store the intermediate results of ans[i – 1] only. The space complexity is thus improved to O(y). With this modification, the loop sequence becomes important, you need to loop from the smaller index and the inner loop should be exactly from 1 to y, which accumulates the intermediate results.&nbsp;</p>
<p>&nbsp;这个时间复杂度是 O(xy) 而空间复杂度是 O(xy), 我们需要定义一个二维数组, 可是你看, 我们在算 ans[i][j] 的时候只用到了 ans[i] 和 ans[i – 1] 行的两个值, 也就是说我们并不需要用到 ans[i – 2], ans[i – 3] .. 更早的值, 所以我们完全可以用一维数组来保存上一行的值, 这样的话只需要 O(y) 数组就可以了.&nbsp;</p>
<p><code>function work($x, $y) {</code></p>
<p><code>&nbsp;&nbsp;$ans = array();</code></p>
<p><code>&nbsp;&nbsp;for ($i = 0; $i &lt;= $y; ++ $i) $ans[$i] = 1;</code></p>
<p><code>&nbsp;&nbsp;for ($i = 1; $i &lt;= $x; ++ $i) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;for ($j = 1; $j &lt;= $y ; ++ $j) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ans[$j] += $ans[$j - 1];&nbsp;</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;return $ans[$y];</code></p>
<p><code>}</code></p>
<p>&nbsp;We initialize the array with answer 1’s which means ans[0][*] = 1 (with x = 0), by doing this, we also get rid of O(y) loop. This is the shortest, fastest and cleanest solution to this puzzle, as I believe :)&nbsp;</p>
<p>&nbsp;这么一修改 循环的顺序就变得格外的重要了, 因为内循环我们必须严格从1到 y 来累计中间结果. 这样一优化, 时间空间复杂度都达到最优了, 而且代码运行速度也最快了(就动规这个算法来讲), 代码也更简洁了.&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>&nbsp;Originally published at <a href="https://steemit.com/">https://steemit.com</a> Thank you for reading my post, feel free to FOLLOW and Upvote <a href="https://steemit.com/@justyy">@justyy</a> which motivates me to create more quality posts.</p>
<p>原创首发于 <a href="https://steemit.com/">https://steemit.com</a> 非常感谢阅读, 欢迎FOLLOW和Upvote <a href="https://steemit.com/@justyy">@justyy</a> &nbsp;能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>&nbsp;// 同步到我的<a href="https://justyy.com/">中文博客</a>和<a href="https://helloacm.com/">英文算法博客</a> &nbsp;</p>
<ul>
  <li><a href="https://helloacm.com/software-engineer-interview-question-how-to-improve-dynamic-programming-space-complexity/">Software Engineer Interview Question – How to Improve Dynamic Programming Space Complexity?</a></li>
  <li><a href="https://justyy.com/archives/5004">进一步改进动态规化的空间复杂度</a></li>
  <li><a href="https://helloacm.com/how-many-ways-from-a-to-c-via-b/">How many ways from A to C via B?</a></li>
  <li><a href="https://justyy.com/archives/5001">从A到B再到C有多少种方法?</a>&nbsp;</li>
</ul>
<h2><strong>近期热贴 Recent Popular Posts</strong>&nbsp;</h2>
<ul>
  <li>&nbsp;<a href="https://steemit.com/cn/@justyy/200steem-1-sp">第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！ </a>&nbsp;</li>
  <li><a href="https://steemit.com/cn/@justyy/24-poker-game-24">24 Poker Game 24点扑克游戏</a></li>
  <li><a href="https://steemit.com/cn/@justyy/software-engineer-interview-question-dynamic-programming-integer-break">Software Engineer Interview Question - Dynamic Programming - Integer Break 软件工程师面试技巧之 动态规化 - 整数拆分</a></li>
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

This page is synchronized from the post: [Software Engineer Interview Question – How to Improve Dynamic Programming Space Complexity?  进一步改进动态规化的空间复杂度](https://steemit.com/@justyy/software-engineer-interview-question-how-to-improve-dynamic-programming-space-complexity)
