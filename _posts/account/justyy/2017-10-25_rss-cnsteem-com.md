
---
title: '中文微信群排行榜还有RSS链接改成 cnsteem.com !'
permlink: rss-cnsteem-com
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-25 21:58:15
categories:
- cn
tags:
- cn
- cn-programming
- rss
thumbnail: https://cdn.pixabay.com/photo/2015/08/03/13/55/icons-873314_960_720.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.pixabay.com/photo/2015/08/03/13/55/icons-873314_960_720.png)
*Image Credit: Pixabay.com*

今天 @luneknight 找我说：

> 有个问题
你之前做的RSS 
能不能对cnsteem也做一份呢？
官网确实访问有问题

我一想也是，中文微信群都是中文用户，而且大部分都是国内，访问官网的 steemit.com 时常抽风一样，所以直接替换了 RSS还有排行榜单里的链接为 cnsteem.com。

@skenan 的 cnsteem.com 是直接从官方 github 源代码库 [steem/condenser](https://github.com/steemit/condenser) fork (分叉) i.e. https://github.com/skenan/condenser   。经过这几天的使用，体验的确比官方的稳定多了，究其原因可能是：

1. steemit.com 整体的访问人数要比 CN区的 cnsteem.com 多的多。现在中文区用户不过数百人，相对国外用户还是太小众。
2. cnsteem.com 使用的区块链节点和 steemit.com 的不一样。官方的节点太多人使用了所以相对来说经常拥堵。
3. cnsteem.com 服务器在香港，相对国内访问速度较快。

微信群中文区RSS 通过 @arcange 提供的 [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data) 读取帖子信息，直接读取MSSQL 数据库要比直接读取区块链速度要快得多。 STEEMSQL每10分钟会读取区块链（异步）然后把数据更新到(Inject)到 MSSQL数据库中。RSS还有排行榜等API的结果数据源在英国服务器但结果缓存于 cloudflare edge 服务器上，每小时候更新一次。

朋友，赶紧使用起来吧！
- https://cnsteem.com
- [SteemIt 好友微信群文章列表 RSS Feed](https://helloacm.com/tools/steemit/wechat/rss/)
- [SteemIt 好友微信群排行榜](https://helloacm.com/tools/steemit/wechat/)



> @justyy 是 https://justyy.com 的博主，在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率10%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
3. 今天(2017-10-25) [银行股东名单](https://steemit.com/cn/@justyy/daily-cn-updates-cn2017-10-25)

[中文微信群排行榜还有RSS链接改成 cnsteem.com ](https://justyy.com/archives/5534)
-------------------
- [SteemIt SP Delegation Tool 简易SP代理工具](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)
- **[Steemit 在线工具，API接口和教程](https://helloacm.com/tools/steemit-tools/)**
- **[SteemIt Tutorials, Tools and APIs](https://helloacm.com/tools/steemit/)**


> AD 一波，听说最近 STEEM没有SBD值钱，那赶紧加入 CN区低保银行，成为股东，好处多多，每天收获点赞并且能获得10%的利息（发放SBD），[今日股东列表](https://steemit.com/cn/@justyy/daily-cn-updates-cn2017-10-25)

- - -

This page is synchronized from the post: [中文微信群排行榜还有RSS链接改成 cnsteem.com !](https://steemit.com/@justyy/rss-cnsteem-com)
