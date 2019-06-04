
---
title: '每天进步一点点：bitshares中生成指定市场的订单列表'
permlink: mxqeh-bitshares
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-18 04:58:45
categories:
- bitshares
tags:
- bitshares
- market
- python
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmfMiPg7RNPPehcEUdQJEphu6drqTi9gPB8bK9mtARvUYQ/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我们都知道，对于炒币而言，行情很重要，用在bitshares的内部市场，这个原则同样适用。我的微信公众号可以查询行情，但是由于微信公众号本身的限制，没法显示更多内容，比如买单和卖单的列表。

![](https://steemitimages.com/DQmfMiPg7RNPPehcEUdQJEphu6drqTi9gPB8bK9mtARvUYQ/image.png)
(图源 ：[pixabay](https://pixabay.com))

# 查看行情

网页钱包中我们可以查看指定市场的买单和卖单列表
![](https://steemitimages.com/DQmW2Pg6sAKQBYpb4W62dG8iJPwXWBm2rSa251JAjzC3QiD/image.png)
但是我们需要滚动滑块来查看更多条目，并且序号，滚着滚着就懵了😵

鼓鼓钱包中同样可以查看指定市场的买单和卖单列表，但是需要单独查看买单和卖单。

于是我就想，能否自己做一个列表，将指定市场的买单和卖单信息按我想要的方式组织到一起呢？

# 获取订单列表API

说干就干，获取订单列表的API为***`get_order_book`***
![](https://steemitimages.com/DQmYs2Kyup5ejJ8u5MGndyT4FNKEKG18R6kwPpg74tnEXx9/image.png)

先使用curl测试一下这个API：
`curl -s --data '{"jsonrpc": "2.0", "method": "get_order_book", "params": ["CNY", "BTS", 5], "id": 1}' https://openledger.hk/ws`

我们会得到如下信息：
![](https://steemitimages.com/DQmcsw5eMMEGbZAnKEjeVLBmNnmjfc45rPApDRknZNTCHMi/image.png)

可以返回内容包含： ***`base、quote、asks、bids`***

顺便说一下我个人的理解：
* ***Base***: 基础资产，用于计价的资产
* ***Quote***: 买卖资产，就是要买卖的资产
* ***Ask***: 要价，也就是卖单
* ***Bid***: 出价，也就是买单

# 代码

尽管我上述CURL命令已经返回了订单列表，但是，这是给人看的吗？为了让显示对人类更友好，我写了如下代码：

```
from bitshares import BitShares
from prettytable import PrettyTable

base = 'CNY'
quote = 'BTS'
limit = 20

bts = BitShares()
ob = bts.rpc.get_order_book(base, quote, limit)

ask = "Sell"
bid = "Buy"
t = PrettyTable(["No.", \
        f"Price({bid})", f"{quote}({bid})", f"{base}({bid})", f"{quote}({bid})Sum",\
        f"Price({ask})", f"{quote}({ask})", f"{base}({ask})", f"{quote}({ask}) Sum"])

t.padding_width = 1
t.align = "r"

bid_sum = 0.0
ask_sum = 0.0
i = 0
for ask, bid in zip(ob["asks"], ob["bids"]):
        i += 1
        bid_sum += float(bid["quote"])
        ask_sum += float(ask["quote"])
        t.add_row([
                i,
                "{:.5f}".format(float(bid["price"])),
                "{:.5f}".format(float(bid["quote"])),
                "{:.5f}".format(float(bid["base"])),
                "{:.5f}".format(bid_sum),
                "{:.5f}".format(float(ask["price"])),
                "{:.5f}".format(float(ask["quote"])),
                "{:.5f}".format(float(ask["base"])),
                "{:.5f}".format(ask_sum)
                ])

print(t)
```



# 测试

运行上述代码，可以生成如下报表：
![](https://steemitimages.com/DQmVEtDEYwEsnnShRexqQ2TzGz9qAFF4twGVhZcXmSPugnN/image.png)

左边为买单按价格从高到低排列，右边为卖单按价格从低到高排列，另外加上了序号和总量统计。

# 优化

代码很烂，将就看吧，显示精度啥的随便写的，感兴趣的可以自行优化一下。

另外，可以考虑加上指定节点提速，指定排序方式，指定总量统计的类型，甚至可以考虑将买单卖单分别显示等等，还可以考虑通过命令行参数指定其它市场等等。

对于我这种懒人，做到这样就可以啦。

# 相关链接

* [Python PrettyTable 模块学习 (格式化打印内容)](https://steemit.com/python/@oflyhigh/python-prettytable)

#### ***`文中代码仅为思路演示，不保证无误，仅供参考`***

- - -

This page is synchronized from the post: [每天进步一点点：bitshares中生成指定市场的订单列表](https://steemit.com/@oflyhigh/mxqeh-bitshares)
