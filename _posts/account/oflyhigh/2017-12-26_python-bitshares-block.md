
---
title: 'python-bitshares 边学边记 (七) / Block类'
permlink: python-bitshares-block
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-26 13:29:06
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


在之前的几篇文章中，我们简单介绍了如何安装python-bitshares 、python-bitshares的钱包相关操作、BitShares类以及Account类、Market类、Dex类。

详情可以参考文末的参考链接。
![](https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png)
(图源 ：pixabay)

这节我们来继续学习python-bitshares 。

---
# Block类

#### 创建实例

我们可以使用以下代码创建Block类实例
`from bitshares.block import Block`
`block = Block(1)`


#### 读取指定区块

以下代码可以读取并打印指定区块内容
 `from pprint import pprint`
`from bitshares.block import Block`
`block = Block(1)`
`pprint(block)`

![](https://steemitimages.com/DQmX4j5vT5K5Dcz24t448cviYpqPUJYsRngCE23T7NTh2pX/image.png)
这就是bitshares 2.0的创世块哦

#### 显示指定区块的时间

通过上述讲解，我们已经知道了如何读取和打印指定区块内容
这个类还有个方法是显示指定区块的时间

比如对于创世块
`block = Block(1)`
`print(block.time())`

![](https://steemitimages.com/DQmdEStekYrb6ijMgUrn371zDLYE6KvdhuoLsNErowBgS4m/image.png)
也就是bitshares2.0的创世块时间为：***`2015-10-13 14:12:24`***

找了一下***`旧闻`***: [BitShares 2.0 to Launch on October 13th](https://bitshares.org/blog/2015/09/11/BitShares-2.0-Launching-on-October-13th/)
果然没错哦。

在我写文章时，当前***`head_block_num`***为：***`22985850`***
![](https://steemitimages.com/DQmcDqKyuS85XgNJgZHYZ5NCbphL4K8gcycRcLpbBCpC9TZ/image.png)
读出对应的时间为：***`2017-12-26 12:25:24`***

***`注：知道了首块时间以及块间隔，我们应该可以反过来读取任意时间段的区块`***

#### 返回指定区块可遍历的(键, 值) 元组数组
我们可以通过以下代码返回指定区块可遍历的(键, 值) 元组数组
```
block = Block(1)
for key, value in block.items():
     print(key, value)
```
![](https://steemitimages.com/DQmenDM5AX5ZjsncnsriJh2FufqSAJvyGsr2saC45LcfwFV/image.png)

# 测试

有了上述的学习，我在想，我们是否读取指定时间段的区块呢？

假设有以下时间点：
***`时间点1(2017-09-01T00:00:00)`***
***`时间点2(2017-09-01T00:00:08)`***

那么我们能否获取这两个时间点之间的块呢？

### 思路

我的思路如下：
* 获取创世块时间点
* 计算时间点1与创世块时间点之间的差额
* 通过时间差额以及块间隔计算出时间点前一个块的num
* Num+1即为时间点1后的第一个块
* 同理计算出时间点2前一个块
* 这样我们就计算出了两个时间点之间的块


#### 代码片段

```
from datetime import datetime
from bitshares.block import Block

dp_0 = Block(1).time()
dp_1 = datetime.strptime('2017-09-01T00:00:00', '%Y-%m-%dT%H:%M:%S')
delta = dp_1 - dp_0
total_seconds = delta.total_seconds()
blocks = int(total_seconds / 3)
print(Block(1+blocks).time())
```

![](https://steemitimages.com/DQmSBMbv5ny7tBhXKbviSFDnqbmiT6Cksk9EzSie1ht19rs/image.png)

额，对应块时间为：***`2017-09-07 02:06:51`***，不是我们想要的： ***`2017-09-01T00:00:00`***
所以我的尝试以失败告终，就没必要进行下一步喽。



# 解决办法

上述代码之所以出现问题，是因为虽然块间隔约定为3秒，但是实际上出块时间可能会超过3秒，我们严格按照3秒来计算时间会有偏差的。那么有没有办法解决呢？我想到一个思路就是不断逼近。

大致意思是用创世块和时间点间隔，算出块A，用快A和时间点间隔算出块B，直到我们算出的块的对应时间临近我们的时间点。

具体代码就不贴了，其实我也就是试着玩玩而已。

# 总结

Block类可以用于方便的读取指定区块，同时可以通过time()方法返回指定区块的时间。用items方法指定区块可遍历的(键, 值) 元组数组。

另外文中我们测试了根据块间隔以及创世块时间计算指定时间段内的区块列表，通过测试，我们了解到实际块间隔(出块时间)不是严格的3秒钟。所以如果需要使用这种方法读取时间段内的区块列表，需要对代码进行修正。



***文中信息仅供参考，使用文中代码造成损失概不负责！***


# 参考信息

* [https://github.com/xeroc/python-bitshares](https://github.com/xeroc/python-bitshares)
* [python-bitshares 边学边记 (一) : 简介与安装](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares)
* [python-bitshares 边学边记 (二) : 钱包操作](https://steemit.com/python-bitshares/@oflyhigh/3ab1oc-python-bitshares)
* [python-bitshares 边学边记 (三) / BitShares类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-bitshares)
* [python-bitshares 边学边记 (四) / Account类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-account)
* [python-bitshares 边学边记 (五) / Market类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-market)
* [python-bitshares 边学边记 (六) / Dex类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-dex)

- - -

This page is synchronized from the post: [python-bitshares 边学边记 (七) / Block类](https://steemit.com/@oflyhigh/python-bitshares-block)
