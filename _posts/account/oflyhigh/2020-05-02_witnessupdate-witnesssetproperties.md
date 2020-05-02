
---
title: '每天进步一点点：witness_update 以及witness_set_properties'
permlink: witnessupdate-witnesssetproperties
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-02 04:48:27
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- witness
- update
thumbnail: 'https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我们都知道，见证人在HIVE/STEEM系统中是很重要的角色，除了打包出块、提供喂价以外，见证人还决定网络中一些参数的设定，比如说账户创建费用/区块大小等等。

![](https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

而这些参数的设定，就是通过`witness_update`这个操作完成的。当然了，参数如何起作用是一个复杂的话题，不是一个见证人自己修改就可以的，这也保证了网络的安全。

`witness_update`除了设置网络参数外，还可以对自己的见证人信息进行一些设置，比如说设置自己的见证人URL，又比如说见证人上线/下线，要知道，在分叉之初，我可以是被见证人上线/下线问题搞得头大无比呢。

# witness_update 操作

在这里，我们先不去讨论参数的意义以及如何生效，先来学习一下如何设置参数吧，首先`witness_update`操作大概长这样：
```
op = ['witness_update', {
    'owner': '',
    'url': '',
    'block_signing_key': '',
    'props': {
      'account_creation_fee': '',
      'maximum_block_size': 65536,
      'sbd_interest_rate': 0
    },
    'fee':''
  }]
```

看起来很简单是不是？甚至`props`都可以缩减成`'props':{}`这个样子，然后在代码中设置即可。

根据传入的参数，做如下设置：
>`op[1]['owner'] =  owner`
>`op[1]['url'] = url`
>`op[1]['block_signing_key'] = block_signing_key`
>`op[1]['props'] = props`
>`op[1]['fee'] = HIVE_ASSET(fee)`

然后将Operation追加到transaction并广播(使用active key)：
>` trx.append_op(op)` 
>` trx.sign_digest(wif)` 
>`  trx.broadcast()` 

# witness_update 测试

我使用@oflyhigh.test 进行测试，props设置如下：
```
        props ={
                'account_creation_fee': HIVE_ASSET('3.000 HIVE'),
                'maximum_block_size': 65536,
                'sbd_interest_rate':0
        }
```
block_signing_key设置为空私钥(全零)对应的公钥：
>`block_signing_key = 'STM1111111111111111111111111111111114T1Anm'`

成功广播出去：
>![image.png](https://images.hive.blog/DQmUfGSSrVXMd4ZMDDMQKCxLEv2bCBb9MGiCJsG7gD4UFqA/image.png)

在https://hiveblocks.com/ 可以查到数据已经更新到链上：
>![image.png](https://images.hive.blog/DQmcyNAv3BSGhHNcqBQ8d42ABa92jcyxnpKC3rxroknUswa/image.png)

# 见证人注册

对于一个原本不是witness的账户，调用了`witness_update`操作，会是怎样呢？


其实@oflyhigh.test就是这种情况，事实告诉我们，非见证人账户进行`witness_update`操作，相当于***在链上注册了一个新的见证人账户***：
>![image.png](https://images.hive.blog/DQmboxPuiUt632uLLKjxqCmY98QpDV32AEu8SrewmHF28gQ/image.png)

揭开神秘面纱后，原来注册见证人账户这么简单，不过注册账户虽然简单，把见证人服务跑起来可不是件容易的事情呢！

# 更新一个参数

通过上边的学习，我们知道`witness_update`涉及很多参数，如果我们只想改动其中一两个而不动其它，应该怎么办呢？难道还要把其它参数传入一遍吗？

答案是，还真的重新传入一遍，但是也不是没有取巧的方法，比如我们可以先读取原来见证人的参数，然后只修改我们要改动的，其它的原样传入就好。

# 程序中的默认值

测试的时候突发奇想，如果把 `props`设置为`{}`并传入，会是如何呢？说干就干：
>![image.png](https://images.hive.blog/DQmZ2FtPNYSbyDBQdhfgWaVygn4SZ83iuzqMvatiGcFGEBx/image.png)

结果上链数据如下，看来这些是程序中的默认值喽：
>![image.png](https://images.hive.blog/DQmSmdSQyDuXbJ978ZjwcP9mVeFzYn26Tyg9yDmrzGuqtx3/image.png)

# witness_set_properties

现在我们基本上把witness_update操作搞明白了，不过HF20之后，又引入了一个新操作 `witness_set_properties`，这又是什么鬼呢？

从文档给出的示例结构中，我们不难看出它能设置更多的内容，甚至包括喂价。
>![image.png](https://images.hive.blog/DQmbzpkEi22ttXJQP4gGH9s7rzF5W1fXB3mSSx7vq9msCPT/image.png)

文档中对其的描述为：
>This operation was added in Steem v0.20.0 to replace the `witness_update_operation` which was not easily extendable. While it is recommended to use `witness_set_properties_operation`, `witness_update_operation` will continue to work.

不过，目前为止，我觉得`witness_update_operation`对我而言已经足够啦，另外搞明白这些真好，再也不用为见证人上线/下线等事情头大了。

# 相关链接

* [HIVE上使用steem-python的一些尝试：续一 (见证人上下线 & claim reward)](https://hive.blog/cn/@oflyhigh/hive-steem-python-and-claim-reward)
* [Witness Parameters](https://github.com/openhive-network/hive/blob/0.23.0/doc/witness_parameters.md)

- - -

This page is synchronized from the post: ['每天进步一点点：witness_update 以及witness_set_properties'](https://steemit.com/@oflyhigh/witnessupdate-witnesssetproperties)
