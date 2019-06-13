
---
title: 'Bruteforce Solution to Mathematics × Programming Competition #5 暴力搜索[問題] 數學 × 程式編寫比賽 (第五回)'
permlink: bruteforce-solution-to-mathematics-programming-competition-5
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-02 23:26:33
categories:
- cn
tags:
- cn
- cn-programming
- programming
- steemstem
thumbnail: https://steemitimages.com/DQmRe7bYkd3BK5TZKHmqkKvn9cPMN4siVm5d8waYgAdmkrX/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


@kenchung 第五次比赛 #steemstem, 题目主要是A到P  16个字母填到4X4的格子中，1-16只能各用一次，并且有12个条件。
Quesiton: https://steemit.com/contest/@kenchung/question-mathematics-programming-competition-5

![](https://steemitimages.com/DQmRe7bYkd3BK5TZKHmqkKvn9cPMN4siVm5d8waYgAdmkrX/image.png)

Solution:
16 integers, but the total combination is huge  i.e. 16! (A has 16 possibilities, B has 15 possibilities and so on).

如果不算条件限制，一共有16！种方案，比如第一格可以填1-16，第二格可以有15种可能，第三格14种 以此类推....

The good thing is that we have a few of restrictions such as A can only be 2, 4, 6 or 8 and etc. Therefore, we can loop just few variables and base on pre-known conditions to get the values of others.

还好有些条件限制，我们可以穷举未知变量，然后通过已知的条件来推算出其它的变量。

The following JS code is ugly, which implements the bruteforce search, however it works..  Let me think of better ways to write it and I'd share with you in a few days time.

下面的JS代码比较丑，我并不是很喜欢，但它却可以很有效的算出这些值，让我这几天想想怎么把它变好看。

```

//4,6,13,15,10,16,9,7,12,2,8,5,3,14,1,11

for (var a = 2; a <= 8; a += 2) {
	var l = 9 - a;
	var g = 13 - a;
	var k = 12 - a;
	if (k == a) {
		continue;
	}
	if ((k != 2) && (k != 4) && (k != 6) && (k != 8)) {
		continue;
	}		
	var b = 14 - k;
	if ((b == a) || (b == k)) {
		continue;
	}
	if ((b != 2) && (b != 4) && (b != 6) && (b != 8)) {
		continue;
	}
	var o = 9 - k;
	var m = 9 - b;
	for (var j = 2; j <= 8; j += 2) {
		if ((j != a) && (j != b) && (j != k)) {
			// c, d, e, f, h, i, n, p
			// c + p = 24
			// d + e = 25
			// |e - n| = 4
			// e + f = 26
			// c + i = 25
			console.log('a = ' + a);
			console.log('b = ' + b);
			console.log('g = ' + g);
			console.log('k = ' + k);
			console.log('o = ' + o);
			console.log('m = ' + m);
			console.log('j = ' + j);
			console.log('l = ' + l);
			for (var c = 1; c <= 16; c ++) {
				if ((c != a) && (c != b) && (c != g) && (c != k) && (c != o) && (c != m) && (c != j) && (c != l)) {
					var p = 24 - c;
					if (c == p) continue;
					if ((p < 1) || (p > 16)) continue;
					var i = 25 - c;
					if ((i < 1) || (i > 16)) continue;
					for (d = 1; d <= 16; d ++) {
						if ((d != c) && (d != a) && (d != b) && (d != g) && (d != k) && (d != o) && (d != m) && (d != j) && (d != l)) {
							var e = 25 - d;
							if ((e < 1) || (e > 16)) continue;
							var f = 26 - e;
							if ((f < 1) || (f > 16)) continue;
							n = e + 4;
							if ((n < 1) || (n > 16)) continue;
							if (
									(i == n) || 
									(n == f) || 
									(i == d) || 
									(p == k) || 
									(n == k) || 
									(n == b) || 
									(e == f) || 
									(p == e) || 
									(i == f) || 
									(p == f) || 
									(p == n) || 
									(p == g) || 
									(c == f)
							) {
								continue;	
							} 
							console.log("p = " + p);
							console.log("i = " + i);							
							console.log("n = " + n);
							console.log("e = " + e);
							console.log("f = " + f);
							console.log("c = " + c);
							console.log("d = " + d);
						}
					}
				}
			}
		}
	}
}
```

This outputs:

```
a = 4
b = 6
g = 9
k = 8
o = 1
m = 3
j = 2
l = 5
p = 11
i = 12
n = 14
e = 10
f = 16
c = 13
d = 15
[Finished in 0.7s]
```

Wait, the h is not printed (in the 12 pre-known relations, h is not specified)...  but you know what to do. ;)

h 值没有被打出来，因为这是唯一一个没有给定限制条件的变量，不过你应该知道怎么做了。

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-02)
- [聂小倩 （1）| #5电影](https://steemit.com/cn/@justyy/1-or-5)
- [在EXCEL里也可以计算斐波那契数列 ](https://steemit.com/cn/@justyy/how-to-calculate-fibonacci-numbers-using-excel-excel)
- [面经：Python 的 List 和 Dictionary 有啥区别？](https://steemit.com/cn/@justyy/interview-question-what-is-the-difference-between-list-and-dictionary-in-python-python-list-dictionary)
- [今天国足嬴了，我们来说说什么是SEO？流量怎么挣钱？](https://steemit.com/cn/@justyy/seo)
- [SteemIt 好友微信群排行榜 - （实时更新版）](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)
- [SP小于500也可以通过程序来设置点赞百分比](https://steemit.com/cn/@justyy/voting-weight-for-sp-less-than-500-sp-500)
- [碧桂园海外(英国)招博士让我思考了人生规划, 碧桂园适不适合你?](https://steemit.com/cn/@justyy/3dyled)
- Ned 的代理SP是怎么被使用的 - Steemit 商业分析 [Part 1](https://steemit.com/cn/@justyy/ned-sp-steemit-part-1), [Part 2](https://steemit.com/cn/@justyy/ned-sp-steemit-part-2), [Part 3](https://steemit.com/cn/@justyy/ned-sp-steemit-part-3-sweetsssj-tumutanzi) and [Part 4](https://steemit.com/cn/@justyy/ned-sp-steemit-part-4)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-02) 
- [How to Calculate Fibonacci Numbers using Excel? ](https://steemit.com/cn/@justyy/how-to-calculate-fibonacci-numbers-using-excel-excel)
- [Interview Question: What is the difference between List and Dictionary in Python?](https://steemit.com/cn/@justyy/interview-question-what-is-the-difference-between-list-and-dictionary-in-python-python-list-dictionary)
- [SteemIt Daily Wechat Group Ranking](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)
- [Voting Weight for SP less than 500](https://steemit.com/cn/@justyy/voting-weight-for-sp-less-than-500-sp-500)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)

![](https://justyy.com/gif/steemit.gif)
Tags: #cn #cn-programming #programming #steemstem

- - -

This page is synchronized from the post: [Bruteforce Solution to Mathematics × Programming Competition #5 暴力搜索[問題] 數學 × 程式編寫比賽 (第五回)](https://steemit.com/@justyy/bruteforce-solution-to-mathematics-programming-competition-5)
