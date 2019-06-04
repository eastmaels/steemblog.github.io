
---
title: '为什么钱包的钱变多了？ / Why is the "Estimated Account Value " in the wallet incorrect?'
permlink: why-is-the-estimated-account-value-in-the-wallet-incorrect
catalog: true
toc_nav_num: true
toc: true
date: 2018-11-23 09:26:33
categories:
- cn
tags:
- cn
- steem
- steemit
- wallet
- witness-category
thumbnail: https://cdn.steemitimages.com/DQmTbQYTs7QZRKikJDkdKPYdQJ4XUFWW76jShHQpGrF1bLX/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


这两天最令大家Happy的事情，莫过于大家的STEEM钱包都鼓了！不但鼓了，而且要鼓爆炸了。就拿我的钱包来说吧，一下子有了***四万六千亿美元***。这在整个币圈都处于寒冬之际，无疑给大家带来很多温暖——哪怕这温暖是假的。

![](https://cdn.steemitimages.com/DQmTbQYTs7QZRKikJDkdKPYdQJ4XUFWW76jShHQpGrF1bLX/image.png)
(图源 ：[pixabay](https://pixabay.com/))

其实，大家都知道，这钱包的估值是没啥意义的，因为我们仅有的STEEM POWER、STEEM、SBD都在那呢，不增不减。这些才是可以变现的资产，估值就是个数值，没有一丁点意义。

不过，热闹之余，想必大家都会关心以下两个问题：
* ***到底是什么导致估值突然多了这么多呢？***
* ***这是否会影响我们STEEM账户的财产安全？***

# 估值的计算

为了说明这个问题，我们首先要了解估值是如何计算的，简单来讲，STEEM系统会根据见证人喂价来维持一个3.5日均价/中间价***`current_median_history_price`***，系统把这个价格当做STEEM对美元的价格，因为系统中认为SBD锚定1美元，所以这个价格也被系统当初STEEM对SBD的价格。

好了，简单来讲，这个就相当于黄金交易所的黄金价格，那么我们有多少黄金，就可以用这个价格估算出来我们有多少钱了。

STEEMIT钱包里估值算法也一样，用***`(STEEM+SP)*median_history_price + SBD`***，就是估值了。

# 为什么出错

通过上述分析，我们得出估值计算公式：
***`Estimated Account Value = (STEEM+SP)*median_history_price + SBD`***

我们看一下账户，嗯，STEEM没多，SP没多，SBD没多，那个导致估值多的就只能是一个因素了，亦即***`median_history_price`***

那我们来看看当前***`median_history_price`***是啥样子：
>`{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_current_median_history_price", []], "id": 1}`

返回值：
>![](https://cdn.steemitimages.com/DQmefL4SSRUc5KBApq237YjaRsXgNLqKcgp77q7xBozrztK/image.png)

咦，好像和以往的不太一样啊，***以往的quote部分都是1STEEM***，不过这并没有关系，我们可以用总价除以总量得到当前价格***`median_history_price`***

然鹅，STEEMIT/STEEMJS里计算这个价格简单粗暴地使用了如下代码：
https://github.com/steemit/steem-js/blob/master/src/formatter.js#L103
>![](https://cdn.steemitimages.com/DQmfFkxCwnxbBD1JYSigsakSRJ4sUa9E1KSgjQ2HjbmyhmK/image.png)

也就是说把上述报价中SBD部分的值直接拿了过来，***上边的SBD值是1.2亿，实际应该是0.425左右，所以计算出来的结果都翻了2.8亿倍***。

# 是否影响账户资产安全

通过上边的分析，我们知道这个估值，仅仅是对我们所持有的资产做一下估算，并不对链上数据产生影响，所以我们的STEEM、SP、SBD该是多少还是多少，账户的资产是安全的。

当然，其实我到希望我的账户资产真的多多出几万亿😂

# 正确的估值

我们知道了问题所在，所以如何计算正确的估值也就很简单了，大致把我们账户显示的估值除以2.8亿，就差不多啦。

比如我的账户是四万六千亿美元，那么***实际估值约为：16000美元***，😭哭，一下子缩水无数倍。

(其实这个估值还不是很精确，更精确的可以参考我公众号计算的结果。）
![](https://cdn.steemitimages.com/DQmRspXGZ3DezxhubNprJtV6odXBZUqAteci4yKrht8HuNW/image.png)


# 其它

尽管这个钱包显示的估值对我们而言是~~空欢喜一场~~虚惊一场，但是也提示我们写代码的时候要考虑各种可能的意料之外的事情。

刚刚看了一样，我的一段Python代码中也是这样写的，这样就悲剧了。
![](https://cdn.steemitimages.com/DQmWmfHjkK5oL4fFZBQvejWztvHkpic7B7X3NMqKCi4uLTs/image.png)

还好我公众号的PHP代码都是正确的😀

另外，@smooth @eonwarped 等用户及时发现并在对应的库中提交了修改，感谢他们的辛苦付出，详情请参考帖子下边的参考链接。

# 参考链接

* [Why account values (and a few other things) are messed up](https://steemit.com/steem/@smooth/why-account-values-and-a-few-other-things-are-messed-up)
* [Incorrect price calculation in estimateAccountValue](https://github.com/steemit/steem-js/issues/418)
* [Community - Fix price per steem computation](https://github.com/steemit/condenser/pull/3104)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [为什么钱包的钱变多了？ / Why is the "Estimated Account Value " in the wallet incorrect?](https://steemit.com/@oflyhigh/why-is-the-estimated-account-value-in-the-wallet-incorrect)
