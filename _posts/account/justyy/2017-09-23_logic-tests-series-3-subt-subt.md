
---
title: 'Logic Tests Series (3) - SUBT 逻辑测试系列之三 - SUBT'
permlink: logic-tests-series-3-subt-subt
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-23 19:26:27
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- interview
- coding
thumbnail: https://steemitimages.com/0x0/https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


@justyy 's series of Logits Tests:
- [Introduction to Logic Tests Series](https://helloacm.com/introduction-to-logic-tests-series/)
- [Logic Tests Series (2) - DECR](https://steemit.com/cn/@justyy/logic-tests-series-2-decr-decr)

We have implemented the DECR function in last series using the only four keywords in this tiny programming language. This post, you will need to implement the SUBT function which takes two parameters and subtract one from the other i.e. `X-=Y`

In C++, you can probably implement this using a LOOP.

```
void subt(unsigned int &x, unsigned int y) {
  for (int i = 0; i < y; i ++) {
     x --;
  }
}
```

We take one from X variable Y times and the variable X is a reference variable in C++. If we translate this into this language, here it comes:

```
SUBT(X, Y) {
   LOOP(Y) {
       DECR(X)  // DECR has been implemented, so we can use it.
  }
}
```

As you see, complex functions are built upon simple instructions namely ASGN, LOOP, INCR and ZERO. We are going to explore more in the next coming series, please be patient!

![](https://steemitimages.com/0x0/https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg)
*Image Credit: Pixabay.com*

@justyy 的逻辑测试系列:

- [逻辑测试系列 - 一种只有4种语句的编程语言 - （1）](https://justyy.com/archives/5320)
- [逻辑测试系列之二 - DECR](https://steemit.com/cn/@justyy/logic-tests-series-2-decr-decr)

上次添加了 DECR 函数来把 一个变量减一，我们这次来定义一个 SUBT 函数来实现 把 减法运算，也就是 `X-=Y`

如果我们用 C++ 来实现，大概是这样的:

```
void subt(unsigned int &x, unsigned int y) {
  for (int i = 0; i < y; i ++) {
     x --;
  }
}
```

这里 x 变量是引用，也就是直接在函数里能修改其值，退出函数后x能有变化。我们翻译成这门语言是：

```
SUBT(X, Y) {
   LOOP(Y) {
       DECR(X)  // DECR 在上期已经定义过了，这里拿来一用。
  }
}
```

复杂的函数是一点一点建立起来的，虽然这门语言只有  INCR, ZERO, ASGN, LOOP 这四个关键字，但是我们可以通过组合实现最基本的功能，进而完成更复杂的功能，让我们拭目以待。


![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

**[CN 每日排行榜](https://steemit.com/cn/@justyy/daily-cn-updates---cn72017-09-23)**

// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [逻辑测试系列之三 - SUBT](https://justyy.com/archives/5364)
- [Logic Tests Series (3) - SUBT](https://helloacm.com/logic-tests-series-3-subt/)
- [Introduction to Logic Tests Series](https://helloacm.com/introduction-to-logic-tests-series/)
- [Logic Tests Series (2) - DECR](https://helloacm.com/logic-tests-series-2-decr/)
- [逻辑测试系列之  一种只有4种语句的编程语言 - （1）](https://justyy.com/archives/5320)
- [逻辑测试系列之二 DECR](https://justyy.com/archives/5339)
- [论PHP是世界上最好的语言！](https://justyy.com/archives/5358)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

![](https://steemitimages.com/0x0/https://justyy.com/gif/steemit.gif)

**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看：
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [CN 区优质内容点赞机器人上线了!](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn) 
- [点赞机器人每日点赞记录整合到每日报表中！](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)
- [虽然不挣钱，但是CN区低保计划还会继续下去](https://steemit.com/cn/@justyy/cn)

![](https://justyy.com/gif/justyy-php-is-the-best.gif)
欢迎你发表你的见解和看法，特别有意思的评论我可能会奖励你1 SBD哦。
Interesting Comments might be rewarded with 1 SBD.

- - -

This page is synchronized from the post: [Logic Tests Series (3) - SUBT 逻辑测试系列之三 - SUBT](https://steemit.com/@justyy/logic-tests-series-3-subt-subt)
