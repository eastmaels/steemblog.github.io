
---
title: 'The Best Upvoting Strategy Calculator in Javascript - 怎么样点赞收益最高? （新老用户都来看看）'
permlink: the-best-upvoting-strategy-calculator-in-javascript
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-15 20:41:39
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- steemit
- math
thumbnail: https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


In [my previous post]((https://steemit.com/cn/@justyy/200steem-1-sp)), a question was raised:  How to upvote in order to maximize the payout per day?

之前说到  [第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！](https://steemit.com/cn/@justyy/200steem-1-sp) 那么就扯到了怎么样点赞收益最高的问题。

Things could get very complicated, so we make some assumptions:

由于实际情况复杂（比如每个人睡眠时间不同，碎片时间段不一样），所以我们来做一个大胆但合理有效的假设：

We assume that you start with a P (Voting Power, with P=1 equals 100% voting power), and we know that 100% vote costs around 2% voting power. Each 36 minutes, you get 0.5% voting power restored.

假设我们用 P 来表示每个人每天固定时间段起始的 能量，满血就是100%。我们已经知道，每100%点一次需要耗掉2%血量。并且每36分钟回0.5%的血量。

And we know that the 100% voting power generates M dollar payout. If you only upvote T times and that happens only in a specific N-hours timespan e.g. from 10:00AM to 10:00PM (after that, you go to sleep).

并且已经每次100%点的收益是M美元，如果每个人计划这一天点T次赞，并且只有在一个N小时的时间段内可以点赞（比如醒着的时候）。

The straightforward voting strategy will be to use all T upvotes at the beginning of the timespan.

这时候，我们可以来看一种点赞方式：

The payout equation will be: 

在这个固定的时间段就把这T次全点完，那么这样的收益为：

```
Sum P*M*(1-0.02*(i-1)) for i=1..T
```

For example, when T=2, upvoting twice immediately after start will be:
比如T=2的时候，在最开始就点完两次赞的收益为：

```
P*M + P*M*(1-0.02)
```

Translated into Javascript, the code explains the idea:
这样翻译成Javascript代码就是:

```
// P - Current Voting Power e.g. 100%
// M - Payout at 100%  unit $
// T - Number of Upvotes
// N - Number of Hours (Interval)
function calcPayout0(P, M, T, N) {
	var x = 0;
	for (var i = T; i > 0; -- i) {
		x += P * M;
		P -= 0.02; // 2% voting power decrease 能量最多为100%
	}
	return x;
}
```

However, if the starting power is not 100%, it is always wait till the end of the timespan, when we have bigger voting power. With a line added, we have a better version:
但我们这么一样，如果我们在最开始的时候能量P不为100%，我们可以完全等到时间段结束的时候恢复投票能量了再一起点，那么这样的话，上面的代码稍微改一下，加一行，就得到了第二个版本：

```
// P - Current Voting Power e.g. 100%
// M - Payout at 100%  unit $
// T - Number of Upvotes
// N - Number of Hours (Interval)
function calcPayout1(P, M, T, N) {
	var x = 0;
	P = Math.min(1, P + 0.005 / 0.6 * N); // Maximum 100% voting power, 能量最多为100% 
	for (var i = T; i > 0; -- i) {
		x += P * M;
		P -= 0.02;  // 2% voting power decrease  每次100%点损失2%能量
	}
	return x;
}
```

Every 36 minutes we got 0.5% voting power back, that is we restore 0.005/0.6 each hour. Another strategy is to divide the N hour time span into T-1 slots, so with the energy restores at each slots, the equation becomes:
每36分钟恢复0.5% 也就是说每小时恢复 0.005/0.6。嗯，有点意思，还有没有其它点赞方法？有的，我们可以把这N小时时间平均分成T - 1次来点，这样的话，我们需要加上每段时间能量的恢复，公式为：

```
Sum P*M*(1-0.02*(i-1)+R) for i=1..T
```

R is the energy restored per N/(T-1), using JS explains better.
其中R为每段N/(T-1)时间内恢复的能量，我们用JS代码来解释清楚一些：

```
// P - Current Voting Power e.g. 100%
// M - Payout at 100%  unit $
// T - Number of Upvotes
// N - Number of Hours (Interval)
function calcPayout2(P, M, T, N) {
	var x = 0;	
	var sp_restored = 0;	
	if (T == 1) {
		P = Math.min(1, P + 0.005 / 0.6 * N);	
	} else {
		var sp_restored = 0.005 / 0.6 * (N / (T - 1));
	}
	for (var i = T; i > 0; -- i) {
		x += P * M;
		P -= 0.02;  // 2% loss per 100% upvote 每次100%点损失2%能量
		P += sp_restored; // each 36 minutes restore 0.5% 能量每36分钟回复0.5%
	}
	return x;	
}
```

The equation can be uniformed by extracting M which is like a constant. We use M=270 because @abit gives roughly 270$ per 100% upvote. A bigger M will make the result analysis clear.
我们注意到，M可以被单一化提取出去（不影响大小判断），不过为了让结果更清楚，我们选择M=270美元（据说 @abit 100%点赞是270美元）

# 我们来比较几组值 STEEMIT UPVOTING STRATEGY DATA ANALYSIS
Disclaimer: I am not responsible for your payout.. These are just for your references (and may contain error)
以下数据(很有可能有错误)仅供参考！本人不对您的收益负责。

## When you only upvote once 当你只每天只点1次赞的时候 
```
var T = 1;
var N = 10;
```

You can upvote when you wake up, or when the VP restores - vote before you go to bed. If P=0.9, the three methods generate payouts of:
这时候，可以在开始点，可以在最后能量恢复了的时候点，很显然，如果起始能量P=0.9，那么三种方式的结果为：

```
calcPayout0=243
calcPayout1=265.5
calcPayout2=265.5
```

The Voting Power cannot restore to 100% in 10 hour span, that is why the maximal payout is 265.5 instead of 270. Clearly, voting when you have a higher voting power is the best choice.
因为能量在10个小时内恢复不到100%，所以最大收益为265.5 元（100%的情况下是270美元），显然，等能量恢复大了收益高一些。

However, if the starting power is 100%, it does not make any difference, they all give $270 payout.
但如果起始能量就是100%了，这样的情况下是没有区别的，三种方案都是270美元。

## When you upvote 8 times per day 当你每天点8次赞
Starting Voting Power P=100%, T=8, N=10, The third strategy is better (vote and rest)
起始能量P=100%，T=8，N=10。第三种点一次等恢复一点能量再点这种明显收益就更高：

```
calcPayout0=2008.8
calcPayout1=2008.8
calcPayout2=2098.8
```

However, when the P is 80% at the begining of timespan:
但是如果是这组值：起始能量是80%

```
var P = 0.8;
var M = 270;
var T = 8;
var N = 10;
```

The second method gives a higher payout. That is,  you use your 8 upvotes immediately before you go to bed when you have already restored to a higher VP for the day.
这样的结果反而是第二种方式好，也就是说等到能量恢复到最大的时候一起点（比如你一天早上都不点，等到晚上你睡觉前再一下子全部点完8次）：

```
calcPayout0=1576.8
calcPayout1=1756.8
calcPayout2=1666.8
```

When the P is closest to 100%, the third strategy (vote and rest) is better than the second one.
只有在初始能量接近100%的情况下，第三种方式才有会高于第二种：

```
var P = 0.99;
var M = 270;
var T = 8;
var N = 10;
```

Does this result surprise you?
结果有没有很让人很意外？

```
calcPayout0=1987.2
calcPayout1=2008.8
calcPayout2=2077.2
```

There are, of course, other voting strategies, for example, you can use half your votes in the morning and the rest in the evening. But I guess the results are pretty much similar (the analysis could go further).  My suggestions according to the fact that most Steemians won't have a higher P at the beginning of each day: 
当然还有其它种策略：比如最开始时间段先点1半，最后睡觉前再点完剩下的1半。你也可以写相应的程序来验证一下。但是不管如何，大部分人的每天起始能量不为100%，或者像我经常点赞点到少于70%，这种情况下，也就是第二种方式会好一些：

** Use your votes right before you go to bed! **
**就是睡觉前统统点完你的指标！**

Most of use won't care so much because our M is small compared to big whales.. For example, my M = 1.7.
当然，请记住，上面的计算是基于270美元单次点击得到的结果，如果像我现在M=1.7的情况：得到的结果很接近：

```
calcPayout0=12.512
calcPayout1=12.648
calcPayout2=13.0786666666667
```

The results are very close:  So, don't spend too much time considering your best voting strategy.  You should spend more time in your posts on [SteemIt](https://helloacm.com/how-to-get-transfer-history-of-steemit-accounts-via-steemit-apitransfer-history/)!
所以，我想大部分人都不需要操这个心，因为小鲸鱼们点一次才多少钱，各种点赞策略其实不会差太多，倒不如花时间在如何提高文章的质量上。

我们都不需要操这种心，除非像 @abit @oflyhigh @tumutanzi 这样的大鱼。

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

 // 稍候同步到我的[中文博客](https://justyy.com)和[英文博客](https://codingforspeed.com)。
- [SteemIt 怎么样点赞收益最高? ](https://justyy.com/archives/5077)
- [The Best SteemIt UpVoting Strategy Calculator in Javascript](https://helloacm.com/the-best-steemit-upvoting-strategy-calculator-in-javascript/)

# 近期热贴 Recent Popular Posts 
- [中年大叔还有梦可以做么？](https://steemit.com/cn/@justyy/7d7hyi)
- [How to Use Steem API/transfer-history and IFTTT to sync to Slack? 如何使用Steem API/transfer-history和IFTTT同步到Slack消息? ](https://steemit.com/cn/@justyy/steem-api-transfer-history-ifttt-slack-how-to-use-steem-api-transfer-history-and-ifttt-to-sync-to-slack)
- [SteemIt API/transfer-history 最简单获取帐号钱包记录的API](https://steemit.com/cn/@justyy/steemit-api-transfer-history-api)
- [第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！](https://steemit.com/cn/@justyy/200steem-1-sp)
- [API steemit/account 简单封装了一下 steemit/account 的 API](https://steemit.com/cn/@justyy/api-steemit-account-steemit-account-api)
- [Code Review Series - Value Not Used [坑爹的代码] - 变量未使用](https://steemit.com/cn/@justyy/code-review-series-value-not-used)
- [The K Nearest Neighbor Algorithm (Prediction) Demonstration by MySQL 机器学习 用 MySQL 来演示 KNN算法 ](https://steemit.com/cn/@justyy/mysql-knn-the-k-nearest-neighbor-algorithm-prediction-demonstration-by-mysql)

https://justyy.com/gif/steemit.gif

- - -

This page is synchronized from the post: [The Best Upvoting Strategy Calculator in Javascript - 怎么样点赞收益最高? （新老用户都来看看）](https://steemit.com/@justyy/the-best-upvoting-strategy-calculator-in-javascript)
