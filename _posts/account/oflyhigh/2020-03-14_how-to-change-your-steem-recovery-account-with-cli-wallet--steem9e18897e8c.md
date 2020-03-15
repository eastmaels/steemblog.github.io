
---
title: 'How to change your Steem Recovery Account with cli_wallet / 用STEEM命令行钱包更改账户恢复账户'
permlink: how-to-change-your-steem-recovery-account-with-cli-wallet--steem9e18897e8c
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-14 13:31:36
categories:
- wallet
tags:
- wallet
- phishing
- accountrecovery
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmbS77gQaThH2rRXSHkqNkEckwRM7GzLYiuS6vxRS4Y2u7/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Steem Recovery Account （账户恢复账户）顾名思义，就是当你的账户被盗时，用来恢复你账户的账户（有点拗口啊），一般来讲如果你是通过https://steemit.com注册话，这个recovery_account就是@steem。

![image.png](https://cdn.steemitimages.com/DQmbS77gQaThH2rRXSHkqNkEckwRM7GzLYiuS6vxRS4Y2u7/image.png)
(图源 ：[pixabay](https://pixabay.com/))

具体的恢复机制我就讲了，不过可以明确的是需要recovery_account来参与，那么如果你不能提供一些证明自己是自己的资料，那么可能就会被公事公办。所以，最好的办法是把这个恢复账户设置成自己的某个账户或者朋友的账户。

现在拿我的一个账户 @oflyhigh.demo 来演示一下如何用cli_wallet 来更改账户恢复账户。

首先，说明一下，我这个账户是通过@blocktrades的服务来注册的，所以账户恢复账户为：@blocktrades，这个可以在https://steemd.com/@oflyhigh.demo中查询到。
>![image.png](https://cdn.steemitimages.com/DQmRc6DjiVmYTbw2jaUvh1EbDhgA66UiS9nR5cNaUmwWNrT/image.png)

为了修改账户的Recovery Account，我们使用对应账户的Owner权限，这个我们可以在https://steemitwallet.com/@oflyhigh.demo/permissions 对应类目下找到，另外不同账户权限能做什么，可以参考下图：
>![image.png](https://cdn.steemitimages.com/DQmNyfPrkYipvVpQtdjX8gAPNFeE9gWbdJ4Dieg5ntU9XZP/image.png)


之后就是将OWNER KEY导入到钱包中，这个如何操作，可以参考我之前的帖子：
>* [测试使用STEEM命令行钱包（Steem CLI wallet）：cli_wallet](https://steemit.com/cn/@oflyhigh/steemsteem-cli-walletcli-walletfa5deda8b2)

弄好以后，就可以执行修改账户的Recovery Account操作了，我们先来看看命令的格式：
>`change_recovery_account(string owner, string new_recovery_account, bool broadcast)`

所以，我们只需执行如下命令即可：
>`change_recovery_account oflyhigh.demo oflyhigh true`

执行上述命令后会返回如下信息：
>![image.png](https://cdn.steemitimages.com/DQmecSqwMgsCxpPGiLdjmMJ2DyH66pdewErTKNjqC3aSyd8/image.png)

我们也可以在https://steemd.com/@oflyhigh.demo 上看到命令被执行的信息：
>![image.png](https://cdn.steemitimages.com/DQmXBW1qdwrVTNHDSEGYgQugEAH455unEmyeF4LxbnBMJXL/image.png)

如果我们现在去查看账户的Recovery account，发现其实并没有被修改，这是因为***修改账户的Recovery account需要30天才能生效***。

之所以加了个30天的限制，是怕用户账户被盗后，盗用者直接修改Recovery account。所以说，STEEM考虑的还是很周到的。

好了，就介绍到这里，有了cli_wallet，是不是觉得做什么都变得非常简单了啊？

# 相关链接

* [测试使用STEEM命令行钱包（Steem CLI wallet）：cli_wallet](https://steemit.com/cn/@oflyhigh/steemsteem-cli-walletcli-walletfa5deda8b2)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: ['How to change your Steem Recovery Account with cli_wallet / 用STEEM命令行钱包更改账户恢复账户'](https://steemit.com/@oflyhigh/how-to-change-your-steem-recovery-account-with-cli-wallet--steem9e18897e8c)
