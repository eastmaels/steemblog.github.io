
---
title: '使用python-bitshares 生成抵押排行榜'
permlink: 68qb51-python-bitshares
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-31 13:48:21
categories:
- python-bitshares
tags:
- python-bitshares
- bitshares
- python
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmfVk5iTzHsQaz9kGJv3gsNkkH8D54UKtZnYL6Vud5Xt5q/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在昨天的帖子中，我们使用python-bitshares中***`Asset类的feeds属性`***生成了bitCNY的喂价列表。可是朋友问我，喂价列表有什么用啊？况且在微信公众号不是可以查喂价信息吗？

![](https://steemitimages.com/DQmfVk5iTzHsQaz9kGJv3gsNkkH8D54UKtZnYL6Vud5Xt5q/image.png)

# 抵押排行榜

想想也是啊，对于我们小玩家而言，***知道了喂价知道了自己的爆仓价，这就足够了***，至于喂价列表，是大人物们才需要关注和关心的问题。如果说我们小人物还需要知道点啥，我想那一定是抵押排行榜了。因为即使喂价还没低到你的爆仓价，***但如若你在抵押排行榜中比较靠前，嗯，你还是有被清算的风险***。如果知道了抵押排行榜，我们就可以让自己排的靠后一些，让大户们在前边抵挡😀

原本在bitshares区块链浏览器中，是可以看到抵押排行榜的，不过现在我却找不到了。不知道是去掉了，还是说我没找对地方，不管了， 自己用python-bitshares 弄一个吧。

# Python 代码

我们可以使用***`python-bitshares中的Asset类`***实现这个功能。

具体方法是使用***`Asset类的get_call_orders方法`***

简单的示例代码如下：
```
from bitshares import BitShares
from bitshares.asset import Asset
from prettytable import PrettyTable

node = "wss://bitshares-api.wancloud.io/ws"
limit = 20

bitshares = BitShares(node=node)
asset=Asset(asset="CNY", bitshares_instance=bitshares)
call_orders = asset.get_call_orders(limit=limit)

t = PrettyTable(["Borrower", "Collateral", "Debt", "Call_price", "Ratio"])
t.padding_width = 1
t.align["Borrower"] = "l"
t.align["Collateral"] = "r"
t.align["Debt"] = "r"

for item in call_orders:
        ratio = "{:.3f}".format(item['ratio'])
        t.add_row([
                str(item['account']['name']),
                str(item['collateral']),
                str(item['debt']),
                str(item['call_price'].invert()),
                ratio
        ])
print(t)
```

# 执行效果

运行效果如下：

![](https://steemitimages.com/DQmNNgFtg7gomA6JEMXHn9YVxNS7Xkmexkgocz4DfZo3UTx/image.png)
拍拍我的小心脏，还好我不在名单里。

# 继续完善

我们已经获得了抵押排行榜，但是略有不足，比如我想看前二十名一共抵押出来多少CNY，上边是没有显示的。当然了， 我们可以调出计算器逐项累加，但是那不是傻吗？

于是我对代码进行了一些修改，让其显示累加CNY，效果如下：
![](https://steemitimages.com/DQmfVqUZfGgJMX2SNEEkrb7pNwmZbFkUur5czxc2UGBqiTC/image.png)

前二十名才抵押出来200多万啊，为了安全起见，至少猫在5000W以后我会比较放心。

封面图源：[https://pixabay.com](https://pixabay.com)

# 参考文档

* [使用python-bitshares 生成bitCNY喂价列表](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-bitcny)
* [Python PrettyTable 模块学习 (格式化打印内容)](https://steemit.com/python/@oflyhigh/python-prettytable)

- - -

This page is synchronized from the post: [使用python-bitshares 生成抵押排行榜](https://steemit.com/@oflyhigh/68qb51-python-bitshares)
