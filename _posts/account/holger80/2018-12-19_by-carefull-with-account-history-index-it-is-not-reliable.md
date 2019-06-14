
---
title: 'By carefull with account history index, it is not reliable'
permlink: by-carefull-with-account-history-index-it-is-not-reliable
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-12-19 17:04:51
categories:
- steemdev
tags:
- steemdev
- beem
- python
- busy
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Today, I was wondering why I was getting different results by using different nodes.
```
from beem import Steem
from beem.account import Account
from beem.amount import Amount

if __name__ == "__main__":
    stm = Steem(node="https://steemd.minnowsupportproject.org")
    stm = Steem(node="https://api.steemit.com")
    acc = Account("steembasicincome", steem_instance=stm)
    for h in acc.history(start=289250, only_ops=["transfer"], use_block_num=False):
        print("%d - %s transfer %s to %s - %s" % (h["index"], h["from"], str(Amount(h["amount"], steem_instance=stm)), acc["name"], str(h["timestamp"])))
```

When I run the script with `https://steemd.minnowsupportproject.org`:
```
289481 - nateonsteemit transfer 5.000 STEEM to steembasicincome - 2018-12-19T16:35:21
289484 - nateonsteemit transfer 3.000 STEEM to steembasicincome - 2018-12-19T16:39:36
```
When I use `https://api.steemit.com`:
```
289280 - kimzwarch transfer 3.000 STEEM to steembasicincome - 2018-12-19T07:34:06
289288 - darklands transfer 2.000 STEEM to steembasicincome - 2018-12-19T07:58:48
289334 - paulag transfer 8.000 STEEM to steembasicincome - 2018-12-19T09:28:42
289402 - shaidon transfer 1.000 STEEM to steembasicincome - 2018-12-19T11:41:00
289477 - elizacheng transfer 1.000 STEEM to steembasicincome - 2018-12-19T13:07:51
289478 - djennyfloro transfer 1.000 STEEM to steembasicincome - 2018-12-19T13:10:15
289487 - bengy transfer 1.000 STEEM to steembasicincome - 2018-12-19T13:27:54
289488 - bengy transfer 1.000 STEEM to steembasicincome - 2018-12-19T13:28:09
289491 - tazi transfer 1.000 STEEM to steembasicincome - 2018-12-19T13:31:00
289492 - tazi transfer 1.000 STEEM to steembasicincome - 2018-12-19T13:31:18
289498 - runicar transfer 3.000 STEEM to steembasicincome - 2018-12-19T13:52:24
289499 - runicar transfer 2.000 STEEM to steembasicincome - 2018-12-19T13:52:42
289501 - runicar transfer 1.000 STEEM to steembasicincome - 2018-12-19T13:56:45
289504 - team-cn transfer 2.000 STEEM to steembasicincome - 2018-12-19T14:09:54
289514 - barmbo transfer 1.000 STEEM to steembasicincome - 2018-12-19T15:01:03
289518 - cryptoyzzy transfer 6.000 STEEM to steembasicincome - 2018-12-19T15:13:12
289759 - nateonsteemit transfer 5.000 STEEM to steembasicincome - 2018-12-19T16:35:21
289762 - nateonsteemit transfer 3.000 STEEM to steembasicincome - 2018-12-19T16:39:36
```

So, using the history account index for receiving new account transactions is not a good idea. The index is calculated within the node and it is not reliable.

- - -

This page is synchronized from the post: ['By carefull with account history index, it is not reliable'](https://steemit.com/@holger80/by-carefull-with-account-history-index-it-is-not-reliable)
