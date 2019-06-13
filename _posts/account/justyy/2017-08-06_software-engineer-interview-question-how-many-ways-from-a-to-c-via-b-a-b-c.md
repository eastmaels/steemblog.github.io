
---
title: 'Software Engineer Interview Question - How Many Ways from A to C via B? 软件工程师面试技巧之 从A到B再到C有多少种方法?'
permlink: software-engineer-interview-question-how-many-ways-from-a-to-c-via-b-a-b-c
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-06 22:09:30
categories:
- cn
tags:
- cn
- cn-programming
- math-competition
- recursion
- dynamic-programming
thumbnail: https://helloacm.com/wp-content/uploads/2017/08/travel-from-a-to-b-to-c.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>Let’s see <a href="https://steemit.com/contest/@kenchung/question-mathematics-programming-competition-4">this question</a>: If @kenchung starts at A, and he can only travels one move at a time to the north or east, and he cannot go back. If he needs to travel through B, and finally reach C, how many ways are there for him to complete his journey?&nbsp;</p>
<p>有<a href="https://steemit.com/contest/@kenchung/question-mathematics-programming-competition-4">这么一题</a>, 如果 @kenchung 从A到C, 一定要经过B, 并且每次走一步向东或者向北, 不能回头, 问一共有多少不同的方法.&nbsp;</p>
<p><img src="https://helloacm.com/wp-content/uploads/2017/08/travel-from-a-to-b-to-c.jpg" width="552" height="484"/></p>
<p>&nbsp;</p>
<h2>BRUTE-FORCE? &nbsp;暴力搜索(穷举)</h2>
<p>In theory, you can write a program to count each possible path from A to C, then, only those paths through B are valid. This could take ages. For example, if A and B are separated by x steps horizontally and y steps vertically (x steps east and y steps north), the total number of paths is:&nbsp;</p>
<p>理论上说, 你可以用<a href="https://justyy.com/archives/2047">暴力</a>列举所有从A到C的走法 然后再一一比较是否经过B, 不过这种方法很低效因为需要列举出所有走法. 如果水平有X步垂直有Y步那么一共的方案有:&nbsp;</p>
<p><img src="https://helloacm.com/wp-content/uploads/easy-latex-cache/tex_8bd19f28227fa25be0bb077d7ee7a9e4.png" width="39" height="22"/>&nbsp;&nbsp;or &nbsp;<img src="https://helloacm.com/wp-content/uploads/easy-latex-cache/tex_d5f725c0b44d70bdc6ea1d5e3add755d.png" width="39" height="23"/></p>
<p>This reads: the number of ways to choose x or y items from (x + y) items. In this case, the x=8 and y=9, which makes the bruteforce inefficient.</p>
<p>可以这么理解, 一共有 x+y 步 选其中 x 或者 y 步来往东或者往北走.&nbsp;</p>
<h2>PURE MATH SOLUTION 纯数学方法: 排列组合</h2>
<p>A better way is to simplify the problem into two steps. First is to travel from A to B and the second step is to travel from B to C, thus, if we denote f(a, b) the number of paths from a to b, then the total number is:&nbsp;</p>
<p>&nbsp;细想一下, 我们只要分两个阶段即可: 第一个阶段计算由A到B的方法数, 第二个阶段计算由B到C的方法数, 然后这么一乘就是最后的方案数了.&nbsp;</p>
<p><img src="https://helloacm.com/wp-content/uploads/easy-latex-cache/tex_08d0d996cdb4c348af7e1f435eff9a0e.png" width="157" height="21"/></p>
<p>So, you know the answer easily from the above. &nbsp;</p>
<p>&nbsp;根据本题, 最终方案为 &nbsp;.... (我知道你懂的)</p>
<h2>RECURSION &nbsp;递归</h2>
<p>Let’s write a function f(x, y) which returns the number of different paths for x steps east and y steps north.&nbsp;</p>
<p>&nbsp;假设我们定义了 f(x, y) 用于计算 水平x步, 垂直y步的方案数: 那么:&nbsp;</p>
<p><code>function f($x, $y) {</code></p>
<p><code>&nbsp;&nbsp;if (($x == 0) || ($y == 0)) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;return 1;</code></p>
<p><code>&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;return f($x - 1, $y) + f($x, $y - 1);&nbsp;// East of North, 1 step, two choices </code><em>// 每次两种选择: 往东1步或者往北一步</em></p>
<p><code>}</code></p>
<p>&nbsp;And the answer is just: &nbsp;&nbsp;&nbsp;&nbsp;最终答案就是:&nbsp;</p>
<pre><code>echo f(3, 4) * f(5, 5);</code></pre>
<p>&nbsp;For each recursive call, there are two choices: 1 step north or 1 step east, so the answer is just to add these two (decompose into two smaller problems). The exiting conditions are when the offset is zero (step count is zero), this is when the answer should be returned as 1.</p>
<p>&nbsp;这里的<a href="https://justyy.com/archives/1031">递归</a>写法可以认动态规化的一种, 退出条件就是当任意方向步长为0, 这时候就只有一种方案.&nbsp;</p>
<h2>DYNAMIC PROGRAMMING (MEMORIZATION) &nbsp;动态规化+记忆</h2>
<p>The <a href="https://helloacm.com/understanding-tail-recursion-visual-studio-c-assembly-view/">recursion</a> is straightforward. However, it does not work well if the input is large, as a lot of intermediate results are computed again and again. You can memorize the intermediate results, which will speed up the computation (each f(x,y) is only computed once because next time the result will be fetched from memory):&nbsp;</p>
<p>&nbsp;递归的计算是很多冗余的, 因为很多中间计算在递归下去会被计算多次, 很低效. 这时候我们可以记录一下这些中间结果 这样速度就会快很多(每个 f(x,y) 值只会计算一次)&nbsp;</p>
<p><code>$cache = array();</code></p>
<p><code>function f($x, $y) {</code></p>
<p><code>&nbsp;&nbsp;global $cache;</code></p>
<p><code>&nbsp;&nbsp;if (($x == 0) || ($y == 0)) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;return 1;</code></p>
<p><code>&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;$key = $x.' '.$y;&nbsp;</code></p>
<p><code>&nbsp;&nbsp;if (isset($cache[$key])) { // has the result been computed?</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;return $cache[$key];</code></p>
<p><code>&nbsp;&nbsp;}&nbsp;</code></p>
<p><code>&nbsp;&nbsp;$sol = f($x - 1, $y) + f($x, $y - 1);</code></p>
<p><code>&nbsp;&nbsp;$cache[$key] = $sol; // store the result</code></p>
<p><code>&nbsp;&nbsp;return $sol;</code></p>
<p><code>}</code></p>
<p>The next improvement to improve this <a href="https://helloacm.com/cc-coding-exercise-unique-paths-ii-dynamic-programming-with-obstacles-leetcode-online-judge-dp-with-constraints/">Dynamic Programming DP</a> implementation is to use the iteration, which avoids the <a href="https://helloacm.com/definition-of-recursion/">recursion</a>. This is computed bottom-up direction.&nbsp;</p>
<p><a href="https://justyy.com/archives/4999">动态规化</a>也不需要用递归来实现, 我们可以用更为高效的数组+迭代的方式, 从低往上计算.&nbsp;</p>
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
<p>&nbsp;This runs at complexity O(xy) as well as the space complexity (need to declare a 2-dimensional array).&nbsp;</p>
<p>&nbsp;时间复杂度和空间复杂度都是 O(xy). 为嘛用PHP? 因为<a href="https://justyy.com/archives/3679">PHP</a>是世界上最好的语言.&nbsp;</p>
<p><strong>Update</strong>: the next day, it comes to me that the space complexity can be further reduced to O(y): <a href="https://steemit.com/cn/@justyy/software-engineer-interview-question-how-to-improve-dynamic-programming-space-complexity">https://steemit.com/cn/@justyy/software-engineer-interview-question-how-to-improve-dynamic-programming-space-complexity</a>&nbsp;</p>
<p><strong>更新</strong>：第二天 想到 空间复杂度可以降到 O(y)： <a href="https://steemit.com/cn/@justyy/software-engineer-interview-question-how-to-improve-dynamic-programming-space-complexity">https://steemit.com/cn/@justyy/software-engineer-interview-question-how-to-improve-dynamic-programming-space-complexity</a>&nbsp;</p>
<p><br></p>
<p>PS: Why PHP? &nbsp;--- &nbsp;PHP is the best programming language in the world....</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>Originally published at https://steemit.com Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.</p>
<p>原创首发于 https://steemit.com 非常感谢阅读, 欢迎FOLLOW和Upvote @justyy &nbsp;能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;</p>
<p>&nbsp;// 同步到我的<a href="https://justyy.com/">中文博客</a>和<a href="https://helloacm.com/">英文算法博客</a> &nbsp;</p>
<ul>
  <li><a href="https://helloacm.com/software-engineer-interview-question-how-to-improve-dynamic-programming-space-complexity/">Software Engineer Interview Question – How to Improve Dynamic Programming Space Complexity?</a></li>
  <li><a href="https://justyy.com/archives/5004">进一步改进动态规化的空间复杂度</a></li>
  <li><a href="https://helloacm.com/how-many-ways-from-a-to-c-via-b/">How many ways from A to C via B?</a></li>
  <li><a href="https://justyy.com/archives/5001">从A到B再到C有多少种方法?</a>&nbsp;</li>
</ul>
<h2>&nbsp;<strong>近期热贴 Recent Popular Posts</strong>&nbsp;</h2>
<ul>
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

This page is synchronized from the post: [Software Engineer Interview Question - How Many Ways from A to C via B? 软件工程师面试技巧之 从A到B再到C有多少种方法?](https://steemit.com/@justyy/software-engineer-interview-question-how-many-ways-from-a-to-c-via-b-a-b-c)
