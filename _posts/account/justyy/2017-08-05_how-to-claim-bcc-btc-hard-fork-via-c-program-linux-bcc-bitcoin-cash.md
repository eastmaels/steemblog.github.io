
---
title: 'How to Claim BCC? BTC Hard-Fork via C program (Linux) 小白教程: 怎么领取 BCC (Bitcoin Cash) ?'
permlink: how-to-claim-bcc-btc-hard-fork-via-c-program-linux-bcc-bitcoin-cash
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-05 00:48:51
categories:
- cn
tags:
- cn
- bitcoin
- bcc
- cn-programming
- include
thumbnail: https://justyy.com/wp-content/uploads/2017/08/bcc-and-btc-wallet.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>&nbsp;这个月初<a href="https://justyy.com/archives/4613">比特币</a>(8月1日)的硬分叉 (Hard Fork) 是互联网加密货币的一大新闻, 像我这等小白, 只关心钱包里的钱是否增值. 计算机中的 fork 意思就是进程自我复制一份 除了进程 pid 不一样, 执行的代码都一样, 这次比特币 (代码BTC) 进行了 fork 操作, 分出一孩子 也就是 BCC (Bitcoin Cash). 那么我用以下在<a href="https://justyy.com/archives/2468">LINUX</a>下的C程序来演示一下这过程.&nbsp;&nbsp;</p>
<pre><code>#include &lt;stdio.h&gt;<br>
#include &lt;unistd.h&gt;<br>
#include &lt;stdlib.h&gt;<br>
&nbsp;<br>
int main() {<br>
&nbsp; &nbsp; &nbsp; &nbsp; pid_t pid;<br>
&nbsp; &nbsp; &nbsp; &nbsp; switch (pid = fork()) { <em>// 8月1号 hard fork</em><br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; case -1:<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; perror("Hard Fork 失败");<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>break</strong>;<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; case 0: <em>// 子进程 Bitcoin Cash (BCC)</em><br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; printf ("%s<strong>\n</strong>", "BCC 活了");<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>break</strong>;<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; default: <em>// 父进程 BTC</em><br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; printf ("%s<strong>\n</strong>", "我是 BTC");<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>break</strong>;<br>
&nbsp; &nbsp; &nbsp; &nbsp; }<br>
&nbsp; &nbsp; &nbsp; &nbsp; for (;;) ; <em>// 一分为二 共存</em><br>
}</code></pre>
<p>BCC 和 BTC 从此各走一方, 但他们在8月一号前拥有一样的过去. 但之后你可以下载一个BCC钱包　然后里面就会有和<a href="https://justyy.com/archives/3734">BTC钱包</a>等量的BCC. BCC (Bitcoin Cash)刚出生就从最高0.48 BTC一路逛跌, 当前1个BCC (Bitcoin Cash)值大概0.02BTC.</p>
<h2>怎么领取 BCC (BITCOIN CASH)?</h2>
<p>由于BCC和BTC共享密钥, 为了保险期间, 最好把原先BTC里的比特币给转移到另一个钱包, 或者卖了变现(我的做法). 有些在线比特币钱包比如 <a href="https://justyy.com/out/coinbase">coinbase</a> 还有其它一些交易所会在8月1号后自动给BCC钱包充等量的钱. 我用的是离线的<a href="https://electrum.org/">Electrum钱包</a>, 他们家做了一个BCC的钱包<a href="https://www.electroncash.org/">Electron Cash Wallet</a>, 同样的团队做出的两个<a href="https://justyy.com/archives/3734">钱包</a>也是相当的兼容.&nbsp;</p>
<p>官方做法是把BTC钱包的密钥给导出保存然后打开BCC钱包再导入同样的密钥, 但实际上我在安装完BCC钱包后打开就有同等量的BCC货币了.&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/08/bcc-and-btc-wallet.jpg" width="1265" height="605"/></p>
<p>&nbsp;短期BCC情势并不明朗, 有专家预言长远来看1个BCC最多不超过100美元(而现在1个BTC值2000英镑), 不得不说人们还是比较信任BTC. 那BCC在我看来也如其它山寨币一样. 所以肯定也有很多像我一样的人不会长期看好而急抛, 这就导致了BCC价格不会太高.</p>
<blockquote>It’s unlikely that BCH will survive at prices above $100 in the long term.<br>
–Samson Mow, a video game developer and CEO of Pixelmatic</blockquote>
<p>现在已经有较多的交易所 比如 bittrex, <a href="https://justyy.com/archives/4925">poloniex</a> 都支持 BCC 交易, 而很多人也立马抛了BCC (Bitcoin Cash). 我是小户, 上个月换了一些比特币 在这次BTC分叉之前只存有不到0.18个BTC, 获得等量的 0.18 BCC, 这大概按现在的汇率能换 10几美元吧… 没卵用, 但有总比没有好, 这也是天上白掉下来的财富.&nbsp;</p>
<p>BTC和BCC的关系即可以说是父子 也可以说是兄弟, 两种加密货币的技术架构都一样, 挖矿难度也类似, 但是BCC (Bitcoin Cash)现在普遍不被看好, 所以价钱和BTC差太多, 所以矿工更不想挖BCC (Bitcoin Cash), 是一种恶性循环 这并不有利于BCC的良性发展.</p>
<p>我呢, 这点小钱, 还是再等等.&nbsp;</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p><a href="https://justyy.com/archives/4993">Originally published</a> in Steemit. Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.</p>
<p>Steemit <a href="https://justyy.com/archives/4993">原创首发</a>. 非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作更多更好的内容.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>
<p>// 同步发表于我的<a href="https://justyy.com/archives/4993">中文博客</a>和<a href="https://helloacm.com/btc-hard-fork-via-c-program-linux-and-how-to-claim-bcc/">英文博客</a>。&nbsp;&nbsp;</p>
<ul>
  <li><a href="https://justyy.com/archives/4993">小白教程: 怎么领取 BCC (Bitcoin Cash) ?</a></li>
  <li><a href="https://helloacm.com/btc-hard-fork-via-c-program-linux-and-how-to-claim-bcc/">BTC Hard-Fork via C program (Linux) and How to Claim BCC?</a></li>
</ul>
<h2><strong>近期热贴 Recent Popular Posts</strong>&nbsp;</h2>
<ul>
  <li><a href="https://steemit.com/cn/@justyy/google-interview-question-print-message-google">Google Interview Question – Print Message - 去年 Google 的面试题 - 打印消息</a></li>
  <li><a href="https://steemit.com/cn/@justyy/quick-r-tutorial-how-to-plot-sigmoid-function-using-r-r-sigmoid">Quick R Tutorial – How to Plot Sigmoid Function using R? 如何用R语言画Sigmoid函数?</a></li>
  <li><a href="https://steemit.com/cn/@justyy/the-chess-ai-model-base-or-machine-learning">The Chess AI - Model Base or Machine Learning 浅谈棋类博弃的两种实现方式：模式化和机器学习&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/software-engineer-interview-tips-using-hashtable-to-reduce-runtime-complexity">Software Engineer Interview Tips - Using Hashtable to Reduce Runtime Complexity 软件工程师面试技巧之 使用哈希表降复杂度&nbsp;</a></li>
  <li><a href="https://steemit.com/cn/@justyy/i-wrote-a-chinese-chess-program-chinese-chess">I wrote a Chinese Chess Program 软件分享: 智慧中国象棋 (Chinese Chess)</a></li>
  <li><a href="https://steemit.com/photography/@justyy/one-day-visit-to-fen-drayton-lake-photography-fen-drayton">One Day Visit to Fen Drayton Lake (Photography) - 村庄附近的 Fen Drayton 湖</a></li>
  <li><a href="https://steemit.com/photography/@justyy/one-day-travel-photography-fen-drayton-lake-st-ives-fen-drayton-lake-st-ives">One Day Travel (Photography) Fen Drayton Lake + St Ives 英国 Fen Drayton Lake 坐公交到 St Ives 游玩</a></li>
  <li><a href="https://steemit.com/cn/@justyy/what-is-data-overfitting-in-machine-learning">What is Data Overfitting in Machine Learning? 机器学习中的过拟现象</a></li>
  <li>记录那些值得回忆的<a href="https://steemit.com/cn/@justyy/5hgpar">精彩瞬间</a> &nbsp;</li>
</ul>
</html>

- - -

This page is synchronized from the post: [How to Claim BCC? BTC Hard-Fork via C program (Linux) 小白教程: 怎么领取 BCC (Bitcoin Cash) ?](https://steemit.com/@justyy/how-to-claim-bcc-btc-hard-fork-via-c-program-linux-bcc-bitcoin-cash)
