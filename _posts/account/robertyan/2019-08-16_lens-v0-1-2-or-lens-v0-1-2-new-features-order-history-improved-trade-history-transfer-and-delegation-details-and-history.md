
---
title: 'Lens v0.1.2 新功能：市场订单记录、快速交易记录查询、转账记录、代理详情和记录  | Lens v0.1.2 new features: Order History, Improved Trade History, Transfer and Delegation Details and History'
permlink: lens-v0-1-2-or-lens-v0-1-2-new-features-order-history-improved-trade-history-transfer-and-delegation-details-and-history
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-16 18:00:48
categories:
- steem-engine
tags:
- steem-engine
- cn-reader
- cn-curation
- sct
- sct-cn
- sct-freeboard
- steemleo
- lifestyle
- cn
- palnet
- zzan
- mediaofficials
- actnearn
- marlians
- neoxian
- lassecash
- upfundme
thumbnail: 'https://cdn.pixabay.com/photo/2017/09/15/08/53/photography-2751464_1280.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


本文介绍 Lens 项目的最新功能：

1. 市场订单记录
1. 更快的交易记录查询
1. 转账记录
1. 代理详情、代理记录


关于 Lens 项目的简单介绍，可以参考文章：[Lens: 用数据看清世界 | Lens: A Clear World via Data](https://busy.org/steem-engine/@robertyan/lens)，用基于 Steem Smart Contract、Scotbot 的数据，看清项目、组织、市场等的真实情形，了解过去、预测未来。

![](https://cdn.pixabay.com/photo/2017/09/15/08/53/photography-2751464_1280.jpg)
<sup>image source: [Pixabay](https://pixabay.com/zh/photos/%E6%91%84%E5%BD%B1-%E7%85%A7%E7%89%87-%E5%A5%B3%E5%AD%90-%E7%9B%B8%E6%9C%BA-2751464/)</sup>

Lens 项目的链接为：   https://tribes.rocks/lens/  

- 例如： 查看 @aggroed 的交易记录：https://tribes.rocks/lens/?account=aggroed&page=trade


### 新功能 New Features

本次我们开发了一些之前计划中的功能，并使用了最新的Steem Engine的API提高了查询的效率。

### 1. 我的订单记录 My Orders History

在[前一个版本的更新中](https://busy.org/@robertyan/lens-v0-1-1-or-lens-v0-1-1-new-features-personal-open-orders-trade-history-and-token-summary)，我们就已经添加了未完成的订单的功能，这次更新中为了方便查询历史上提交过的订单，我们也添加了订单记录这个功能。

比如我们想学习某一个用户的挂单策略，甚至查看某个挂单的用户是不是交易机器人，我们可以通过Order History 的功能来进行分析。

以下为一些案例：

第一个例子。以 @aggroed 为例，我们可以看到他的PAL挂单是买单多于卖单，我们可以看到他的挂价随着市场价格的变化也在不断进行调整，并对市场价格的稳定有一定的影响力。

- PAL 挂单记录：https://tribes.rocks/lens/?account=aggroed&page=order&token=PAL

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/o6oUniNL-image.png)
<sup>screenshot from https://tribes.rocks/lens/?account=aggroed&page=order&token=PAL </sup>
</center>


第二个例子。之前很多人对于 SCT 的价格快速上升到 4~5 Steem 觉得很兴奋，当然这背后是离不开团队的护持的。实际上，我们可以直接看到 Jack 的挂单细节，结合交易记录，还可以看到是谁在对应的价格卖出了 SCT。

- SCT 挂单记录：https://tribes.rocks/lens/?account=jack8831&page=order&token=SCT

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/Gfn4eG1d-image.png)
<sup>screenshot from https://tribes.rocks/lens/?account=jack8831&page=order&token=SCT</sup>
</center>

- SCT 交易记录：https://tribes.rocks/lens?page=trade&account=jack8831&token=SCT

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/lrywwR5g-image.png)
<sup>screenshot from https://tribes.rocks/lens?page=trade&account=jack8831&token=SCT</sup>
</center>


第三个例子。之前村长 @ericet 提到过 [MEEP 背后有交易机器人的影子](https://busy.org/@ericet/meep-z3c93n8ba1)，通过观察 此账户的MEEP 交易记录，我们可以看到在6月29日至7月2日之间，有接近500个买单+卖单被生成，确实比较像机器人操控市场的行为。交易频率是识别机器人的重要特征之一。

- MEEP 挂单记录: https://tribes.rocks/lens?page=order&account=inertia&token=MEEP

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/jOFLkYT4-image.png)
<sup>screenshot from https://tribes.rocks/lens?page=order&account=inertia&token=MEEP
</center>


### 2. 更快的交易记录查询 Faster Trade History Query

在[上一篇中](https://busy.org/@robertyan/lens-v0-1-1-or-lens-v0-1-1-new-features-personal-open-orders-trade-history-and-token-summary)，我们已经推出了交易记录查询的功能，但由于受依赖服务的稳定性影响较大，有时会不可用。所以，对于个人交易记录的查询，我们采用了新的Steem Engine API，查询效率和稳定性都有了很大的提高。

譬如，我们要查看某位[曾经在ZZAN空投中采用大量小号领取空投的攻击者](https://busy.org/@robertyan/steem-engine-threat-model-1-or-steem-engine)的市场行为，可以查看她/他的交易记录。原来她/他已经出售了 80K+ 的ZZAN（出售价格为 3K+ Steem）。（表格之下的总和统计的是所有交易记录的总和，而不只是当页的综合。）

- ZZAN交易记录：https://tribes.rocks/lens/?account=mcenoramle&page=trade&token=ZZAN

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/UYv587tp-image.png)
<sup>screenshot from https://tribes.rocks/lens/?account=mcenoramle&page=trade&token=ZZAN
</center>

目前交易记录的查询，比之前已经快了很多，应该可以正常使用了。


### 3. 转账记录 Transfer History

转账记录在 Steem Engine 中应该也可以查看。这里的转账记录可以查看多种 Token 的记录，同时将转出与转入分离，可能使用时会更灵活一些。

比如，我们想看上面提到的这位攻击者主要从哪些小号转账，以及她/他的主要关联账户是哪些，我们可以通过转账记录查询到一些蛛丝马迹。

如果可以加上一些转账的数额和分布的统计信息，或许会更容易发现其中的关联。这一功能我们可能会在 Affinity 账户关联的功能中实现。

- ZZAN转账记录：https://tribes.rocks/lens?page=transfer&account=mcenoramle&token=ZZAN

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/bYER3dro-image.png)
<sup>screenshot from https://tribes.rocks/lens?page=transfer&account=mcenoramle&token=ZZAN
</center>

### 4. 代理详情和记录 Delegation Details and Records

代理是一个十分有趣的功能，但有时候我们希望查看代理给了谁以及谁代理跟了我时，在Steem Engine中不是很方便。
所以代理详情主要是展示代理者和被代理者的基本信息。例如，我们可以看看CN区的集资号的代理情况。

- @cn-zzang 代理情况：https://tribes.rocks/lens/?account=cn-zzang&page=delegation  点击 Amount，按照数量排序

<center>
![](https://files.steempeak.com/file/steempeak/robertyan/w6lhfqXs-Screen20Shot202019-08-1720at2012.48.4020AM.png)
<sup>screenshot from https://tribes.rocks/lens/?account=cn-zzang&page=delegation
</center>


- @cn-sports 代理情况：https://tribes.rocks/lens/?account=cn-sports&page=delegation  点击 Amount，按照数量排序

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/SsFCHSP0-image.png)
<sup>screenshot from https://tribes.rocks/lens/?account=cn-sports&page=delegation
</center>


使用代理历史记录的功能，我们还可以看到用户逐步代理的记录，即每一次新代理的数量是多少。

- 代理给 @cn-zzang 的历史记录: https://tribes.rocks/lens/?account=cn-zzang&page=delegation

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/6r0V5zO4-image.png)
<sup>screenshot from https://tribes.rocks/lens/?account=cn-zzang&page=delegation
</center>

以上便是代理详情和代理记录的页面。


### 计划 Plan

本次的更新的4个功能都和历史信息有一些关系，帮助我们看清事物的变化。

Lens 的服务的页面交互、功能的完善度和友好度还存在很多缺陷，我们会继续优化。以下是更新的计划：

1. 添加更多信息查询功能：如账户关联 Affinity、共享黑名单、排行榜等。
2. 完善对 token 市场和项目的分析：投资价值（投资回报比例）、持有者的动态、项目动态等等，以辅助投资决策；
3. 有趣的数据科学专题，如 steemspeak 的价格波动分析。目前我们有一个“数据科学”小组正基于兴趣进行这方面的研究和探索。如有兴趣，欢迎加入我们。
4. 改进服务界面，添加 token 的选择、用户登录、改进整体的页面风格和交互等。

如果你对这个工具感兴趣，或者有别的想要看到的信息，不妨留言告知我们。

Lens 的地址是：https://tribes.rocks/lens/  

目前如果要查看token和账户相关信息，请修改token和account相关的参数。

- - -

This page is synchronized from the post: ['Lens v0.1.2 新功能：市场订单记录、快速交易记录查询、转账记录、代理详情和记录  | Lens v0.1.2 new features: Order History, Improved Trade History, Transfer and Delegation Details and History'](https://steemit.com/@robertyan/lens-v0-1-2-or-lens-v0-1-2-new-features-order-history-improved-trade-history-transfer-and-delegation-details-and-history)
