
---
title: '每天进步一点点：Memo中的加密手段 & AES加密'
permlink: memo-and-aes
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-06 03:50:48
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- memo
- aes
- include
thumbnail: 'https://cdn.pixabay.com/photo/2016/12/08/08/28/virus-1891191_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


通过之前的文章，我们已经知晓了Memo的大致工作原理，那就是：
>发送者利用发送方的私钥和接收方的公钥生成共享密码，而接收者用接收方的私钥和发送方的公钥同样可以获取共享密码。

![](https://cdn.pixabay.com/photo/2016/12/08/08/28/virus-1891191_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

当然了，共享密码生成还是需要经过一系列的处理，并且发送/接收方要按相同的流程和规范生成，这样才能正确地加密/解密。

那么问题来来了，明文有了，密码有了，我们用什么手段加密明文呢? 因为发送方和接收方用相同的密码加解密，所以要用对称加密算法，所谓对称加密，百度百科上这么介绍的：
>采用单钥密码系统的加密方法，同一个密钥可以同时用作信息的加密和解密，这种加密方法称为对称加密，也称为单密钥加密。

而HIVE/STEEM的memo加密使用的是对称加密中最为常见的一种算法：AES (Advanced Encryption Standard)即***高级加密标准***，听听这名字，就不同凡响，哈哈。

# 安装pycrypto库

Python中使用AES的一种方法是使用`pycrypto`库，然后使用如下语句引入AES
>`from Crypto.Cipher import AES`

然而因为我用的是一台新机器，所以出现了如下错误提示：
>ModuleNotFoundError: No module named 'Crypto'

使用如下指令尝试安装`pycrypto`
>`pip install pycrypto`


结果又出现如下错误：
>configure: error: in `/tmp/pip-install-7_25hg67/pycrypto':
>configure: error: no acceptable C compiler found in $PATH

缺啥装啥：
>`sudo apt install gcc`

又出错：
>src/MD2.c:31:10: fatal error: Python.h: No such file or directory
>#include "Python.h"

还是缺啥装啥：
>`sudo apt install python3-dev`

尽管看起来敲个指令很容易，可是家里的网速，网速真的伤不起
>![image.png](https://images.hive.blog/DQmTwK7CscaFUHCHpJgjvpNdEpXBgHoWAEG3cPdoyy3tecg/image.png)

总算下载完了，再次执行：
>`pip install pycrypto`

安装成功，耶：
>![image.png](https://images.hive.blog/DQmNmcjFwQ9FRCz14EoofBxaXtxUgJ3aEYcUbcfnT6PBiGe/image.png)

# AES的使用

接下来是如何使用AES加密的问题，我把我珍藏多年的《密码编码学与网络安全——原理与实践》找了出来，然后发现根本看不懂。

steem-python中的初始化AES的核心代码如下：
>![image.png](https://images.hive.blog/DQmZukMKtKgUjDPPaSbadd3BSgcymRRe61zyrcFik9CsPLg/image.png)

但是`AES.MODE_CBC`、`iv`都是些什么鬼？查了半天，终于找到了：
* CBC(Cipher Block Chaining，加密块链)模式
* IV: 初始化向量

网上找了一段[示例代码](https://www.quickprogrammingtips.com/python/aes-256-encryption-and-decryption-in-python.html)：

一般都是加密时用到iv，但是把iv以明文编码的形式打包到结果中，然后解密时先取出iv再参与计算：
>![image.png](https://images.hive.blog/DQmf6xrWk9hBhcDXaKPQuL6fEmrrSh6XzgzKD6aRqGtixpX/image.png)

而HIVE/STEEM的memo加密则比较先进，iv和key都是由shared_secret、nonce计算得出，同样可以在接收端计算得出，无需明文传递。

所以看起来，还是HIVE/STEEM中对Memo加密处理的方法更先进一些呢。

好了，虽然更深入的理论我是研究不明白了，但是基本应该可以上手做了，撸起袖子加油干！


# 相关链接

* [高级加密标准](https://baike.baidu.com/item/%E9%AB%98%E7%BA%A7%E5%8A%A0%E5%AF%86%E6%A0%87%E5%87%86/468774)
* [AES 256 Encryption and Decryption in Python](https://www.quickprogrammingtips.com/python/aes-256-encryption-and-decryption-in-python.html)

- - -

This page is synchronized from the post: ['每天进步一点点：Memo中的加密手段 & AES加密'](https://steemit.com/@oflyhigh/memo-and-aes)
