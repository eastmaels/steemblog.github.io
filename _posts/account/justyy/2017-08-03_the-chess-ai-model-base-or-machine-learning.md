
---
title: 'The Chess AI - Model Base or Machine Learning 浅谈棋类博弃的两种实现方式：模式化和机器学习'
permlink: the-chess-ai-model-base-or-machine-learning
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-03 23:40:48
categories:
- cn
tags:
- cn
- cn-programming
- chinese-chess
- artificial-intelligence
- software
thumbnail: http://cdncontribute.geeksforgeeks.org/wp-content/uploads/GeeksForGeeks-Alpha-Beta-Pruning-4.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>In my previous post:&nbsp;</p>
<p><a href="https://steemit.com/cn/@justyy/i-wrote-a-chinese-chess-program-chinese-chess">I wrote a Chinese Chess Program &nbsp;</a></p>
<p>I talked about <a href="https://steakovercooked.com/Application/delphi.chess">a chess AI program</a> I made 12 years ago, some ask me the algorithms that I use to implement this program.&nbsp;</p>
<p>IMHO, there are two ways to implement the <a href="https://justyy.com/archives/2237">chess AI</a>: &nbsp;the model based and the machine learning based.</p>
<h2>Model Based</h2>
<p>In chess playing, there are normally two players, each take turns to play. And each player knows exactly everything on the chess (full information disclosed). On turns, one player tries to maximize the score (according to the chess evaluation function) and the other tries to minimize the score.</p>
<p><img src="http://cdncontribute.geeksforgeeks.org/wp-content/uploads/GeeksForGeeks-Alpha-Beta-Pruning-4.png"/></p>
<p><a href="http://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-4-alpha-beta-pruning/">Image Credit</a>&nbsp;</p>
<p>This can be virtually visualized as the min-max tree. However, suppose the average move for Chinese chess is 10, then the branch of the search tree is 10, the complexity will be O(10^N) if the tree depth is N.</p>
<p>We will definitely need to improve the computational efficiency. Luckily, we can do this via the well-known Alpha-beta pruning, which cuts of quite many sub-trees at early stages (when the depth is small) in advance so we don't need to explore them.</p>
<p>There are other methods which are based on the human chess gaming experience, e.g. some patterns, that may aid cutting the search branches.</p>
<p>A typical model-base Chess program consists of: &nbsp;chess evaluation module that gives how good the current state regarding to one player, &nbsp;the search move generators, and the search tree algorithm.</p>
<h2>Machine Learning</h2>
<p>Machine learning is a hot topic thanks to more and more powerful CPUs and cheaper and cheaper hard disks (storage). &nbsp;With more storage, we can store millions even trillions of games (previous human experiences), with more powerful CPUs, we can employ machine learning (e.g. pattern recognizing, KNN algorithms) to predict the next 'optimal' moves so that the winning probability is higher.</p>
<p><br></p>
<p>在之前发的贴：</p>
<p><a href="https://steemit.com/cn/@justyy/i-wrote-a-chinese-chess-program-chinese-chess">I wrote a Chinese Chess Program 软件分享: 智慧中国象棋 (Chinese Chess)&nbsp;</a></p>
<p>有朋友就问我，你这到底是怎么实现的呀？</p>
<p>在我看来，有两种算法来实现棋类博弃（中国象棋，国际象棋，五子棋等等）。这些棋类博弃的游戏一般有以下特点：</p>
<ol>
  <li>两人轮流玩</li>
  <li>棋盘上的信息都是公开的</li>
  <li>棋手的目标是相反的，一个取最大，另一个取最小。 比如象棋中对棋盘的估值无穷大为对黑方执子有利（黑方胜）而无穷小则为对红方有利（红方胜）。</li>
</ol>
<h2>模式化</h2>
<p>第一种实现方式（就是我12年前的实现方式），也是最为传统的实现方式，就是搜索+剪枝。搜索是在搜索树上（最大最小数 min-max tree)，树的根节点是棋盘的初始状态，然后比如红方走一步（目标取最小），搜索树就往下走一层，然后轮到黑方走（目标取最大），以此类推。</p>
<p>中国象棋的分支很多（每一轮棋子的走法开盘有十几种），这么一算来，这棵树就很庞大，暴力搜索完肯定是不行的。这时候通过剪枝就能大大减少计算量。最有名的剪枝就是 Alpha beta pruning. 通过 alpha beta 剪枝往往能提前抛弃一棵庞大的子树枝，因为根据推理不用算也可以知道即使算出来结果也没有相邻节点的已经计算出来的值好，所以可以果断抛弃。</p>
<p>当然存的 Alpha beta 剪枝还需要进一步通过其它技巧来加速。比如缓存历史上已经计算过的节点的值，还有通过加入一些人为的经验（比如马后炮或者其它一些经典棋局）可以进一步进行剪枝。</p>
<p>一个棋类游戏主要的几个模块：棋子走法生成器, 棋盘估值(比如车比马值钱,残局中马比炮值钱),还有就是搜索剪枝. 大家要是感兴趣可以到我的帖子中下载 程序哈。</p>
<p><a href="https://steemit.com/cn/@justyy/i-wrote-a-chinese-chess-program-chinese-chess">I wrote a Chinese Chess Program 软件分享: 智慧中国象棋 (Chinese Chess)&nbsp;</a></p>
<h2>机器学习</h2>
<p>最近几年大数据很火，主要是因为计算机越来越快越强大，硬盘越来越不值钱，可以存的数据量是海量了。这时候通过大数据分析行为模式来预测下一步走法 就比较流行了，比如GOOGLE的那个 DeepMind (英国伦敦) 就是通过机器学习，学习了上万盘棋局得出一些行为模式。这种潜力是无限的：因为机器可以日夜不停的快速学习前人的经典棋局，从而规避胜率较低的走法。</p>
<p>一般来说，谈<a href="https://justyy.com/archives/2887">机器学习</a> (Machine Learning), 的基础就是大数据，没有大数据的支持，再牛B的机器学习算法也是个空架子。</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p><a href="https://helloacm.com/the-chess-ai-model-base-or-machine-learning/">Originally Published</a> in Steemit. Thank you for reading my post, feel free to FOLLOW and Upvote @justyy which motivates me to create more quality posts.</p>
<p><a href="https://justyy.com/archives/4990">原创首发</a> SteemIt, 非常感谢阅读, 欢迎FOLLOW和Upvote @justyy 能激励我创作<a href="https://justyy.com/archives/2237">更多更好的内容</a>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p><strong>未完待续。。。。 To be continued...</strong></p>
</html>

- - -

This page is synchronized from the post: [The Chess AI - Model Base or Machine Learning 浅谈棋类博弃的两种实现方式：模式化和机器学习](https://steemit.com/@justyy/the-chess-ai-model-base-or-machine-learning)
