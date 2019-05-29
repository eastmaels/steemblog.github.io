
---
title: "Create your own steem shop / 创建自己的steem网店"
permlink: create-your-own-steem-shop-steem
catalog: true
toc_nav_num: true
toc: true
date: 2017-06-23 08:21:21
categories:
- cn
tags:
- cn
- steem
- wordpress
- woocommerce
- shop
thumbnail: https://steemitimages.com/DQmYDttZTpz1hTLbMznfBdPErXJgYLCDFynrpcnjdXaFUf8/steemshop%201.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


数字货币作业支付手段已经被很多商家所采用。其中应用最广泛的当然是比特币了。据称，日本已经将比特币将为合法的支付手段，已经有几十万商家接受比特币付款了。我们现在都知道，比特币支付现在是又慢又贵，作为支付其实并不理想。而steem作为支付相对要优秀很多。Steem支付速度快，零费用，简直可以和支付宝有得一拼了。而wordpress和woocommerce插件相结合可以很轻松的实现基本的电子商务功能。而steem作为支付插件也是前两天在社区里面刚刚看到，感谢作者 @recrypto 编写的插件。今天我也就测试下，用steem作为结算货币，来创建自己的网店。

本文用的是本地环境，apache+mysql+php7+wordpress 4.8

#### 一、wordpress主题准备。

![steemshop 1.jpg](https://steemitimages.com/DQmYDttZTpz1hTLbMznfBdPErXJgYLCDFynrpcnjdXaFUf8/steemshop%201.jpg)

我这里采用的是the 7-shop主题。它自带了woocommerce插件，当然也有支付宝和微信支付的插件。采用主题可以快速搭建电子商务网站，不用再去敲击代码了。你只需在已有的基础下修改即可。如果是新手的话，请到本文末学习wordpress建站的基本知识。

#### 二、插件准备

插件地址：https://wordpress.org/plugins/woo-steem

![steemshop 2.jpg](https://steemitimages.com/DQmW67h1AR5D4ddpwQ2nqr5kykteT8qK1vvPtUckEx6aNCw/steemshop%202.jpg)

将下好的软件包解压到相应的plugins目录下，本文的目录是 D:\AppServ\www\wp-content\plugins

#### 三、启动及设置

![steemshop3.jpg](https://steemitimages.com/DQmSctRK9txyKiSYWPwr5sEpcyk5ofuLvKbrRfKR7enAdCQ/steemshop3.jpg)

直接到WP后台，启动插件。

![steemshop4.jpg](https://steemitimages.com/DQmUYqjsKH4JhmpHwBnVJpAqw7Dt1mWGBudD9srQ7Q1A4U1/steemshop4.jpg)

在woocommerce中设置结算，点选“steem”,这里只需设置 payee为你的steem帐户名即可。

#### 四、测试购买和结算

![steemshop5.jpg](https://steemitimages.com/DQme7rbwU8Vf7kiDk3yAWpnnJ1ZZCErZSMMmvVmKjjfuTCJ/steemshop5.jpg)

点选购买几件东西，点选结算。这时，会生成订单，选择“steem”,继续结算。

![steemshop6.jpg](https://steemitimages.com/DQmTFAV8DFymvoJEMLoUiEbTeGqterSowF78fHqC82anLe5/steemshop6.jpg)

最后，会生成一张结算单。上面有具体的支付金额，还有steem帐户名和MEMO信息，顾客就可以按这张结算单去转帐了。店主也可以根据转帐完的信息去发货了。

#### 五、小结

这个插件设计得还算可以，用起来简洁明了，方便快捷。不过，结算单并没有按实时汇率算出要转多少个steem。顾客需要自己按照人民币数量算出需要多少相应的steem，这未免美中不足。期待作者能改善这个功能。

想用steem作为网店的朋友们，也可以测试下吧，体验感还是不错。Steem作为货币的应用功能也能得到发挥了。

  ****
前期知识（想开网店你还应该学习下面的技能）：
[我师网校](https://chuanke.baidu.com/s2256159.html)
[wordpress基础视频教程](https://chuanke.baidu.com/v2256159-214806-1356771.html)
[基于bootstrap的wordpress主题开发](https://chuanke.baidu.com/2256159-221340.html)
[bootstrap基础入门]( https://chuanke.baidu.com/v2256159-220381-1439693.html)
[bootstrap网站开发（响应式网站）](https://chuanke.baidu.com/2256159-220824.html)


  ****
　@lemooljiang

- - -

This page is synchronized from the post: [Create your own steem shop / 创建自己的steem网店](https://steemit.com/@lemooljiang/create-your-own-steem-shop-steem)
