
---
title: '使用SSH转发让Bitshares witness_node在多个IP及端口提供服务'
permlink: ssh-bitshares-witnessnode-ip
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-13 13:48:45
categories:
- ssh
tags:
- ssh
- bitshares
- node
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQme46C7GwdsXthz1r3x23px6jUUuzZzkts6pDHdKHkXaW1/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天[用SSH动态转发弄了个SOCKS5代理](https://steemit.com/ssh/@oflyhigh/ssh-socks5)，解决了Telegram X时而无法连接的问题。然而，我发现我彻底白弄了，原因有二：一是根本没有妹纸在Telegram X上理我；二是Telegram X又可以无需科学上网直接连接了！这不是玩我嘛，哎。

# 私有节点被墙了

![](https://steemitimages.com/DQme46C7GwdsXthz1r3x23px6jUUuzZzkts6pDHdKHkXaW1/image.png)
(图源 ：[pixabay](https://pixabay.com))

不过好在这堵墙够意思，今天就给我一个新的需求。前一阶段我不是[弄了个bitshares的私有节点嘛，搭配轻钱包](https://steemit.com/bitshares/@oflyhigh/4dbash-bitshares)爽的不要不要的，以前那种眼睁睁看着行情来了无法操作或者看着要爆仓了没法补仓的情况再没有发生过，引用一下哪个洗发水广告：如丝般顺滑！

然而，墙总会时不时的给你添乱，比如突然我的节点就访问不了，无法连接也没法ping通，然而从其它VPS上测试，我的节点还活着，这真是让人郁闷，明明有私有节点却要和大家一起挤~~公汽~~公共节点，真的不爽。

找了一下轻钱包的设置界面，并没有发现诸如SOCKS5代理之类的设置（也可能是我没找对地方），那么剩下我想到的两个思路如下：
* 使用科学上网
* 创建备份节点

科学上网就不说啦，总之我这现在极其不科学呢，至于创建备份节点，我现在节点的VPS一个月40美元，再加一个还要40美元，嘎嘎心疼啊，或者再被墙或者访问不了，我岂不是又要搞备份节点了，40、80、120、160多少是头啊？

# SSH转发设置

于是我陷入到深深的思索当中，有什么即能解决问题又省钱的方案呢？于是我又想到了SSH转发， 我有好多VPS，能不能在一个VPS上开放一个端口，然后所有访问这个端口的请求都是转发到我私有节点的服务端口呢？

也就是说原本这个方式：
**`轻钱包<===>私有节点IP:8090`**
变成这个方式：
**`轻钱包<===>VPS IP:8090<===>私有节点IP:8090`**

那么用SSH转发能实现这个需求吗？
**` -L [bind_address:]port:host:hostport`** 选项下是这么描述的：
>Specifies that connections to the given TCP port or Unix socket on the local (client) host are to be forwarded to the given host and port, or Unix socket, on the remote side.  This works by allocating a socket to listen to either a TCP port on the local side, optionally bound to the specified bind_address, or to a Unix socket.  Whenever a connection is made to the local port or socket, the connection is forwarded over the secure channel, and a connection is made to either host port hostport, or the Unix socket remote_socket, from the remote machine.

这听起来就是我们要找的方式啊！

指令走起来！
**`ssh -L ip_vps:8090:ip_witness_node:8090 user@localhost`**

对了，为了只做转发并且自动在后台运行加上` -f -N`参数，所以完整的指令应该是这样：
**`ssh -f -N -L  ip_vps:8090:ip_witness_node:8090 user@localhost`**

![](https://steemitimages.com/DQmbJgFDuF2S18Po8fpRAELSYgHsBgwEvxDWX6EZVquAsVd/image.png)
怎么这么多马赛克，露点了吗？😍

# 测试转发

#### cli_wallet
不过执行完貌似没啥效果啊？别急我们来试试嘛。随便找了台VPS用cli_wallet测试一下：
**`./cli_wallet -w mywallet -s ws://1.2.3.4:8090`**
其中**`1.2.3.4`**为上述步骤中的VPS IP

![](https://steemitimages.com/DQmP4xegtVSad4ayv9EcMbU8tyiMQY8jsA9gPZpweB6JiDh/image.png)
耶，成功连接

#### 轻钱包

在Bitshares UI 中添加新节点，节点IP使用我们刚刚设置的VPS IP，然后测试连接。

结果如下：
![](https://steemitimages.com/DQmNjaYwbdpWejfRf1M821cU2paw22W6kYcE8TVAKXqUkcZ/image.png)
没错，我们成功的连接上啦！绕开了一大堵墙！


# 结论

使用SSH转发，我们可以很方便的创建伪备份节点。

其实除此之外，我没也可以在witness_node同一台VPS上设置转发，让不同端口同时(伪同时提供服务），这样可以绕开端口墙的端口封锁（对IP封锁无能为力）。如果我们的witness_node上绑定了多个IP，那么我们可以在witness_node同台机器上实现转发，就省了一台VPS的钱喽。

总之，这个转发很好玩的，具体哪好玩，再慢慢挖掘吧。
![](https://steemitimages.com/DQmXwy4xVHauBMZa7CNxvMdvpoc6dne5uweFTrJfBNnPhW9/image.png)
(图源 ：[pixabay](https://pixabay.com))


# 相关链接

* [SSH动态转发以及SOCKS5代理](https://steemit.com/ssh/@oflyhigh/ssh-socks5)
* [用上了bitshares轻钱包 + 私有节点](https://steemit.com/bitshares/@oflyhigh/4dbash-bitshares)

- - -

This page is synchronized from the post: [使用SSH转发让Bitshares witness_node在多个IP及端口提供服务](https://steemit.com/@oflyhigh/ssh-bitshares-witnessnode-ip)
