
---
title: 'The profiler told me I wrote some useless code (An Example of Defensive Programming) 性能评估软件说我写了几行无用的代码'
permlink: the-profiler-told-me-i-wrote-some-useless-code-an-example-of-defensive-programming
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-18 21:26:51
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- defensive-programming
- profiler
thumbnail: https://steemitimages.com/DQmdGgMxVaogHZ6vjL1A8dkhKFrFcTEc8tVjat5yW5re58y/aqtime-profiler.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


When your code has performance bottlenecks, you can use the profiler software to benchmark your code, which will reveal the potential problems in your code or modules (memory or time consuming)

在代码出现性能瓶颈的时候，我们通常使用性能评估软件也就是Profiler 来查看代码中到底是哪几行，或者哪几个模块比较耗资源（速度慢或者占内存）。

Recently, my Profiler told me that I wrote a few lines of useless code.

最近我就用 Profiler 跑了一下，发现我写了几处无用的代码。具体如下：

![aqtime-profiler.jpg](https://steemitimages.com/DQmdGgMxVaogHZ6vjL1A8dkhKFrFcTEc8tVjat5yW5re58y/aqtime-profiler.jpg)

As seen in the screenshot, the leftmost numbers are calling counters, the middle columns are time in milliseconds, and the rightmost columns are also time but with the sub-routines. Those lines are safety checks to prevent the crash due to possibly out-of-range errors.

每行代码左边那个数字是被调用的次数，中间是执行时间（毫秒），右边是子函数的执行时间。我红色标出来的执行次数都是 1498179，而在进入这个函数的前几行都是在判断，如果条件不符合就立马退出函数，避免继续往下执行而导致程序崩溃（数组访问越界等）。

Obviously, the statistics show that these exit conditions are never met. Removing these save 2-3 seconds execution time. The method of adding safety checks (e.g. check object for null), are often seen as a way to handle the exception softly. Some might argue that it is a way to hide the errors. It is always better to [throw the exceptions](https://helloacm.com/throw-often-catch-rarely/) as early as you can instead of hiding them, because they will eventually come back to bite you in the as\*.  

但是明显来说，这几行代码都没有起作用。删掉这几行代码能省下2-3秒的执行时间。其实这种编程风格是 “Defensive Programming" 也就是处处加些判断（比如判断对像是否为 null）而不让程序崩溃。但实际上并不推荐，因为最好是一遇到错误就立即[抛出异常](https://justyy.com/archives/2305)，这样可以让我们更早的知道潜在的问题，而不是隐藏错误。

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

 // 稍后同步到我的[中文博客](https://justyy.com)和英文[算法](https://helloacm.com)[博客](https://codingforspeed.com)。
- [性能评估软件说我写了几行无用的代码](https://justyy.com/archives/5089)
- [engineeringThe profiler told me I wrote some useless code ](https://helloacm.com/the-profiler-told-me-i-wrote-some-useless-code-an-example-of-defensive-programming/)

# 近期热贴 Recent Popular Posts 
- [中年大叔还有梦可以做么？](https://steemit.com/cn/@justyy/7d7hyi)
- [Code Review Series - Value Not Used [坑爹的代码] - 变量未使用](https://steemit.com/cn/@justyy/code-review-series-value-not-used)
- [步子迈太大容易扯到蛋](https://steemit.com/cn/@justyy/4z2jif)
- [A Better Voting Strategy with Back Tracking Algorithm - 通过回溯算法确定更好的点赞策略](https://steemit.com/cn/@justyy/a-better-voting-strategy-with-back-tracking-algorithm)
- [Code Review - Reinventing the Wheel 代码审核之 重新造轮子](https://steemit.com/cn/@justyy/code-review-reinventing-the-wheel)
- [Simple Method to Insert Math Equations in SteemIt MarkDown Editor 如何在 SteemIt MarkDown Editor 里添加数学公式？](https://steemit.com/cn/@justyy/simple-method-to-insert-math-equations-in-steemit-markdown-editor-steemit-markdown-editor)
- [The Best Upvoting Strategy Calculator in Javascript - 怎么样点赞收益最高? （新老用户都来看看）](https://steemit.com/cn/@justyy/the-best-upvoting-strategy-calculator-in-javascript)
- [How to Use Steem API/transfer-history and IFTTT to sync to Slack? 如何使用Steem API/transfer-history和IFTTT同步到Slack消息? ](https://steemit.com/cn/@justyy/steem-api-transfer-history-ifttt-slack-how-to-use-steem-api-transfer-history-and-ifttt-to-sync-to-slack)
- [SteemIt API/transfer-history 最简单获取帐号钱包记录的API](https://steemit.com/cn/@justyy/steemit-api-transfer-history-api)
- [第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！](https://steemit.com/cn/@justyy/200steem-1-sp)
- [API steemit/account 简单封装了一下 steemit/account 的 API](https://steemit.com/cn/@justyy/api-steemit-account-steemit-account-api)

https://justyy.com/gif/steemit.gif

- - -

This page is synchronized from the post: [The profiler told me I wrote some useless code (An Example of Defensive Programming) 性能评估软件说我写了几行无用的代码](https://steemit.com/@justyy/the-profiler-told-me-i-wrote-some-useless-code-an-example-of-defensive-programming)
