
---
title: '为什么会出现 Missing Posting Authority'
permlink: missing-posting-authority
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-18 12:52:18
categories:
- steem
tags:
- steem
- steemit
- posting
- cn
- bug
thumbnail: https://cdn.steemitimages.com/DQmbZXN2xLM7JBQStrkV9un7xDdQDNJXdvZ5iaNhmgqzxAF/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天看到刘美女@deanliu一个帖子，[徵求“發不出去”的解釋.... ](https://steemit.com/steem/@deanliu/2eov2r) 说到发帖时出现`Missing Posting Authority`的提示，然后帖子发不出去。

![](https://cdn.steemitimages.com/DQmbZXN2xLM7JBQStrkV9un7xDdQDNJXdvZ5iaNhmgqzxAF/image.png)
(图源 ：[pixabay](https://pixabay.com/))

我在刘美女帖子底下回复说这是人品问题，充值一些人品就好了。尽管这个答案无限接近于事实，但是太过于抽象，所以我简单解释一下到底为啥会出现`Missing Posting Authority`。

以往我们使用一些论坛之类的网站，都需要先登陆，然后发帖，这个登陆就是在服务器和你本地机器之前开通一会会话，服务器那端知道你是一个合法用户且已登陆，这时候就可以给服务器发送信息了。（大致是这样）

但是STEEMIT.COM登陆的过程呢，其实是把私钥放到浏览器本地存储的过程，其实并未与服务器建立任何类似会话之类的关联，也就是说对于服务器端，你登陆与否其实是没区别的。

那么登陆与否没区别，点赞、发帖、评论啥的又如何实现的呢，答案是你进行这一系列操作的时候本地生成了一组响应的操作数据，然后用私钥对上述数据进行签名，然后把签名后的数据发送给服务器（API Node)。服务器判断这组数据和签名没问题，就把数据丢到链上了，所以发帖等操作就成功了。（大致是这样）

可是按照这个逻辑我们既然登陆成功(将私钥保存到浏览器本地存储)，并且点赞什么的都成功，或者有时候发短一些的文章也成功，那么为什么还会出现`Missing Posting Authority`错误呢？

答案在于签名和校验签名的过程，我说过，操作数据签名后要发送到API Node，这个过程说起来简单，其实是很复杂的，先要把操作数据按固定的格式组织，然后把它按一定规则换成二进制串(序列化)，然后在取这个串的摘要，然后再对其签名，具体是不是这样我也不知道啦，总之很复杂就是啦。

然后呢，这串签名后的数据发给API Node之前会先调用一下校验，校验通过后再广播出去。校验通不过呢，就会出错喽。而我实际遇到过好多次，签名没啥问题，但是校验出错的情况，错误提示就是`Missing Posting Authority`。

其实这是校验程序的一个BUG，但是很难被触发。我猜测可能是由于某个/某些个特殊的字符或者什么特定的条件触发。所以为什么一篇整篇文章发不出去，但是拆开发，并更新上去就可以成功，就是因为绕开了触发条件。

简单总结：

* 这个问题是steem节点校验程序的一个BUG
* 我不知道触发这个BUG的具体条件
* 通过编辑内容啥的有可能绕开这个问题
* 这个和带宽限制之类的无关

![](https://cdn.steemitimages.com/DQmSU1CLRMK3tBJF5j2yuwKDWdr4kDD3AQjBNMZ5qDDHHxu/image.png)
(图源 ：[pixabay](https://pixabay.com/))

至于我为何确定是校验程序而不是序列话或者签名等哪个环节的BUG，额，还是保密吧，哈哈哈。

- - -

This page is synchronized from the post: [为什么会出现 Missing Posting Authority](https://steemit.com/@oflyhigh/missing-posting-authority)
