
---
title: '持有STEEM的我当了回股东/STEEM DPOS'
permlink: steem-steem-dpos
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-30 03:27:24
categories:
- cn
tags:
- cn
- steem
- steemit
- blockchain
- blog
thumbnail: https://steemitimages.com/DQmdTDJZKxjwnKYtztm4hqrWdfHKsobWiSrwkkK3yFQeRKs/s.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Steem与BTC的的共识机制

---

在steem的蓝皮书里提到，相比于工作量证明POW（比特币的共识机制），steem能提供更大规模和更快速度的算法，即委托权益证明股权（DPOS）。

关于[POW工作量证明](https://mp.weixin.qq.com/s?__biz=MzI1MDQwOTU2OA==&mid=2247485009&idx=1&sn=cdbcbfc3330f0f2b5664b09fb13e64fe&chksm=e983e15edef46848f4f7f8afc6d6c6de8fa0ac951cf2b41cc6b8b61380b19aab3fa85ab1457c&scene=21#wechat_redirect)等，有很多介绍，这里我来说说自己的理解。

简单来说，这个共识机制就是在解决到底**谁来给各种信息**（区块链里的各种交易、转账，steemit里的点赞，转账，评论等等都是区块链里产生的信息）**安全记账的问题**。

在中心化的世界里，记账是由中心来解决，比如班上的考勤记录由学习委员来记录，如果学习委员哪天生病了没来上课，那么那天的考勤记录就没人管了。

所以，区块链发明了一种去中心化的记账方式来应对中心化的系统风险。很多人共同来记账，其中一个人记账有问题或者其中一个人生病了都不会影响整个系统，记账有报酬鼓励更多人参与。

去中心化的记账又有很多种方式（共识算法），最熟悉的就是比特币的工作量证明POW，另外steem、bitshares、EOS、公信宝都是委托权益证明股权DPOS。那么这两个共识机制是怎么约定谁来记账的呢？

POW共识算法的比特币就是找出一个最能算题的来记账，而这个最会算账的可以不拥有比特币或者也可以不了解比特币，反正只要他最会算题就可以了。

DPOS共识算法的Steem要想记账，需要持有股份（steem代币）先来竞选，所有持有代币的人可以投票来决定谁来记账。所以，持有DPOS代币就是类似于持有这个公司的股份，你大量拥有steem代币就拥有竞选的筹码。所以区别于POW，DPOS共识算法里记账人必须是股东。

## Steem共识机制的见证人

---

Steem记账这个职业，在steem里叫做见证人，见证人被选出来负责创建与签核交易区块。

Steem的白皮书是这样描述的：
>Steem的区块链生存采用轮流制，每一轮，21位见证人被选出来负责创建与签核交易区块。见证人当中的二十位以用户投下的赞成票数选出，另一位则由所有票数未达到前二十名的见证人分时担当。21位见证人每轮完一圈之后，都会重新排序，以避免任何一位见证人持续忽略某个顺位的见证人所生产的区块。见证人一旦错过某个区块且在过去24小时内未生成区块，就会丧失资格。

简单理解上面的一句话就是，由股东们选出前20名见证人+一位后20名中的随机人来记账。3秒钟生产出一个区块，一个人记录一次，21个见证人按约定的顺序轮完一圈后，顺序打乱继续轮圈。

Bitshares是101位见证人，EOS和公信宝也都是21位见证人。一个见证人就是一个网络节点。

## 持有Steem代币在DPOS共识机制中可以扮演什么角色

---


1）只要你持有SP，你可以投上你宝贵的一票

2）可以把你的票数代理给别人帮你行使投票权利（看到这是不是觉得EOS也提到过）

听着好像是美国全民选举和中国的人民代表选举的结合体。也可以理解为你持有SP就相当于持有Steem这个公司的股份，你拥有的股份可以参与投票选举产生哪些人来给这个公司记账。

https://steemit.com/~witnesses 可以看到所有的见证人名单，网页只显示了前50位见证人。

![s.png](https://steemitimages.com/DQmdTDJZKxjwnKYtztm4hqrWdfHKsobWiSrwkkK3yFQeRKs/s.png)

每个人可以投票给30位witnesses（见证人），比如图上我已经投出去3票，其两票给了中文区的大鲸鱼@abit和@arcange，目前abit排在27位。50名以内的投票可以直接点图上的点赞标识。

![s1.png](https://steemitimages.com/DQmUHu5BoJPw2h3gFDmuoLd8zCuwMmP3CsM6ni4kMknzbLf/s1.png)

如果你想投的witnesses（见证人）在50名外，可以直接输入用户ID，点VOTE来直接投票，SET PROXY是你可以把票数代理给别人帮你行使投票权利，比如代理给@oflyhigh。

持有Steem就可以行使股东权力，我投出了宝贵的3票，算是爽了一把股东的感觉（虽然我是小虾米，票数没啥毛用）。

## 小结

---


1）区块链里的共识算法可以简单理解为用来解决谁来记账的问题。

2）比特币属于POW(工作量证明)，steem、bitshares、EOS、公信宝都属于DPOS。

3）POW是谁会算题谁来记账，DPOS是股东竞选来记账。

4）DPOS里的见证人职责是负责创建与签核交易区块，一个见证人就是一个记账的网络节点。

5）普通持币人在Steem的DPOS共识机制中可以扮演什么角色，可以类比来理解你拥有的BTS、EOS等代币，不是简单的交易市场买和卖，你还是一个可以行使权力的股东。

---

文章首发在 @speeding的公众号（原文链接：[持有steem的我当了回股东](https://mp.weixin.qq.com/s/wLwXTPQr_0JWKaXMTWNLOw))，被他勾引写过几篇关于steemit的文章。

[Steemit注册教程](https://mp.weixin.qq.com/s?__biz=MzI1MDQwOTU2OA==&mid=2247485101&idx=1&sn=d8c7342cb5adc1f70f3c0595d33a5495&chksm=e983e1a2def468b4c988b3cc4b41f048ff50f9b878bd7329864d3665df857404ca72e39b2d92&scene=21#wechat_redirect)
[Steemit上写作你需要知道的一些事](https://steemit.com/cn/@yellowbird/steemit-about-steemit-writing)
Steemit里的三种货币
[Steem交易转账操作](https://steemit.com/cn/@yellowbird/steem-about-blocktrades)
[Steem与Bitshares](https://steemit.com/cn/@yellowbird/steem-and-bitshares)
[steemit写文排版常用技巧](https://steemit.com/cn/@yellowbird/3aeewa-steemit)

- - -

This page is synchronized from the post: [持有STEEM的我当了回股东/STEEM DPOS](https://steemit.com/@yellowbird/steem-steem-dpos)
