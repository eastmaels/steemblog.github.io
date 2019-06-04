
---
title: '又一把瑞士军刀？ Uptick初体验（三）：uptick命令选项以及设置默认值'
permlink: uptick-uptick
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-23 12:13:06
categories:
- uptick
tags:
- uptick
- bitshares
- tools
- python
- cn
thumbnail: https://steemitimages.com/DQmUCB2DUgV7LqiWzL3hYpMarCw1JtuaK5U7amHhtuLFxYx/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前两篇文章中，我们介绍了操作bitshares的工具之一：uptick，并简要介绍了uptick的安装和使用。以及如何从bitshares的网页钱包中获取并导入私钥到uptick的钱包中去。

* [又一把瑞士军刀？ Uptick初体验（一）](https://steemit.com/uptick/@oflyhigh/uptick)
* [又一把瑞士军刀？ Uptick初体验（二）：导入私钥](https://steemit.com/uptick/@oflyhigh/32cec-uptick)

![](https://steemitimages.com/DQmUCB2DUgV7LqiWzL3hYpMarCw1JtuaK5U7amHhtuLFxYx/image.png)
(图源 ：pixabay)

至此我们已经做好了开启神奇的uptick之旅的准备，但是为了让我们的旅途更加奇妙，我们还需要对这个瑞士军刀进行一些打磨，有道是磨刀不误砍柴功嘛。

# uptick命令选项

uptick 使用方法如下：
`Usage: uptick [OPTIONS] COMMAND [ARGS]...`

我们可以对其指定一些选项，详情可参考`uptick --help`，我个人比较关心以下几项
```
  --node TEXT                     Websocket URL for public BitShares API
                                  (default: "wss://this.uptick.rocks/")
  -d, --nobroadcast / --broadcast
                                  Do not broadcast anything
  -x, --unsigned / --signed       Do not try to sign the transaction
  -e, --expires INTEGER           Expiration time in seconds (defaults to 30)
```

#### `node`选项
首先说一下node选项，和steem类似，就是API节点啦。uptick使用的默认节点是`wss://this.uptick.rocks/` 

查了一下IP是`176.9.148.19`，归属地是德国。
![](https://steemitimages.com/DQmQqRgquGxDsPCvQfJ4NDT3kAsyhJUfD7uMeQn6HZcT1AX/image.png)
这就意味着，如果我们在国内本地电脑访问，需要跋山涉水，翻山越岭，哈，这么说有些夸张了，其实就是有点慢啦。

所以使用一个近一点的，快一点的节点还是很有必要的。
我的笨办法是登陆bts的网页钱包，然后进入`Settings->Access`来查看可用节点
![](https://steemitimages.com/DQmVKozfCuvEyYJHGS5BizcgrWfSMeDVzQhPzBMbCJAapNs/image.png)
额，好像都不快，随便拿来一个吧

这样对于我们之前文章中提到的查询市场行情的指令`uptick ticker BTS:CNY`
就可以用：`uptick --node wss://bts.ai.la/ws ticker BTS:CNY`通过指定节点来获取行情了
![](https://steemitimages.com/DQmeJ4hEonfUoihZAZ2JeA1SyfnJUZmPqcARoNuU7dSrLEW/image.png)
似乎好像快了那么一点点？咦，怎么又0.991啦，别等客了，快发车吧。😵


#### `-d` 选项

不用记后边的`--nobroadcast / --broadcast`啥的啦，只需要知道***默认情况下操作都是被广播出去的，而加上`-d`就不广播啦。***

#### `-x`选项

同`-d `选项一样，我们不用记忆`--unsigned / --signed`这些选项，只需要知道***默认情况下操作都是被签名的，而加上`-x`就不签名啦。***

#### `-e`选项

这个选项我认为是最最最最重要的啦，因为网速慢，节点慢，我使用网页钱包操作的时候，经常遇到操作超时。简单来讲，就是我们打包并签名好一个操作，设置了30秒后超时，然后，等我们把操作发送给节点，节点再去广播操作，这时已经超过了30秒。然后，就失败了，白费了好大的力气。

而通过`-e`选项，我们可以把超时时间改为60秒，或者300秒，这样就从容多啦。

# 设置默认值

通过上边的介绍，我们了解到这些命令选项很重要，但是每次输入一大堆的选项，有点累，那么有没有什么办法设置一些默认值呢？

还记得，上一篇文章我们导入私钥的时候，uptick自动帮我们设置了默认账户吗？
并提示我们可以用：`uptick set default_account <account-name>`来设置默认账户

其实这个命令是：
`uptick set [OPTIONS] KEY VALUE`

那么我们就可以用：
`uptick set default_account <account-name>`来设置默认账户
`uptick set node <node>`来设置默认节点

还可以用来设置rpcuser、rpcpassword等选项的值。

那么是否能用这个命令设置超时时间呢？我看了一下代码：
```
@click.option(
    '--expires',
    '-e',
    default=30,
help='Expiration time in seconds (defaults to 30)')
```
这个默认值是用的硬编码30，所以我们没法通过`uptick set expires 300`来设置超时时间为300秒。

不过貌似改一下，加入这个支持应该很容易，读者需要的话，可以尝试自己修改一下。

# 总结

磨刀不误砍柴功，在我们~~开车之前~~享受uptick的强大功能之前，我们了解一下***uptick命令的选项，以及如何设置选项的默认值***，为我们接下来的~~开车~~操作铺平道路。


# 更多信息

更多信息请参考：
https://github.com/xeroc/uptick
http://uptick.readthedocs.io/en/latest/index.html

- - -

This page is synchronized from the post: [又一把瑞士军刀？ Uptick初体验（三）：uptick命令选项以及设置默认值](https://steemit.com/@oflyhigh/uptick-uptick)
