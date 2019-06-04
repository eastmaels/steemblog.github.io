
---
title: '如何通过Openledger使用STEEM或者SBD购买BTS? / How to buy BTS with STEEM or SBD via Openledger?'
permlink: openledger-steem-sbd-bts-how-to-buy-bts-with-steem-or-sbd-via-openledger
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-01 11:27:39
categories:
- openledger
tags:
- openledger
- bts
- bitshares
- market
- cn
thumbnail: https://steemitimages.com/DQmYY35Lg8iYYhEdnLQU1DYpc7PQNyXs79DvoH2VWjTMkcy/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天说到BTS涨势喜人，准备追加一点玩玩，结果还没操作明白呢，BTS猛拉一波，拉得猝不及防啊。

老司机不等我就发车(~~污污污污污污~~呜呜呜呜呜呜) ，如果昨晚我追加10亿枚BTS，一早起来，我岂不就成了亿万富翁了？？（***醒醒醒醒，天亮了***）

话说，看我昨晚帖子加仓并成了亿万富翁的兄弟姐妹们不表示一下吗？转个0.01SBD也行啊。😭

----

吐完苦水了，步入正题。

昨天给大家介绍了:
* [如何通过blocktrades使用STEEM或者SBD购买BTS? / How to buy BTS with STEEM or SBD via blocktrades?](https://steemit.com/blocktrades/@oflyhigh/blocktrades-steem-sbd-bts-how-to-buy-bts-with-steem-or-sbd-via-blocktrades)

有同学在回复中说汇率不好，不过能上车就行呗，就好比我，还在纠结汇率啥的呢，人家车已经开远了，追悔莫及啊。***论便捷，我个人认为 @blocktrades 当之无愧的第一啊***。

但是，多种选择总是没错的，今天我给大家介绍另外一个方式，那就是使用 ***Openledger***


相比blocktrades的简单粗暴，使用***Openledger*** 略麻烦。

大体***`步骤如下：`***

* 生成***`open.STEEM`***充值地址及MEMO
* 转账STEEM到对应地址
* 去内部市场将***`open.STEEM`*** 交易成***`BTS`***

是不是略繁琐？ 下边我们逐步介绍：

# 生成***`open.STEEM`***充值地址及MEMO

***本文假设你已经有了BTS账户***

![](https://steemitimages.com/DQmYY35Lg8iYYhEdnLQU1DYpc7PQNyXs79DvoH2VWjTMkcy/image.png)

* 进入并登陆网页钱包（没错，我用网页钱包，其它的还不会用呢）
* 选择***`Deposit/Withdraw`***
* 在***`Transfer Service`***中选择***`Openledger(OPEN.X)`***
* 在***`Please select the coin you would like to deposit`*** 中选择***`STEEM`***
* 查看右侧的***`Deposit instructions`***

# 转账STEEM到对应地址

在上述步骤中，我们生成了转账地址和MEMO，以我的账户为例：
转账地址：***`openledger-dex`***
转账备注：***`0wb59s-d940-rph9e6hb-3ju1ugr6`***

![](https://steemitimages.com/DQmWcLhML9CSMUv6AKU1sMRS5CAsS8G2pFPzCohmzS4MNXw/image.png)
进入STEEM的钱包，选择转出STEEM，输入***`转账地址、转账金额、转账备注`***

输入***`Active Key或者主密码`***完成转账。

# 去内部市场将***`open.STEEM`*** 交易成***`BTS`***

完成转账后，略等待，***`open.STEEM`*** 就会出现在你钱包对应账户的资产中。

这时候，我们就可以去BTS内部市场中，将***`open.STEEM`***卖掉，卖出***`BTS`***了。

可以选择如下方式：
* ***`open.STEEM`*** <==>  ***`BTS`*** 交易对
* ***`open.STEEM`*** <==>  ***`open.BTC`***  <==>  ***`BTS`***

至于哪种方式更合算，我的智商是无力评估了，感兴趣的可以自己写段程序计算一下。

我选择的是***`open.STEEM`*** <==>  ***`BTS`*** 交易对

在***`Sell open.STEEM`*** 处填入***`价格、数量`*** 后点击SELL按钮提交订单。
![](https://steemitimages.com/DQmVy5ZGFJXgdzjTUYtTHG7fCRwuz6GLVN6c76vxJMkUHc3/image.png)

按提示输入密码并确认提交
![](https://steemitimages.com/DQmYu1anbYdhaPwkykniRgYwu5YBHAPogpfgdhr7kkCZj5E/image.png)

然后如果你订单挂的价格适合，耐心等待成交即可。

# 

# 注意事项

* 不同于***[blocktrades](https://blocktrades.us/)*** 简单粗暴的购买，使用Openledger方式略繁琐。
* 在市场交易，***可能会因为挂单价格不合理，导致一直无法成交***。
* 登陆网站以及进行转账操作时，请务必仔细***核实网站地址、转账地址以及MEMO的正确性***
* 本文中的转账地址和MEMO仅为示例，你***应该按操作步骤生成自己的地址和MEMO***
* ***不要使用`open.SBD`，交易量太小***，如果要用***`SBD`***，请先在STEEMIT的内部市场用***`SBD`***购买***`STEEM`***

顺便说一句，***`BTS`***涨势喜人，我个人觉得大有钱途，但是***`STEEM`***我觉得也是不可多得的潜力股。如何操作，自己决定，***风险自负，本文不构成投资建议***。

- - -

This page is synchronized from the post: [如何通过Openledger使用STEEM或者SBD购买BTS? / How to buy BTS with STEEM or SBD via Openledger?](https://steemit.com/@oflyhigh/openledger-steem-sbd-bts-how-to-buy-bts-with-steem-or-sbd-via-openledger)
