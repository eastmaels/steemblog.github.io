
---
title: 'LOGO 海龟作画 系列二 之定义个过程来 say Hello, World -  Logo Turtle Graphics - Series 2 - Define Procedure and Say Hello, World'
permlink: logo-say-hello-world-logo-turtle-graphics-series-2-define-procedure-and-say-hello-world
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-26 00:50:03
categories:
- cn
tags:
- cn
- cn-programming
- logo-turtle
- helloworld
thumbnail: https://steemitimages.com/DQmQuKYHjDyoySh7NEHs9ktAEszzkWjYpavoq1fvSuCR8Z8/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This quick tutorial shows you how to define a basic procedure in LOGO with or without parameters. The one-line comments start with semi-colons similar to assembly language. 

Then, we define a procedure to let the turtle draw the "Hello, World". You can verify the output of the Hello-World using this [PHP Online Interpreter](https://steakovercooked.com/Software.Logo) I developed years ago.

[上次说到](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)，LOGO语言几个最基本的命令，就是前进FD后退BK向左转LT向右转RT。参数都是可以支持负数的，也就是说 FD 100 相当于 BK -100 （向前走100步等于向后退 负的100步）。

今天讲的就是过程，也就是我们编程语言里的函数。在LOGO语言里定义过程的语法如下（LOGO语言中用分号开始定义行注释，这个和汇编语言一样）：

```
TO 过程名 :参数1  :参数2
  ; 过程的代码
END
```

参数是可选的，比如:

```
TO SQUARE
    REPEAT 4 [FD 100 RT 90]
END
```

定义了一个画边长为100的正方形，我们调用的时候只需要 `SQUARE` 就可以了。加入参数后就比较灵活，可以指定任意边长，比如

```
TO SQUARE :L
  REPEAT 4 [FD :L RT 90]
END
```

比如调用的时候我们可以这么用：

```
SQUARE 100  ; 画一个边长为100的正方形
SQUARE 50    ; 接着画一个边长为50的正方形
```

效果如下：

![](https://steemitimages.com/DQmQuKYHjDyoySh7NEHs9ktAEszzkWjYpavoq1fvSuCR8Z8/image.png)

讲到这里，我觉得才可以入门了，每种程序总要来秀一段Hello, World, 在LOGO语言里，我们就用海龟把 Hello, World 画出来。

```
# hello, world
to helloworld
 hideturtle
 fd 20 left 180
 fd 40 left 180
 fd 20 right 90
 fd 20 left 90
 fd 20 left 180
 fd 40 left 90
 fd 20 left 90
 fd 20 right 90
 fd 20 right 90
 fd 10 right 90
 fd 20 left 90
 fd 10 left 90
 fd 30 left 90
 fd 40 left 180
 fd 40 left 90
 fd 20 left 90
 fd 40 left 180
 fd 40 left 90
 fd 40 left 90
 fd 20 left 90
 fd 20 left 90
 fd 20 left 90
 fd 60 left 90
 fd 40 left 180
 fd 40 left 90
 fd 20 left 90
 fd 20 left 180
 fd 20 left 90
 fd 20 left 90
 fd 40 left 180
 fd 40 left 90
 fd 40 left 90
 fd 20 left 90
 fd 20 left 90
 fd 20 left 90
 fd 40 left 90
 fd 20 right 90
 fd 20 right 90
 fd 5  left 90  
 fd 5  left 90  
 fd 25 left 180
 fd 40 left 90
 fd 40 left 90
 fd 20 left 90
 fd 20 left 90
 fd 20 left 90
 fd 20 left 90
 fd 40 left 180
 fd 40
end

lt 90 pu fd 200 pd rt 90 helloworld 
```

效果如下(海龟一气呵成要累死了都)：

![](https://steemitimages.com/DQmbUwQoKy2ofyt7seKysWnhbqJd1YaTPRDwFdwC6FVcDQP/image.png)

您可以使用我写的这个[PHP-LOGO解释器](https://steakovercooked.com/ch/Software.Logo)来验证这段LOGO代码。

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

 // 稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [Hello World Program in LOGO](https://helloacm.com/hello-world-program-in-logo/)
- [LOGO 海龟作画 系列二 之定义个过程来 say Hello, World](https://justyy.com/archives/5195)

# 近期热贴
- [写在2017年七夕: 爱情亲情，那些美好的回忆(就是这么任性的撒狗粮)](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [LOGO 海龟作画 系列 一 之 给孩子最好的编程启蒙语言](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [通过脑残语言来保护你的STEEM钱包密码](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [不会写程序也能自动点赞 - 通过 SteemVoter 添加点赞规则](https://steemit.com/cn/@justyy/steemvoter)
- [你好秋天，英国8月份的到Hitchin看薰衣草](https://steemit.com/cn/@justyy/8-hitchin)
- [Fen Drayton村每年举行1万米比赛](https://steemit.com/cn/@justyy/fen-drayton-1)
- [碎碎念第365天](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)

# Recent Popular Posts 
- [Photography of Our Love](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [Logo Turtle Graphics - Series 1 - Best Introductory Programming for Kids](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [Use BrainFuck to Protect Your Steem Wallet Password(s)](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [Hello Autumn! Hello Lavender](https://steemit.com/cn/@justyy/8-hitchin)
- [The Day 365 at SteemIt](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)
- [The profiler told me I wrote some useless code](https://steemit.com/cn/@justyy/the-profiler-told-me-i-wrote-some-useless-code-an-example-of-defensive-programming)

![](https://justyy.com/gif/steemit.gif)
Tags: #cn #cn-programming #logo-turtle #helloworld

- - -

This page is synchronized from the post: [LOGO 海龟作画 系列二 之定义个过程来 say Hello, World -  Logo Turtle Graphics - Series 2 - Define Procedure and Say Hello, World](https://steemit.com/@justyy/logo-say-hello-world-logo-turtle-graphics-series-2-define-procedure-and-say-hello-world)
