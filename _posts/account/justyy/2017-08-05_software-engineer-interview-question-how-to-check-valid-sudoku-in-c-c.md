
---
title: 'Software Engineer Interview Question - How to Check Valid Sudoku in C/C++? 软件工程师面试技巧之 如何检查数独的有效性'
permlink: software-engineer-interview-question-how-to-check-valid-sudoku-in-c-c
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-05 16:43:51
categories:
- cn
tags:
- cn
- cn-programming
- software-engineering
- interview
- algorithms
thumbnail: https://helloacm.com/wp-content/uploads/2016/04/sudoku.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>I'd like to continue the series of "Software Engineer Interview Questions or Tips" where I'd share you with some coding questions/tips from time to time. <strong>To share is the process of re-learning</strong>.</p>
<ul>
  <li>&nbsp;<a href="https://steemit.com/cn/@justyy/google-interview-question-print-message-google">Google Interview Question – Print Message</a></li>
  <li>&nbsp;<a href="https://steemit.com/cn/@justyy/software-engineer-interview-tips-using-hashtable-to-reduce-runtime-complexity">Software Engineer Interview Tips - Using Hashtable to Reduce Runtime Complexity</a></li>
</ul>
<blockquote>&nbsp;Determine if a Sudoku is valid. The Sudoku board could be partially filled, where empty cells are filled with the character ‘.’. A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.&nbsp;</blockquote>
<p>&nbsp;A valid Sudoku contains three conditions: (1) all rows should contain exactly 1 to 9. (2) all columns should contain exactly 1 to 9. (3) all sub grids (9 of them) should contain exactly 1 to 9.&nbsp;</p>
<p>&nbsp;The best data structure we can use is the STL:set, we need to clean the set before next validation (row, column or grid).&nbsp;</p>
<p>前不久写的这个 软件工程师面试技巧 的系列，朋友很喜欢，所以我打算把我毕生所学（哈哈）整理整理分享于大家，望喜欢。另：我觉得：<strong>分享就是一种再学习的过程。</strong></p>
<ol>
  <li><a href="https://steemit.com/cn/@justyy/google-interview-question-print-message-google">去年 Google 的面试题 - 打印消息</a></li>
  <li><a href="https://steemit.com/cn/@justyy/software-engineer-interview-tips-using-hashtable-to-reduce-runtime-complexity">软件工程师面试技巧之 使用哈希表降复杂度</a></li>
</ol>
<p>给定一个数独，我们要检查是否有效。一个有效的数独横的竖的都只出现1-9的数字各一次，并且9个小宫格里的数字也只出现1-9各一次。</p>
<p>你能快速的告诉我以下是否是个有效的数独么？</p>
<p><img src="https://helloacm.com/wp-content/uploads/2016/04/sudoku.png" width="250" height="250"/></p>
<p>我们只需要检查给定的数独中已经填好的数字。最好的方法就是通过 C++中 STL 的 unordered_set (未排序的集合) 来保存已经出的数字。记得检查下一个9宫格或者行或列的时候清空集合便可。</p>
<p><code>class Solution {</code></p>
<p><code>public:</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;bool isValidSudoku(vector&lt;vector&lt;char&gt;&gt;&amp; board) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unordered_set&lt;int&gt; has;</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 0; i &lt; 9; i ++) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has.clear();</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// rows = 行</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int j = 0; j &lt; 9; j ++) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (board[i][j] != '.') {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (has.count(board[i][j])) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has.insert(board[i][j]);</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has.clear();</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// columns = 列</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int j = 0; j &lt; 9; j ++) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (board[j][i] != '.') {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (has.count(board[j][i])) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has.insert(board[j][i]);</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 0; i &lt; 3; i ++) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int j = 0; j &lt; 3; j ++) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 9 sub grids - 每一个9宫格也要检查</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has.clear();</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int x = i * 3; x &lt; i * 3 + 3; x ++) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int y = j * 3; y &lt; j * 3 + 3; y ++) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (board[x][y] != '.') {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (has.count(board[x][y])) {</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has.insert(board[x][y]);</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;</code></p>
<p><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></p>
<p><code>};</code></p>
<p>这题并不难，意在考灵活使用数据类型（集合），面试的时候第一个需要思考的就是：这题是否可以用穷举（暴力）来解答？即使你的暴力不太现实（需要计算力太久，像比特币挖矿一样），但是对于考官来说，这也是解决方法的第一步，之后才会考虑是否可以有其它高效的方法来提速。</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p><a href="https://helloacm.com/how-to-check-valid-sudoku-in-cc/">Originally Published</a> in Steemit. Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.&nbsp;</p>
<p><a href="https://helloacm.com/how-to-check-valid-sudoku-in-cc/">原创首发</a> SteemIt, 非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>// 同步到我的<a href="https://justyy.com">中文博客</a>和<a href="https://helloacm.com">英文算法博客</a>&nbsp;</p>
<ul>
  <li><a href="https://justyy.com/archives/4998">软件工程师面试技巧之 如何检查数独的有效性</a>&nbsp;</li>
  <li><a href="https://helloacm.com/how-to-check-valid-sudoku-in-cc/">How to Check Valid Sudoku in C/C++?</a></li>
</ul>
<p><strong>广告一下微信群用于讨论各类编程技术：只要您对技术感兴趣都可以加群哈。</strong></p>
<p><img src="http://i.imgur.com/fKTecIB.png" width="640" height="1136"/></p>
<h2><strong>近期热贴 Recent Popular Posts</strong>&nbsp;</h2>
<ul>
  <li><a href="https://steemit.com/cn/@justyy/how-to-claim-bcc-btc-hard-fork-via-c-program-linux-bcc-bitcoin-cash">How to Claim BCC? BTC Hard-Fork via C program (Linux) 小白教程: 怎么领取 BCC (Bitcoin Cash) ?&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/i-wrote-a-chinese-chess-program-chinese-chess">I wrote a Chinese Chess Program 软件分享: 智慧中国象棋 (Chinese Chess)</a></li>
  <li><a href="https://steemit.com/cn/@justyy/5hgpar">记录那些值得回忆的精彩瞬间</a></li>
</ul>
</html>

- - -

This page is synchronized from the post: [Software Engineer Interview Question - How to Check Valid Sudoku in C/C++? 软件工程师面试技巧之 如何检查数独的有效性](https://steemit.com/@justyy/software-engineer-interview-question-how-to-check-valid-sudoku-in-c-c)
