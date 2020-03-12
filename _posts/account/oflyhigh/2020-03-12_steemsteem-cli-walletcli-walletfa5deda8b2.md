
---
title: '测试使用STEEM命令行钱包（Steem CLI wallet）：cli_wallet'
permlink: steemsteem-cli-walletcli-walletfa5deda8b2
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-12 04:44:15
categories:
- cn
tags:
- cn
- steem
- wallet
- study
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmWNctgxPksxQcwB967iggJut4cW2eCmQTgeGeA3JXauqA/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



说起来很惭愧，玩steem这么多年，我还没用用过STEEM的命令行钱包，究其原因一是很早的时候我尝试编译cli_wallet以失败告终，二就是懒惰啦。

![image.png](https://cdn.steemitimages.com/DQmWNctgxPksxQcwB967iggJut4cW2eCmQTgeGeA3JXauqA/image.png)
![image.png](UPLOAD FAILED)


这两天突然想试试cli_wallet怎么玩，于是又重新尝试编译，竟然一下子就成功了，看来以前编译失败不是我的问题，接下来开始探索cli_wallet之旅啦。


# 创建钱包以及连接

>`cli_wallet -w mywallet -s ws://127.0.0.1:8090`

其中：
`-w mywallet` 指定钱包文件
`-s ws://127.0.0.1:8090` 指定rpc节点

首次连接钱包会提示设置密码：
>Please use the set_password method to initialize a new wallet before continuing

>`set_password passwd`

在提示符后边输入上述指令，设置密码(请使用复杂密码，上述示例仅供参考)

输入`help`可以查看指令列表，列表太长，截取部分供参考：
>![image.png](https://cdn.steemitimages.com/DQmcuoXedLrBubGJNHKPmXaidsp4b2vh2tuA47fjCpD4ZiX/image.png)

现在我们可以使用cli_wallet一些功能了，比如说使用`info`指令查看区块链的信息(部分截取)：
>![image.png](https://cdn.steemitimages.com/DQmSCwoPTCXVymDoye8JQLA2AsEJB4hd7frfh3Y6XYSLNAg/image.png)

# 导入私钥

钱包，钱包，顾名思义，有钱并且能花钱才叫钱包呢，为此我们需要在钱包中导入私钥(Active Key)。

首先，解锁钱包：
>`unlock passwd`

然后导入私钥：
>`import_key MyActiveKey`

然后可以用`list_my_accounts`查看钱包中的账户，不过这个需要`account_by_key_api`的支持，否则就会报错。

可以用`list_keys`查看导入的Key以及对应的公钥：
>![image.png](https://cdn.steemitimages.com/DQmZ5QjoZSxB698DjRqYqyPV5v2sKH9n9nSbRcopLin3QRL/image.png)

# 测试转账

导入私钥后，就可以在权限范围内进行操作啦。

比如说我导入的是`active key`，那么就可以进行转账操作啦，我来测试一下。帮助中转账操作是这么写的：
> `transfer(string from, string to, condenser_api::legacy_asset amount, string memo, bool broadcast)`

按着它这个形式，我来试试转账：
>`transfer oflyhigh.test oflyhigh "0.001 SBD" "test cli_wallet" true`

果然成功了耶：
>![image.png](https://cdn.steemitimages.com/DQmYPPti5SUvEVxpL3jSyEM8feg1W4owRMxhfbGoqoYKvHY/image.png)

steemd.com上再看一下：
>![image.png](https://cdn.steemitimages.com/DQmcUuVGq5qyMZW2csJePTReExxhuj34WwHpqdNCNFQkH2Q/image.png)

好方便耶。

# 总结

一直没有好好试过cli_wallet，今天简单测试了一下，发现还不错，非常方便，简单粗暴。

因为是和steemd代码一起分发的，所以应该算是根正苗红了，steem-python里好多不支持的操作，这里都支持，简直是大宝藏啊，回头一定好好挖掘一下。

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: ['测试使用STEEM命令行钱包（Steem CLI wallet）：cli_wallet'](https://steemit.com/@oflyhigh/steemsteem-cli-walletcli-walletfa5deda8b2)
