
---
title: '提示: 别被第三方应用坑了/ (percent_steem_dollars 参数)'
permlink: percentsteemdollars
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-14 01:23:09
categories:
- reward
tags:
- reward
- payout
- app
- steemit
- cn
thumbnail: https://steemitimages.com/DQmUkZt88xUYKc8STEUHjpoG8XrcQcxNdi3FMFx5wctwWa1/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天一位朋友在我之前的一个帖子下边回复，为什么他的文章代发的奖励SBD和SP比例看起来不太对劲，SP比列太高了，希望我看一下是什么缘故。

![](https://steemitimages.com/DQmUkZt88xUYKc8STEUHjpoG8XrcQcxNdi3FMFx5wctwWa1/image.png)
(图源 ：[pixabay](https://pixabay.com))

# 奖励发放方式

一般来讲，我们发帖的时候有三个选择
* Power Up 100%：奖励全部发放成SP
* Default 50%/50%：奖励一半一半，即50%SP / 50%（SBD+STEEM)
* Decline Payout：放弃收益

好吧，一般情况，我们不会选择第三种，而当前行情下，收益最大化无疑是第二种方式，具体原因我讲过好多次了，这里不再赘述了，感兴趣的可以去找我以前的文章。

选择STEEM市场行情的变化，导致第二种方式的情况下流动性奖励（SBD+STEEM)中多了了STEEM (取决于SBD Print Rate)，但是STEEMIT UI并未做对应的修改，还是简单的把收益分成2部分，SBD和SP。也就说是，如果我们一个帖子显示收益为100SBD，那么点开详情，显示的是50SBD以及XXX SP。类似下边这个样子：

![](https://steemitimages.com/DQmSJBiskyzeZdKefbwqL6QppYpTSQLU2tgNxySJ95KjrT3/image.png)

但是这个朋友帖子显示收益为26SBD，按说详情中，SBD应为13SBD的样子，可是他那只有6.6X SBD，SP却多了好多。这是什么一回事呢？

![](https://steemitimages.com/DQmZ6jA7KEC3H1sCkW9bPXyFByey1TSYC3CDxWFr7CpGiso/image.png)
(图源 ：[pixabay](https://pixabay.com))

# percent_steem_dollars

于是我去https://steemd.com 那看了一下他的帖子的数据。其中，有两处让我注意的地方：

一是帖子设置了收益分享：
![](https://steemitimages.com/DQmP8bW8nVBo5s3h2yyFCM5rgU1j1zjYwHAJKj61toY4PoD/image.png)

设置了收益分享，一般来讲都是使用第三方网站或者APP发帖，第三方会抽取帖子的部分收益，比如这个朋友的帖子被抽走5%的奖励。这个倒也没啥，毕竟你用人家服务，给点好处费也很正常。另外，STEEMIT上未结算收益并不理会这个beneficiaries，所以这个朋友的问题跟是否设置有收益分享，没有直接关系。

另外，就是percent_steem_dollars 这个参数
![](https://steemitimages.com/DQmXT1Zq3DaBSYjMuhVwdxF2W2ktiw2wpfadXYPWhTJTNic/image.png)
帖子中设置的是5000，亦即50%，因为是第三方网站/APP发帖，所以并非作者设置。

那么这个参数是什么意思呢？是代表帖子收益`Default 50%/50%`吗？很多人会有这个误解，包括一些应用开发者，实际上这个参数代表的是：**`流动性部分（sbd+steem) 占 50%中的比例`**。

有点拗口，举例来讲吧，还是100 SBD，如果想按`Default 50%/50%`，那么应该这样设置：![](https://steemitimages.com/DQmef1krNbpTdLtrvbDaWsvajFbsP9wTdtoCEtcnqNnj4Hb/image.png)。如果想` 100% Power Up`，应该这样设置：![](https://steemitimages.com/DQmWVDEL498JuMawPxRAGHfez9r5eKAhE3MxiXxgNgtfUkz/image.png)

是不是觉得脑壳不够用了，我觉得也是，那么![](https://steemitimages.com/DQmXT1Zq3DaBSYjMuhVwdxF2W2ktiw2wpfadXYPWhTJTNic/image.png) 代表咋分配呢？实际上代表的是**`75% SP + 25%(SBD+STEEM)`**。

搞明白这个参数的用途，我们就明白了，第三方网站/APP的开发者对这个参数理解有误，导致设置不当，进而导致流动性收益(SBD+STEEM)所占比例变低了，而SP变高了。再关联到我们之前一再强调的结论：收益最大化是选择`Default 50%/50%`方式，那么这个参数设置有误，导致实际收益变低了。

所以这个朋友用的发帖应用，不但要抽走5%的奖励，还因为错误的设置参数导致实际收益缩水，真是坑人啊。

![](https://steemitimages.com/DQmc1BvoFmzD5iydBArYZuyyqxnJqMTUxwxYXyHQvk8ajUh/image.png)
(图源 ：[pixabay](https://pixabay.com))

# 结论

使用第三方应用之前要评估一下它的抽红比例，以及是否有安全问题或者类似上述导致我们收益缩水的BUG。如果不能确定是否有问题，还是老老实实用steemit.com 吧，至少我觉得还不错呢。

为了不对文中涉及的APP造成什么不好的影响，文中对应部分打上了马赛克。

- - -

This page is synchronized from the post: [提示: 别被第三方应用坑了/ (percent_steem_dollars 参数)](https://steemit.com/@oflyhigh/percentsteemdollars)
