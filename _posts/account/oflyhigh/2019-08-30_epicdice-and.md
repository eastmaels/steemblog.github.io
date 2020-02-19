
---
title: 'EpicDice因为被掏空而暂停 & 简单分析一下来龙去脉'
permlink: epicdice-and
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-30 02:50:03
categories:
- cn
tags:
- cn
- epicdice
- gamble
- game
- sct-cn
thumbnail: 'https://cdn.steemitimages.com/DQmaX4MRPNsh6ie3wpc9Nwjb6Dd2NUZViAr8QZd9esdCHcT/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天看了刘美女@deanliu的帖子[[EpicDice] 內心不夠亂，暫時停止營業](https://steemit.com/sct/@deanliu/238y5u-epicdice)，我不由得想起了一首老歌《我的心太乱》。


![](https://cdn.steemitimages.com/DQmaX4MRPNsh6ie3wpc9Nwjb6Dd2NUZViAr8QZd9esdCHcT/image.png)
(图源 ：[pexels.com](https://www.pexels.com/))

>我的心太乱
要一些空白
你若是明白
让我暂时的离开
我的心太乱
不敢再贪更多爱
想哭的我
却怎么哭也哭不出来

扯远了，不知道EpicDice的人 @epicdice是不是想哭，是不是想哭却怎么也哭不出来？😳

综合一下刘美女的帖子以及@themarkymark 的帖子[Epic Dice shut down due to witness cheating](https://steemit.com/gambling/@themarkymark/2wz3mk-epic-dice-shut-down-due-to-witness-cheating) 还有@mys 自辩贴[How 'Above 99' player outplayed Epic Dice](https://steemit.com/gambling/@mys/how-above-99-player-outplayed-epic-dice) 我大致理清了来龙去脉。

# 漏洞原理

首先，一定是EpicDice为了可证明的公平(Provably-fair)公布了验证程序，这很正常，如果投注和开奖不可验证，那么服务提供商就有可能在后台控制开奖结果，就没有所谓的公平可言了。

而这整个开奖/验证机制呢，都是基于区块链上一个不可更改的条目，就是操作的transaction ID，简称txid，举例说我发文章或者投票等操作，都会生成一个txid，当广播到区块链上，这个东西被写入区块就再也无法修改了。并且txid的生成具有一定的随机性，所以看起来很适合做掷色子应用。

不过问题就出在这里，尽管txid的生成有一定的随机性，但是***txid这个东西是在广播到网络之前就被生成的***，也就是说是在本地生成的。

举例说做一个猜大小游戏，规则是我生成一个10以内的随机数，然后告诉你，然后大于等于5我赢，小于5你赢。但是我生成随机数之前过滤一下，生成小的我再重新生成一次，再告诉你，那这样我就稳赢。

# 来龙去脉

@mys 就是用的类似操作，在本地构造转账(投注)交易，然后去生成transaction，然后去判断生成的txid是否符合中奖规则，符合中奖规则就广播，否则就重新生成，这样就是稳赚了。

至于生成txid的原理，我在之前的一篇文章中曾经有过介绍：[如何从steem transaction 获取txid?](https://steemit.com/steemdev/@oflyhigh/steem-transaction-txid)。

>也就是说，将Signed_Transaction的签名部分清空，序列号后生成摘要，取摘要的前20个字节，并转换成16进制字符串形式(40个字节)。

尽管我的文章中说的是从transaction中计算出txid，但是自己构造transaction并计算txid其实是一样的，至于***同样的transaction为什么可以生成不同的txid，这个其实也很简单，只要修改expiration这个时间因素就可以***。

@mys的文章中公布了代码，是用beem实现的，非常简单。

所以简单总结一下就是：
* EpicDice 使用txid作为计算中奖的依据
* txid可以本地生成，生成符合中奖条件的txid再广播，就会稳中
* @mys利用这个漏洞稳赚了一笔
* 任何人都可以这样操作

至于@mys这么做是否厚道，本文不做评论。

我只想说的是，***这事真的和见证人没有一毛钱关系，见证人不背这锅。***

# 安全性的思索

受@john371911提问的启发，我想了一下，怎样才能更安全？

或许把算法中`f(txid)`改成`f(next_block_hash+txid)`，其中`next_block_hash`为投注区块的下一区块的块hash，这样见证人想作弊也要傻眼吧？

比如`hash(next_block_hash+txid)`替代以前的`txid`。

就算见证人想利用出块作弊，你能控制得了自己的出块，还能控制下一个块不成？ 不过换个角度，前一个块广播txid，我这个块再生成指定hash就有机会了。😏

看来我这想法还是不成熟，抛砖引玉吧。


# 相关链接

* [[EpicDice] 內心不夠亂，暫時停止營業](https://steemit.com/sct/@deanliu/238y5u-epicdice)
* [Epic Dice shut down due to witness cheating](https://steemit.com/gambling/@themarkymark/2wz3mk-epic-dice-shut-down-due-to-witness-cheating) 
* [How 'Above 99' player outplayed Epic Dice](https://steemit.com/gambling/@mys/how-above-99-player-outplayed-epic-dice)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: ['EpicDice因为被掏空而暂停 & 简单分析一下来龙去脉'](https://steemit.com/@oflyhigh/epicdice-and)
