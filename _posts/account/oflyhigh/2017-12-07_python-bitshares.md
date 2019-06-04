
---
title: 'python-bitshares 边学边记 (一)'
permlink: python-bitshares
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-07 13:16:36
categories:
- python-bitshares
tags:
- python-bitshares
- bitshares
- python
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的系列文章中，我给大家分享了uptick。uptick是由 @xeroc 大神开发和维护，用于和比特股网络打交道的命令行工具，使用Python语言开发，底层使用了python-bitshares 这个Python库。uptick的强大功能我们都见识过了，那么我接下来会整理一些python-bitshares的学习记录，便于自己以后查阅，也希望能给有想了解python-bitshares的朋友一些参考。

![](https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png)
(图源 ：pixabay)

# 如何安装

python-bitshares  这个库也是 @xeroc 大神 开发和维护的，致敬。

Github地址为：https://github.com/xeroc/python-bitshares

安装非常简单，执行下列指令即可：
`sudo apt-get install libffi-dev libssl-dev python-dev`
`pip3 install bitshares`

当然了，也可以手动安装
`git clone https://github.com/xeroc/python-bitshares/`
`cd python-bitshares`
`python3 setup.py install --user`

如需升级，执行下列指令即可：
`pip install --user --upgrade`

需要说明一点是，因为uptick依赖于python-bitshares，所以安装uptick会自动安装python-bitshares



# 查看bitshares区块链信息

安装完成之后，我们写一个简单的例子来查看bitshares区块链的信息

`from bitshares import BitShares`
`from pprint import pprint`
`bitshares = BitShares()`
`pprint(bitshares.info())`

其中BitShares是python-bitshares库中最常用的类之一。
* `bitshares = BitShares()`创建了一个实例
*  `bitshares.info()`是`get_dynamic_global_properties() `API的封装。

将上述代码保存为info.py并执行，执行结果如下：
![](https://steemitimages.com/DQmRGLYo1cNn8gr1hJnQMFoTwTrYMNaSzhNHeA69zYvgi11/image.png)

这也说明我们的安装没有问题。

# `bitshares.info() ` 的API调用实例

我们说`bitshares.info()`是对`get_dynamic_global_properties() `API的封装。

在之前的文章[学习一下BTS的远程过程调用 / Learn the remote procedure call of BTS](https://steemit.com/bitshares/@oflyhigh/bts-learn-the-remote-procedure-call-of-bts)我们学习过如何用工具curl来进行API调用。

所以在这里我们测试一下直接用curl调用会是什么效果呢？

根据以前学习的内容，我们生成了curl的命令以及参数
`curl  --data '{"jsonrpc": "2.0", "method": "get_dynamic_global_properties", "params": [], "id": 1}' https://openledger.hk/ws`

为了便于阅读，我对调用结果进行了格式化处理
![](https://steemitimages.com/DQmcbqyp8R6rhktQtrGt7LBAgL1VMcQJ6jLVz8x1qxbw5ps/image.png)

通过与`bitshares.info() `的对比可知，`bitshares.info() `返回的是`get_dynamic_global_properties`的`result`部分。

事实上，python-bitshares就是对bitshares RPC的封装，只是相比于我们简单粗暴的使用curl，它将websocket封装为GrapheneWebsocketRPC，然后再被BitSharesNodeRPC所继承。但是本质上和我们用curl是没有区别的。

# 总结

在这篇笔记中，我们介绍了
* python-bitshares的安装
* python-bitshares的简单例子
* python-bitshares与bitshares RPC的关系简介

有了这些基础，我们就可以开启我们的python-bitshares愉快旅程了。

# 相关文章
* [学习一下BTS的远程过程调用 / Learn the remote procedure call of BTS](https://steemit.com/bitshares/@oflyhigh/bts-learn-the-remote-procedure-call-of-bts)
* [又一把瑞士军刀？ Uptick初体验（一）](https://steemit.com/uptick/@oflyhigh/uptick)
* [又一把瑞士军刀？ Uptick初体验（二）：导入私钥](https://steemit.com/uptick/@oflyhigh/32cec-uptick)
* [又一把瑞士军刀？ Uptick初体验（三）：uptick命令选项以及设置默认值](https://steemit.com/uptick/@oflyhigh/uptick-uptick)
* [又一把瑞士军刀？ Uptick初体验（四）：uptick命令 / 查询市场行情、转账、交易、查询及取消订单](https://steemit.com/uptick/@oflyhigh/5jdo3s-uptick-uptick)
* [又一把瑞士军刀？ Uptick初体验（五）：uptick高级功能的尝试  (完)](https://steemit.com/uptick/@oflyhigh/2ppgyw-uptick-uptick)

- - -

This page is synchronized from the post: [python-bitshares 边学边记 (一)](https://steemit.com/@oflyhigh/python-bitshares)
