
---
title: 'Scan all steem-engine blocks for specific data'
permlink: scan-all-steem-engine-blocks-for-specific-data
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-09 11:37:30
categories:
- steem-engine
tags:
- steem-engine
- token
- python
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/Qma3GE3M39cUtLTFppsCwqiFGzxjyRu457pZCziLhAv7hW'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/Qma3GE3M39cUtLTFppsCwqiFGzxjyRu457pZCziLhAv7hW)


After reading the request of @rolandp ([post](https://steemit.com/steem-engine/@roelandp/scammer-alert-roelandp-666-fake-toshi-selling-fake-btc-coins-111)), I found that a small python script, which is able to scan all blocks from the steem-engine sidechain would be very helpfull.

I'm using my [steemengine](https://github.com/holgern/steemengine) toolbox and will go through all blocks. I will check all `market` contracts with `buy` and `sell` action of the `BTC` token.

I'm only interessted in sold token and not in action in which a order is put on the market. When the order was sucessfully, there are more than one entry in the attached logs. For a successful buy, there are:
* STEEMP transfer to the market
* token transfer from the market to the buyer
* STEEMP trasnfer to the seller

For a successful sell, there are at least:
* token transfer to the market
* STEEMP transfer to the seller
* token transfer to the buyer

For a placed order, there can only be either a successful buy or sell happen. The last placed order determine the type.

In my script, I'm only parsing buy/sell actions that have at least 3 BTC/STEEMP movements.

```
import time
import logging
import json
from steemengine.api import Api
from beem.block import Block
log = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)


if __name__ == "__main__":
    api = Api()
    latest_block = api.get_latest_block_info()

    scan_token = ['BTC']
    print("Scanning all blocks from 0 to %d..." % latest_block['blockNumber'])
    steemp_payments = []
    
    for block_num in range(latest_block['blockNumber']):
        block = api.get_block_info(block_num)
        if block_num % 1000 == 0:
            print("%.2f %%" % (block["blockNumber"]/latest_block['blockNumber'] * 100))
        for trx in block["transactions"]:
            
            if trx["contract"] not in ['market']:
                continue
            if trx["action"] not in ['buy', 'sell']:
                continue

            
            logs = json.loads(trx["logs"])
            sender = trx["sender"]
            payload = json.loads(trx["payload"])
            contract = trx["contract"]
            action = trx["action"]            
            
            if action == "sell":
                if "events" not in logs:
                    continue
                elif len(logs["events"]) == 1:
                    continue
                else:
                    token_found = False
                    for transfer in logs["events"]:
                        if transfer["data"]["symbol"] in scan_token:
                            token_found = True
                    if token_found:
                        steem_block = Block(block["refSteemBlockNumber"])
                        print("%d (%s) - %s:" % (block["blockNumber"], steem_block.json()["timestamp"], trx['transactionId']))
                        print("%s sold %s %s for %s" % (trx["sender"], payload["quantity"], payload["symbol"], payload["price"]))
                        for transfer in logs["events"]:
                            print("    - %s transfers %s %s to %s" % (transfer["data"]["from"], transfer["data"]["quantity"], transfer["data"]["symbol"], transfer["data"]["to"]))                    
                                
            elif action == "buy":
                if "events" not in logs:
                    continue
                elif len(logs["events"]) == 1:
                    continue
                else:
                    token_found = False
                    for transfer in logs["events"]:
                        if transfer["data"]["symbol"] in scan_token:
                            token_found = True
                    if token_found:
                        steem_block = Block(block["refSteemBlockNumber"])
                        print("%d (%s) - %s" % (block["blockNumber"], steem_block.json()["timestamp"], trx['transactionId']))
                        print("%s bought %s %s for %s" % (trx["sender"], payload["quantity"], payload["symbol"], payload["price"]))
                        for transfer in logs["events"]:
                            print("    - %s transfers %s %s to %s" % (transfer["data"]["from"], transfer["data"]["quantity"], transfer["data"]["symbol"], transfer["data"]["to"]))
                         
```
In order to run the script, steemengine must be install by
```
pip install steemengine
```
The script can than be stored as parse_steemengine_blocks.py and run by:
```
python parse_steemengine_blocks.py
```
The tokens for which the buys and sells should be printed, can be specified in this list:
```
scan_token = ['BTC']
```
for example
```
scan_token = ['BTCP', 'LTCP', 'DOGEP', 'BCHP']
```

Here are the results für the delisted `BTC` token:
```
14875 (2019-03-09T06:30:39) - 86c034f0f5e40fdc66f6bfdf6809b57a75a5429a
stealthtrader bought 0.0001125 BTC for 8888.88800
    - stealthtrader transfers 1.000 STEEMP to market
    - market transfers 0.0001125 BTC to stealthtrader
    - market transfers 1.000 STEEMP to fake.toshi

15719 (2019-03-09T19:49:27) - d76a62b335f23285d1c25dff9d787cf26e366600
stealthtrader bought 0.001125 BTC for 8888.88800
    - stealthtrader transfers 10.000 STEEMP to market
    - market transfers 0.001125 BTC to stealthtrader
    - market transfers 10.000 STEEMP to fake.toshi

16485 (2019-03-11T06:00:33) - eff811cfac89920df2d9905cd1244f47a80964a2
stealthtrader bought 0.00043 BTC for 8888.88800
    - stealthtrader transfers 3.822 STEEMP to market
    - market transfers 0.00043 BTC to stealthtrader
    - market transfers 3.822 STEEMP to fake.toshi

21673 (2019-03-20T05:14:39) - 8b7933590d035ad3a120db618f24c8e49b238440
stealthtrader bought 0.0001126 BTC for 8888.88800
    - stealthtrader transfers 1.001 STEEMP to market
    - market transfers 0.0001126 BTC to stealthtrader
    - market transfers 1.001 STEEMP to fake.toshi
21954 (2019-03-20T15:06:24) - acddca352289141bf2298fa5b5f1e376326eaf87
y-o-u-t-h-m-e bought 0.0000001 BTC for 8888.88800
    - y-o-u-t-h-m-e transfers 0.001 STEEMP to market
    - market transfers 0.0000001 BTC to y-o-u-t-h-m-e
    - market transfers 0.001 STEEMP to fake.toshi

32085 (2019-03-23T23:45:24) - c5fb770d009445ae40b39e91af35fb91bd4f425e
profquax bought 0.000445 BTC for 8888.88800
    - profquax transfers 3.956 STEEMP to market
    - market transfers 0.000445 BTC to profquax
    - market transfers 3.956 STEEMP to fake.toshi

42019 (2019-04-03T00:02:36) - 6c83d6365ef021687b9c4fbca6dead5d1d311224
stealthtrader bought 0.00107 BTC for 8888.88800
    - stealthtrader transfers 9.511 STEEMP to market
    - market transfers 0.000445 BTC to stealthtrader
    - market transfers 3.954 STEEMP to profquax
    - market transfers 0.00062500 BTC to stealthtrader
    - market transfers 5.556 STEEMP to fake.toshi
    - market transfers 0.001 STEEMP to stealthtrader

42256 (2019-04-03T07:06:03) - 58999a6f09f91b353f1acf2a499a4dda05241709
monsterbuster bought 0.0009 BTC for 8888.88800
    - monsterbuster transfers 8.000 STEEMP to market
    - market transfers 0.0009 BTC to monsterbuster
    - market transfers 8.000 STEEMP to fake.toshi

42771 (2019-04-03T22:27:54) - ab3fd0a09a0cad9de376665b1079cda3014c4378
followbtcnews bought .005 BTC for 8888.88800
    - followbtcnews transfers 44.444 STEEMP to market
    - market transfers .005 BTC to followbtcnews
    - market transfers 44.444 STEEMP to fake.toshi

43207 (2019-04-04T08:35:27) - 944e3a5605d580bf0fe5723d7f497d855afbddf5
monsterbuster bought 0.0005 BTC for 8888.88800
    - monsterbuster transfers 4.444 STEEMP to market
    - market transfers 0.0005 BTC to monsterbuster
    - market transfers 4.444 STEEMP to fake.toshi

44068 (2019-04-05T09:28:06) - 0e465651c89d58ad813f631f9003f01021c8db77
elamental bought 0.01102 BTC for 8888.88800
    - elamental transfers 97.956 STEEMP to market
    - market transfers 0.01102 BTC to elamental
    - market transfers 97.956 STEEMP to fake.toshi

```

- - -

This page is synchronized from the post: ['Scan all steem-engine blocks for specific data'](https://steemit.com/@holger80/scan-all-steem-engine-blocks-for-specific-data)
