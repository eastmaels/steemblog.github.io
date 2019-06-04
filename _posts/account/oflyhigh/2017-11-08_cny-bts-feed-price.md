
---
title: '微信公众号增加CNY/BTS喂价(Feed price)查询功能啦！ / 防止爆仓啊😱'
permlink: cny-bts-feed-price
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-08 13:23:57
categories:
- bitshares
tags:
- bitshares
- bts
- wechat
- price
- cn
thumbnail: https://steemitimages.com/DQmQDfXqu6RD7mdG6b6BKJQUs5f6XRKdFH4QRuW5ioiLiZT/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前发过一篇帖子：
* [如何抵押BTS借出免息人民币？（如何归还，如何调整保证金，如何避免爆仓？）](https://steemit.com/bitshares/@oflyhigh/bts)

眼看BTS价格就要起飞，但是RMB如何入金还没太搞明白，用STEEM啥的转，还舍不得STEEM，毕竟感觉STEEM也在低点啊。

于是我一狠心，***抵押BTS，借了点人民币，买BTS***。

之前有说过，***抵押借款存在爆仓的风险***，主要和两个因素有关：

![](https://steemitimages.com/DQmQDfXqu6RD7mdG6b6BKJQUs5f6XRKdFH4QRuW5ioiLiZT/image.png)
分别是***`喂价(Feed price)`***和***`(你的强平触发价)Your Call Price`***

其中***`(你的强平触发价)Your Call Price`***和你保证金比例有关。

我尝试找出其中的关系：
* 保证金比例 = 抵押的BTS * 喂价 / 借款金额
* 当保证金比例低于1.75，就可能触发强平
* 由此推断，强平触发价  = 借款金额 * 1.75 / 抵押的BTS

亦即我们得到两个公式：
* 公式一： ***`保证金比例 = 抵押的BTS * 喂价 / 借款金额`***
* 公式二： ***`强平触发价  = 借款金额 * 1.75 / 抵押的BTS`***

通过公式二可得，***强平触发价是我们借款的时候就确定的了***，除非我们调整借款金额和抵押的BTS数量，否则这个价格是不变的。

那么为了避免爆仓，我们只需关心喂价即可。

那么问题来了，***除了登陆网页钱包，我们怎么获得喂价呢？*** 我好害怕爆仓。😱

--------

经过一番刻苦专研以及得到专业人士的指点，我终于搞明白从bitshares系统读取喂价的方法啦。***我将喂价集成到公众号查询当中***，以后我随时可以查看喂价啦，一旦发现喂价临近爆仓价，我就得想办法处理啦（话说有啥办法？我的BTS都被抵押呢）


# 如何使用

为了简单易用，我将喂价直接集成到bts价格查询功能中：


公众号输入***`?bts`***指令，就可以返回***BTS对CNY的价格以及喂价***了。
***（注：价格信息来自于比特股内盘）***

示例如下：
![](https://steemitimages.com/DQmUEAJ5B6fbo6kMbrzoBh5CNppFnEaaHXyB7SvxCrd4UgP/image.png)

红色方框部分就是喂价，是不是超级简单？？

价格又涨了，好开心。😀

BTS上车的小伙伴们快来试试吧，无聊的时候还可以[调戏机器人](https://steemit.com/cn/@oflyhigh/turing-chat-robot)，让他逗你开心哦。

# 相关文章

* [如何通过blocktrades使用STEEM或者SBD购买BTS? / How to buy BTS with STEEM or SBD via blocktrades?](https://steemit.com/blocktrades/@oflyhigh/blocktrades-steem-sbd-bts-how-to-buy-bts-with-steem-or-sbd-via-blocktrades)
* [如何通过Openledger使用STEEM或者SBD购买BTS? / How to buy BTS with STEEM or SBD via Openledger?](https://steemit.com/openledger/@oflyhigh/openledger-steem-sbd-bts-how-to-buy-bts-with-steem-or-sbd-via-openledger)
* [学习一下BTS的远程过程调用 / Learn the remote procedure call of BTS](https://steemit.com/bitshares/@oflyhigh/bts-learn-the-remote-procedure-call-of-bts)
* [你无聊吗？无聊的话来调戏机器人玩吧 ( 萌蛋回来了) / Turing chat robot](https://steemit.com/cn/@oflyhigh/turing-chat-robot)


# 公众号添加方法

公众号在不断完善中，会提供越来越多的功能和便利

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
![qrcode_for_gh_9f88179d5c6a_344.jpg](https://steemitimages.com/DQmPH3g5AFW9v9bTGhiMGSUHZL6zdUbPoZpqFEvoH1dCHd2/qrcode_for_gh_9f88179d5c6a_344.jpg)

- - -

This page is synchronized from the post: [微信公众号增加CNY/BTS喂价(Feed price)查询功能啦！ / 防止爆仓啊😱](https://steemit.com/@oflyhigh/cny-bts-feed-price)
