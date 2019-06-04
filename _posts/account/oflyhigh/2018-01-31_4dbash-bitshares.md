
---
title: '用上了bitshares轻钱包 + 私有节点'
permlink: 4dbash-bitshares
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-31 06:01:39
categories:
- bitshares
tags:
- bitshares
- bts
- money
- wallet
- cn
thumbnail: https://steemitimages.com/DQmbetK9MHQbWok8gPBTMkvuJQe6meQP5rRKdXQbwgvCUc5/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的文章中，我学习了[编译BitShares Core](https://steemit.com/bitshares/@oflyhigh/bitshares-core)以及[同步节点数据](https://steemit.com/bitshares/@oflyhigh/5mqv5m)，做完这些以后，我就可以[用curl测试访问节点以及使用这个节点跑我自己写的脚本](https://steemit.com/bitshares/@oflyhigh/6pqi4j)，一切都很顺利呢。

![](https://steemitimages.com/DQmbetK9MHQbWok8gPBTMkvuJQe6meQP5rRKdXQbwgvCUc5/image.png)

然后我就想在网页钱包中用我自己的这个节点，当然了，为了让我的节点能被访问到，我首先将节点RPC服务监听地址改成了公网IP，然后在家里的Linux电脑上测试可以用curl访问，也可以用cli_wallet访问，那么想必设在网页钱包里应该也不会有啥问题。


结果在网页钱包中无论我怎么设置都是显示节点不在线！明明节点列表里有一个`ws://127.0.0.1:8090`为啥我换成公网的节点就不好用了呢？并且明明我的节点都好用啊！去技术群里问了一下，好多大神热心地回复，答案是https网页钱包中不支持ws开头的节点，也就是说必须用加密的websockets(wss)。

弄了一上午证书，总算从comodo申请了一个证书，研究如何安装证书呢，大神提示为何不用轻钱包呢？是啊，我为啥不用轻钱包呢？答案是我没用过，不会用啊。那就把证书啥的丢一边，学习一下轻钱包吧。

# 下载

首先是找在哪下载轻钱包，翻了半天总算在这找到了
https://github.com/bitshares/bitshares-ui/releases

于此同时，我在费了半天劲打开的N多网页中也发现了官网主页就有下载链接
https://bitshares.org/download/
(竟然不首先去官网找，我的智商诶)

因为我用Windows，所以下载这个文件：
https://github.com/bitshares/bitshares-ui/releases/download/2.0.180115/BitShares.Setup.2.0.180115.exe
一共不到70M，还是很苗条的，难怪叫***轻***钱包

# 安装

看了一下下载的文件：
![](https://steemitimages.com/DQmfD28QCKqRfmqpdmKm5hKk4gubr1tQhFRH3KaZzBB3zov/image.png)

看名字应该是个安装包，那就安装一下吧，我做好了一步一步截图的准备 ，结果人家直接安装完毕运行起来了，这才叫效率啊😀

看了一下，它在桌面生成了一个快捷方式
![](https://steemitimages.com/DQmZTQcN82HVJSRsH1k8BYqkaDNbmewZR6HxCah4Bt3psuP/image.png)

轻钱包被安装到
`C:\Users\xxxx\AppData\Local\Programs\BitShares2-light`
里边包含一堆文件
![](https://steemitimages.com/DQmep3UGuyWHUHKRh4PWSro75gH9Xkdg7JoVD45YaJSBWvn/image.png)

# 运行

点击上述桌面快捷方式，启动轻钱包，有木有似曾相识的感觉啊？
![](https://steemitimages.com/DQmSbS79ap7fZgBJDSCPCUNCkZFEp2zkKa13mJjPtr2LDao/image.png)

没错，和网页钱包几乎完全一样，对于网页钱包用户而言，用起来没有一点障碍啊。

无论是创建新用户、还是使用用户名密码登陆、或者是导入并恢复钱包文件，都与网页钱包没啥不同，就不再赘述了。

# 设置节点

激动人心的时刻到了，是时候使用我自己的节点啦。

添加节点：
![](https://steemitimages.com/DQmb6WUm95XvHqXdpgnPishAdnu7xuuj9nUytw9Rx6GEt7u/image.png)

激活节点：
![](https://steemitimages.com/DQmanaipH9Q2A3X6XCKQBLwpzuNCmnB2Lypaxies9L4xANF/image.png)

# 测试

#### 转账测试

给自己转一个BTS玩

![](https://steemitimages.com/DQmdMYPgUFvM9wFe1NDHuba7zBaFQDpfgW5qZjkcTBAXZJM/image.png)

![](https://steemitimages.com/DQmWAPwnuafCWuYH1xuL4u2f8vY4RUqBSuEnyLKpy1bp7Y3/image.png)

![](https://steemitimages.com/DQme8te7Hk2rAwDNvnS5nYAuJmawcopEtD5VDChhCAvKv34/image.png)


#### 交易

卖俩BTS换点人民币花

![](https://steemitimages.com/DQmTKSMRmGAA8qL6vw2toTCgipbNjDuizva7eRL41Y9mzQF/image.png)

![](https://steemitimages.com/DQmVG5jKyKaucMzRZFmX41oi2StQPCUp9SuZx3zb2rQYVW9/image.png)

![](https://steemitimages.com/DQmcFmEeM9xUdihypDFHYY9QkfAE3pS1zVvX7pWUAR7wLcW/image.png)

# 结论

* 网页钱包不支持非加密的websockets RPC节点
* 轻钱包支持非加密的websockets RPC节点
* 轻钱包使用和网页钱包没啥区别


***用上轻钱包，腰不酸了、腿不疼了，一口气上六楼都不费劲***

- - -

This page is synchronized from the post: [用上了bitshares轻钱包 + 私有节点](https://steemit.com/@oflyhigh/4dbash-bitshares)
