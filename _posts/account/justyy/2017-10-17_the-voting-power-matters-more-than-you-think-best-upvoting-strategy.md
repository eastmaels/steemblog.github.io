
---
title: 'Voting Power Matters? 能量需要恢复满么？'
permlink: the-voting-power-matters-more-than-you-think-best-upvoting-strategy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-17 22:23:27
categories:
- cn
tags:
- cn
- steemstem
- steem
- programming
- cn-programming
thumbnail: https://cdn.pixabay.com/photo/2015/04/03/18/57/electricity-705670_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.pixabay.com/photo/2015/04/03/18/57/electricity-705670_960_720.jpg)
*Image Credit: Pixabay.com*

We all know that each 100% vote costs your 2% voting power, and every 24 hours, your voting power restores 20%. This means that you can vote 10 times at 100% one day and the voting power will remain the same the next day.

The question comes:  Given a 30 days period, and approximately 60% voting power at the day 1,  is there a much bigger gain to restore your voting power to 100% (wait 2 days) ?

I always thought there is not much difference in terms of total curation earnings until today.. I wrote a [VBScript](https://isvbscriptdead.com/) that reveals the truth.

The first strategy, just vote 10 times 100% per day every day in the 30 days' period. Assume 10K SP 100% gives 1 SBD. And suppose the 10 votes are done in a row (the VP restored during upvotes can be ignored)
```
Function Strategy1(ByVal sp, ByVal vp, ByVal days)
	income = 0
	While days > 0
		For i = 1 To 10
			income = income + sp * vp / 10000
			vp = vp - 0.02
		Next	
		vp = vp + 0.2
		days = days - 1
	Wend 
	Strategy1 = income
End Function 
```

The second strategy, let's wait a few days before the VP is restored, adding a parameter `rest` in the unit of days.

```
Function Strategy2(ByVal sp, ByVal vp, ByVal days, ByVal rest)
	days = days - rest
	vp = vp + 0.2 * rest  ' 1 day restores 20%
	If vp > 1 Then
		vp = 1  ' voting power can only be maximum 100%
	End If 
	income = 0
	
	While days > 0
		For i = 1 To 10
			income = income + sp * vp / 10000
			vp = vp - 0.02
		Next	
		vp = vp + 0.2
		days = days - 1
	Wend 
	Strategy2 = income
End Function
```

In my case, I have 10K SP so let's assume these values:

```
steempower = 10000
votingpower = 0.6
daysofcuration = 30
restoredays = 2
```

So the simulation gives:

```
WScript.Echo ("Strategy 1 Max Income = " & Strategy1(steempower, votingpower, daysofcuration))
WScript.Echo ("Strategy 2 Max Income = " & Strategy2(steempower, votingpower, daysofcuration, restoredays))


Strategy 1 Max Income = 152.999999999999
Strategy 2 Max Income = 254.799999999999
```

This is a BIGGGGGGGGG difference!  The lower voting power, longer periods, the bigger difference! So.... you might consider letting your [upvoting robot](https://helloacm.com/how-am-i-doing-with-steemit-curation-bot/) take a few days' rest...

**Correction**  @tumutanzi told me my understanding was not exactly right. The 2% loss is to the current VP, so instead of `vp = vp - 0.02`  the correct version is `vp = vp * 0.98`.

So the correct version to emulate [steemit](https://helloacm.com/r-tutorial-how-rich-is-steemit-wechat-group/) curator is  (you can vote 11 times per day)

```
Function Strategy1(ByVal sp, ByVal vp, ByVal days)
	income = 0
	While days > 0
		For i = 1 To 11
			income = income + sp * vp / 10000
			vp = vp * 0.98
		Next	
		vp = vp + 0.2
		If (vp > 1) Then
			vp = 1
		End If 
		days = days - 1
	Wend 
	Strategy1 = income
End Function 

Function Strategy2(ByVal sp, ByVal vp, ByVal days, ByVal rest)
	days = days - rest
	vp = vp + 0.2 * rest
	If vp > 1 Then
		vp = 1
	End If 
	income = 0
	
	While days > 0
		For i = 1 To 11
			income = income + sp * vp / 10000
			vp = vp * 0.98
		Next	
		vp = vp + 0.2
		If (vp > 1) Then
			vp = 1
		End If 		
		days = days - 1
	Wend 
	Strategy2 = income
End Function
```

And this gives totally different results, 

```
steempower = 10000
votingpower = 0.6
daysofcuration = 30
restoredays = 2

WScript.Echo ("Strategy 1 Max Income = " & Strategy1(steempower, votingpower, daysofcuration))
WScript.Echo ("Strategy 2 Max Income = " & Strategy2(steempower, votingpower, daysofcuration, restoredays))
```

It indicates there is NOT much difference at all!

```
Strategy 1 Max Income = 279.67590316366
Strategy 2 Max Income = 278.976108950286
```

![](https://cdn.pixabay.com/photo/2014/08/30/23/53/humpback-whale-431902_960_720.jpg)
*Image Credit: Pixabay.com*
------------------------------------------------------------------------


虽然说小鱼的[点赞](https://justyy.com/archives/5433)策略就是喜欢的点，因为SP少点赞收益没有多少区别，但是现在 @justyy 已经有超过1万的SP 了，所以今天想了一下这么一个问题。

我们都知道，一次100%点赞消耗能量 2%，一天恢复20%的能量相当于一天中你可以点满10次。那么问题就是，假设30天时间内，你一天点10次，最大收益是多少？

为了简化分析模型，我们假设1万SP能量全满点赞收益是1 SBD，那么如果初始能量只有60%，我们是不是需要等恢复了90%甚至是全满后再点这样效果会好一点呢？

我本来以为没啥区别，直到今天晚上无聊随便写了段[VBScript](https://isvbscriptdead.com/)代码来分析，结果让我很吃惊。

第一种策略，从第一天就开始点满10次，假设这10次都是一下子点完，两次点赞间的能量恢复可以忽略不计，那么我们可以用以下代码来模拟：
```
Function Strategy1(ByVal sp, ByVal vp, ByVal days)
	income = 0
	While days > 0
		For i = 1 To 10
			income = income + sp * vp / 10000
			vp = vp - 0.02
		Next	
		vp = vp + 0.2
		days = days - 1
	Wend 
	Strategy1 = income
End Function 
```

第二种策略，多加了一个参数，先休息几天，恢复恢复能量，然后再点。

```
Function Strategy2(ByVal sp, ByVal vp, ByVal days, ByVal rest)
	days = days - rest
	vp = vp + 0.2 * rest  ' 每天恢复20%
	If vp > 1 Then
		vp = 1  ' 能量最多恢复到100%
	End If 
	income = 0
	
	While days > 0
		For i = 1 To 10
			income = income + sp * vp / 10000
			vp = vp - 0.02
		Next	
		vp = vp + 0.2
		days = days - 1
	Wend 
	Strategy2 = income
End Function
```

我有1万SP，那么假定这些值。

```
steempower = 10000
votingpower = 0.6
daysofcuration = 30
restoredays = 2
```

跑一下程序看看结果：

```
WScript.Echo ("Strategy 1 Max Income = " & Strategy1(steempower, votingpower, daysofcuration))
WScript.Echo ("Strategy 2 Max Income = " & Strategy2(steempower, votingpower, daysofcuration, restoredays))


Strategy 1 Max Income = 152.999999999999
Strategy 2 Max Income = 254.799999999999
```

太意外了，你的VP越低，统计时间越长，效果差别就越大，OMG，还是先让[机器人](https://justyy.com/archives/5260)缓几天吧，至少[点赞](https://justyy.com/archives/5493)比率先降一降，等恢复了差不多了这样每天保持10次点赞 点完能量保持在80%左右，这样是最优的。

**错啦错啦**  @tumutanzi 告诉我，我的理解有问题， 2%的损失不是 `vp = vp - 0.02` 而是针对当前VP能量，所以应该是`vp = vp * 0.98`.

程序更正一下，每天可以点11次，点10次能量满的话就会浪费：

```
Function Strategy1(ByVal sp, ByVal vp, ByVal days)
	income = 0
	While days > 0
		For i = 1 To 11
			income = income + sp * vp / 10000
			vp = vp * 0.98
		Next	
		vp = vp + 0.2
		If (vp > 1) Then
			vp = 1
		End If 
		days = days - 1
	Wend 
	Strategy1 = income
End Function 

Function Strategy2(ByVal sp, ByVal vp, ByVal days, ByVal rest)
	days = days - rest
	vp = vp + 0.2 * rest
	If vp > 1 Then
		vp = 1
	End If 
	income = 0
	
	While days > 0
		For i = 1 To 11
			income = income + sp * vp / 10000
			vp = vp * 0.98
		Next	
		vp = vp + 0.2
		If (vp > 1) Then
			vp = 1
		End If 		
		days = days - 1
	Wend 
	Strategy2 = income
End Function
```

假定以下值：

```
steempower = 10000
votingpower = 0.6
daysofcuration = 30
restoredays = 2

WScript.Echo ("Strategy 1 Max Income = " & Strategy1(steempower, votingpower, daysofcuration))
WScript.Echo ("Strategy 2 Max Income = " & Strategy2(steempower, votingpower, daysofcuration, restoredays))
```

这结果显示，没啥区别，不得不说，这系统设计的真巧妙。是我没弄清楚，丢人了（捂脸）

```
Strategy 1 Max Income = 279.67590316366
Strategy 2 Max Income = 278.976108950286
```

-------------------

> @justyy 是 https://justyy.com 的博主，在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率14.6%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)

> [最佳点赞策略](https://justyy.com/archives/5495)
> [Steemit Upvoting Strategy](https://helloacm.com/best-upvoting-strategy-steemit-voting-power-matters/)
-------------------
> [SteemIt SP Delegation Tool 简易SP代理工具](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)
> [Steemit 在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tools and APIs](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [Voting Power Matters? 能量需要恢复满么？](https://steemit.com/@justyy/the-voting-power-matters-more-than-you-think-best-upvoting-strategy)
