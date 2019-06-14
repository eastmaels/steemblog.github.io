
---
title: 'How to use beem for offline trx building and signing'
permlink: how-to-use-beem-for-offline-trx-building-and-signing
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-06 21:29:42
categories:
- beem
tags:
- beem
- python
- steemdev
- tutorial
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmUdtxQShABkwiVnAHzbkbtMdp6P5b3XmuM3nApoReJ4NX'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


It is possible to create and store a signed transaction and broadcast it later (maximum allowed delay is one hour or 3600 seconds).

At the beginning, the current block number and prefix has to be fetched from the api node. 
Then the transaction can be created, signed and stored in a text file.

This allows using beem with other libraries for broadcasting. 
```
import time
from beembase import operations
from beem.transactionbuilder import TransactionBuilder
from beem.steem import Steem
from beem.nodelist import NodeList
from beembase.transactions import getBlockParams
import json

wif = "5xxx"


if __name__ == "__main__":
    stm_online = Steem()
    ref_block_num, ref_block_prefix = getBlockParams(stm_online)
    print("ref_block_num %d - ref_block_prefix %d" % (ref_block_num, ref_block_prefix))

    stm = Steem(offline=True)

    op = operations.Transfer({'from': 'beembot',
                              'to': 'holger80',
                              'amount': "0.001 SBD",
                              'memo': ""})
    tb = TransactionBuilder(steem_instance=stm, expiration=3600)

    tb.appendOps([op])
    tb.appendWif(wif)
    tb.constructTx(ref_block_num=ref_block_num, ref_block_prefix=ref_block_prefix)
    tx = tb.sign(reconstruct_tx=False)
    params = (tx.json())
    broadcast_json = {"jsonrpc":"2.0", "method":"condenser_api.broadcast_transaction", "params":[params], "id":1}
    with open("broadcast_transfer.json", "w") as f:
        f.write(json.dumps(broadcast_json))
```
This script fetches the `ref_block_num` and `ref_block_prefix` and builds a json dictionary which contains the signed transaction. The json is written into a text file `broadcast_transfer.json`. 

It is only possible to send a transaction once. Resending will lead to `Duplicate transaction check failed`. The `@` sign means that the following is not a text for sending but a file name. 
```
 curl -s --data "@broadcast_transfer.json" https://api.steemit.com
```
The content of this file is read and then broadcasted to the node. 

![image.png](https://ipfs.busy.org/ipfs/QmUdtxQShABkwiVnAHzbkbtMdp6P5b3XmuM3nApoReJ4NX)
It worked. 


- - -

This page is synchronized from the post: ['How to use beem for offline trx building and signing'](https://steemit.com/@holger80/how-to-use-beem-for-offline-trx-building-and-signing)
