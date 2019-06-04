
---
title: '解决了自动收取收益脚本(Auto Claim Rewards)的问题'
permlink: auto-claim-rewards
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-31 13:21:15
categories:
- cn
tags:
- cn
- api
- node
- cn-programming
- steem-python
thumbnail: https://steemitimages.com/DQmNm5AScSeG8kvjXeNYYiktR3CVMXoAxJ8ioxdNuS9E6As/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我的朋友今天问我，为什么他的奖励好久没有自动回收(Auto Claim)了。额，他把posting key放在我这里，让我自动帮他收取收益，但是据我所知，这个收取收益的脚本已经不工作好久啦。

![](https://steemitimages.com/DQmNm5AScSeG8kvjXeNYYiktR3CVMXoAxJ8ioxdNuS9E6As/image.png)
(图源 ：[pixabay](https://pixabay.com))

我和他说：**“你收或者收，奖励都在那里，不离不弃！”**，他回我：**“少跟我扯犊子，快点解决问题！”**哎，这人咋这么粗鲁呢。不过也是如果自动(及时)收取收益，那么赚取的SP部分直接就会起作用，点赞威力会增加，还是很有用滴。

# 问题查找

于是就去看看吧，虽然懒惰，但是有些问题总是要面对的。我首先怀疑脚本使用的节点有问题，那就换个节点好喽。然而我换了N个节点，执行脚本都是显示链接错误，这就诡异了，我瞪大眼珠一个一个字符核对，我设置节点的命令应该没有任何毛病呀。

既然不是我设置的节点的问题，那么肯定是有啥其它问题作祟，那么再瞪大眼珠看看出错信息都提示啥了吧，于是我尝试从满屏的报错信息中找到有用的内容，等等，为啥报的是连接XXX节点错误？我脚本中明明设置的是AAA节点？

于是我去看steem-python代码，总算找到了端倪，原来**`claim_reward_balance`**这个功能用到了**`Account`**类来获取用户待收取收益，然后生成**`ClaimRewardBalance`**来完成收益的收取。

但是**`Account`**类使用了**`shared_steemd_instance()`**来访问区块链，**`shared_steemd_instance()`**使用steem-python配置的默认节点，而我配置的默认节点是XXX。至此问题就清楚了，原来是XXX节点DOWN掉，而不是AAA节点的问题。

# 问题解决

那么这个问题如何解决呢？一种方法是改steem-python的代码，**`claim_reward_balance`**中给**`Account`**类实例传入当前steemd instance，避免使用**`shared_steemd_instance()`**。

另外一种方法就更简单了，更新一下steem-python的默认节点就可以啦。
>`steempy set nodes https://api.steemit.com`

# 总结

steem-python代码里**`shared_steemd_instance()`**的存在，让代码行为有时候会很诡异。简单来讲就是我们虽然在脚本中指定了节点，但是steem-python部分功能会使用默认节点，这样如果默认节点出错，就会让程序和我们的期望大相径庭。

遇到类似问题，要么去改steem-python代码，避免使用共享steemd实例，要么记得更新默认节点。

不过对我而言，能让我那个粗鲁的朋友闭嘴，就行啦。😰

- - -

This page is synchronized from the post: [解决了自动收取收益脚本(Auto Claim Rewards)的问题](https://steemit.com/@oflyhigh/auto-claim-rewards)
