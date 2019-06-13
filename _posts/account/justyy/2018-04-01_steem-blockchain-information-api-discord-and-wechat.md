
---
title: 'Steem Blockchain Information: API, Discord and Wechat!'
permlink: steem-blockchain-information-api-discord-and-wechat
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-01 13:15:12
categories:
- witness-category
tags:
- witness-category
- steemdev
- steem-api
- programming
- busy
thumbnail: https://gateway.ipfs.io/ipfs/QmePWwGdJMJ64XCHHgB2a41QCtp9HcK7etBcY4BUPVAVns
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have wrapped some useful information about steem [blockchain](https://helloacm.com/how-to-check-if-steemsql-is-synchronized-with-steem-blockchain/) via the Steem-Python library into the following:

```
import json
from steem import Steem
from steem.converter import Converter
from nodes import steem_nodes
import datetime

steem = Steem(nodes = steem_nodes)
converter = Converter(steemd_instance = steem)
ticker = steem.get_ticker()
market_price = (float(ticker['lowest_ask'])*0.5+float(ticker['highest_bid'])*0.5) 
feed_price = converter.steem_to_sbd(1.0)
time = datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S')

x = {
  "last_irreversible_block_num": steem.steemd.last_irreversible_block_num,
  "head_block_number": steem.steemd.head_block_number,
  "account_num": steem.steemd.get_account_count(),
  "feed_price": feed_price,
  "market_price": market_price,
  "time": time
}

print(json.dumps(x))
```

And these steem blockchain information can be [easily obtained](https://helloacm.com/steem-blockchain-information-api-discord-and-wechat/) via:

## API
And also [other API servers](https://helloacm.com/tools/steemit/).

> https://helloacm.com/api/steemit/info/

which returns JSON-encoded:

```
{"last_irreversible_block_num": 21186204, "hardfork_version": "0.19.0", "time": "2018-04-01T13:12:31", "feed_price": 1.521, "account_num": 904077, "head_block_number": 21186221, "market_price": 1.0168675809782273, "version": {"steem_revision": "e2560ea524b80a865fd468c8947f927f0ffbeb2d", "blockchain_version": "0.19.2", "fc_revision": "8dd1fd1ec0906509eb722fa7c8d280d59bcca23d"}}
```

## Discord Bot - steemit
![image.png](https://gateway.ipfs.io/ipfs/QmePWwGdJMJ64XCHHgB2a41QCtp9HcK7etBcY4BUPVAVns)

Adding `steemit` to your discord channel is easy:

https://discordapp.com/oauth2/authorize?client_id=418196534660694037&permissions=522304&scope=bot

## Wechat Channel - justyyuk
![image.png](https://gateway.ipfs.io/ipfs/QmSAdLqowBcv3sgXyyNXy1T56UQP4kgUc2YbEJzcJFd9vX)

### Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by [voting for me here!](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), Thank you very very much!

- - -

This page is synchronized from the post: [Steem Blockchain Information: API, Discord and Wechat!](https://steemit.com/@justyy/steem-blockchain-information-api-discord-and-wechat)
