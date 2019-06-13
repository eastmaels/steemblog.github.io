
---
title: 'Ned 的代理SP是怎么被使用的 - Steemit 商业分析 Part 4'
permlink: ned-sp-steemit-part-4
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-29 15:28:12
categories:
- cn
tags:
- cn
- bisteemit
- steem
- minnowsupport
- translation
thumbnail: https://steemitimages.com/0x0/https://steemitimages.com/DQmPAUokwqVjGCKY7qaiUH1KM7RWJyk3dGggyhDLqteng2B/1.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


此文经原作者 @paulag 同意，翻译成中文。图片版权归原作者 @paulag
[原文地址](https://steemit.com/stats/@paulag/how-neds-delegated-power-is-used-part-4-steemit-business-analysis): 翻译难免有错误或者不够准确的地方，请见谅。

在过去的3篇帖子里，我们一共看了6位幸运的Steemain在获得 @ned  大量的SP代理的投票习惯前后各15天的改变。

这6位幸运儿分别是： @htliao, @linuslee0216, @nicolemoker, @surpassinggoogle, @sweetsssj 和 @tumutanzi. 

今天，我会把这些数据都整合起来一起分析，然后做一个总结性的报告。

如果你错过了之前的分析，可以看下面几个帖子回顾：

- [Ned 的代理SP是怎么被使用的 - Steemit 商业分析 Part 1 （@htliao 和 @linuslee0216）](https://steemit.com/cn/@justyy/ned-sp-steemit-part-1)
- [Ned 的代理SP是怎么被使用的 - Steemit 商业分析 Part 2 （@nicolemoker 和 @surpassinggoogle）](https://steemit.com/cn/@justyy/ned-sp-steemit-part-2)
- [Ned 的代理SP是怎么被使用的 - Steemit 商业分析 Part 3 （@sweetsssj 和 @tumutanzi）](https://steemit.com/cn/@justyy/ned-sp-steemit-part-3-sweetsssj-tumutanzi)

在我们看数据之前，我必须得感谢一下  @arcange  因为他花了很多时间和精力在开发和维护 SteemSQL。如果没有 SteemSQL， 我就无法进行这些数据分析。

# 总的概况
在获得代理SP前15天
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmPAUokwqVjGCKY7qaiUH1KM7RWJyk3dGggyhDLqteng2B/1.png)

在获得代理SP后15天
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmWLkDMG7yAAgCJm61NU2ZsJpY87txWq8XDzzrd5psTMVE/2.png)

# 高级摘要
我们可以很清楚的看到， @ned 在给予代理SP后，得到奖励的作者得到了大幅度的增加。我们来看一下具体的变化。
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmcVouAGay9yuL4sMNLLjS3aVHvacPABSno3rU2AikhWc8/3.png)

# 具体分析
获得代理SP前15天 每天投票数
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmZ1KZsMqucV7npK34PwVD6xDXGrLTmYYx9wvqKXipWqgg/4.png)

获得代理SP后15天 每天投票数
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmbWPDtd5FW4iDrt6JNMsozPfVixwwYVMzwRhvnYvnsePH/5.png)

获得代理SP前15天 每天点赞所产生的收益$
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmVkoPt4HhkU4f9eAXSBKAv1FbAC9zS7zdKop2xbn7EXJ2/6.png)

获得代理SP后15天 每天点赞所产生的收益$
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmSTT842G5mCHsD39ZSTohGyhGzVjWNUka6vVDwj6g37ub/7.png)

获得代理SP前15天获得奖励作者唯一数
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmPk7ZMHvnNCzaUP7imiCaotbEYGtM8MBYUFh9dQmLyk1p/8.png)

获得代理SP后15天获得奖励作者唯一数
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmPcg6QJCdoi8QkJbDUt1dppbruvDgfa9erv12dXLL4bVe/9.png)

获得代理SP前15天获得奖励的最高作者
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmT7RdrcZFLh4eKMi4evkMSrr2GtRD2xws66dpEKZ1BdZv/10.png)

获得代理SP后15天获得奖励的最高作者
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmbYWEB8DGCvGr2cHKLvAtDq4YCC8kmbjNhAPA6fwqo7Xq/11.png)

获得代理SP前15天网络关系图
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmYse5PPZKqBiEx8QERQbv7FmaH9c4XUaagCGSRQi7e8yd/12.png)

获得代理SP后15天网络关系图
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmTSnqXDCTodLy8iAJvCx9gGXw28uBFu562xtDWzatZdzq/13.png)

有人在评论里问了这么一个问题：“@ned 是天才 还是疯子？” 你们可以在下面评论发表你们的看法。

我是Steemit Business Intelligence community 的成员。我们都会发表标签 #BIsteemit。

如果你想让我们分析一些数据，欢迎联系我或者其它 #bisteemit 团队成员，我们将尽可能的帮助你...

想加入 #bisteemit ? https://sbcautoinvite.herokuapp.com

原文：https://steemit.com/stats/@paulag/how-neds-delegated-power-is-used-part-4-steemit-business-analysis
原文标签： stats bisteemit news steem minnowsupport

Follow, Resteem, Upvote

- - -

This page is synchronized from the post: [Ned 的代理SP是怎么被使用的 - Steemit 商业分析 Part 4](https://steemit.com/@justyy/ned-sp-steemit-part-4)
