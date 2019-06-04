
---
title: 'Python字符串引号的小问题 / 多个朋友多条路'
permlink: 7graka-python
catalog: true
toc_nav_num: true
toc: true
date: 2017-10-23 09:04:03
categories:
- json
tags:
- json
- python
- friendship
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmcmxhnjLpeEcxCVJFDrEg49XQdJerp9ycTUsRGTidEpUJ/hands-2706109_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的系列帖子中：
* [一起来玩内部市场吧！/ Let's play the internal market](https://steemit.com/cn/@oflyhigh/let-s-play-the-internal-market) 
* [一起来玩内部市场吧(二)！/ Market history APIs by example](https://steemit.com/steemdev/@oflyhigh/market-history-apis-by-example) 
* [一起来玩内部市场吧(三)！/ Program trading](https://steemit.com/steemdev/@oflyhigh/program-trading) 

我通过例子介绍了一些API的用法。

![hands-2706109_960_720.jpg](https://steemitimages.com/DQmcmxhnjLpeEcxCVJFDrEg49XQdJerp9ycTUsRGTidEpUJ/hands-2706109_960_720.jpg)



# API示例

简单挑选几个列举如下：

####  获取市场报价
`curl -s --data '{"jsonrpc": "2.0", "method": "call", "params": ["market_history_api", "get_ticker", []], "id": 1}' https://steemd.steemit.com`

又比如：
#### 获取指定用户当前挂单信息
`curl -s --data '{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_open_orders", ["deanliu"]], "id": 1}' https://steemd.steemit.com`


其实还有很多有用的API，比如说：
#### 获取账户信息的
`curl -s  --data '{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_accounts", [["oflyhigh"]]], "id": 1}' https://steemd.steemit.com`

# API `"params"` 组成

更多的API介绍，不是我们这篇文章的主题，我想说的是我调试程序过程中遇到的一个事情。

如上述API示例中所描述的那样，去掉固定部分，其实`"params"`部分是固定的用逗号分隔的三部分组成，比如上述例子中的`"params"`部分：

`"market_history_api", "get_ticker", []`
`"database_api", "get_open_orders", ["deanliu"]`
`"database_api", "get_accounts", [["oflyhigh"]]`

# 遇到的问题

问题就出在第三部分上。

我想把第三部分 ["deanliu"]用变量的方式传递给固定的字符串模板，然后组合出上述API调用。

其中核心代码如下：
```
list = ["deanliu"]
str = str(list)
print(str)
```
![](https://steemitimages.com/DQmdVMExnTLXmmXpKGBpVanL5rkWLfB2dDxcjN8DiNQJiEC/image.png)

看到这个结果我就哭了😭
* 我想得到是这样的字符串：***`'["deanliu"]'`***
* 结果得到是这样的字符串：***`"['deanliu']"`***

这就有些尴尬了，因为第二字符串传递到模板里会导致错误的结果。

# 寻求帮助

作为一个初学者，我研究了半天，也没有找到合适的方式来解决这个问题，我甚至准备写一段代码来对得到的字符串进行转换，但是能否实现先不说，我总觉得这样的处理方式不优雅。

恰巧看我的一个QQ群里有几个夜猫子闲聊，其中一个QQ好友据我所知玩过很长时间的Python，我把上述例子发给他，并向他求教，如何把***`"['deanliu']"`***转换成***`'["deanliu"]'`***，他马上给我回复说试试***json.dumps***

于是我改写了上述例子变成了这样：
```
import json
list = ["deanliu"]
str = json.dumps(list)
print(str)
```
![](https://steemitimages.com/DQmbgv8o5DCpJZ88s33E9iuKipW48BTatAyVDqCX6dM2PaZ/image.png)
完美地解决了我的问题。


# 结论

这个问题，对于高手（比如我这个朋友）而言，就是一句话解决。

而如若没有他的指点，我可能耗费数个小时的时间来寻找解决方法，并且极有可能用极其不优雅的方式实现。


***多个朋友多条路***， 古之人诚不欺我！

(封面图源 ：[pixabay](https://pixabay.com))

- - -

This page is synchronized from the post: [Python字符串引号的小问题 / 多个朋友多条路](https://steemit.com/@oflyhigh/7graka-python)
