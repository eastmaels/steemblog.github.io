
---
title: '[Code Review] - Reinventing the Wheel 代码审核之 重新造轮子'
permlink: code-review-reinventing-the-wheel
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-17 11:03:48
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- csharp
- linq
thumbnail: https://steemitimages.com/DQmVpD6ZeDvJu6HUwjqsfRSxsXgSM4oGbtEH1JW8cFkWAPk/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This is a code change that I observe today. It has been in the codebase for a long time, and I find it interesting to talk about it.

今天在看代码修改记录的时候发现有这么一处改动， 虽然这个改动已经很久了，但是我觉得有必要拿出来大家讨论一下：

![](https://steemitimages.com/DQmVpD6ZeDvJu6HUwjqsfRSxsXgSM4oGbtEH1JW8cFkWAPk/image.png)

The [LINQ](https://helloacm.com/the-one-line-c-linq-implementation-of-linespace-algorithm/) is out since .NET 3.5, and all above code is just doing one thing: select the specific types e.g. either *LayoutAnt* or *LayoutDevice* from a member list *layoutList* . And one line of LINQ does this exactly: **OfType<>**

2007年 .NET 3.5 之后推出[LINQ](https://justyy.com/archives/1151)，其实整个函数只是在做一件事，就是返回类成员 layoutList 中是 LayoutDevice （后面改成LayoutAnt ）的列表。但实际上这通过 [C#](https://justyy.com/archives/2396)的[LINQ](https://justyy.com/archives/1071)只需要用 OfType&lt;LayOutDevice&gt; 或者 OfType&lt;LayOutAnt&gt; 即可（暂且不说改动包括重构类型）

The left version is OK, but it is just old-school considering the developer who did not get familiar with LINQ. But the right version is worse. It has added a *ref* List which will be cleared. This is not unit-testing friendly at all.

左边的版本实际上是OK的，这就是学校的标教科书版本，无可厚非，但右边的这个版本就大有问题，因为参数含有引用 ref, 也就是说每次都把外面传进的变量给清空了，这种函数拿来[单元测试](https://justyy.com/archives/1806)并不友好。

The private methods are not [unit-test](https://helloacm.com/simple-javascript-unit-testing/) friendly. And one big issue for both methods is:  the member variable *layoutList* is referenced. If you really have to re-invent the wheel, at least make it a public, static method which takes a readonly *layoutList* and returns a new copy of List. In this case, the entire function is immutable, and [unit-test](https://helloacm.com/writing-unit-tests-in-vbscript/) friendly.

如果一定要重新造轮子，两个版本都有小问题，一个是 private 方法不好单元测试，另一个是都使用了成员变量 layoutList, 最好是改成 public static 公有静态方法，传入 layoutList, 然后像第一种方式返回新的List。这样的话，这个公有静态方法就是不会更改 (immutable), 较容易被单元测试。

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

 // 稍后同步到我的[中文博客](https://justyy.com)和[英文算法](https://helloacm.com)[博客](https://codingforspeed.com)。
- [Code Review – Reinventing the Wheel](https://helloacm.com/code-review-reinventing-the-wheel/)
- [代码审核之 重新造轮子](https://justyy.com/archives/5082)

# 近期热贴 Recent Popular Posts 
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

This page is synchronized from the post: [[Code Review] - Reinventing the Wheel 代码审核之 重新造轮子](https://steemit.com/@justyy/code-review-reinventing-the-wheel)
