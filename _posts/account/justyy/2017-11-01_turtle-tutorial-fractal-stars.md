
---
title: 'Turtle Tutorial Fractal Stars 海龟画图教程 分形五角星'
permlink: turtle-tutorial-fractal-stars
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-01 00:08:48
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- programming
- fractal
thumbnail: https://steemitimages.com/DQmYB3Mi4tkKS4qYbAyGoijLZ6JH6KKBn17m7AabdDVNtk3/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A 'Fractal Graph' can be seen as 'self similar'. For example,  

![](https://steemitimages.com/DQmYB3Mi4tkKS4qYbAyGoijLZ6JH6KKBn17m7AabdDVNtk3/image.png)

This is a fractal graph that is made by [LOGO](https://steakovercooked.com/Software.Logo) turtle graphic. Each element is a tiny star and you can see the shapes of each corner are similar to the entire figure. 

The idea is to draw a shape of star and in each corner of star further draw a smaller star... and this process goes on until the size of the star to draw is smaller than a threshold. The fractal graphs are often implemented in a recursive way i.e. function calls itself. The following [LOGO](https://helloacm.com/hello-world-program-in-logo/) defines a `star` function that draws a star and 5 smaller stars in its five corners until the sizes of the smaller stars are too small.. 

```
cs ht
to star :size :small
	if :size<:small [stop]
	repeat 5 [fd :size star :size*0.3 :small rt 144]
end
star 200 10
```

We can also draw more stars in a similar way by setting to a small threshold `star 200 5`:

![](https://steemitimages.com/DQmSNvtzpJsifWGuyUaQ9v6giuXnRcvkfB9Mu3RzaEsfLw2/image.png)

Pretty amazing, huh? This is a great example to teach your kids programming and they will learn the concepts of procedure, functional call, [recursive](https://helloacm.com/draw-a-chess-board-using-logo/) and of course the concept of [fractal designs](https://helloacm.com/logo-turtle-tutorial-how-to-draw-fractal-stars/)!

-----------------------------------------------

分形图案就是自身很相近的一些图案，比如这个：

![](https://steemitimages.com/DQmYB3Mi4tkKS4qYbAyGoijLZ6JH6KKBn17m7AabdDVNtk3/image.png)

这是用[LOGO](https://steakovercooked.com/ch/Software.Logo)海龟画出来的，每一个角落都和整体很相像。我们可以认为每一个五角星的角都继续长满了小一点的五角形。

分形图案一般来说就是用[递归](https://justyy.com/archives/5204)来实现，直到每一个更小的图案不能再小了（再小就看不清楚了）。我们用[LOGO语言](https://justyy.com/archives/5195)来定义一个函数，功能就是画一个五角形，然后在每个小角上继续画一个五角形，直到五角形太小了。

```
cs ht
to star :size :small
	if :size<:small [stop]
	repeat 5 [fd :size star :size*0.3 :small rt 144]
end
star 200 10
```

我们把最小的阀值变小一点 `star 200 5`，这样就能画出更多的[五角形](https://justyy.com/archives/5544)。

![](https://steemitimages.com/DQmSNvtzpJsifWGuyUaQ9v6giuXnRcvkfB9Mu3RzaEsfLw2/image.png)

是不是很有意思？这是个教孩子编程的例子，可以用来教孩子递归、分形、临界条件等概念。

----------------


> @justyy 是有名的[晒媳妇](https://steemit.com/cn/@justyy/photography-of-our-love-2017)博主，也是西半球最装X装土豪 (https://justyy.com) 的博主。@justyy 定居英国，一妻两娃，在STEEMIT上开办了历史上中文第一家银行，史称 YY央行，每日赔钱吆喝。
> @justyy 在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
> @justyy 凡事喜欢折腾，现在在一家英国软件公司里当码农，好听一点叫作算法攻城狮。 @justyy  喜欢结交天下好友，一起YY。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率10%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
3. 今天(2017-10-30) [银行股东名单](https://steemit.com/cn/@justyy/daily-cn-updates-cn2017-10-30)

-------------------
- [SteemIt SP Delegation Tool 简易SP代理工具](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)
- **[Steemit 在线工具，API接口和教程](https://helloacm.com/tools/steemit-tools/)**
- **[SteemIt Tutorials, Tools and APIs](https://helloacm.com/tools/steemit/)**

> AD 一波，听说最近 STEEM没有SBD值钱，那赶紧加入 CN区低保银行，成为股东，好处多多，每天收获点赞并且能获得10%的利息（发放SBD），[今日股东列表](https://steemit.com/cn/@justyy/daily-cn-updates-cn2017-10-30)

- - -

This page is synchronized from the post: [Turtle Tutorial Fractal Stars 海龟画图教程 分形五角星](https://steemit.com/@justyy/turtle-tutorial-fractal-stars)
