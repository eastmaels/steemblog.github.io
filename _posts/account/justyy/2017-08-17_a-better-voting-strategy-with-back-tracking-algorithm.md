
---
title: 'A Better Voting Strategy with Back Tracking Algorithm - 通过回溯算法确定更好的点赞策略'
permlink: a-better-voting-strategy-with-back-tracking-algorithm
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-17 20:02:06
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- programming
- algorithm
thumbnail: https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


In [last post](https://steemit.com/cn/@justyy/the-best-upvoting-strategy-calculator-in-javascript), three voting strategies were presented. But we are not sure if there are better ones. Let's review this:

- vote all once you wake up
- vote all once before you go to bed
- vote and rest at a specific time interval

[上回说到点赞策略](https://steemit.com/cn/@justyy/the-best-upvoting-strategy-calculator-in-javascript)，但我们并不确定是否有更好的投票策略，或者说，已经有的几种方法已经是相当好的了。我们来回顾一下，

- 第一种方法：不管三七二十一，直接最开始一并点完。
- 第二种方法：在睡觉前点完（等SP能量恢复到最大值）。
- 第三种方法：每次点赞间隔等时间来点。

By using Javascript simulations, we happen to know that if the P is closer to 100%, we choose the 'vote and rest' strategy, otherwise, we can just vote all once right before the timespan ends.

我们通过Javascript程序模拟出收益情况发现：如果起始能量很接近格满，比如大于90%，那么选着第三种方式，否则选第二种。 那么我们这篇帖子需要看看能否搜索出最大收益的点赞方法。

This post, we use the [backtracking](https://helloacm.com/coding-exercise-n-queen-problem-c-bit-logics-shortest-and-fastest-solution-online-judge/) to search all possible strategy solutions. The search space is huge and that is why we make T and N smaller i.e. N=4 (4 hours) and T=4 (4 upvotes per day). M=270 which is 100% payout in unit of dollars.

由于点赞方式的搜索空间较大，所以我们缩小一下范围。我们假设：一天点4次（T=4），在N=4 小时内点完。M还是270美元（100%能量点赞的收益）

Let's create an array that contains the minutes offsets (from the start) for each votes.

我们先定义一个点赞方案的数组， 值表示为离时间段开始的分钟偏移：

```
var sol = Array();
for (var i = 0; i < T; ++ i) {
	sol[i] = 0;
}
```

For example,
比如 

```
sol = [1, 2, 3, 4, 5, 6, 7, 8];
```

The *sol* represents voting every minute from the minute 1. There are 8 votes. We initialize the sol array to zeros meaning voting all once at the begining (with zero minute offset)

表示为每隔1分钟点1次，一共点8次，上面的JS代码初始方案数组为0，也就是说统统在开始点完。

Let's also declare two variables, one stores the solutions and the other stores the maximum payout.

然后我们需要定义两个变量，一个是找到的最大方案数，另一个是最大收益值：初始化为：

```
var bestSol = sol.slice(0);
var bestScore = 0;
```

We need to print out the solutions once we find the best one.

找到较优值后我们需要打印方案：

```
function print(sol) {
	var s = "";
	for (var i = 0; i < T; ++ i) {
		s += sol[i] + ", ";
	}
	console.log(s);
}
```

We need a evaluation function that computes the payout given a solution. Every minute, the SP restores 0.005/36.

然后我们需要评估一种方案的收益情况，这时候按分钟来回能量 （每分钟回 0.005/36 能量）：

```
function eval(sol, P, M, T, N) {
    var sp_restored = 0.005 / 36;
    P = Math.min(1, P + sp_restored * (sol[0])); // Max = 100% 最大P为1 
    var x = 0;
    sol[T] = sol[T - 1]; //  Avoid out of range access for sol[i+1] 哨兵：防止 sol[i + 1] 越界
    for (var i = 0; i < T; ++ i) {
        x += P * M;  // Accumulate Payout 累记收益
        P -= 0.02;    // 2% loss 点一次耗2% 
        P += sp_restored * (sol[i + 1] - sol[i]); // SP restores before next vote 加上到下次点赞回血量
    }
    return x;   	
}
```

The best part is: the search algorithm. We enforce a 15-minute interval between intermediate votes unless the votes come to the end. The reason for doing this is that the search space is really huge and you can' t basically finish the search on standard PC. The backtracking can be seen as a search tree, where we start from the root, go as deep as we can, expand to the sibling nodes, and rewind to the parents.

然后最牛逼的来了，就是搜索。我们这里假设点赞间隔为15分钟（除非到达最后时间点），否则搜索空间很大，效率很低。回溯算法的精髓就是：一棵搜索树，能往下走往下走，走到最底再往树的兄弟结点扩展，扩展完退一步（回溯）到上一层，至到第一层节点访问完。


We don't have the cut-off techniques here, meaning that when we vote at time *t*, the next votes could happen at t, t+1, t+2 until the end of timespan. The branch factor for this search tree is 60N (assume that all votes are placed at the same time), the depth of the search tree is T, obviously.

由于这里没有剪枝的优化，也就是说，我在t分钟的时候点了第一次赞，我第二次赞可以在t, t+1, t+2至到时间结束再点第二次。点赞次数T越大，搜索树的深度就越大（搜索树的深度等于T），搜索树的宽度为 N\*60，因为如果每次点赞都是一个时间点，而这个时间点按分钟来划分的话一共有N\*60种情况。

The search space is around (60N)^T  and we certainly do not have time to [bruteforce](https://helloacm.com/how-to-solve-math-puzzle-using-powershell-script-with-bruteforce-algorithm/) all possible solutions. With backtracking, the runtime complexity can be seen as C_(60N)^T i.e. the total number of different solutions to pick T from 60N. 

这样的话，[穷举搜索](https://justyy.com/archives/1626)时间复杂度就是 (N*60)^T 当 N和T都很大的时候穷举无法快速的计算得到结果。而回溯的搜索空间为：C_(N\*60)^T   理解为从 60N中取出T个的组合。

The JS code for the backtracking search is:
回溯算法如下：

```
function search(sol, left, n, T, right) {
	if (n == T) { // when we reach the tree leaves 到达搜索树的叶子处
		var score = eval(sol, P, M, T, N);  // need to evaluate this solution 评估结点
		if (score > bestScore) {  // found a better solution? 记录更优解
	            bestScore = score;
	            bestSol = sol.slice(0);
	        }
	        return; 
	}
	for (var i = left; i <= right; ++ i) {
		sol[n] = i;  // The n-th vote is placed at time i 第 n 次点赞在时间为 i 处
		search(sol, Math.min(right, i + 15), n + 1, T, right); // try next vote 尝试下一次点赞
	}
}
```

Windows + [sublimit text3](https://steakovercooked.com/Life.Record/text/article/2016/11/sublime-text-3-registration-license-key.txt) + [Node.js](https://helloacm.com/node-js-tutorial-4-reading-file-in-node-js/), we run and get these numbers:
用Node.Js+[sublime text3](https://steakovercooked.com/ch/Life.Record/text/article/2016/11/sublime-text-3-registration-license-key.txt) 跑跑 来看看结果:

When P=0.99
当P=0.99的时候：

```
calcPayout0 =  1036.8
calcPayout1 =  1047.6
calcPayout2 =  1054.8
calcPayout3 =  1066.5
72, 240, 240, 240, 
```

The first vote should happen at minute 72 where the rest 3 should be at the end, which has earned 12 SBD more.
能量满的时候 第一次在第72分钟的时候点，剩下3次再最后的时间点，能比第三种方案多挣12美元！

When P=0.8 (80%)
当P=0.8的时候：

```
calcPayout0 =  831.5999999999999
calcPayout1 =  867.5999999999999
calcPayout2 =  849.5999999999999
calcPayout3 =  867.5999999999999
240, 240, 240, 240
```

Use all votes at the end is clearly the optimal.
能量不高的时候，最优的方案就是在最后面的时间一块点完。

When P=1 (100%)
当P=1 全满的时候：

```
calcPayout0 =  1047.6
calcPayout1 =  1047.6
calcPayout2 =  1065.6
calcPayout3 =  1074.6000000000001
0, 240, 240, 240, 
```
Use only 1 vote at the begining and the rest at the end.. This problem is NP-hard, where you just have to know that it is VERY HARD problem, in [WIKI](https://en.wikipedia.org/wiki/NP-hardness), it describes as follows:

>NP-hardness (non-deterministic polynomial-time hardness), in computational complexity theory, is the defining property of a class of problems that are, informally, "at least as hard as the hardest problems in NP". More precisely, a problem H is NP-hard when every problem L in NP can be reduced in polynomial time to H, that is: assuming a solution for H takes 1 unit time, we can use H‎'s solution to solve L in polynomial time.[1][2] As a consequence, finding a polynomial algorithm to solve any NP-hard problem would give polynomial algorithms for all the problems in NP, which is unlikely as many of them are considered hard.[3]

起床的时候点一次，剩下3次在睡觉前点。这种问题在计算机领域称为 NP-hard, 也就是目前除了[暴力搜索](https://justyy.com/archives/5001)+剪枝+回溯 等优化技巧并没有太有效的[算法](https://justyy.com/archives/5043)。在[WIKi](https://zh.wikipedia.org/wiki/NP%E5%9B%B0%E9%9A%BE)里这样描述NP-困难：

>NP困难（NP-hard,non-deterministic polynomial-time hard）问题是计算复杂性理论中最重要的复杂性类之一。某个问题>被称作NP困难，当所有NP问题可以在多项式时间图灵归约到这个问题。
>因为NP困难问题未必可以在多项式的时间内验证一个解的正确性（即不一定是NP问题），因此即使NP完全问题有多项>式时间内的解（若P=NP），NP困难问题依然可能没有多项式时间内的解。因此NP困难问题“至少与NPC问题一样难”。

OK, so the preliminary conclusion is: when P is closer to 100%, you might want to try place your first vote at the begining, and the rest right at the end. However, there might be better solutions, i.e. we enforce a 15-minute voting interval here. 

好吧：这篇文章的初步结论就是：当起始能量很靠近满格的时候，不妨可以试着在最开始点第一次， 剩下的在时间最后面点完。至于这是不是最优解，很难说。因为，别忘记了，我们这里外加了一个中间点赞时间间隔15分钟的限制。

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

 // 稍后同步到我的[中文博客](https://justyy.com)和英文[算法](https://helloacm.com)[博客](https://codingforspeed.com)。
- [A Better SteemIt Voting Strategy with Back Tracking Algorithm](https://helloacm.com/a-better-steemit-voting-strategy-with-back-tracking-algorithm/)
- [SteemIt 通过回溯算法确定更好的点赞策略](https://justyy.com/archives/5085)

# 近期热贴 Recent Popular Posts 
- [Code Review - Reinventing the Wheel 代码审核之 重新造轮子](https://steemit.com/cn/@justyy/code-review-reinventing-the-wheel)
- [Simple Method to Insert Math Equations in SteemIt MarkDown Editor 如何在 SteemIt MarkDown Editor 里添加数学公式？](https://steemit.com/cn/@justyy/simple-method-to-insert-math-equations-in-steemit-markdown-editor-steemit-markdown-editor)
- [中年大叔还有梦可以做么？](https://steemit.com/cn/@justyy/7d7hyi)
- [The Best Upvoting Strategy Calculator in Javascript - 怎么样点赞收益最高? （新老用户都来看看）](https://steemit.com/cn/@justyy/the-best-upvoting-strategy-calculator-in-javascript)
- [How to Use Steem API/transfer-history and IFTTT to sync to Slack? 如何使用Steem API/transfer-history和IFTTT同步到Slack消息? ](https://steemit.com/cn/@justyy/steem-api-transfer-history-ifttt-slack-how-to-use-steem-api-transfer-history-and-ifttt-to-sync-to-slack)
- [SteemIt API/transfer-history 最简单获取帐号钱包记录的API](https://steemit.com/cn/@justyy/steemit-api-transfer-history-api)
- [第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！](https://steemit.com/cn/@justyy/200steem-1-sp)
- [API steemit/account 简单封装了一下 steemit/account 的 API](https://steemit.com/cn/@justyy/api-steemit-account-steemit-account-api)
- [Code Review Series - Value Not Used [坑爹的代码] - 变量未使用](https://steemit.com/cn/@justyy/code-review-series-value-not-used)

https://justyy.com/gif/steemit.gif

- - -

This page is synchronized from the post: [A Better Voting Strategy with Back Tracking Algorithm - 通过回溯算法确定更好的点赞策略](https://steemit.com/@justyy/a-better-voting-strategy-with-back-tracking-algorithm)
