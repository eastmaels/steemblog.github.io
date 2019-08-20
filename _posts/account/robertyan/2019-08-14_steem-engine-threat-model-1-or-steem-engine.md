
---
title: 'Steem Engine Threat Model (1) | Steem Engine 安全威胁模型（一）'
permlink: steem-engine-threat-model-1-or-steem-engine
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-14 05:35:18
categories:
- sct
tags:
- sct
- sct-cn
- sct-freeboard
- cn-reader
- cn-curation
- steem-guides
- tunes
- cn-stem
- steemstem
- cn-programming
- cn
- palnet
- zzan
- mediaofficials
- actnearn
- marlians
- neoxian
- lassecash
- upfundme
- busy
thumbnail: 'https://cdn.pixabay.com/photo/2017/11/19/23/56/hacking-2964100_1280.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## 区块链安全威胁模型 | Blockchain Threat Model

互联网平台和金融市场，从来不缺乏投机者和攻击者。在区块链领域，由于结合了互联网和金融的特点，除了其带来的技术创新之外，也激发了大量的金融犯罪，包括洗钱、经济诈骗、安全攻击等等，不可胜数。犯罪者总是走在科技创新的前沿，这是技术史上的常例。

由于 Steem 等区块链平台存在数据公开、资金敏感的特点，与其他常见的网络安全模型相比，如 [OWASP](https://www.owasp.org/index.php/Main_Page) 等，存在很大的差异。这也提出了在此领域建立针对性的安全模型的必要。

此前，我们在其他的文章中介绍过 SportsTalkSocial 等平台发生过的创世攻击（Genesis Attack）的典型案例。本文简要介绍 **Tunes** 项目（ https://www.tunestoken.com/ ）面对的较为严重的 **空投攻击 | Airdrop Attack** 的情况。

<center>
![](https://cdn.pixabay.com/photo/2017/11/19/23/56/hacking-2964100_1280.jpg)
<sup>image source [Pixabay](https://pixabay.com/zh/photos/%E9%BB%91%E5%AE%A2%E6%94%BB%E5%87%BB-%E7%BD%91%E7%BB%9C-%E9%BB%91%E5%AE%A2-%E7%8A%AF%E7%BD%AA-2964100/)</sup>
</center>



## 空投攻击 | Airdrop Attack 

在文章 [A New Tribe Is Born!!! Welcome To The Tunes Tribe!!!!!](https://steemit.com/tunes/@steemvision/a-new-tribe-is-born-welcome-to-the-tunes-tribe?sort=new#comments) 中，Tunes 平台将对添加评论的用户进行空投。

<center>
![](https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmWpDVNwt2uQTgJH9e2Eh8E63fE8KbnKt4dFPpyEzUJSSh/PicsArt_08-09-01.56.58.jpg)
</center>

这与之前的 ZZAN 空投的情形类似。

由于 Tunes 并没有明确表示针对申请者的申请条件，很快有大量用户进行申请。昨天在浏览申请留言时，我们发现有一位有约 500 个小号的用户，动用了他的大量小号（或许不是全部）进行了空投认领，很快将评论的总数刷到了 1000+。

具体情况可以参见上文中的评论部分，我们会发现有大量模式相同的账户名称与相似与反复出现的留言格式。通过 steemd 的简单查看，我们可以发现这些账户都由同一个主账户控制。

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/LN1c4ZMS-image.png)
<sup>screenshot from [A New Tribe Is Born!!! Welcome To The Tunes Tribe!!!!!](https://steemit.com/tunes/@steemvision/a-new-tribe-is-born-welcome-to-the-tunes-tribe?sort=new#comments) </sup>
</center>


毫无疑问，在通过**留言进行空投的形式**中，这类攻击很容易被引发。

在之前的 ZZAN 空投中，也不乏有用户通过大量小号留言来领取空投。我们发现这同一位攻击者在 ZZAN 的空投活动中也同样领取了大量ZZAN空投，并在市场上卖出了大量ZZAN。除了这类恶意的攻击者，也不乏一些存在多账号的用户，通过自己的多账户，领取空投的情况。

以上的空投攻击（Airdrop Attack）的情况目前已经告知了 Tunes 团队，他们将采取措施对申请者进行更为严格的审查。

## 如何防御 | Countermeasures

Tunes 和 ZZAN 在空投时，都采用了回复留言并发放空投的形式。这种形式，这对于投机者而言是极为廉价和可控的发动空投攻击的方式。作为防范，空投一方有必要进行账户信息、账户关联验证、黑名单验证等方式来进行过滤，以提高空投的有效性和安全性。

### 账户信息验证 | Account Info Validation

首先，在平台自主空投模式下，运营方通常会根据账户的 Stake情况、账户年龄、声望、发帖频率、活跃度等信息，来生成一个基本的名单，进行空投。

在“留言回复模式”下，虽然不会主动搜寻名单，但同样需要加入一层审查机制，对申请的账户进行基本的信息排查与验证，以防止被投机者利用。


### 账户关联查询 | Accounts Affinity

在相对匿名的平台上，小号泛滥是无法遏制的行为。但账户间存在的互动、转账等社会与经济联系有时难以避免；而且，当账户要套现时，也经常不得不使用同一个交易所账户：这些都是鉴别小号的有效手段。

目前的挑战可能在于进行关联分析的成本较高。针对这一问题，[Lens](https://tribes.rocks/lens)工具原来就打算提供一个展示账户关联的工具，以防范攻击者，将在近期推出。


### 黑名单共享 | Shared Blacklist

此外，对于存在“犯罪记录”的用户，各Tribes和 Steem Engine 方面应该使用一个共享的黑名单，用于帮助各社区的运营者和用户们，发现和识别“犯罪分子”，清除负面影响。

对此，[Lens](https://tribes.rocks/lens) 可能也会提供一个黑名单的入口，帮助用户识别常见的社区扰乱者。 


## 最后

本文是【Steem Engine 安全威胁模型】系列文章之一，用于介绍于 Steem 等区块链平台中常见的安全攻击范式，帮助平台的运营者和使用者们，更好的使用平台、获取价值。

安全攻击难以彻底扼制和避免的，但通过有效的学习和使用防范机制，可以帮助各方共同遏制常见的攻击者和投机者的行为。

- - -

This page is synchronized from the post: ['Steem Engine Threat Model (1) | Steem Engine 安全威胁模型（一）'](https://steemit.com/@robertyan/steem-engine-threat-model-1-or-steem-engine)
