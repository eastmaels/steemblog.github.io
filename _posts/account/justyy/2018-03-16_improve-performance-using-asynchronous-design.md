
---
title: 'Improve Performance using Asynchronous Design 用异步来提高性能'
permlink: improve-performance-using-asynchronous-design
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-16 00:36:57
categories:
- witness
tags:
- witness
- cn
- cn-programming
- steemstem
- busy
thumbnail: https://cdn.pixabay.com/photo/2015/05/15/01/48/computer-767776_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.pixabay.com/photo/2015/05/15/01/48/computer-767776_960_720.jpg)
*Image Credit: Pixabay.com*

I noticed for sometime that many of my [online steemit tools](https://helloacm.com/tools/steemit) were slow to give answers, especially if the result dataset contains many items. For example, more than 100 delegates Steem Power to myself and this [online tool](https://helloacm.com/tools/steemit/delegators/?id=justyy) took a while to list the delegators. 

I dig into the code and finally found out the `converter` from `steem-python` is slow.

```
steem = Steem(nodes = steem_nodes)
converter = Converter(steemd_instance = steem)
while some loop:
    r.append( "sp": converter.vests_to_sp(vests)})
```

The `converter.vests_to_sp()` is called for every single row in the data set and it is time consuming. Looking into the `converter.py`:

```
def steem_per_mvests(self):
        info = self.steemd.get_dynamic_global_properties()
        return (Amount(info["total_vesting_fund_steem"]).amount /
                (Amount(info["total_vesting_shares"]).amount / 1e6))

def vests_to_sp(self, vests):
        return vests / 1e6 * self.steem_per_mvests()
```

We can see that `steem_per_mvests` is time-consuming as it will need to get data from the steem blockchain using `steemd` object. 

To improve the performance, we can cache the `self.steem_per_mvests()` for e.g. 1 hour. So we can write a cached version of `vests_to_sp` that converts VESTS to Steem Power:

```
import os

def file_get_contents(filename):
  with open(filename) as f:
    return f.read()

def vests_to_sp(vests):
  steem_per_mvests = 489.85031585637665
  fname = "cache/steem_per_mvests.txt"
  try:
    if os.path.isfile(fname):
      x = file_get_contents(fname).strip()
      if len(x) > 1:
        x = float(x)
        if x > 0:
          steem_per_mvests = x
  except:
    pass          
  return vests / 1e6 * steem_per_mvests      
```

The next thing is to write a script e.g. `update_steem_per_mvests.py` that will get the value from steem block chain and save it locally to a text file e.g. `steem_per_mvests.txt`

```
from steem.converter import Converter
from steem import Steem
from nodes import steem_nodes

def file_put_contents(filename, data):
  with open(filename, 'w') as f:
    f.write(data)

steem = Steem(nodes = steem_nodes)
converter = Converter(steemd_instance = steem)

x = converter.steem_per_mvests()
file_put_contents('cache/steem_per_mvests.txt', str(x))
```

You can then put this in [crontab](https://helloacm.com/crontab-generator/) e.g.
```
@hourly python3 update_steem_per_mvests.py > /dev/null 2>&1
```

Getting data from block chain is slow, and we should really avoid that as much as we can. For exchange rates or something we don't need 100% real time accuracy, we can always store the data locally or in the cache and let another script to update [asynchronously](https://helloacm.com/improve-performance-using-asynchronous-design-steemit/) at a interval. Using real time data is resource-intensive and we usually can achieve a more responsive system by asynchronous approach.

Another example: the @justyy voting bot is accelerated by using the cached list of delegators, which is updated regularly by another script. This makes the bot more responsive and of course less time per round voting.

## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by [voting for me here!](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
- [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)

-------------------------------

我注意到一些[STEEMIT在线工具](https://helloacm.com/tools/steemit-tools/)返回数据很慢，特别是当返回的数据很多行时，经常需要等个几十秒，非常的不友好。比如，现有138人代理给YY银行，通过 [这个代理查询工具](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy) 则需要几十秒才能返回数据。

今天我稍微研究了一下，发现在使用 `steem-python`中的 `converter` 特别的慢。

```
steem = Steem(nodes = steem_nodes)
converter = Converter(steemd_instance = steem)
while some loop:
    r.append( "sp": converter.vests_to_sp(vests)})
```

方法 `converter.vests_to_sp()` 很慢，被调用在循环里时，这就能解释为什么数据量越大的时候需要的时间越长。看了`converter.py`代码：

```
def steem_per_mvests(self):
        info = self.steemd.get_dynamic_global_properties()
        return (Amount(info["total_vesting_fund_steem"]).amount /
                (Amount(info["total_vesting_shares"]).amount / 1e6))

def vests_to_sp(self, vests):
        return vests / 1e6 * self.steem_per_mvests()
```

我们可以看到 `steem_per_mvests` 实际上会调用 `steemd` 去区块链上取数据。

实际上这个数值我们并不需要实时的精确，并且这个数值也不会变化太剧烈，所以我们只要把 `self.steem_per_mvests()` 这个数值缓存起，然后定期更新它就可以。重写一下这个缓存版本的 `vests_to_sp`

```
import os

def file_get_contents(filename):
  with open(filename) as f:
    return f.read()

def vests_to_sp(vests):
  steem_per_mvests = 489.85031585637665
  fname = "cache/steem_per_mvests.txt"
  try:
    if os.path.isfile(fname):
      x = file_get_contents(fname).strip()
      if len(x) > 1:
        x = float(x)
        if x > 0:
          steem_per_mvests = x
  except:
    pass          
  return vests / 1e6 * steem_per_mvests      
```

我们需要一个更新脚本 `update_steem_per_mvests.py`用于定期的却STEEM区块链上取数据然后写入 `steem_per_mvests.txt`

```
from steem.converter import Converter
from steem import Steem
from nodes import steem_nodes

def file_put_contents(filename, data):
  with open(filename, 'w') as f:
    f.write(data)

steem = Steem(nodes = steem_nodes)
converter = Converter(steemd_instance = steem)

x = converter.steem_per_mvests()
file_put_contents('cache/steem_per_mvests.txt', str(x))
```

最后面只需要放在 [crontab](https://helloacm.com/crontab-generator/) 定时执行即可（频率可以根据需要调整）

```
@hourly python3 update_steem_per_mvests.py > /dev/null 2>&1
```

在软件设计的时候，我们尽可能的不要去[区块链](https://justyy.com/archives/5048)实时的取数据，因为这样性能很低，相反，我们把那些不是非常需要100%精确的数据缓存起来，然后异步的去更新，这样整体性能就能反应快许多，更加的 responsive.

YY的点赞机器人每次都会去取[YY银行](https://justyy.com/archives/6006)股东的[名单](https://steemit.com/cn-stats/@justyy/--daily-cn-updates-cncnpower-downyy2018-03-15)，这并不需要实时的准确，所以，只需要通过另一脚本定期（每隔几分钟）跑一次，把名单写在本地文件里，需要的时候瞬间就能返回数据，大大的减少了机器人跑一次的时间。

同步到博文: [https://justyy.com/archives/6115](https://justyy.com/archives/6115)

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 请在 [这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
- [SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

- - -

This page is synchronized from the post: [Improve Performance using Asynchronous Design 用异步来提高性能](https://steemit.com/@justyy/improve-performance-using-asynchronous-design)
