
---
title: 'I wrote a Chinese Chess Program 软件分享: 智慧中国象棋 (Chinese Chess)'
permlink: i-wrote-a-chinese-chess-program-chinese-chess
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-02 11:53:24
categories:
- cn
tags:
- cn
- cn-programming
- chinese-chess
- artificial-intelligence
- software
thumbnail: https://helloacm.com/wp-content/uploads/2015/11/zhihui-chess.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>I wrote <a href="https://steakovercooked.com/chess/">a Chinese Chess freeware</a> in 2005 (12 years) ago (as the bachelor final year project). The project was initially written and compiled under <a href="https://helloacm.com/delphi-7-the-classicbest-pascal-ide-for-win32-rad-tool/">Delphi 7</a>. Later I moved the code to <a href="https://helloacm.com/odd-delphi-2007-bug-com-apis-locked-to-first-letter-lowercase-in-type-library-editor/">Delphi 2007</a>. Today, I have modified the codebase to be able to compile this baby under Delphi <a href="https://helloacm.com/32-bit-visual-studio-and-delphi-2007xe8-eat-memory-any-64-bit-ide/">XE8</a>.&nbsp;</p>
<p>Delphi XE8 is <a href="https://helloacm.com/how-to-convert-gb2312-or-other-non-ansi-characters-to-utf-8-encoding-both-mysql-and-files-charset/">unicode</a>, and supports the Parallel Library (e.g. <a href="https://helloacm.com/simple-parallel-for-implementation-at-delphi-2007-without-generics-and-anonymous-methods/">Parallel.For</a>, Parallel.ForEach) so you will be experiencing performance gains in this case, a higher intelligence.&nbsp;</p>
<p>For those who do not know how to play Chinese chess, here is the introduction from <a href="https://en.wikipedia.org/wiki/Xiangqi">wiki </a>and here is the <a href="https://rot47.net/91">quick-how-to.</a> &nbsp;&nbsp;</p>
<h3>Download Zhihui Chinese Chess Software <a href="https://rot47.net/93">3.0.0.501</a></h3>
<h3>ITERATIVE DEEPENING</h3>
<p>In AI (Artificial Intelligence), the idea of Iterative Deepening is often used in the chess-game-playing. It has the concept as follows:</p>
<pre><code>while (still_has_time) {<br>
&nbsp; &nbsp;search_depth ++ ; <em>// increase the search depts;</em><br>
&nbsp; &nbsp;best_move = do_search(search_depth);<br>
}<br>
apply_best_move(best_move);</code></pre>
<p>This may seem odd at first: why waste time doing searches for depth = 4 if we have time to do depth = 6 ? The answer is that modern search algorithms (Alpha-beta) benefit from Hash table so that the previous searches will store the values that can be used in the future searches so that it actually speeds up the searches. For example, it may be faster if doing search with depth 4 + 6 than doing search 6 directly.&nbsp;</p>
<p>&nbsp;In game playing, the Iterative Deepening does not limit the computer for its ‘intelligence’ by design. That means, as the hardware <a href="https://helloacm.com/review-hpz800-server-workstation-hp-z800-workstation-desktop-pc-tower-computer-powerhouse-2x-intel-xeon-x5650-48gb-ddr3-memory-2tb-hdd-1gb-nvidia-quadro/">becomes faster and faster</a>, within the same amount of time period, the AI can actually do more searches, which yields a higher intelligence (no upper bound)!The computer will keep thinking if there is time!&nbsp;</p>
<p>&nbsp;64-bit application is built and bundled into the setup. So you will notice that an extra icon (64-bit) will be added to the desktop icon. You will possibly benefit for performance gains. The <a href="https://helloacm.com/a-quick-check-if-32-or-64-bit-os/">64-bit</a> enjoys ‘unlimited’ RAM. The 32-bit chess AI can only use up to 3.5GB RAM under <a href="https://helloacm.com/large-address-aware/">LAA mode</a>.The future updates include <a href="https://helloacm.com/c-coding-exercise-parallel-for-monte-carlo-pi-calculation/">parallel</a> alphabeta pruning <a href="https://helloacm.com/common-algorithms-and-their-complexity/">algorithms</a> and using the latest compilers (<a href="https://helloacm.com/delphi-10-1-berlin-version-number/">Delphi 101 Berlin</a>) to compile both 32-bit and <a href="https://helloacm.com/a-quick-check-if-32-or-64-bit-os/">64-bit</a> chess program.&nbsp;</p>
<p>&nbsp;十几年前(2005年)我本科的毕业设计做了一个中国象棋的 桌面程序 <a href="https://steakovercooked.com/ch/Application/delphi.chess">智慧 中国象棋 (Xiang Qi)</a><br>
<a href="https://steakovercooked.com/ch/Application/delphi.chess">一款完全免费的 中国象棋 (Xiang Qi) 游戏</a>&nbsp;</p>
<p>&nbsp;后来认识<a href="https://justyy.com/archives/4336">媳妇</a>之后 改名成 ‘智慧’ 我俩名字的一个字. 最开始代码是在<a href="https://justyy.com/archives/1835">DELPHI 7</a>下编译的 后来移到 <a href="https://justyy.com/archives/2138">DELPHI 2007</a> 最近休假 又整了整代码 移到了 <a href="https://justyy.com/archives/1865">DELPHI XE8</a> 下编译.&nbsp;</p>
<p>&nbsp;DELPHI XE8 下支持 多线程并行语句 例如 <a href="https://justyy.com/archives/861">Parallel.For</a>, Parallel.ForEach, 而且<a href="https://justyy.com/archives/2061">DELPHI XE8</a>是 <a href="https://justyy.com/archives/1078">UNICODE</a>的. 新版本的代码质量速度效率要比以前的版本好一些.&nbsp;</p>
<p>&nbsp;不懂玩象棋的人可以看维基百科 <a href="https://zh.wikipedia.org/wiki/%E8%B1%A1%E6%A3%8B">https://zh.wikipedia.org/wiki/%E8%B1%A1%E6%A3%8B</a>&nbsp;</p>
<p>&nbsp;我写了一个英文(很久之前, 未更新)的 <a href="https://rot47.net/91">英文简介</a>&nbsp;</p>
<p><img src="https://helloacm.com/wp-content/uploads/2015/11/zhihui-chess.jpg" width="1024" height="868"/></p>
<h1>版本 3.0.0.501: <a href="https://rot47.net/93">点这里下载&nbsp;</a></h1>
<h3>持续深入算法 ITERATIVE DEEPENING</h3>
<p>在人工智能里, 持续深入算法 Iterative Deepening 很常用于棋类程序中. 这个概念很简单:</p>
<pre><code>while (还有时间) {<br>
&nbsp; &nbsp;搜索深度 ++ ;<br>
&nbsp; &nbsp;best_move = do_search(搜索深度);<br>
}<br>
apply_best_move(best_move);</code></pre>
<p>这个代码看起来第一眼好像做了很多无用功 – 既然要搜索 深度为 6 为什么要先搜索深度为 5? 其实搜索算法 (例如 Alpha-beta 剪枝) 会用到 哈希表 用于保存之前搜索的一些经验. 这些经验能对之后的搜索有着速度的提高作用 所以直接搜索 深度为6可能没有搜索深度4+深度6来得快.&nbsp;</p>
<p>&nbsp;而且最为主要的是: 当时间还有的时候就继续加深搜索深度(电脑继续思考) 这样程序就不会受限于搜索固定深度. 比如在<a href="https://justyy.com/archives/2223">好电脑快电脑</a>上 同样的时间算法搜索的深度更深这样智力也就更强!这个程序的棋力 大概是 6秒内想三个回合 中局和 残局的时候 能想 4到6个回合&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.&nbsp;</p>
<p>非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>// 根据我的博文 &nbsp;<a href="https://justyy.com/archives/2237">这里</a> 和 <a href="https://helloacm.com/freeware-chinese-chess-updated-to-3-0-0-500-using-xe8-32-bit-and-unicode/">这里</a> 整理而得。</p>
<p>&nbsp;</p>
<h2><strong>广告一下微信群用于讨论各类编程技术：只要您对技术感兴趣都可以加群哈。</strong></h2>
<p><img src="http://i.imgur.com/fKTecIB.png" width="640" height="1136"/></p>
<h1>&nbsp;<strong>近期热贴 Recent Popular Posts</strong>&nbsp;</h1>
<ol>
  <li><a href="https://steemit.com/cn/@justyy/30">Technology-driven or Business-model-driven? 技术优先还是商业模式优先 – 献给在30多岁还在写代码的朋友们&nbsp;</a></li>
  <li><a href="https://steemit.com/photography/@justyy/one-day-visit-to-fen-drayton-lake-photography-fen-drayton">One Day Visit to Fen Drayton Lake (Photography) - 村庄附近的 Fen Drayton 湖</a></li>
  <li><a href="https://steemit.com/cn/@justyy/luton-brookes">One Night in Luton. 回到Luton十一年前打工的酒巴Brookes喝酒</a></li>
  <li><a href="https://steemit.com/photography/@justyy/one-day-travel-photography-fen-drayton-lake-st-ives-fen-drayton-lake-st-ives">One Day Travel (Photography) Fen Drayton Lake + St Ives 英国 Fen Drayton Lake 坐公交到 St Ives 游玩</a></li>
  <li><a href="https://steemit.com/cn/@justyy/what-is-data-overfitting-in-machine-learning">What is Data Overfitting in Machine Learning? 机器学习中的过拟现象</a></li>
  <li><a href="https://steemit.com/cn/@justyy/just-throw-away-the-things-you-don-t-need">Just throw away the things you don't need 断舍离</a></li>
  <li><a href="https://steemit.com/cn/@justyy/microsoft-interview-question-get-the-area-of-the-triangle">Microsoft Interview Question – Get the Area of the Triangle 微软面试题:三角形的面积是多少?</a></li>
</ol>
<p><br></p>
</html>

- - -

This page is synchronized from the post: [I wrote a Chinese Chess Program 软件分享: 智慧中国象棋 (Chinese Chess)](https://steemit.com/@justyy/i-wrote-a-chinese-chess-program-chinese-chess)
