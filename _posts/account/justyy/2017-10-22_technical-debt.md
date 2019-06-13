
---
title: '说说技术债 Technical Debt'
permlink: technical-debt
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-22 17:32:12
categories:
- cn
tags:
- cn
- cn-programming
- agile
- software-development
- technical-debt
thumbnail: https://cdn.pixabay.com/photo/2017/08/06/13/44/laptop-2592630_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.pixabay.com/photo/2017/08/06/13/44/laptop-2592630_960_720.jpg)
*Image Credit: Pixabay.com*

技术债 Technical Debt 是软件工程上特别是[敏捷开发](https://justyy.com/archives/2303) (Agile Development) 中的一个概念。指的是解决一个当前问题最好的方法往往需要更久的时间和精力，但是为了加快软件开发进度，赶在代码冻结前按时交差，采取的一个较为折衷的解法方法。但是这就是一笔债一样，可能会把潜在的问题越积越大（利息），甚至将来却无力偿还（修复）。

1年半前，我提了个BUG，这个BUG大概是说一种数据文件里如果用TAB而不是空格来隔开字段，则导入数据过程中软件会崩溃，这个BUG的确是有效的，因为把这数据文件放到别的软件中导入则是没有问题的。

![](https://steemitimages.com/DQmcmvVfDNQySN7dLewPedxMS1L8GHLWLGAmZsLzdg52rLM/image.png)

前前后后讨论了半年，然后总算被批准了，不过由于开发任务繁重，而且也不是那种非改不可的BUG，所以就一直拖，拖到今年10月份，突然接到邮件通知：“agreed to remove as this has been sitting in backlog for over 18  months , no customer requirements”

这个BUG，我想要真正改的话，估计加上写[测试用例](https://justyy.com/archives/1935)，最多半个小时，前后拖了18个月只得到不重要不用改这样的结果只能说明**会开太多了、效率低下**。

这是[技术债](https://justyy.com/archives/5517)么？我觉得是，虽然并没有严格意义上的采取较方便的解决方法，但是实质是都是一样的：选择忽略这种容易的方式。一个成熟的软件不会连这点兼容性都没有的，更何况是导入合法有效数据时软件会崩溃这样不成熟的表现。这是技术债，现在没有客户会 screaming，不代表之后没有。

软件每两周迭代一次，在第二周的周三周四的改动中如果碰到需要较大（好）改动的处理，来不及在代码冻结前提交， 往往我们的做法是看紧急程度，如果客户要求较急，那么则会出一个较为快速的改动，并且把需要完善的改动任务记录在技术债列表上。如果不是很紧急，我们可以把这个任务提交到接下来的 sprint （短跑） 中。

不管如何，一个被 产品经理 approved 的 defect 在一年多后被移除，这一点是无论如何说不过去的。





-------------------

> @justyy 是 https://justyy.com 的博主，在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率10%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
3. 今天(2017-10-22) [银行股东名单](https://steemit.com/cn/@justyy/daily-cn-updates-cn2017-10-22)

-------------------
- [SteemIt SP Delegation Tool 简易SP代理工具](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)
- **[Steemit 在线工具，API接口和教程](https://helloacm.com/tools/steemit-tools/)**
- **[SteemIt Tutorials, Tools and APIs](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [说说技术债 Technical Debt](https://steemit.com/@justyy/technical-debt)
