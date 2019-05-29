
---
title: "现在发帖得到的SP/STEEM受feed price的影响吗？"
permlink: spsteemfeedprice-gicm9vlirb
catalog: true
toc_nav_num: true
toc: true
date: 2018-08-27 19:34:06
categories:
- steempress
tags:
- steempress
- busy
- cn
- cn-curation
- steemit
thumbnail: https://steemitimages.com/0x0/https://steemitimages.com/DQmQzJrSMkdMiwXXih35wfYwZVAjtf2aqqDW23MauhchK6G/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


最近因为Debt Ratio（SBD数量/STEEM市值）高于5%，所以现在帖子的收益没有SBD了。

因为没有SBD，帖子收益只剩下STEEM/SP。所以我在想，帖子得到的SP/STEEM会不会受feed price的影响而减少或者增加呢？

看了一下帖子收益的计算公式：

<img src="https://steemitimages.com/0x0/https://steemitimages.com/DQmQzJrSMkdMiwXXih35wfYwZVAjtf2aqqDW23MauhchK6G/image.png" alt="" /><br/>
<img src="https://steemitimages.com/0x0/https://steemitimages.com/DQmeg1KkdmzzCHjB3FHKT5KEjGkGu7kzCbxsNL9TgFMjAkZ/image.png" alt="" /><br/>
<center>(image source: @xiguang)</center>

如果在100%SP的情况下，不算curation收益，
得到的SP=Psbd/price
而Psbd=Psteem*price（Psteem=Psbd/price）
通过以上2个公式，我们可以得出SP==Psbd 
所以feed price是涨是跌对于收到的SP/STEEM的数量是没有影响的。

唯一可能影响SP/STEEM的是Psteem，而Psteem取决于RS（total Rshares），Rb（Reward Balance），Rc（Recent Claims）。
RS是帖子收益总和，以rshares为单位。
Rb（Reward Balance）是每年Steem通货膨胀所产生的STEEM，大概每3秒产生 1.668 STEEM 加到奖金池里。
Rc（Recent Claims）是所有帖子回复还没有结算的收益总和。以Rshares为单位。

<blockquote>
  Psteem=RS*Rb/Rc

</blockquote>

从这个公式可以看出来，如果Rc的涨幅比Rb快，得到的Psteem就会少。
什么情况下Rc的涨幅会比Rb快呢？
当很多人发帖的时候或者很多大鲸大力给帖子点赞。

之前大神 @abit 和 @smooth做了一个实验。这个实验里，2位大神专门踩大鲸们的点赞，弄得大鲸们都不敢点赞了。
这些大鲸们不敢点赞以后，Rc涨幅变缓了，小鱼们得到的收益就增加了。

虽然是一个很任性很土豪的实验，但是为我们实验了Rc的重要性。

为了证明上面的公式的正确性，我也做了一个实验。虽然已经从公式里已经知道结果了，但是我们还是要小心求证一下。
实验很简单，给帖子买赞，观察7天收益。
在minnowbooster买了0.988 SBD的赞，当时显示得到$1.36的点赞。
因为受了feed price的影响，每日帖子显示收益都有点浮动，但是得到的SP/STEEM倒是稳定在0.56SP/0.56STEEM左右。
<img src="http://ericet.vornix.blog/wp-content/uploads/2018/08/feed-price.png" alt="" /><br/>

最终7日后，结算的时候，得到0.563SP和0.563STEEM。
大家可以观察一下下面的数据。得到收益比较高的那次是Reward Balance比较高，而Recent Claims比较少。（原因可能是因为那天utopian的代理被抽回去，所以停止点赞，因此Recent Claims就少了）
<img src="http://ericet.vornix.blog/wp-content/uploads/2018/08/price.png" alt="" /><br/>

我们在做几个假设：
1. 当reward balance和recent claims一样，但是feed price不同的时候，得到的SP/STEEM是一样的。
<img src="http://ericet.vornix.blog/wp-content/uploads/2018/08/h1.png" alt="" /><br/>

<ol start="2">
<li>当reward balance涨了，但是recent claims和feed price保持不变的时候，得到的SP/STEEM会多。
<img src="http://ericet.vornix.blog/wp-content/uploads/2018/08/h2.png" alt="" /><br/></li>
</ol>

如果你看不懂上面的公式和数据，那我直接在这里告诉你结论吧。
1. 当系统收益不再生产SBD的时候，得到的SP/STEEM不受feed price的控制。feed price是涨是跌完全不影响你将要得到的SP/STEEM的数量。
2. 当系统收益不再生产SBD的时候，唯一影响的因素是大鲸们是否在全力点赞。如果大鲸们都不点赞，小鱼们得到的SP/STEEM数量就多。

 <br /><center><hr/><em>Posted from my blog with <a href=&#039;https://wordpress.org/plugins/steempress/&#039;>SteemPress</a> : http://ericet.vornix.blog/2018/08/27/%e7%8e%b0%e5%9c%a8%e5%8f%91%e5%b8%96%e5%be%97%e5%88%b0%e7%9a%84sp-steem%e5%8f%97feed-price%e7%9a%84%e5%bd%b1%e5%93%8d%e5%90%97%ef%bc%9f/ </em><hr/></center>        

- - -

This page is synchronized from the post: [现在发帖得到的SP/STEEM受feed price的影响吗？](https://steemit.com/@ericet/spsteemfeedprice-gicm9vlirb)
