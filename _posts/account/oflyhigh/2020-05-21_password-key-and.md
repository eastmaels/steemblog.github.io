
---
title: '再来说说Password和Key的关系 & 账户安全'
permlink: password-key-and
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-21 07:36:15
categories:
- cn
tags:
- cn
- security
- password
- key
- permission
thumbnail: 'https://images.hive.blog/DQmeopAdLCQERJMUZikVQ1M3h1pGaYBZwkH8Zy23CLxV1dS/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


尽管以前没少聊过关于密码(Password)和私钥(KEY)的话题，但是发现很多朋友(尤其是新加入的)还是有些搞不明白密码和KEY是一个什么关系。


![image.png](https://images.hive.blog/DQmeopAdLCQERJMUZikVQ1M3h1pGaYBZwkH8Zy23CLxV1dS/image.png)
(图源 ：[pixabay](https://pixabay.com/))

比如说我们一些注册服务提供给我们的都是密码，而网页钱包里虽然也提供或许各种KEY的功能但是只提供修改密码功能而不提供修改KEY功能。

所以很多用户觉得密码就是最高权限，还有一部分用户认为密码就是OWNER KEY。这两种错误认识，***我刚加入的时候也有过这样错误的认识***，经过了这么多年总算搞明白一些了。

# KEY 是HIVE/STEEM 工作的基石

首先，说明一点KEY是HIVE/STEEM 工作的基石。

从性质上区分，KEY分为公钥(Public KEY)和私钥(Private KEY)，二者成对出现，通过私钥可以计算出公钥。私钥用于签名，公钥用于验证。

***HIVE/STEEM区块链上只保存用户的公钥，而私钥保存在用户自己手中***。

用户发文/点赞/转账/修改权限时，***用私钥签名操作数据***，然后广播数据到区块链。

区块链程序(见证人节点)***根据用户账户的公钥验证签名是否合法***，然后处理合法签名的请求，将数据写入到区块链中。

# KEY分不同的权限等级

因为发文、点赞等操作要频繁地使用到KEY；转账/投见证人票/投提案等操作操作频度会略低但是一旦KEY泄露资金等将不再安全；而修改账户对应KEY的更是需要更高的安全性，否则账户就会轻易易主。

为了解决这些问题，***HIVE/STEEM中设置了不同权限等级***：
>![image.png](https://images.hive.blog/DQmQdPnQCofHWJCVAuVwvw1ZWhMGS5aZrWPyDuCrSQAFJnZ/image.png)

简单来讲，权限级别高的KEY可以做权限级别低的KEY能做的事情，反之则不可以。所以权限级别越高的KEY就越要保证安全不可泄露。

比如你泄露了POSTING KEY，那么对方可以拿来发文、点赞等；你泄露了Active key，对方就可以动用你的资金；你泄露了Owner KEY，对方就可以对这个账户为所欲为了。

(MEMO KEY属于另外的情况，可以参考我以前关于MEMO  KEY的文章)

# Password 与KEY的关系

按我们之上的描述，其实并没有Password什么事情，事实上也确实如此，***整个工作流程并不需要Password的存在***。

然而很多新手用户对KEY的概念比较懵圈，而在传统的网站应用中，Password是最常被使用的概念，所以为了方便用户，就有了Password的存在。

简单来讲，Password和我们平时用的Password没什么区别，就是一串字符组成的密码。

一些钱包的注册服务会用使用Password按一定的规则来获取四组公私钥对，然后用把对应的私钥给用户，并用对应的公钥去在区块链上注册账户。

一些应用(包括网页钱包等)会用Password来获取对应的私钥(Private KEY)，这样操作起来就等同于使用对应的私钥操作了。

所以说，***Password是生成、记忆、使用私钥的手段之一，而不是唯一手段***。

HIVE/STEEM区块链本身和Password是没有一丁点关系的，只是外围应用(按着相同的规则)在使用Password。***我们完全可以在所有环节脱离Password而只使用KEY。***

# 账户注册的安全性

另外顺便说说大家很关心的账户注册的安全性。

需要说明的是HIVE/STEEM区块链上，私钥意味着和账户相关的一些内容，所以账户的安全基本上可以理解成私钥的安全，这涉及到***注册、保管、使用***等诸多方面，我们只说注册。

***账户注册服务其实只需要公钥***，所以原则上我们提供给对应的服务公钥即可。但是很多用户并不清楚如何生成公私钥对，所以很多时候账户注册服务就肩负起这个责任。

账户注册服务生成公私钥对一般有几种方式：
* 用户设置密码，本地使用脚本+密码生成公私钥，然后使用公钥注册
* 脚本生成密码，本地使用脚本+密码生成公私钥，然后使用公钥注册
* 用户设置密码，服务端使用密码生成公私钥并用公钥注册
* 服务端生成密码，并使用密码生成公私钥并用公钥注册

那么判断安全性与否的一个原则就是：***密码/私钥是否会经过服务端***。如果经过了服务端，那么就会存在安全隐患。

其实使用密码/私钥的时候也是这个判断原则，就是：***密码/私钥是否会经过服务端***。

以hive(https://wallet. hive.blog)的网页钱包，以及https://hive.blog应用为例，***注册的时候都是使用脚本在本地生成的对应密码和私钥等，使用的时候也是如此，所以原则上是安全的。***

当然原则上安全并不表示一定安全，比如：***万一升级了代码呢？万一代码库被黑了呢？万一你的浏览器中招了呢？万一你登录的其实是一个假的网站呢？等等等等。***

# 关于修改密码

说了这么多，你可能有些担忧，我的账户(密码、私钥等)有没有风险呀？要不要改个密码？

大多时候你如果都是选择的官方服务/应用，那么可以不必有此忧虑（但是也不排除官方服务有BUG或者被黑之类的）。

现在我们要讨论的问题是，改密码就一定安全吗？大多数人修改密码也是要用一些网页钱包或者手机钱包等，***谁又能保证这个修改过程中你的密码/私钥不经过服务器呢？***

所以最安全的方式是自己写代码去改确保整个过程中密码和私钥不经过网络。比如自己在一台离线的电脑上生成公私钥对。然后去联网的电脑上用公钥去修改密码。


![image.png](https://images.hive.blog/DQmRJKCnuj7GqGxmXSStTnGfCxTQGtWPAbPeXUeWXwQtEGU/image.png)
(图源 ：[pixabay](https://pixabay.com/))

想想就头大是吧？我也头大。欢迎大家留言一起讨论呀。

- - -

This page is synchronized from the post: ['再来说说Password和Key的关系 & 账户安全'](https://steemit.com/@oflyhigh/password-key-and)
