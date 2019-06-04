
---
title: '重要提示: steem-python 代码内部使用旧的RPC节点，可能会导致你的脚本失效 / 如何修复'
permlink: steem-python-rpc
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-07 10:37:51
categories:
- steemdev
tags:
- steemdev
- steem-python
- python
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmNm5AScSeG8kvjXeNYYiktR3CVMXoAxJ8ioxdNuS9E6As/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天，微信群里一个朋友遇到带宽超限无法操作的问题，向我求助，于是我打算代理给他两个2个SP，这样就能解决这个问题了。结果却遇到了问题，解决问题以后，我想大家可能会遇到类似情况，就写出来分享一下，希望对遇到类似问题的朋友有所帮助。

![](https://steemitimages.com/DQmNm5AScSeG8kvjXeNYYiktR3CVMXoAxJ8ioxdNuS9E6As/image.png)
(图源 ：[pixabay](https://pixabay.com))

# 代码出问题了

在我的程序中，我使用如下函数来处理SP代理
```
def delegate(steem, from_a, to, sp):
    try:
        vests = '{} VESTS'.format(Converter().sp_to_vests(sp))
        steem.delegate_vesting_shares(to, vests, from_a)
    except:
        print('Something Wrong!')
```

其中steem是Steem类示例，from、to不用解释啦，sp是要代理的SP数量。

因为这段代码以前一直好用，我也没想太多，直接执行，结果等了半天没有响应。杀掉程序后，我就想哪出问题了呢？后来想起来[节点 steemd.steemit.com 在1月6日停止使用了](https://steemit.com/steemitdev/@oflyhigh/steemd-steemit-com-1-6-api-steemit-com)，为此我还特意发帖给大家提示，没想到我的旧代码居然还没更新节点。

# 定位问题

为了更好的理解这个问题，我做了如下测试：
![](https://steemitimages.com/DQmZxomoxzSLgfAqnNyN2KUVz8RgFhPggZAi7Uw3r5cJhQe/image.png)
脚本会一直等待下去

如果换成
![](https://steemitimages.com/DQmeVQHz6hzJxmWeJWT2KxeQVYY8UpTqm2zekV27vRSy5KA/image.png)
脚本响应正常。


于是将我脚本创建Steem类实例的代码由：
 >`steem=Steem()`

更新为
 > `steem=Steem(nodes=['https://api.steemit.com'])`

信心满满的再次运行，这次总归该代理成功了吧？嗯，怎么还是运行半天没有响应？这不科学呀，又是灵异事件，问题会出在哪里呢？最终我的目光锁定在***`Converter().sp_to_vests(sp)`***这句代码上。

看了一下Converter类的初始化代码，其中有如下语句：
>`self.steemd = steemd_instance or shared_steemd_instance()`

也就是说，如果不传入steemd，则使用共享steemd实例，而共享steemd实例尚不存在的话，使用如下代码创建
>`_shared_steemd_instance = stm.steemd.Steemd(nodes=get_config_node_list())`
***注：此处nodes=get_config_node_list()是多余的，详见下边代码***

而如果我们没有配置node列表，Steemd实例初始化中就会使用代码中默认的节点
>`nodes = get_config_node_list() or ['https://steemd.steemit.com']`

看到问题了吗？
***代码中还在使用`https://steemd.steemit.com`这个已经停用的节点！***

# 解决问题

好了，我们已经发现了问题所在
* 一个是创建Steem类实例的时要使用新节点
* 一个是共享Steem类实例使用了代码旧的节点

那么要解决这些问题就很简单了。

### 解决方法

* 创建实例时使用：
`steem=Steem(nodes=['https://api.steemit.com'])`
* 调用Converter类时指定实例：
`Converter(steemd_instance=steem).sp_to_vests(sp)`

#### 其它方法

上边的解决方法是手工指定节点nodes并且避免使用了共享节点。那么还有其它办法解决吗？当然有，还不止一个：
* 将steem-python库代码中的***`https://steemd.steemit.com`***替换为***`https://api.steemit.com`***
* 设置默认节点列表：***`steempy set nodes https://api.steemit.com`***

使用第二种方法后，再执行上边的代码
![](https://steemitimages.com/DQmSiUNzFxiCBpTFi3qnLToqbfMJdew1Xqff5gnQ7cAmFXN/image.png)
一切正常。

# 总结

***steem RPC节点更新*** 以及 ***steem-python 内部使用旧的RPC节点***导致了我们以前可用的程序出现了问题。

本文详细分析了Steem类实例创建过程中指定节点的问题，以及共享节点存在的问题，并从多个方向给出了如何解决这个问题。

看来，升级无小事啊，原本以为不过是改个节点而已，谁知道会出这么些问题呢。

>**我正在撰写本文时，CN区一位网友向我反应他使用steem-python实现的收取收益代码出现了问题，因为他这个问题和我文中描述的问题基本一致，所以就让他等我发文后看我文章就好了。偷个懒好爽😀**

- - -

This page is synchronized from the post: [重要提示: steem-python 代码内部使用旧的RPC节点，可能会导致你的脚本失效 / 如何修复](https://steemit.com/@oflyhigh/steem-python-rpc)
