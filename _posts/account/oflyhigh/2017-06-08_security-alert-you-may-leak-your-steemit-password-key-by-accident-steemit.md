
---
title: '🔓 [Security Alert]  You may leak your steemit password (key) by accident / 安全警示，你可能不经意就泄露了你的steemit 密码'
permlink: security-alert-you-may-leak-your-steemit-password-key-by-accident-steemit
catalog: true
toc_nav_num: true
toc: true
date: 2017-06-08 14:11:00
categories:
- cn
tags:
- cn
- steemit
- steem
- hack
- security
thumbnail: https://steemitimages.com/DQmVeCWZhNh1rckqWak5eSn6vbKtBxj4nHU9LgSyeUrKHQM/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmVeCWZhNh1rckqWak5eSn6vbKtBxj4nHU9LgSyeUrKHQM/image.png)

# 安全警示

刚刚注意到一篇文章：
* [We just hacked 11 accounts on Steemit! ~$21 749 in STEEM and SBD is under our control. But we are good guys 😇 So...](https://steemit.com/steemit/@noisy/we-just-hacked-11-accounts-on-steemit-1158-sbd-and-8250-steem-is-under-our-control-but-we-are-good-guys-so#@ned/re-noisy-we-just-hacked-11-accounts-on-steemit-1158-sbd-and-8250-steem-is-under-our-control-but-we-are-good-guys-so-20170607t144919088z)

大致就是 @noisy & @lukmarcus 通过技术手段 获取了  9 个密码, 2 个private active keys 以及64 private memo keys，有了这些密码，就可以做一些坏坏的事情了：（

但是 @noisy & @lukmarcus 并没有动这些钱，而是对这些账户的资金做了保护，并提示这些用户修改，真是值得敬佩的大好人。致敬！

# 原理 & 如何避免

你可能很好奇，他们是怎么做到的？
同时可能也会很关心，是不是steem 区块链有漏洞或者网站不安全？
首先，可以告诉你的是，并非steem或者steemit被黑导致的泄露，可以把心放到肚子里啦。

然后，我再来简单解释一下，他们是如何做到的，以及我们该如何避免泄露账户密码。

其实说起来很简单：
![20170608213607.png](https://steemitimages.com/DQma5aPe3MboGWaaUiwze9XL659G4HxJipvrMBJgDBTF13u/20170608213607.png)

请注意图中箭头指向，重要的事情说三遍。
1) **千万不要在这里填写密码或者私钥**
2) **千万不要在这里填写密码或者私钥**
3) **千万不要在这里填写密码或者私钥**

此处是填写备注的，简单的说如果你想给我转钱，那么在此处可以填写类似这些内容
* 这是奖励你的
* 还给你上次欠你的20美元
* 其它等等

***这部分内容是公开的，任何人都可以看到***
当然也可以用过在前边加#号来发送私密MEMO，但是这样也不能在此处填写密码。

而上述文章作者，就是利用有人不小心将密码/私钥填入MEMO区域，进而获得了这些密码

大致手段是
* 查询所有的转账记录
* 获取MEMO区域内容
* 判断是否是密码或者私钥
* 记录

避免手段，我们也提到了，就是： **千万不要在箭头指向处填写密码或者私钥**

文中有对应代码，感兴趣的可以去学习，但是不要用来做坏事哦

# 其它

幸运的是：
* 上文作者已经向代码库提交了对应补丁
* @ned 也已经注意到这篇文章并回复

所以也许一小段时间以后，我们可以不用担心输错内容了。
一旦我们不小心搞错了，系统会给我们一个友好提示：
>`喂喂喂，你不应在这里填入密码，否则你的钱就变成别人的啦!`

但是我们***始终应该保持良好的安全意识和安全习惯***，难道不是吗？

最后，向  @noisy & @lukmarcus 表示感谢。
正是很多像他们一样的正直、善良又有高超技术的人的不懈努力，我们的社区才变得越来越好。

@noisy & @lukmarcus 
Thanks for your great work! 
Your efforts make our community more security and stronger.

Image credits: [source](http://tse3.mm.bing.net/th?id=OIP.epcFjiC2fQDYtd1BVVX1tQEsDT&pid=15.1)

- - -

This page is synchronized from the post: [🔓 [Security Alert]  You may leak your steemit password (key) by accident / 安全警示，你可能不经意就泄露了你的steemit 密码](https://steemit.com/@oflyhigh/security-alert-you-may-leak-your-steemit-password-key-by-accident-steemit)
