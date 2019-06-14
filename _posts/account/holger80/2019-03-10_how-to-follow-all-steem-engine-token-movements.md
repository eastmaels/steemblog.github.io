
---
title: 'How to follow all steem-engine token movements'
permlink: how-to-follow-all-steem-engine-token-movements
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-10 00:17:39
categories:
- steem-engine
tags:
- steem-engine
- token
- python
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmbUjs2Z2aFsi9Vj3Y2WoFLDyiNCL98SsCn3jAC4ABJrS2'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The [steem-engine](https://steem-engine.com) token balance of an account can be influenced by the following actions:
* issue - can be performed by the token creator and increases the number of token
* transfer - a token is transfered between two accounts
* buy - when a buy order is fullfilled, the token is transfered into the account
* sell - when a sell order is fullfilled the token is permamently removed from the account

All these operations are custom_json operation and they have to be accepted by the sidechain. Parsing only the custom_json is not sufficient for knowing who owns token.

## Market operation
### buy
A buy order allows an account to buy token from the market. The STEEMP  that are needed in exchange for the tokens is locked into the market. 

### sell
A sell order allows an account to sell token to the market. The token that should be sold are locked into the market until the order is fullfiled or canceld.

### Fullfilling a buy order
When there is already a matching sell order on the market, three internal transfers are generated:
* STEEMP from the buyer is transfered to the market
* The tokens are transfered from the market to the buyer
* The STEEMP are transfered to the seller

When there is no matching sell order, only one transfer is generated:
* STEEMP  is transfered to the market

In both cases, the same custom_json is broadcasted. It is only possible to know, how much token each account has, when it is known if there is a matching sell order or not.

### Fullfilling a sell order
When there is already a matching buy order on the market, three internal transfers are generated:
* STEEMP from the buyer is transfered to the market
* The tokens are transfered from the market to the buyer
* The STEEMP are transfered to the seller

When there is no matching buy order, only one transfer is generated:
* tokens are transfered to the market


In both cases, the same custom_json is broadcasted. It is only possible to know, how much token each account has, when it is known if there is a matching  buy order or not.

If a order is fullfilled or not can be found out by using `get_transaction_info(trx_id)` from the steemengine python library. The transaction_id of the broadcasted buy/sell custom_json is needed as function input.

```
trx_info = api.get_transaction_info(b["trx_id"])
payload =json.loads(trx_info["payload"])
logs = json.loads(trx_info["logs"])
if "events" in logs:
    print(logs["events"])
```
This function returns a json with a `logs` field. When it has an `events` field, the order was sucessfully placed. When only one transfer is stored into `logs["events"]`, there was no matching buy/sell order.
When there is more than 1 transfer, the buy/sell order was sucessfully.



## Token movement tracker
The following script prints token movements. When a buy or a sell operation at the market is sucessfully, it is shown and all transfers are shown.
In the screen shot,  bobby.madagascer bought 1 FREEX from dakeshi. 
![image.png](https://ipfs.busy.org/ipfs/QmbUjs2Z2aFsi9Vj3Y2WoFLDyiNCL98SsCn3jAC4ABJrS2)



```
# This Python file uses the following encoding: utf-8
# (c) holger80
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals
from beem import Steem
from beem.comment import Comment
from beem.nodelist import NodeList
from beem.utils import formatTimeString, addTzInfo
from beem.blockchain import Blockchain
from steemengine.api import Api
import time
import json


if __name__ == "__main__":
    nodelist = NodeList()
    nodelist.update_nodes()
    stm = Steem(node=nodelist.get_nodes())
    
    api = Api()
    
    blockchain = Blockchain(mode="head", steem_instance=stm)

    start_block = blockchain.get_current_block_num()
    for b in blockchain.stream(start=start_block, opNames=["custom_json", "transfer"]):
        if b["type"] == "custom_json":
            if b["id"] != "ssc-mainnet1":
                continue
            trx_info = api.get_transaction_info(b["trx_id"])
            if trx_info is None:
                continue
            payload =json.loads(trx_info["payload"])
            logs = json.loads(trx_info["logs"])
            if "errors" in logs:
                continue            
            if trx_info["action"] == "issue":
                print("%s issued %s %s" % (trx_info["sender"], payload["quantity"], payload["symbol"]))
            elif trx_info["action"] == "transfer":
                print("%s transfered %s %s to %s" % (trx_info["sender"], payload["quantity"], payload["symbol"], payload["to"]))
            elif trx_info["action"] == "sell":

                if len(logs["events"]) == 1:
                    print("%s put sell order %s %s for %s" % (trx_info["sender"], payload["quantity"], payload["symbol"], payload["price"]))
                else:
                    print("%s sold %s %s for %s" % (trx_info["sender"], payload["quantity"], payload["symbol"], payload["price"]))
                    for transfer in logs["events"]:
                        print("    - %s transfers %s %s to %s" % (transfer["data"]["from"], transfer["data"]["quantity"], transfer["data"]["symbol"], transfer["data"]["to"]))                    
            elif trx_info["action"] == "buy":
                if len(logs["events"]) == 1:
                    print("%s put buy order  %s %s for %s" % (trx_info["sender"], payload["quantity"], payload["symbol"], payload["price"]))
                else:
                    print("%s bought %s %s for %s" % (trx_info["sender"], payload["quantity"], payload["symbol"], payload["price"]))
                    for transfer in logs["events"]:
                        print("    - %s transfers %s %s to %s" % (transfer["data"]["from"], transfer["data"]["quantity"], transfer["data"]["symbol"], transfer["data"]["to"]))
                    
            elif trx_info["action"] == "cancel":
                print("%s cancel %s order with %s" % (trx_info["sender"], payload["type"], payload["id"]))
            elif trx_info["action"] == "withdraw":
                print("%s withdraw %s STEEMP" % (trx_info["sender"], payload["quantity"]))
                
            elif trx_info["action"] == "updateMetadata":
                continue
            elif trx_info["action"] == "create":
                print("%s created the %s token" % (trx_info["sender"], payload["symbol"]))
            else:
                print(trx_info)
        elif b["type"] == "transfer":
            if "ssc-mainnet1" not in b["memo"]:
                continue
            trx_info = api.get_transaction_info(b["trx_id"])
            if trx_info is None:
                continue
            payload =json.loads(trx_info["payload"])
            if trx_info["action"] == "buy":
                print("%s bought STEEMP for %s" % (trx_info["sender"], payload["amountSTEEMSBD"]))
            elif trx_info["action"] == "removeWithdrawal":
                print("%s withdraw STEEMP for %s" % (payload["recipient"], payload["amountSTEEMSBD"]))
            else:
                print(trx_info)
```
In order to run the script, steemengine must be install by
```
pip install steemengine
```
It can than be run by storing the content into a py file and running the  script by
```
python monitor_tokens.py
```

- - -

This page is synchronized from the post: ['How to follow all steem-engine token movements'](https://steemit.com/@holger80/how-to-follow-all-steem-engine-token-movements)
