
---
title: "谈谈HF20后的Payout Burned"
permlink: hf20payout-burned-a5kpwkgu
catalog: true
toc_nav_num: true
toc: true
date: 2018-10-12 04:49:27
categories:
- cn
tags:
- cn
- busy
- steem
- hf20
- partiko
thumbnail: https://ipfs.busy.org/ipfs/QmSTzrssBE1cuwdoMfRQzQm6zQENvvZQ2aP8JFskUE3Eu1
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image](https://ipfs.busy.org/ipfs/QmSTzrssBE1cuwdoMfRQzQm6zQENvvZQ2aP8JFskUE3Eu1)

HF20到底带来了什么变化，相信很多steemains都不是很清楚，只是知道sp少的rc也少了，干啥事都受限制。

实际上，影响最大的应该是点赞奖励的问题。只是，至今为止我也没看到完整的解释，自己也没有能力去翻看白皮书之类的，这里只是说说我观察到的一些现象。

有些人说，15分钟内的全部点赞金额都返回奖池，也有人说只是Curators的部分返回，那我们今天就来看看到底是怎么回事。

以我昨天的帖子[四眼歪诗：贾岛和硅谷风云](https://busy.org/@julian2013/rjgy9xyv)为例：
创建时间是：2018-10-11 00:33:00，之后有些机器人在15分钟之内点赞：
![image](https://ipfs.busy.org/ipfs/QmbMqn8EdHiAit5Ngbv9rzXkt5tV4Dkaaw68AQ2dBUQ1hY)
根据以上的参数，用公式可以算出具体点赞值，只是太麻烦，用partiko来看个大概：
| ID |点赞价值（$） | 
| ------ | ------ |
|  @umich	| 0.001 | 
|  @cjd	 | 0.000|
|  @trexxie	| 0.002|
|  @lindalex	| 0.000 |
|  @plgonzalezrx8	| 0.001 |
|  @nfc	| 0.015 |
|  @fun2learn| 0.001 |

合计是0.020$

而根据steemworld的显示：
![image](https://ipfs.busy.org/ipfs/QmUe4acM67URHUoZM5NWEeYC3Jv9smRfh195GLPBkdxWes)

Payout Burned返回奖池的是$0.018。考虑到steemworld和partiko显示四舍五入的问题，似乎所有15分钟内点赞的金额（**请注意，不是Payout Curators，是所有的点赞金额哦**）都返回了奖池。

**事情到这里似乎就有了结论。**

且慢，因为这个金额太小了，分析起来容易有很大的误差。我突然想起来之前看大伟 @rivalhw的帖子，那是HF20过后没多久，刘美女有提醒 @rivalhw不要在15分钟内赞。这个金额够大，应该适合我们做分析。遂找到伟哥的帖子，[闲话证件](https://busy.org/@rivalhw/6yzg7e)。
帖子创建是	2018-10-01 14:51:30，大腿就是大腿，无数的人15分钟内赞了，我们要分析主要矛盾，所以只看最粗的腿：
![image](https://ipfs.busy.org/ipfs/Qmc7imcredeabbgm1FSnUGgff2rThDeA8LYtSJWCLtinCr)

然后上steemworld去看，发现，已经过期啦，没有很清楚的列表，只有这个：
![image](https://ipfs.busy.org/ipfs/QmUVRHihUy7TfCEumGHbKLLN19VEa1MDdKYPaTueWcWNzh)
Payout Burned的信息没有啦！！

不过不要紧，我们可以看一下这个帖子的奖励情况，在busy信息里面，伟哥这贴的奖励如下：
![image](https://ipfs.busy.org/ipfs/QmTSpCAra53m4Mb71DgqKyZsse8QLPFs1ySoUytTRmQyKZ)
纳尼！！！竟然还有点赞奖励？？！！！

我们再仔细一点，看看我的帖子，Payout Author是74.99%，而伟哥的帖子，Payout Author是84.72%，明显不符合逻辑啊，看来payout以后的帖子，信息都有些随意，没有考虑HF20后的Payout Burned的因素。

当然，如果复杂一点，我们可以通过伟哥领取的2种奖励反推分配情况，但是这个过程太复杂，就算我推出来你们肯定也看不懂，就此略过。

是不是就没办法了呢？我又想起我常看的 @bring大哥的帖子，经常会有人在15分钟内赞。我们看这一篇：[看得见青山，记得住乡愁](https://busy.org/@bring/green-hills-and-blue-waters-triguing-my-deep-homesickness)：
创建时间是：2018-10-10 03:38:36
15分钟内点赞的如下：
![image](https://ipfs.busy.org/ipfs/QmPZTdnGJi2ssY75FPrLQV6fWRxbc5KxtRGEec4r8HDzEo)
steemworld的信息如下：
![image](https://ipfs.busy.org/ipfs/QmfSCTe2QohrRh8gazqUimoRQMFYB5LmHEgQZGEP2tEeCT)
| ID |点赞价值（$） | 
| ------ | ------ |
|  @bring	| 0.011 | 
|  @weisheng167388	 | 0.002|
|  @lanhange| 0.740|
大名鼎鼎的懒汉哥也提前点啦~~
**Payout Burned	0.201$**，而15分钟内点赞奖励：0.752 * 0.25 = 0.188，小于Burned掉的数额，再加上30分钟内的比例，应该就差不多了。

所以，啰嗦了那么多，结论应该是：
**HF20之后，Payout Burned掉的部分应该是原来的Curators再加上早鸟惩罚给作者的那部分。（大概如此，因为大伟哥三分钟内点赞还是有Curators拿，这就没法解释了）**
也就是说，如果15分钟内有大腿点赞的话，作者拿到的就远远没有显示的总金额*75%那么多了。

写这贴的目的倒不是为了算这几分几厘，而是想介绍一下一个工程师对一个问题有疑问后的处理过程。当然看官方文件是最正确的方式，不过英文不好，又懒，只能这样啦~谢谢大家看得云里雾里~~~

图源：[pixabay](https://cdn.pixabay.com/photo/2014/09/26/23/14/sherlock-holmes-462957_960_720.jpg)

***
希望喜欢我文字的人，去看看这个吧，说说对我的看法，请我吃星星![5 cred stars](http://bit.ly/5credstars)，谢谢啦~
[我的 @ReviewMe 凭证留言板!](https://steemit.com/cn/@julian2013/reviewme-yoursteemitname)
***

Posted using [Partiko iOS](https://steemit.com/@partiko-ios)

- - -

This page is synchronized from the post: [谈谈HF20后的Payout Burned](https://steemit.com/@julian2013/hf20payout-burned-a5kpwkgu)
