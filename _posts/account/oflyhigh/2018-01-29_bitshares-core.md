
---
title: '尝试编译BitShares Core'
permlink: bitshares-core
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-29 03:47:57
categories:
- bitshares
tags:
- bitshares
- bts
- cn
- cn-programming
- study
thumbnail: https://steemitimages.com/DQmbetK9MHQbWok8gPBTMkvuJQe6meQP5rRKdXQbwgvCUc5/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


都说***纸上得来终觉浅，绝知此事要躬行***，尽管看过好多大神的编译指南之类的，但是还有感觉有些迷糊，没办法，不亲自操作一下，理解的难免不深刻。怎么形容呢，就好比学数学不做习题，学编程不上机。所以今天就上机操作一下。

![](https://steemitimages.com/DQmbetK9MHQbWok8gPBTMkvuJQe6meQP5rRKdXQbwgvCUc5/image.png)

# 系统要求

在@abit的 [《BTS交易所对接指南（单节点版）》](https://github.com/abitmore/bts-cn-docs/blob/master/BTS%E4%BA%A4%E6%98%93%E6%89%80%E5%AF%B9%E6%8E%A5%E6%8C%87%E5%8D%97%EF%BC%88%E5%8D%95%E8%8A%82%E7%82%B9%E7%89%88%EF%BC%89.txt)中提到，系统的最小要求为：

>独立服务器或者VPS
8G 内存（更多更好）
50G 硬盘

所以我去Linode选了如下VPS
![](https://steemitimages.com/DQmNjup8W7KMS5sLWdniADNhyzQxxXVFJ9AWDSmuGyaKHZi/image.png)
看起来应该符合要求

官方推荐的系统为：`Ubuntu 16.04 LTS`，听人劝吃饱饭，那就用`Ubuntu 16.04 LTS`好了。
内核版本为`4.14.14`，据说***打完Meltdown补丁***了😳

# 准备工作

#### 更新系统软件包

首先更新了一下系统上的软件包
`sudo apt-get update`
`sudo apt-get upgrade`

#### 安装依赖

安装必要的依赖
`sudo apt-get install autoconf cmake git libboost-all-dev libssl-dev g++ libcurl4-openssl-dev`

# 编译

检出代码并编译
```
git clone https://github.com/bitshares/bitshares-core.git
cd bitshares-core
git checkout <LATEST_RELEASE_TAG>
git submodule update --init --recursive
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=Release ..
make witness_node cli_wallet
```

上述指令中，需要将`<LATEST_RELEASE_TAG> `替换成[最新发布版本号](https://github.com/bitshares/bitshares-core/releases)，撰写本文时，为`2.0.171212`

# 编译结果

经过漫长的等待（约1一个半小时），编译总算完成了。这个时间应该取决于硬件配置。

编译完成后我们得到两个程序
* build/programs/witness_node/witness_node
* build/programs/cli_wallet/cli_wallet

为了方便，我把它俩复制到~/programs 目录下。

# 时间校准

因为广播交易什么的都和时间有关，所以必须保证时间正确，否则一切免谈。

大神推荐如下方法：
`sudo timedatectl set-ntp false`
`sudo apt-get install ntp`

我看了一下，系统上已经启动了一个[`systemd-timesyncd`](http://man7.org/linux/man-pages/man8/systemd-timesyncd.8.html)进程，由[timedatectl](http://man7.org/linux/man-pages/man1/timedatectl.1.html)指令控制，也是用于时间同步的，大神的做法是关掉这个，启用ntp。

我测试一下，貌似这个东东应该可以用，那就先用着好了，出问题的时候再换其它方法。

来试试看：`timedatectl`
![](https://steemitimages.com/DQmRrmd5irjFVQRKjk1uytgDae9JPPCcBaG68EPzbrXnQBh/image.png)

# 其它

本来想再做做其它尝试，结果我到VPS的连接掉线了。为什么会掉线呢，当然是Party 妈妈怕我们受到资本主义那么腐朽的东西的毒害。其实我真的就是ssh登陆，没用来做ssh隧道，冤枉死我了。

不过既然Party 妈妈让我休息休息，那就先写到这里好了，晚上再说吧。

# 参考链接

* https://github.com/bitshares/bitshares-core
* [BTS交易所对接指南（单节点版）by @abit](https://github.com/abitmore/bts-cn-docs/blob/master/BTS%E4%BA%A4%E6%98%93%E6%89%80%E5%AF%B9%E6%8E%A5%E6%8C%87%E5%8D%97%EF%BC%88%E5%8D%95%E8%8A%82%E7%82%B9%E7%89%88%EF%BC%89.txt)
* [Memory Reduction for Nodes](https://github.com/bitshares/bitshares-core/wiki/Memory-reduction-for-nodes)
* https://github.com/bitshares/bitshares-core/releases
* http://man7.org/linux/man-pages/man1/timedatectl.1.html
* http://man7.org/linux/man-pages/man8/systemd-timesyncd.8.html

- - -

This page is synchronized from the post: [尝试编译BitShares Core](https://steemit.com/@oflyhigh/bitshares-core)
