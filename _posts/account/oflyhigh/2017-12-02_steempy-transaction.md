
---
title: '使用steempy生成交易(transaction)、签名交易以及广播交易'
permlink: steempy-transaction
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-02 13:40:18
categories:
- cn
tags:
- cn
- steempy
- steem
- transaction
- cn-programming
thumbnail: https://steemitimages.com/DQmQw5HZkKGueqaZy7SiKH81jcu3PF585k1HxqdJ4VPuzU5/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


假设我们这样一种复杂的需求，一个多重签名账户，需要进行一笔交易，比如转账给别人。

那么我们需要对这个操作进行签名的权重超过阈值，这样说可能有些复杂，举个例子：
一个账户由三个账户控制，进行某项操作时，必须两个以上账户同意。

好了，今天要说的不是多重签名账户咋玩，而是假设我们有上述需求，那么如何对操作进行签名呢？STEEMIT官方网站肯定不行啦，没有这个接口。所以今天我要介绍使用steempy来进行这些操作。

----

# 生成交易(transaction)
首先，我们要生成交易数据：
假设oflyhigh.test是一个多重签名账户（实则它不是，但不影响我们讲解），我们要从这个账户转出一笔巨款给oflyhigh

我们可以使用如下指令生成交易数据
`steempy --expires 600 -d -x transfer --account oflyhigh.test oflyhigh 0.001 SBD  > t1.txt`
* -d 表示不广播
* -e 表示不签名
* --expires 600 表示交易超级时间为600秒

打开文件，可见交易数据如下：
![](https://steemitimages.com/DQmQw5HZkKGueqaZy7SiKH81jcu3PF585k1HxqdJ4VPuzU5/image.png)

# 签名交易(transaction)

接下来我们对交易进行签名。

`steempy sign --file t1.txt  > s1.txt`

签名成功后的数据如下：
![](https://steemitimages.com/DQmVdMdrVM2X299F2Kwz5nVbrDeAZirsTgLkJwPsNgpTGwS/image.png)

我们这里oflyhigh.test并不是多重签名账户，如果是多重签名账户，那么操作流程如下：

* 用户1 执行 `steempy sign --file t1.txt  > s1.txt`
* 用户2 执行 `steempy sign --file s1.txt  > s2.txt`
* 用户3执行 `steempy sign --file s2.txt  > s3.txt`

依次类推，就是把前一个用户的输出作为输入，继续签名。

# 广播交易(transaction)

最后这个步骤简单多了，执行以下指令即可：
`steempy broadcast --file s1.txt`
s1.txt是最终签名生成的文件，因为我们实际上只签了一次，所以是s1.

![](https://steemitimages.com/DQmNNGkdHeu3fStFJf8A59eMfRTa8vP3nynW6ttZ66REuE6/image.png)
查看steemd.com，得知我们的操作很成功。

# 总结

使用steempy，可以很轻易的生成交易，并对其进行签名以及广播。这个可以用于多重签名账户，让每个账户分别签名。

- - -

This page is synchronized from the post: [使用steempy生成交易(transaction)、签名交易以及广播交易](https://steemit.com/@oflyhigh/steempy-transaction)
