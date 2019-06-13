
---
title: 'LOGO 海龟作画 系列三 递归画一个国际象棋棋盘  Logo Turtle Graphics - Series 3 - Recursively drawing a chess board'
permlink: logo-logo-turtle-graphics-series-3-recursively-drawing-a-chess-board
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-28 22:37:33
categories:
- cn
tags:
- cn
- cn-programming
- logo-turtle
- recursion
- chessboard
thumbnail: https://helloacm.com/images/chessboard.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


本系列：
- [LOGO 海龟作画 系列 一 之 给孩子最好的编程启蒙语言](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [LOGO 海龟作画 系列二 之定义个过程来 say Hello, World](https://steemit.com/cn/@justyy/logo-say-hello-world-logo-turtle-graphics-series-2-define-procedure-and-say-hello-world)

Logo Tutorial Series：
- [Logo Turtle Graphics - Series 1 - Best Introductory Programming for Kids](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [Logo Turtle Graphics - Series 2 - Define Procedure and Say Hello, World](https://steemit.com/cn/@justyy/logo-say-hello-world-logo-turtle-graphics-series-2-define-procedure-and-say-hello-world)

今天我们要来讲一讲[递归](https://justyy.com/archives/5004)。递归就是函数自己调用自己，我们可以定义一个过程，然后这只海龟不停的画，结束的时候再调用自身再继续画。再次调用的时候参数变化了，至到参数满足一定的条件则停止。

A recursion is a function calling itself. In Logo, we can define a procedure, asking the turtle to draw something, then ask the turtle to repeat itself but with slightly different parameters, until a set of conditions are met.


比如 下面定义的这个过程可以用来画一个实现的正方 形。
For example, the following procedure can be used to draw a filled rectangle.

```
TO FK :B
  IF :B>15 [STOP]  ; 如果边长大于15就停止
  REPEAT 4 [FD :B RT 90] ; Draw a square with side B 画一个长度为B的正方形
  FK :B+1  ;  Draw a square with side B+1 递归调用自己画一个长度为B+1的正方形
END
```

然后我们可以通过 调用 `FK 15` 来画一个空心的正方形，这样的话，通过不停的画空心实心(不断交错)则可以构成一个棋盘：
The `FK 15` draws a empty square. By such, we can draw the interleaving squares.

```
TO QP :Y
  IF :Y>4 [STOP]   
  REPEAT 4 [FK 15 FD 15 FK 1 FD 15] 
  RT 90 FD 30 RT 90
  REPEAT 4 [FK 15 FD 15 FK 1 FD 15]
  RT 180
  QP :Y+1
END
```

![](https://helloacm.com/images/chessboard.jpg)

您可以使用我写的这个[PHP-LOGO解释器](https://steakovercooked.com/ch/Software.Logo)来验证这段LOGO代码。
You could use this [PHP-LOGO Interpreter](https://steakovercooked.com/Software.Logo) to verify the LOGO program as stated above.

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [Draw a Chess Board using LOGO](https://helloacm.com/draw-a-chess-board-using-logo/)
- [LOGO 海龟作画 系列三 递归画一个国际象棋棋盘](https://justyy.com/archives/5204)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-08-28)
- [聂小倩 （1）| #5电影](https://steemit.com/cn/@justyy/1-or-5)
- Ned 的代理SP是怎么被使用的 - Steemit 商业分析 [Part 1](https://steemit.com/cn/@justyy/ned-sp-steemit-part-1), [Part 2](https://steemit.com/cn/@justyy/ned-sp-steemit-part-2) and [Part 3](https://steemit.com/cn/@justyy/ned-sp-steemit-part-3-sweetsssj-tumutanzi)
- [写在2017年七夕: 爱情亲情，那些美好的回忆(就是这么任性的撒狗粮)](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [LOGO 海龟作画 系列 一 之 给孩子最好的编程启蒙语言](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [通过脑残语言来保护你的STEEM钱包密码](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [不会写程序也能自动点赞 - 通过 SteemVoter 添加点赞规则](https://steemit.com/cn/@justyy/steemvoter)
- [你好秋天，英国8月份的到Hitchin看薰衣草](https://steemit.com/cn/@justyy/8-hitchin)
- [碎碎念第365天](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/dailystats/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-08-28) 
- [Photography of Our Love](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [Logo Turtle Graphics - Series 1 - Best Introductory Programming for Kids](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [Use BrainFuck to Protect Your Steem Wallet Password(s)](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [Hello Autumn! Hello Lavender](https://steemit.com/cn/@justyy/8-hitchin)
- [The Day 365 at SteemIt](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)
- [The profiler told me I wrote some useless code](https://steemit.com/cn/@justyy/the-profiler-told-me-i-wrote-some-useless-code-an-example-of-defensive-programming)

![](https://justyy.com/gif/steemit.gif)
Tags: #cn #cn-programming #logo-turtle #recursion #chessboard

- - -

This page is synchronized from the post: [LOGO 海龟作画 系列三 递归画一个国际象棋棋盘  Logo Turtle Graphics - Series 3 - Recursively drawing a chess board](https://steemit.com/@justyy/logo-logo-turtle-graphics-series-3-recursively-drawing-a-chess-board)
