
---
title: 'python-bitshares 边学边记 (八) / Blockchain类'
permlink: python-bitshares-blockchain
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-28 13:25:39
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


在之前的几篇文章中，我们简单介绍了如何安装python-bitshares 、python-bitshares的钱包相关操作、BitShares类以及Account类、Market类、Dex类、Block类。

详情可以参考文末的参考链接。
![](https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png)
(图源 ：pixabay)

这节我们来继续学习python-bitshares 。

---
# Blockchain类

#### 创建实例

我们可以使用以下代码创建Blockchain类实例
`from bitshares.blockchain import Blockchain`
`chain = Blockchain()`

我们可以传入***`mode`***参数来指定处理最新区块还是无法回退区块
*  `irreversible`: 无法回退区块 (默认值)
 * `head`: 最新区块

关于无法回退区块，代码中的说明如下：
>"irreversible": the block that is confirmed by 2/3 of all block producers and is thus irreversible!

#### 获取区块链信息

我们可以通过以下代码获取区块链当前信息
`from pprint import pprint`
`pprint(chain.info())`
![](https://steemitimages.com/DQmehTWHtMgCnFLQgNKVHzsHSaVfFqsKr5EZRcJeRe84rYP/image.png)

底层调用的：***`get_dynamic_global_properties`***

#### 读取当前区块编号

我们可以通过如下代码读取当前区块的编号
`pprint(chain.get_current_block_num())`
其实呢，这个方法就是根据我们设置的***`mode`***去读取上述返回信息中的***`last_irreversible_block_num`***或者***`head_block_number`***


#### 读取当前区块

还记得我们读取指定区块内容的代码吗？
 `from pprint import pprint`
`from bitshares.block import Block`
`block = Block(1)`
`pprint(block)`

读取当前块其实可以理解成封装了两部分功能
* 获取当前区块编号: num
* 使用Block(num)来获取指定块

示例代码如下：
` pprint(chain.get_current_block())`
因为现在每个区块都包含很多内容，返回信息太长，就不贴截图了。

其它获取区块时间等功能就不再赘述了，感兴趣的朋友可以自己看。

# 重要功能

除了我们上述介绍的内容，Blockchain类最重要的功能是用于迭代访问区块链中所有的区块或迭代访问所有的操作或者迭代访问区块链中指定的操作。

对应的三个方法分别为：
* `def blocks(self, start=None, stop=None)`
* `def ops(self, start=None, stop=None, **kwargs)`
* `def stream(self, opNames=[], *args, **kwargs)`

可以通过***`start、stop`***指定起止区块，默认从当前块开始，一直生成。

代码注释中提到参数***`mode`***，实际上***`mode`***是在Blockchain类实例创建时指定的，在以上三个方法中指定无效。大家别被这个误导了就好。


# 测试

#### 监控所有操作

有了上述的学习，我们可以用以下代码监控bitshares区块链上的所有新操作：

`for operations in chain.ops():  pprint(operations)`
![](https://steemitimages.com/DQmdjxbQ1Az7QbnWwxX1ae18Hh8cPrLZJdu2gNaFVHfLYHS/image.png)

#### 监控指定操作

上边代码，我们不手工停止，就会一直运行下去。另外由于bitshares中定义了很多操作，上述代码会不断显示很多内容。实际应用中我们可能只需要关心指定操作即可。那么就要用到***`def stream(self, opNames=[], *args, **kwargs)`***

举例说，我们只监控转账操作，那么示例代码如下：
`for operations in chain.stream(opNames=['transfer']):  pprint(operations)`

我们会不断监视到类似下边的转账信息：
![](https://steemitimages.com/DQmUCmHkeZyHqfQ9ZWYRNBJG5cRLggBFdVCwvYzKGEsa3yW/image.png)

# 总结

Blockchain类提供了诸多操作bitshares区块链的方法，本文仅拣常用几项进行了说明。感兴趣的朋友可以自行阅读Blockchain类的相关代码。

文件地址为：
https://github.com/xeroc/python-bitshares/blob/master/bitshares/blockchain.py

另外本文测试了使用 Blockchain类监控区块链上的所有操作或者监控指定操作，并提供了简单的示例代码。利用这些功能，你可以实现诸如账户变动监视助手能小工具，想必一定会很有趣的。


***文中信息仅供参考，使用文中代码造成损失概不负责！***


# 参考信息

* [https://github.com/xeroc/python-bitshares](https://github.com/xeroc/python-bitshares)
* [python-bitshares 边学边记 (一) : 简介与安装](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares)
* [python-bitshares 边学边记 (二) : 钱包操作](https://steemit.com/python-bitshares/@oflyhigh/3ab1oc-python-bitshares)
* [python-bitshares 边学边记 (三) / BitShares类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-bitshares)
* [python-bitshares 边学边记 (四) / Account类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-account)
* [python-bitshares 边学边记 (五) / Market类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-market)
* [python-bitshares 边学边记 (六) / Dex类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-dex)
* [python-bitshares 边学边记 (七) / Block类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-block)

- - -

This page is synchronized from the post: [python-bitshares 边学边记 (八) / Blockchain类](https://steemit.com/@oflyhigh/python-bitshares-blockchain)
