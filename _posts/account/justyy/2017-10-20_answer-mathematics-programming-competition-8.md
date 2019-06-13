
---
title: '[Answer] Mathematics × Programming Competition #8 [答案] 數學 × 程式編寫比賽 (第八回)'
permlink: answer-mathematics-programming-competition-8
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-20 11:06:30
categories:
- contest
tags:
- contest
- steemstem
- math
- cn
- cn-contest
thumbnail: https://steemitimages.com/DQmWpcJ5e7JF5v6A5Hy5foztZDb9v5adASXcpzq5aiVS7bu/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


@kenchung 's [Contest](https://steemit.com/contest/@kenchung/question-mathematics-programming-competition-8) is fun, as always, thank you!

This  puzzle is simple to understand.

![](https://steemitimages.com/DQmWpcJ5e7JF5v6A5Hy5foztZDb9v5adASXcpzq5aiVS7bu/image.png)

If you flip this over 180 degree, you will get 

![](https://steemitimages.com/DQmSB7WsnM5hqmoNHar5kNe3NmhNS4XBxYeRD3SnLA8Fvh8/image.png)

So how many numbers do you need to represent from 0000 to 9999?

First, we need a function to tell if a digit can be flipped... if not, e.g. like 7, we need to return false.

```
function getRevDig(x) {
	switch (x) {
		case 0: return 0;
		case 1: return 1;
		case 2: return 2;
		case 5: return 5;
		case 6: return 9;
		case 8: return 8;
		case 9: return 6;
		default: return false;
	}
}
```

Now, given a four digit  number, we need to return its flipped version, to get each digit, you can use module operator and division.

```
function getRev(x) {
	var a = x % 10;
	a = getRevDig(a);
	if (a === false) return false;
	var b = Math.floor(x / 10) % 10;
	b = getRevDig(b);
	if (b === false) return false;
	var c = Math.floor(x / 100) % 10;
	c = getRevDig(c);
	if (c === false) return false;	
	var d = Math.floor(x / 1000);
	d = getRevDig(d);
	if (d === false) return false;	
	return (a * 1000 + b * 100 + c * 10 + d);
}
```

The rest is straightforward, just to check and mark the number and its rotated version in a [dictionary](https://helloacm.com/interview-question-what-is-the-difference-between-list-and-dictionary-in-python/)-like data structure (or array).

```

var total = 0;
var a = {};
for (var i = 0; i <= 9999; ++i) {
	if (!(i in a)) {
		total ++;
		a[i] = 1;
		var x = getRev(i);
		if (x !== false) {
			a[x] = 1;
		}
	}
}
console.log(total);
```

That should give you the correct answer.

![](https://steemitimages.com/DQmb33Qwu5vome8xQ2ZLcqFxZmFwV255hPGovzavXSUDtaX/math%26progLOGO-01-01.png)
*Designed by @nicolemoker*
----------------------------

@kenchung 的 [数学及编程比赛](https://steemit.com/contest/@kenchung/question-mathematics-programming-competition-8) 真好玩，可以练练脑，练练手，防止老年痴呆。

这次[比赛](https://justyy.com/archives/5381)不难，就是把一个4个数字的电子屏倒过来，

![](https://steemitimages.com/DQmWpcJ5e7JF5v6A5Hy5foztZDb9v5adASXcpzq5aiVS7bu/image.png)

就成这样：

![](https://steemitimages.com/DQmSB7WsnM5hqmoNHar5kNe3NmhNS4XBxYeRD3SnLA8Fvh8/image.png)

问题是我们需要多少块（每块倒着可以用）

首先，写一个函数，用于返回一个数字是否可以倒过来，像7这种倒过来没有意义的就可以返回FALSE区分。

```
function getRevDig(x) {
	switch (x) {
		case 0: return 0;
		case 1: return 1;
		case 2: return 2;
		case 5: return 5;
		case 6: return 9;
		case 8: return 8;
		case 9: return 6;
		default: return false;
	}
}
```

给定一个4位数，计算倒过来的数字，如果倒过来无意义，返回FALSE。

```
function getRev(x) {
	var a = x % 10;
	a = getRevDig(a);
	if (a === false) return false;
	var b = Math.floor(x / 10) % 10;
	b = getRevDig(b);
	if (b === false) return false;
	var c = Math.floor(x / 100) % 10;
	c = getRevDig(c);
	if (c === false) return false;	
	var d = Math.floor(x / 1000);
	d = getRevDig(d);
	if (d === false) return false;	
	return (a * 1000 + b * 100 + c * 10 + d);
}
```

然后就是从0到9999，每次检查是否已经出现了， 否则统计加1，然后把倒过来的数字也标记上了。

```

var total = 0;
var a = {};
for (var i = 0; i <= 9999; ++i) {
	if (!(i in a)) {
		total ++;
		a[i] = 1;
		var x = getRev(i);
		if (x !== false) {
			a[x] = 1;
		}
	}
}
console.log(total);
```

这样就能打印出正确的答案了，希望能获奖！


-------------------

> @justyy 是 https://justyy.com 的博主，在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率10%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
3. 今天(2017-10-20) [银行股东名单](https://steemit.com/cn/@justyy/daily-cn-updates-cn2017-10-20)
-------------------
- [Four Digit Calculator](https://helloacm.com/answer-mathematics-x-programming-competition-8-four-digit-calculator/)
- [数学 × 程式编写比赛 (第八回)](https://justyy.com/archives/5509)
- [SteemIt SP Delegation Tool 简易SP代理工具](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)
- **[Steemit 在线工具和API接口](https://helloacm.com/tools/steemit-tools/)**
- **[SteemIt Tools and APIs](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [[Answer] Mathematics × Programming Competition #8 [答案] 數學 × 程式編寫比賽 (第八回)](https://steemit.com/@justyy/answer-mathematics-programming-competition-8)
