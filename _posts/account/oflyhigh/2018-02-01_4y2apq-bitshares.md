
---
title: 'BitShares 账户备份小结'
permlink: 4y2apq-bitshares
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-01 04:49:09
categories:
- bitshares
tags:
- bitshares
- backup
- bts
- wallet
- cn
thumbnail: https://steemitimages.com/DQmQcsmEuVok31FvayWbGn4XFiNKfftSEQVT8WZ5FsSNxHZ/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


玩STEEM都知道，一旦账户密码忘记了，那么是无法找回的。BitShares也一样，一旦账户密码忘记了，那么你账户里的资产就没谁能冻得了啦，包括你自己。所以备份，在BitShare中也同样重要。

![](https://steemitimages.com/DQmQcsmEuVok31FvayWbGn4XFiNKfftSEQVT8WZ5FsSNxHZ/image.png)
(图源 ：[pixabay](https://pixabay.com))

在BitShares系统里，我们可能会接触如下概念，账户、密码、钱包、私钥，下边我介绍一下我的备份经验，供大家参考。

# 备份

#### 账户密码模式


如果你注册和登陆bitshares钱包都使用的是账户密码模式，那么你备份的时候只需将账户密码保存下来即可。

帐户、密码在各个bitshares钱包都是可以直接使用的，比如说网页钱包、轻钱包、鼓鼓钱包等。

#### 钱包模式

如果你使用的是钱包模式，那么你需要备份一个***.bin文件，其中包含你钱包中所有账户的私钥***。这个文件使用一个密码加密，这个密码用于解锁钱包。

如果你使用钱包模式，你只记下了密码，一旦你的网页钱包崩溃，并且之前没有备份，那么对不起，你的账户完蛋了，这时候密码啥用都没有。

一旦你钱包中的私钥发生了变化(增加、删除、修改等)，那么你需要重新备份钱包。

钱包备份方法参见截图
![](https://steemitimages.com/DQmRh4YgPdL7QrEesBEuoKhmRVvsm9UZXsksNvmMEEUYsME/image.png)

#### 私钥备份

我们之前说了，钱包备份生成的.bin文件中实际保存的是你钱包账户中的所有私钥。我们当然也可以直接备份私钥了。

私钥备份的方式为
* 选择对应的账户(钱包模式中可能有多个账户)
*点钱包右上角的按钮，在弹出菜单中选择***Permissions***
* 选择对应的权限Active Permissions/Owner Permissions
* 按提示操作显示对应的私钥
* 将私钥复制并保存好

![](https://steemitimages.com/DQmbw1zXy6VMnkTfhTA8LXgFYWaNKR6GUyAV22QJVi2p7mP/image.png)
保存私钥记得要保存完整，比如我们钱包中有多个账户，我们只保存了其中一个账户的Active私钥，那恢复的时候就只能恢复这个账户的Active Permissions了。


# 恢复

账户密码模式就不用说了，直接登陆就好了

钱包模式的恢复参加下图：
![](https://steemitimages.com/DQmc5XxvMRHf1QY21zF7Xkwx7JwBikg5CjSSwBjdsWiZQuq/image.png)

私钥备份的情况，我们在钱包中导入私钥就好：
![](https://steemitimages.com/DQmShBNkPeTb6kEWc2r7Yu62xod6oc9qx6Y1s7qkDVmaPhs/image.png)

# 总结

列个表格对比一下吧。

模式| 备份对象|备注
----|----|----
账户密码|账户、密码|文本，可直接用于登陆
钱包模式|.bin文件、密码|.bin文件包含钱包中所有账户的私钥，密码用于解锁文件
私钥备份|私钥|文本，对应账户的不同权限

也就是说，上边三组信息你务必拥有并保存好一组，否则遇到麻烦的时候就欲哭无泪了。我曾经有一个账户，自己设置了一个密码，我以为我凭我的超强记忆力能记住呢，结果忘得干干净净！😭

还有一些其它备份方式就不去研究了。需要注意的是，***备份生成的文件以及密码一定要保存好，别弄丢了，或者被人一锅端了。😳***

- - -

This page is synchronized from the post: [BitShares 账户备份小结](https://steemit.com/@oflyhigh/4y2apq-bitshares)
