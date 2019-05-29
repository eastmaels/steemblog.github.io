
---
title: "Steem喂价为什么跌不下去？为什么我的钱包价值上亿？"
permlink: steem-htmzerd061
catalog: true
toc_nav_num: true
toc: true
date: 2018-11-27 19:38:00
categories:
- steempress
tags:
- steempress
- cn
- cn-curation
- busy
- cnstm
thumbnail: https://cdn.pixabay.com/photo/2016/11/30/12/16/question-mark-1872665_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center><img src="https://cdn.pixabay.com/photo/2016/11/30/12/16/question-mark-1872665_960_720.jpg" alt="" /><br/>
(Image source :<a href="https://cdn.pixabay.com/photo/2016/11/30/12/16/question-mark-1872665_960_720.jpg">pixabay</a>)</center>

标题是2个问题，但是都是相关的，所以我用这篇帖子解释一下，让大家了解到底STEEM最近发生了什么问题。

<h3>Steem喂价为什么跌不下去了？</h3>

这几天一直奇怪，为什么steem喂价一直保持在$0.41，而市场上steem价格已经跌至$0.3有一段时间了。
看了O哥的帖子,解释了我的疑惑：<a href="https://steemit.com/@oflyhigh/why-is-medianhistoryprice-no-longer-the-median-of-feed-price-my-investigation">Why is median_history_price no longer the median of feed price? </a>

原因在于STEEM的一个机制，就是当Debt Ratio高于10%的时候，Steem喂价按照供应量计算，而不是按照市场3.5日的中间价计算。

计算公式是：<strong>9xSBD数量/STEEM数量</strong>
现在SBD数量是：13,076,278
STEEM数量：285,516,102
套入公式：9x13076278/285516102=$0.412

所以最近喂价一直保持在$0.41左右,而不是随着市场价格下跌。

之前说过一个STEEM自带的SBD回购功能：<a href="https://steemit.com/@ericet/steemworldorgsbd-e7xtcme8eb">Steemworld.org 回购SBD功能</a>
帖子里面说，如果市场SBD价格低于$1的时候就是一个好的时间使用这个功能。
现在我要收回这句话。现在因为喂价已经不按市场3.5日的中间价了，就算SBD价格低于$1,通过回购功能你会获得1/0.41=2.439 STEEM
但是通过STEEMIT内部市场，现在价格在0.4，1 SBD可以获得1/0.4=2.5 STEEM。使用内部市场得到的steem数量比通过回购来的高，而且内部市场是实时的，而通过SBD回购需要等3.5日。

但是使用SBD回购的功能的一个好处是可以销毁SBD，让SBD的数量减少，从而降低steem喂价。

因为这个机制，STEEM系统不会让Debt Ratio超过10%，所以sbd print rate不会清零，收益会一直有至少1%的SBD。

<h3>为什么我的钱包价值上亿？</h3>

最近大家发现自己账号都价值上亿，一个点赞号称价值百万，其实这和上面说到的机制也有关系。

钱包价值的算法是：（STEEM数量+SP数量）x steem喂价+SBD
以往，查喂价的时候，返回的值是：{base:0.41 SBD,quote: 1 STEEM}
quote的部分一直都是1 STEEM，所以大家读steem喂价的时候只拿base的价格（0.41）。

但是这次因为Debt Ratio高于10%了，STEEM系统使用了新的算法，查喂价的时候，返回的值变成了：{base:117686502 SBD,quote: 285516102 STEEM}

base部分就是我们上面提到的公式：9xSBD数量
quote部分是STEEM数量
读取喂价的时候直接拿117686502作为喂价，所以我们看到我们的钱包的价值都上亿的。
要想得出真正的喂价，需要把base/quote，这样喂价就是$0.41了。

想了解更多，可以查看o哥的帖子<a href="https://steemit.com/@oflyhigh/why-is-the-estimated-account-value-in-the-wallet-incorrect">为什么钱包的钱变多了？</a>

特别感谢O哥@oflyhigh的2篇帖子解释了我心中的迷惑！

请大家给@oflyhigh投见证人的票！
信O哥，得永生！
投票请点击：https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&amp;approve=1 <br /><center><hr/><em>Posted from my blog with <a href=&#039;https://wordpress.org/plugins/steempress/&#039;>SteemPress</a> : http://ericet.vornix.blog/2018/11/27/steem%e5%96%82%e4%bb%b7%e4%b8%ba%e4%bb%80%e4%b9%88%e8%b7%8c%e4%b8%8d%e4%b8%8b%e5%8e%bb%ef%bc%9f%e4%b8%ba%e4%bb%80%e4%b9%88%e6%88%91%e7%9a%84%e9%92%b1%e5%8c%85%e4%bb%b7%e5%80%bc%e4%b8%8a%e4%ba%bf/ </em><hr/></center>         

- - -

This page is synchronized from the post: [Steem喂价为什么跌不下去？为什么我的钱包价值上亿？](https://steemit.com/@ericet/steem-htmzerd061)
