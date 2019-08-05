
---
title: 'Lens v0.1.1 新功能：我的订单、交易记录、货币汇总 | Lens v0.1.1 new features: Personal Open Orders, Trade History and Token Summary'
permlink: lens-v0-1-1-or-lens-v0-1-1-new-features-personal-open-orders-trade-history-and-token-summary
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-02 08:55:21
categories:
- steem-engine
tags:
- steem-engine
- steem
- steemleo
- sct
- cn-reader
- cn
- palnet
- zzan
- mediaofficials
- actnearn
- marlians
- neoxian
- lassecash
- busy
thumbnail: 'https://cdn.pixabay.com/photo/2017/09/15/08/53/photography-2751464_1280.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


本文介绍 Lens 项目的最新功能：个人的订单、交易记录、货币汇总。

关于 Lens 项目的简单介绍，可以参考文章：[Lens: 用数据看清世界 | Lens: A Clear World via Data](https://busy.org/steem-engine/@robertyan/lens)，用基于 Steem Smart Contract、Scotbot 的数据，看清项目、组织、市场等的真实情形，了解过去、预测未来。

![](https://cdn.pixabay.com/photo/2017/09/15/08/53/photography-2751464_1280.jpg)
<sup>image source: [Pixabay](https://pixabay.com/zh/photos/%E6%91%84%E5%BD%B1-%E7%85%A7%E7%89%87-%E5%A5%B3%E5%AD%90-%E7%9B%B8%E6%9C%BA-2751464/)</sup>

项目的链接更新为了：   https://tribes.rocks/lens/  

- 例如： https://tribes.rocks/lens?page=open_order&account=aggroed


### 更新 New Features

本次更新是由于群里讨论时，提到希望可以查看个人的未完成订单、交易记录等功能。这些功能可以很快基于原有的功能实现，所以花了较少的时间，很快发布了这个新版本。

### 我的未完成的订单 My Open Orders

虽然我参与Steem Engine的交易并不积极，但有时也会忘了自己挂着哪些订单了，所以能比较方便地看到自己的订单的话，还是挺有用的。大家可以通过下面这个链接，查看自己的未完成的订单，将 {account} 替换成自己的账户：

- http://tribes.rocks/lens?page=open_order&account={account}

当然，对于擅长利用公开数据研究市场和个人行为的朋友，也可以用它来观察其他交易者（trader）的行为。

例如：我们可以看看 @aggroed 挂了哪些订单：http://tribes.rocks/lens?page=open_order&account=aggroed

![image.png](https://files.steempeak.com/file/steempeak/robertyan/1abptnyV-image.png)

原来 @aggroed 也在购入 PAL :)

### 我的交易记录 My Trade History

Steem Engine 似乎没有一个明显的入口可以查看自己的交易记录，但这应该也是个常用功能。个人交易记录和某个token的交易记录的查询方式很接近，在这里，我们使用下面这个链接就可以，或者在页面中点击 Trade History这个链接。

- https://tribes.rocks/lens?page=trade_history&account={account}

例如，我们可以通过这个链接：http://tribes.rocks/lens?page=trade_history&account=aggroed 查看 aggroed 的交易记录。

但需要注意的是，我们查询交易记录时目前使用了一个 steem-engine.rocks 的查询 transaction 的接口，但 steem-engine.rocks 的这一近日来非常不稳定，所以很可能暂时无法访问到交易记录信息，所以可能要稍后再做尝试了。所以我这里没有办法提供有效的页面截图。。。

但是，我们原来就计划搭建一个新的数据服务，所以之后会用新的数据接口来替换 steem-engine.rocks 的接口，应该能够解决这个访问的稳定性和性能的问题。

### “又一个”货币汇总 | Yet Another Token Summary

上一篇文章中，我们提到有一个改进过的 Rich List 用于展示某个 token 的持有者的情况。这里我只是替换了一个参数，便能看到对应的个人的所有 token 的信息。

这个功能和 Steem Engine的Wallet接近，但并不是很完善，目前的用处可能是帮助我们查看一些 Steem Engine 上并不容易查看的数据的整体情况。

比如，我想看看村长 @ericet 给 CN区的集资号代理了多少 token：https://tribes.rocks/lens/?account=ericet&page=rich_list

![image.png](https://files.steempeak.com/file/steempeak/robertyan/LmR62uAB-image.png)

又例如，原来 @ned 持有了大量的 NED 币。https://tribes.rocks/lens/?account=ned&page=rich_list

![image.png](https://files.steempeak.com/file/steempeak/robertyan/ZkoLwAN7-image.png)

### 计划 Plan

上面这3个新功能也是较为简陋的，Lens 这个服务也很早期，将持续进行优化。

大概的计划在上一篇中已经提及，这里稍作更新和细化。

1. 完善个人市场和货币信息的查询：添加新的页面，如Delegation, Transfers, Connections（账户间的联系）。
2. 完善对 token 市场和项目的分析：投资价值（投资回报比例）、持有者的动态、项目动态等等，以辅助投资决策；
3. 有趣的数据科学专题，如 steemspeak 的价格波动分析。目前我们有一个“数据科学”小组正基于兴趣进行这方面的研究和探索。如有兴趣，欢迎加入我们。
4. 改进服务界面，添加 token 的选择、用户登录、改进整体的页面风格和交互等。

如果你对这个工具感兴趣，或者有别的想要看到的信息，不妨留言告知我们。

最后，Lens 的地址是：https://tribes.rocks/lens/  

如果要查看token和账户相关信息，请修改token和account相关的参数，如本文和前一篇文章[Lens: 用数据看清世界 | Lens: A Clear World via Data](https://busy.org/steem-engine/@robertyan/lens) 的案例中所介绍的。

- - -

This page is synchronized from the post: ['Lens v0.1.1 新功能：我的订单、交易记录、货币汇总 | Lens v0.1.1 new features: Personal Open Orders, Trade History and Token Summary'](https://steemit.com/@robertyan/lens-v0-1-1-or-lens-v0-1-1-new-features-personal-open-orders-trade-history-and-token-summary)
