
---
title: 'STEEMIT高级操作之：如何多人共同维护一个公共STEEMIT账户(ID)'
permlink: steemit-steemit-id
catalog: true
toc_nav_num: true
toc: true
date: 2017-06-23 13:18:24
categories:
- cn
tags:
- cn
- cn-programming
- steemit
- laodr-teahouse
thumbnail: https://steemitimages.com/DQmXbUW7gzv9EiAn1wcc6m3uscFCEhRVLsBcf1569SGcV2R/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmXbUW7gzv9EiAn1wcc6m3uscFCEhRVLsBcf1569SGcV2R/image.png)

# 分身太多之痛

![](https://steemitimages.com/DQmZ4uzi78xURf8eSwi4P8MZ4B5nRLhF7jBwWcubpKWCB7M/image.png)

@deanliu 今天发了个长文：
* [🌄 莫忘那一切最初開始的地方 🌄 Lest We Forget Where It All Begins 🌄](https://steemit.com/cn/@deanliu/lest-we-forget-where-it-all-begins) 

其中提到了STEEM社区分身泛滥的问题，我的观点是： ***分身不是问题，问题是你用分身做好事还是做坏事***。大家也看到中文区一夜之间从极度冷清到极度繁华，风格骤变的有些让人措手不及。以下是一些简单的数据：

时间 |发帖用户|文章数
----|----|----
**21号**|**98**|**147**
20号|32|48
19号|29|35
18号|25|32

数据说明一切，HF19之后，人气暴增。这个结论耐人寻味。但是骤增三倍的用户，又有多少是所谓的分身呢？这两天QQ群里也看到不少发链接的，但是真的看不过来， 147篇每篇看个3分钟，是多久？是考验大家小学数学的时候啦！ 

`147x3/60 = 7.35`
OMG，你没看错，是7.35小时，何况类似@deanliu 那样的长文，你3分钟能读完？至少我读不完！所以必然走马观花，漏掉一些优秀的帖子，想必大家都有同感吧。我的一个朋友上来问我一个问题，我回复说： `你肯定没有仔细看我的帖子`，隔天又问我一个问题，我回复说：`你肯定没有仔细看我的帖子`。我的朋友尚且如此，何况他人呢？有几个人能静下心来，用7-8小时读贴呢？而优质文章必然淹没在滚滚大潮中。哦，忘记说了，这两天的帖子数应该更多。所以分身太多、水贴太多损害的必然是每一个人的利益。

# 专业功能：合体

![8589f7258b3f432652a04255cb998a06.jpg](https://steemitimages.com/DQmTyBkaq74xwwaWoQDXEtYswvu3YFEWe5ue5SxJYXztSNe/8589f7258b3f432652a04255cb998a06.jpg)

额，我怎么感觉写跑题了呢？好了回归正题。
说过了分身太多的问题，我们来介绍一个专业的功能：合体，别想歪了，这不涉及到双修之类的内容。

以下，简单区分区分一下分身与合体
* **分身**： 一个真实的人使用多个账户发帖
* **合体**： 多个真实的人使用一个账户发帖

为什么要合体呢？
一种情况是： 一个人的精力有限，维护一个账户力有不逮，那么就和他人一起维护。
另一种情况： 一个大家共同持有的公共账户需要大家一同维护。

你可能说，我可以把账户密码给我的朋友啊，让他们直接来操作。
关于账户密码的安全问题我以后会开贴讨论，但是给密码或者私钥的方式，无法区分是谁在操作，如果多人维护一个账户，但是有那么一条坏鱼，无疑是令人沮丧的。
所以这里我会介绍另外一种合体方式

# 合体授权简介与原理

![](https://steemitimages.com/DQmScd6LNr2yp4b2a2huRagg9YyswqHu18CvDKxhEne8xAZ/image.png)

<del>搞基</del>哦不对，高级合体的方式：

**就是把其它账户的公钥添加到需要共同维护的账户上
而用户用公共账户ID 以及 自己对应权限的私钥登陆**


从公钥私钥以及签名的角度来讲，发帖或者投票的过程都要用私钥对操作进行签名。而广播到网络之后，见证人会验证这个签名，从而判断操作是否合法。对于自己的账户以及密码而言，这很好理解。对于多人共同维护一个账户，因为用户使用的是公共账户ID以及自己的私钥，那么签名时用的是自己的私钥，验证时见证人会比对公共账户ID的公钥列表，判断签名和ID是否匹配。

# 合体授权的操作

![](https://steemitimages.com/DQmRKfPceNej2LATpvMHvNt7Nd1n1DAJ2573N6R265PbjiY/image.png)
恰逢我们的公共&公益事业 老道茶馆 需要我们茶东共同维护一个账户 @laodr
有关茶馆的信息请大家访问茶馆频道： #laodr-teahouse，这里不再赘述
这里我已@laodr 来阐述如何操作合体授权

* 一：首先要安装官方的python工具，执行如下命令即可
`pip install -U steem`

* 二：获取公共账户ID的Active 私钥 
使用密码登录 @laodr 账户
进入： https://steemit.com/@laodr/permissions
![](https://steemitimages.com/DQmUnyNeeMSPbE7hDpb5oiLRaArGC3Y7YWpf1dzmPScMgKm/image.png)
点击![](https://steemitimages.com/DQmeAzMBzzg6MpAEVJ49yCTJC728W1S1gUMrdReJMR4yzKB/image.png)
按提示登录后点击![](https://steemitimages.com/DQmXF8qtcLPWhuCXg2nz52nwoZFTdrKD8fzi8AqEH8PcsUy/image.png)并复制

* 三：将公共账户ID的Active 私钥加入python 工具
命令为：`steempy addkey`
按提示输入上个步骤保存的私钥并设置钱包密码（如果以前设置过，则需验证钱包密码）
成功后使用`steempy listaccounts`查看会是这个样子
![](https://steemitimages.com/DQmQMFdvkP7N8h8fu7XRFmPG9TJbdwCmENArTaG96Jk9ZVS/image.png)

* 四：获取待添加用户的公钥
进入steemd可以查看对应用户(包括别人的）的公钥，比如我的公钥为：
![](https://steemitimages.com/DQmQTtpggc2QNkDfNfVHPNWN7dXQESNcFhBQH9QBwaEEZMH/image.png)
复制相应公钥

* 五：将用户公钥添加至公共账户ID
 `steempy allow --account laodr STM5tT6fKtodfdMGxtcgsQuEYypmMwuLCVaZdsQ7kTd98hHcbSKC6`

* 六：查看公共账户是否添加成功
现在再去steemd看laodr账户会发现POSTING 公钥部分多出来一个我的公钥

* 七：重复步骤四、五、六来添加其它账户

* 八：操作完成后是这个样子
![](https://steemitimages.com/DQmPaGAdfFcFLgNgmFKZdzPuP7ovhMvomfkhWUUomSD57NA/image.png)

# 设置完成后如何使用

其实前文已经说过了使用方法

* 使用公共账户ID 以及 自己对应权限的私钥登陆
在本例中，以我为例，使用laodr账户，以及我的posting 私钥登陆即可

* 登陆后，就可以使用公共ID的身份发帖以及给其它帖子投票了

需要说明的是，在steemit上一切操作都是可查的
所以多人共用一个账户的情况，一方面要保证团队精诚合作
另外一方面，如果有人搞破坏，是可以用技术手段查出来的
所以，茶东门，请谨慎言行、做好工作哦


# 补充

除了添加私钥，还可以直接添加账户，操作过程大同小异

其它客户端工具有的也可以进行设置，比如client_wallet
但是我没有操作过，这里就不过多涉及了

# 安全提示！！！

![1.jpg](https://steemitimages.com/DQmVWmmhLs3CS3C1ojX4NXPJHa9sX7U6QxyPxriobwoG8oQ/1.jpg)
注意注意，使用上述操作时，你必须确保你清楚你知道你在操作什么
这其实是多重签名的一个简化到极点的应用，如果你操作的同时设置了阈值(threshold)/权重(weight)等，那么就需要大家一起签名才能进行一项操作了。另外，本例中设置的是posting 权限，如果需要设置其它权限，请慎重操作。



----
感谢阅读
欢迎upvote、resteem以及 following me @oflyhigh 😎

![](https://steemitimages.com/DQmYzuXqXw2SJQBcR3HTD4P1theT8tiAWya4Lsack4ikPqT/image.png)
请将我设置成为你的见证人投票代理, 访问 https://steemit.com/~witnesses
 ![](https://steemitimages.com/DQmQhMNaw3fXpHsDM6Jx1bNi732DySj8JQefq9jjQENcosJ/image.png)

- - -

This page is synchronized from the post: [STEEMIT高级操作之：如何多人共同维护一个公共STEEMIT账户(ID)](https://steemit.com/@oflyhigh/steemit-steemit-id)
