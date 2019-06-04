
---
title: '一起来玩内部市场吧！/ Let\'s play the internal market'
permlink: let-s-play-the-internal-market
catalog: true
toc_nav_num: true
toc: true
date: 2017-10-18 03:49:15
categories:
- cn
tags:
- cn
- market
- money
- dream
- life
thumbnail: https://steemitimages.com/DQmdrc7b9hmHxT6FR5uTQAKXg3kxR7MvsCyvLW13ZiuuuYr/money-2724235_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


大概50天前，我开始了我内部市场交易之旅。

我写了个***很傻很傻的机器人，来帮我打理资产***，最开始投了500个SBD以及500个STEEM 做启动资金。

因为判断STEEM以及SBD的外部市场价格过于麻烦，而SBD基本上是锚定美元的，所以我基本上的策略就是以SBD作为价格基准，以STEEM作为交易商品，低价买入高价卖出。

![](https://steemitimages.com/DQmdrc7b9hmHxT6FR5uTQAKXg3kxR7MvsCyvLW13ZiuuuYr/money-2724235_1280.jpg)
(图源：[pixabay](https://pixabay.com))

# 盈亏计算方法

由于STEEM外部价格波动比较大，如果把总资产（STEEM+SBD)核成投入时的SBD价格，那么很难对比出内部市场操作是否成功。

所以我采取投入的(STEEM,  SBD)两个项目的各自实际数量作为标准，来计算盈亏。

举例说：
时间点| STEEM|SBD|Price|合计盈亏(SBD)|总计(SBD)
---|---|---|---|---|---
初始投入|500| 500| 1.5|0|1250
时间点1|600|580| 1.0| 180 |1180
时间点2|400|560| 1.3| -70|1080

***合计盈亏***计算公式： 
***`(steem_current - steem_initial) * price + sbd_current - sbd_initial`***

以***初始投入***和***时间点1***为例，假设按照总SBD估值合算，时间点1我的SBD总数值1180少于初始值1250，看起来貌似亏了。

但是无论是STEEM还是SBD的数量`（600，580）`，都比我投资的时候`（500， 500）`要多，所以在时间点1，我的操作是成功的。所以我引入的***合计盈亏，比较能反应操作的成功与否***。

# 流动性问题

投入也投入了，计算方法也出来了，交易也开始进行了，结果发现我的写的交易程序，很快就把我的流动资产吃光光了。如果没有流动性，价格低的时候我没有SBD来买入，价格高的时候我没有STEEM来卖出，那么我的交易策略就没法执行下去了，于是我不断的追加投入。直到投入到***`4000 STEEM`***以及***`4000 SBD`***，才基本上可以保证流动性。

这投入有点方，为了保证流动性，我决定追加到***5000 STEEM***以及***5000 SBD***，然而手头目前没这么多SBD和STEEM，只好等有的时候再追加。


# 实际运行情况

程序跑起来之后，我眼睁睁的看着它每天帮我赔钱，但是投资是个很长远的事情，不能因为一时得失就下出结论，于是我饱含热泪坚持着让它赔钱玩。

直到我STEEM和SBD双双缩水，按上述方法计算，***合计盈亏超过-1000SBD***
我忍痛把它关掉了。

痛定思痛，我下决心对策略进行完善，最后发现要考虑的简直太多了，还是继续按傻瓜方式来吧，于是简单的调整了一下参数，继续开跑，然后就懒得理他了。

今天看了一下，当前资产情况：
***`Total STEEM: 3969.256`***
***`Total SBD: 4596.318`***

当前内部市场STEEM价格为：***`1.078`***


代入我上述公式，结果为： ***`562`***

什么，我竟然赚钱了？这可真是天大的喜讯啊。看了一下机器人跑了近50天，假设价格恒定，计算一下年化收益，哇哦，竟然***高达50%***。长此以往，我岂不是要成为STEEMIT第一大鲸鱼了？

# 结束语

![](https://steemitimages.com/DQmWvzn1cdSFzLmgPBw2EgybRpxsCKWLBnLUGYkNb8GB6tK/keyboard-621830_1280.jpg)
(图源：[pixabay](https://pixabay.com))

好啦好啦，醒啦醒啦，什么50%的年化收益，什么STEEMIT的第一大鲸鱼统统是白日梦了。

真实的情况是，这个 ~~赔钱~~ 赚钱程序，完全不受我的控制，***它想赔就赔，想赚就赚，完全不顾及我的感受***。之所以玩这个以及写这篇文章，权且当作是一次探索。另外想告诉大家，***内部市场真的很好玩***。

另外，梦想总是要有的，万一实现了呢？别喊醒我，让我想想赚50%，我要咋庆祝一下呢？

还有，一起来玩吧！

- - -

This page is synchronized from the post: [一起来玩内部市场吧！/ Let\'s play the internal market](https://steemit.com/@oflyhigh/let-s-play-the-internal-market)
