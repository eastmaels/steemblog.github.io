
---
title: 'python-bitshares 边学边记 (二)  / 钱包操作'
permlink: 3ab1oc-python-bitshares
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-09 13:58:51
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


在之前的帖子中，介绍了python-bitshares 这个用于操作bitshares区块链的强大的python库。并介绍了python-bitshares的安装以及运行了一个简单的示例，并简单分析了python-bitshares与bitshares RPC的关系。

![](https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png)
(图源 ：pixabay)

这节我们来继续学习python-bitshares 。

# 导入私钥

在Uptick的介绍文章中，为了更好的使用uptick，我们将bitshares账户的私钥添加到了uptick钱包中。其实，钱包功能是在python-bitshares这个层次实现和访问的。uptick只是对相关功能进行了封装。

为了方便我们后续的学习，我们也要将私钥添加到python-bitshares的本地钱包中。如何获取账户私钥，可以参考这篇文章中的对应步骤：
* [又一把瑞士军刀？ Uptick初体验（二）：导入私钥](https://steemit.com/uptick/@oflyhigh/32cec-uptick)


#### 使用uptick 导入私钥

如果我们安装了uptick，那么可以直接使用uptick导入私钥的，非常方便。如何导入，在[这篇文章](https://steemit.com/uptick/@oflyhigh/32cec-uptick)已经做了详尽的介绍，就不再赘述了。

但是我直接安装的python-bitshares，是不包含uptick的，所以无法使用uptick导入私钥。

#### 使用代码导入私钥

导入私钥之前我们需要先***创建个钱包***
`from bitshares import BitShares`
`bitshares = BitShares(node="wss://openledger.hk/ws")`
`bitshares.wallet.create("passwd")`

上述代码创建一个本地钱包，并设置密码为`passwd`
(密码仅供示例，出于安全考虑，实际使用时，建议设置复杂一点的密码)

再对钱包进行创造之前，我们首先需要***解锁钱包***：
`bitshares.wallet.unlock("passwd")`

解锁钱包之后，我们就可以***导入私钥***了
`bitshares.wallet.addPrivateKey("5XXXXXXXX")`
执行成功后，私钥就被导入到钱包中去了。

# 使用`UNLOCK`环境变量解锁


在以上例子中，我们使用了
`bitshares.wallet.unlock("passwd")`
来解锁钱包。

在代码中硬编码密码可不是一个好习惯，假设我们有多份代码，然后需要修改密码，这一定是一个很头疼的事。

那么还有什么方法指定密码呢？

那就是设置环境变量，比如在我的系统中，
`export UNLOCK="passwd"`
为了每次都生效，可以加入到对应用户的`.bashrc`文件中

这样我们就可以无需在程序中硬编码密码以及每次调用`unlock()`了。

# 钱包其它功能

一般情况，都是python-bitshares 和钱包打交道，我们当它透明的就好。但是偶尔可能也需要我们直接对钱包进行操作，比如说看看钱包中有哪些用户，或者从钱包中读出某个对应用户的私钥。

一些可能会被使用到的函数如下：
* changePassphrase，修改密码
* getAccounts， 列出钱包中所有用户
* getPublicKeys，列出钱包中所有公钥
* getPrivateKeyForPublicKey，列出公钥的对应私钥。

更多函数及功能，请参考：
https://github.com/xeroc/python-bitshares/blob/master/bitshares/wallet.py

# 钱包存储位置

有时候我们可能需要将钱包迁移到其它的账户下，这时候一个一个私钥重新添加是很苦恼的事情，如果能直接迁移钱包文件就好了。

不同的系统下，钱包存储位置是不同的
在Linux系统下，钱包文件路径为：`~/.local/share/bitshares/bitshares.sqlite`

从命名可以看出是一个sqlite数据库，库中还包含一些默认参数之类的设置，这节就不详聊了。

# 总结

python-bitshares 提供了一个加密的本地钱包，这样我们使用起来就更加便利了。本文介绍了python-bitshares的钱包相关操作，包括以下内容：

* 创建钱包
* 解锁钱包
* 导入私钥
* 使用UNLOCK环境变量
* 钱包的其它函数
* 钱包的存储位置

# 参考信息

* [python-bitshares 边学边记 (一) : 简介与安装](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares)
* https://github.com/xeroc/python-bitshares

- - -

This page is synchronized from the post: [python-bitshares 边学边记 (二)  / 钱包操作](https://steemit.com/@oflyhigh/3ab1oc-python-bitshares)
