
---
title: '使用python-bitshares 生成bitCNY喂价列表'
permlink: python-bitshares-bitcny
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-30 13:48:27
categories:
- python-bitshares
tags:
- python-bitshares
- bitshares
- python
- cn
- cn-programming
thumbnail: https://cdn.pixabay.com/photo/2017/10/04/16/43/table-2816806_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在比特股的区块链浏览器上，我们可以查询bitCN这项资产的相关信息。
https://www.cryptofresh.com/a/CNY

![](https://cdn.pixabay.com/photo/2017/10/04/16/43/table-2816806_960_720.jpg)


# 喂价信息 / Feeds

区块链浏览器可以查询喂价信息

![](https://steemitimages.com/DQmdu2Yr8TZkMt1SpD2N6YAMumjyQjRP9MKqXtXPhxncmvn/image.png)
其中有一点对我而言很不方便，就是喂价是以CNY=>BTS的方式表示的，我的大脑没法处理这种价格。

尽管在区块链浏览器中可以点击![](https://steemitimages.com/DQmU4bGysnCd5fhxFuc5iT4vyHPPJ4L57tqdMAArzUaga8a/image.png)来对调资产对，但是对调以后喂价信息没有啦。于是我就想能否用python-bitshares实现个显示喂价的功能。

# Python 代码

经过一番了解，发现python-bitshares中的Asset类可以实现这个功能。


比如说使用***`Asset类的feeds属性`***获取喂价列表：

简单的示例代码如下：
```
from bitshares.asset import Asset
from prettytable import PrettyTable
from pprint import pprint
import operator

from bitshares import BitShares
bitshares = BitShares(node="wss://bitshares-api.wancloud.io/ws")

asset=Asset(asset="CNY", bitshares_instance=bitshares)

t = PrettyTable(["Producer", "Settlement Price", "CER", "MCR", "MSSR", "Time"])
feeds = list(asset.feeds)
feeds_sorted = sorted(feeds, key=operator.itemgetter('date'), reverse=True)

t.padding_width = 1
#t.align["Collateral"] = "r"
#t.align["Debt"] = "r"

for item in feeds_sorted:
        t.add_row([str(item['producer']['name']),
                        str(item['settlement_price']),
                        str(item['core_exchange_rate']),
                        str(item['maintenance_collateral_ratio']),
                        str(item['maximum_short_squeeze_ratio']),
                        str(item['date'])])

print(t)
```

# 执行效果

运行效果如下：
![](https://steemitimages.com/DQmRFdLrQ9wxVdijmfWeLqLdZSchNhNnxmrDZ6vrjqzR3ZN/image.png)

# 其它

我们还可以通过***`Asset类的feed属性`***来获取当前喂价信息
![](https://steemitimages.com/DQmap19uM7JpstWbUg9sEdoSu2QPAvm1ja4pBdnXp4ACYnw/image.png)

突然间发现自己就是个文盲，***这些参数干啥的，两眼一抹黑***。

如果简单的想获取喂价信息，还是使用公众号查询方便：
![](https://steemitimages.com/DQmarW3YhotqLpDrjJbz7MRSwWpbBkA5X74frBSzaG485Yw/image.png)

😭哭，我明明记得我写文之前，价格4.5多呢。

封面图源：https://pixabay.com

# 参考文章

* [Python PrettyTable 模块学习 (格式化打印内容)](https://steemit.com/python/@oflyhigh/python-prettytable)

- - -

This page is synchronized from the post: [使用python-bitshares 生成bitCNY喂价列表](https://steemit.com/@oflyhigh/python-bitshares-bitcny)
