
---
title: 'Python Script to Transfer SBD to Exchange 通过程序来减少到交易所转帐出错的可能'
permlink: python-script-to-transfer-sbd-to-exchange
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-13 20:38:42
categories:
- cn
tags:
- cn
- busy
- cn-reader
- steemdev
- cn-programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1518553132/ku52ajih7pfqb7h95ih6.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


When transferring your SBD assets to exchange, you have to fill in the correct memo otherwise your money is likely to get lost.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518553132/ku52ajih7pfqb7h95ih6.png)

A few months ago, I accidentally transfered 100 SBD to @blocktrades but luckily a few hours later I got the refund.

You don't get lucky everytime. Therefore I think it is less likely for things to go wrong if this can be done automatically via scripts.

I have written a [Python](https://helloacm.com/interview-question-what-is-the-difference-between-list-and-dictionary-in-python/) script based on Steem-Python library and it works quite well for me.

```
from steem import Steem
from steem.account import Account
from keys import account_akey
from nodes import steem_nodes

id = 'justyy'
wif = {
  "active": account_akey[id]
}

steem = Steem(nodes = steem_nodes, keys = wif)  
account = Account(id, steemd_instance=steem)
balance = account.balances 
x = float(balance['total']['SBD'])
print("@" + id + " has " + str(x) + " SBD")

if x >= 40:
  y = 30
  print("transfering " + str(y) + " SBD from @" + id + " to @bittrex")
  steem.transfer("bittrex", amount = y, asset = 'SBD', memo = "The MEMO key required by your exchange", account = id)    
```

Let the script run once per hour via crontab. When account balance is larger than 40 SBD, automatically it transfers 30 to your exchange account.

Advantages:
1. Saves your time.
2. Can't get wrong.
3. Makes you feel that your are actually earning something on SteemIt.

You don't need to use [Python](https://helloacm.com/interview-question-what-is-the-difference-between-list-and-dictionary-in-python/), you can also use [steem](https://helloacm.com/add-steem-js-console-to-steemtools/)-js as long as you put in the correct MEMO.

Reposted to my blog: [https://helloacm.com/python-script-to-transfer-sbd-to-crytocurrency-exchange/](https://helloacm.com/python-script-to-transfer-sbd-to-crytocurrency-exchange/)

![](https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture&date=20180213hotel22)
*图片来源： 每日BING壁纸 @superbing*

虽然现在在[STEEMIT](https://justyy.com/archives/5989)上转帐到交易所的时候如果没有填写 MEMO，是会提示的，但是有时候你手快，可能把你的帐号地址给复制过去然后就点发送了，这时候就悲剧了。

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518553132/ku52ajih7pfqb7h95ih6.png)

很久之前，[我误操作100 SBD到](https://justyy.com/archives/4849) @blocktrades 就是把MEMO填成帐号地址了， 幸运的是通过各方途径联系了官方，几个小时内收到了退款。

但是别的交易所，如 bittrex 可能就不是这么的幸运了，转帐转错了有时候权当捐款了。

是不是每次转帐的时候都提心吊胆，生怕转没了？其实你只要懂一点程序，完全可以通过程序的方式来转帐，程序只要调通了第一次，之后再执行出错的可能性几乎没有了。

比如，我的自动转帐脚本如下 （Python）

```
from steem import Steem
from steem.account import Account
from keys import account_akey
from nodes import steem_nodes

id = 'justyy'
wif = {
  "active": account_akey[id]
}

steem = Steem(nodes = steem_nodes, keys = wif)  
account = Account(id, steemd_instance=steem)
balance = account.balances 
x = float(balance['total']['SBD'])
print("@" + id + " has " + str(x) + " SBD")

if x >= 40:
  y = 30
  print("transfering " + str(y) + " SBD from @" + id + " to @bittrex")
  steem.transfer("bittrex", amount = y, asset = 'SBD', memo = "您的交易所要求的MEMO KEY", account = id)    
```

把这个脚本放在 crontab 里，一小时执行一次，那么当帐号SBD大于40的时候，自动 转 30到交易所。留下10块钱是为了够银行发利息。

运行了好几天，很爽，这样的好处是：
1. 省了人工，每次转帐都需要人工处理的时间，时间最宝贵。
2. 不会出错，人工转帐存在误操作，程序转帐，概率小很多。
3. 是不是更能感觉到STEEM上发文能挣钱？SBD转到交易所是不是感觉才是挣到的？^_^

不一定要用PYTHON，也可以用 steem-js ，我相信代码都是类似的。
----------

同步到博文: [https://justyy.com/archives/6027](https://justyy.com/archives/6027)

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit-300x200.png)

通过 [SP 代理工具 成为 YY银行股东](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)，好处多多。只要代理大于**5 SP**给 @justyy 即可自动成为YY股东。用同样的工具输入0取消代理退出股东。来去自由，取消代理后系统需要7天才能将您代理的SP退回到您的帐号上。友情提示，不建议把所有SP都代理给银行，因为你需要留一些能量发贴。

- [SteemIt 教程、机器人、在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
- [大家好才是真的好，YY银行足球队，你还有啥理由不加入银行？](https://steemit.com/cn/@justyy/xi2jn-yy)
- [YY 银行开启互抱大腿模式](https://steemit.com/cn/@justyy/yy)
- [YY 银行迎来第100个股东！感谢一路上有你们！5 SP即可加盟！](https://steemit.com/cn/@justyy/yy-100-5-sp)
- 加入公众号 **justyyuk** 即可以实时查询 [BTC](https://justyy.com/archives/5685), SBD, STEEM, [YOYOW](https://justyy.com/archives/5657), LTC, [ETH](https://justyy.com/archives/5653) 等虚拟货币的价格.
![](https://justyy.com/wp-content/uploads/2018/01/wechat-justyyuk.jpg)

## 猜您喜欢
- [那些老照片 Photography in the 1980's](https://steemit.com/cn/@justyy/7wxt7l)
- [Happy Birthday to Ryan! 弟弟4岁啦！(视频+照片)](https://steemit.com/cn/@justyy/14hwlv4b)
- [为了戴上牙套我也是拼了：拔了两颗牙，痛了一下午](https://steemit.com/cn/@justyy/6f5g7i)

- - -

This page is synchronized from the post: [Python Script to Transfer SBD to Exchange 通过程序来减少到交易所转帐出错的可能](https://steemit.com/@justyy/python-script-to-transfer-sbd-to-exchange)
