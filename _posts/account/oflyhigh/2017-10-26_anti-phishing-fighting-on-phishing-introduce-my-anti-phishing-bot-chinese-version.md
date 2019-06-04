
---
title: '向网络钓鱼宣战，介绍我的anti-phishing 机器人 / Fighting on Phishing, introduce my @anti-phishing Bot (Chinese Version)'
permlink: anti-phishing-fighting-on-phishing-introduce-my-anti-phishing-bot-chinese-version
catalog: true
toc_nav_num: true
toc: true
date: 2017-10-26 04:24:00
categories:
- anti-phishing
tags:
- anti-phishing
- phishing
- bot
- security
- cn
thumbnail: https://steemitstageimages.com/DQmPoj22Yk8V9rKWwJfcSAus1g7A1MLh5FUnz2efaPQXajC/defend-444565_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![defend-444565_960_720.jpg](https://steemitstageimages.com/DQmPoj22Yk8V9rKWwJfcSAus1g7A1MLh5FUnz2efaPQXajC/defend-444565_960_720.jpg)

大家或许都已经知道，STEEMIT上有一个骗子账户***cheetoh***，冒充 @cheetah 给他人回复包含钓鱼链接的帖子，导致多人上当，比如 @twinkledrop 这个声望分高达 67的账户。

详情可以参考：
* [再次提醒大家防范钓鱼信息，就在昨晚CN区一个声望分67级的账户被盗！！！ / Avoid phishing](https://steemit.com/cn/@oflyhigh/cn-67)

令人愤慨的是，骗子得手后并没有收手，而是使用被盗用的账户变本加厉的行骗！

因为被盗用的账户声望分比较高，比较容易被相信，所以被钓鱼用户中招的概率大幅增加！另外，同样是因为声望分的缘故，低声望分用户很难将高声望分的账户的回复内容踩灰！（具体机制我没有去调研）

原本以为有 @cheetah 和 @steemcleaners 在，不用我们来操心，毕竟钓鱼者被发现了，以 @steemcleaners 高达 75.402 的声望分(Reputation) 以及多达109.5的有效SP(Effective sp)，有哪个用户能踩不死呢？不过不知何种原因，他们在处理这个事情上响应不够及时。

昨晚微信群里 @nationalpark 提及骗子用  @twinkledrop 继续行骗，并且他踩不灰，有可能导致他人上当。

于是我使用我的ID去踩骗子的回复，发现只需1%就可以将其踩灰。

![](https://steemitimages.com/DQmTerAhyb2nnKDZuMg46KzyTBx63hw42aYPRA8F1meKJHm/image.png)
所以我连续踩灰N多回复，以免他人上当受骗。

但是，之后想到，骗子可能利用我不在线时间发表钓鱼信息，毕竟我不能时时关注骗子的回复，第一时间去踩，***而用户上当受骗，往往是几分钟之内***。

于是，我临时写了个机器人，来关注  @twinkledrop 的发文，一旦有新文章或者回复，第一时间踩灰。

![](https://steemitimages.com/DQmRmRkx1e1btiNv2UpVuTzj7Rw7HKxbuPjRtKgKNXfZDeV/image.png)
七小时以前，在我睡觉的时候，果然骗子在活动，不过幸运的是，被我踩灰了！


今天想到，以后steem越来越流行，steemit.com上人气越来越旺盛，可能骗子也会越来越多。相比SPAM等，网络钓鱼危害更大，或许我可以做一个专门的bot来打击网络钓鱼。

于是，我注册了 @anti-phishing 这个账户，并为其 POWER UP 100 个STEEM POWER
![](https://steemitimages.com/DQmYdk9P1KRtysfXx7YsYXJH78q6MKjEXPfgrwfZrtoDBvF/image.png)

# @anti-phishing bot 运作原理

* 整理出钓鱼账户列表（包括被盗用的）
* 实时监测 steem 区块链上的新文章和新回复的作者
* 一旦作者在列表中，使用@anti-phishing 去踩
* 使用 @oflyhigh 以一定比例(0.1%)(0.1%)跟踩
* 使用 @anti-phishing 回复提醒信息。

# @anti-phishing bot Q & A

***Q:*** ***为什么要单独做成bot？***
***A:*** 因为人工方式，无法及时发现钓鱼内容，无法及时响应。

***Q:*** ***有了@cheetah 和 @steemcleaners，为何还要@anti-phishing bot？***
***A:*** 本机器人***专门针对网络钓鱼，响应更及时***。

***Q:*** ***为什么要用 @oflyhigh 跟踩？***
***A:*** 因为***对于高声望分钓鱼ID，低声望分用户无法将其踩灰***。

***Q:*** ***有了@cheetah 和 @steemcleaners，为何还要@anti-phishing bot？***
***A:*** 本机器人专门针对网络钓鱼，***响应更及时***。

***Q:*** ***钓鱼内容发表后多久会被处理？***
***A:*** 如果API节点稳定，一般会在一分钟左右处理完毕。

***Q:*** ***这个bot还有哪些功能？***
***A:*** 其它功能尚在开发，比如钓鱼者名单动态更新等。受信任的ID可以通过回复钓鱼贴来通知BOT增加新的钓鱼者名单。

***Q:***  ***@anti-phishing 存在哪些问题？***
***A:*** @anti-phishing SP 只有106，这个数值比较低，使用1%的权重去踩，会提示:
>Voting weight is too small, please accumulate more voting power or steem power.

现在我提高到10%，那么每天理论上可以踩1000次，根据情况我会适时增加这个账户的SP.

***Q:***  ***@anti-phishing bot 当前监控名单有哪些？***
***A:***  ***当前我们监控以下账户***
>cheetoh
twinkledrop
lndesta120282


# 如何支持  @anti-phishing bot

你可以通过如下方式支持 @anti-phishing bot:

* 去踩 @anti-phishing 踩过的帖子
* 去顶 @anti-phishing 的回复
* 帮 @anti-phishing 提供可靠的网络钓鱼者或者被盗号者的ID
* 通过机器人跟踩 @anti-phishing 踩过的帖子

希望大家一起为净化steemit以及保护小伙伴们的财产而努力。

(封面图源 ：[pixabay](https://pixabay.com))

- - -

This page is synchronized from the post: [向网络钓鱼宣战，介绍我的anti-phishing 机器人 / Fighting on Phishing, introduce my @anti-phishing Bot (Chinese Version)](https://steemit.com/@oflyhigh/anti-phishing-fighting-on-phishing-introduce-my-anti-phishing-bot-chinese-version)
