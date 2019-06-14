
---
title: 'Robust price feed publishing with beempy'
permlink: robust-price-feed-publishing-with-beempy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-07 14:11:30
categories:
- witness-category
tags:
- witness-category
- witness
- beem
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmNooQbP5ekXr4iXGcQj4WR3YRndq1Q12AofUh1tky1FmA'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


As you may read in my last [beem update](https://steemit.com/utopian-io/@holger80/update-for-beem-fullnodeupdate-integrated-and-witness-tools-added), I released version 0.19.36. The command line tool `beempy` has now a robust price feed publish function for witnesses.

## What does robust mean?
The other available price feed tools have the problem that a working full-node has to be set. Otherwise, the feed cannot be broadcasted. Robust means that broadcasting is always possible, no matter if all but one full node are failing.

## Why is  `beempy` robust?
`beempy` can be used together with updatenodes, which receives an hourly updated full-node configuration. You can see the hourly account updates here: https://steemd.com/@fullnodeupdate

![image.png](https://ipfs.busy.org/ipfs/QmNooQbP5ekXr4iXGcQj4WR3YRndq1Q12AofUh1tky1FmA)

`beempy updatenodes` fetches the actual node configuration and is building a score. All nodes with positive score are than set as default nodes.
![image.png](https://ipfs.busy.org/ipfs/QmaRhtWUKKXmCb5tirDRgAXkgDp7bzGyFQryqpNEpTH9sR)

## Price feed publishing
The price feed can be published with `beempy witnessfeed`.  `--support-peg` can be set to support peg. If not set, quote is always 1 STEEM.

The base price is calculated from btc_usd and steem_usd prices similar to the conductor from @furion. It uses for BTC_USD
```
            "https://api.bitfinex.com/v1/pubticker/BTCUSD",
            "https://api.gdax.com/products/BTC-USD/ticker",
            "https://api.kraken.com/0/public/Ticker?pair=XBTUSD",
            "https://www.okcoin.com/api/v1/ticker.do?symbol=btc_usd",
            "https://www.bitstamp.net/api/v2/ticker/btcusd/",
```
and for STEEM_BTC:
```
            "https://poloniex.com/public?command=returnTicker",
            "https://bittrex.com/api/v1.1/public/getmarketsummary?market=BTC-STEEM",
            "https://api.binance.com/api/v1/ticker/24hr",
```
SBD_USD (only needed when supporting PEG)  is calculated from the internal market.

## Installing and setting up beempy
The alternative package installer `pip`/`pip3` for python3 is needed. It can be installed on ubuntu by:
```
sudo apt-get install python3-pip 
```
In the next step, beem is installed for the current user by:
```
pip3 install beem -U --user
```

In the first step, a new wallet should be created:
```
beempy createwallet
```
The active key of the witness account has to be stored in the wallet:
```
beempy addkey
```
We need to know where `beempy` is installed:
```
which beempy
```

I wrote a small script for unlocking the wallet, updating the nodes and publishing a price feed:
```
#!/bin/bash
export UNLOCK='secret_password'
/home/holger80/.local/bin/beempy updatenodes
/home/holger80/.local/bin/beempy witnessfeed holger80
```
I saved this script as `update_feed` and  added it to a crontab by  running`crontab -e` and entering:
```
0 * * * * (sh /home/holger80/update_feed) >> /tmp/crontab.log 2>&1
```
You can check `/etc/crontab.log` if everything is working fine.

___
If you like what I'm doing, please consider @holger80 as one of your witnesses. You can use [steemconnect.com for approve your vote](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1) or go to https://steemit.com/~witnesses and enter my name into the vote field:
<center>
![image.png](https://ipfs.busy.org/ipfs/QmWdfhuztZaJQkttRRhajrnTAwxUbxz4UoHdhfoJi2Ze9p)</center>
___
* [Measuring seed-node ping times with python](https://steemit.com/witness-category/@holger80/measuring-seed-node-ping-times-with-python)
* [My Witness Application - holger80](https://steemit.com/witness-category/@holger80/my-witness-application-holger80)

- - -

This page is synchronized from the post: ['Robust price feed publishing with beempy'](https://steemit.com/@holger80/robust-price-feed-publishing-with-beempy)
