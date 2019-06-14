
---
title: 'Update for steemengine - token class and command line tool added'
permlink: update-for-steemengine-token-class-and-command-line-tool-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-11 13:32:51
categories:
- utopian-io
tags:
- utopian-io
- development
- steem-engine
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmZrpLZz5DcAVLKkBSUknoEs1eSR4kJEaW1ZSB8otwt6Kq'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmZrpLZz5DcAVLKkBSUknoEs1eSR4kJEaW1ZSB8otwt6Kq)


### Repository
https://github.com/holgern/steemengine

### steemengine
[steemengine](https://github.com/holgern/steemengine) is a python library for working with [steem-engine.com](https://steem-engine.com/) tokens.

I released version 0.3.0 which can be installed by
```
pip install steemengine
```

## New features
### New `Token` class
I added a token class, that can be used to receive information about a token.

```
from steemengine.tokenobject import Token
eng = Token("ENG")
print(eng)
print(eng.get_holder())
print(eng.get_market_info())
print(eng.get_buy_book())
print(eng.get_sell_book())
```

#### `get_holder`
All accounts that currently are holding a token can be received by the `get_holder()` function
It uses the `find` function from the api:
```
holder = self.api.find("tokens", "balances", query={"symbol": self.symbol})
```
It returns a list of dict-objects. Each dict object is of the following structure:
```
{'$loki': 2,
 'account': 'steemsc',
 'balance': '1973148.55400000',
 'symbol': 'ENG'}
```

#### `get_market_info()`
This function uses:
```
metrics = self.api.find_one("market", "metrics", query={"symbol": self.symbol})
```
and returns the following structure:
```
{'$loki': 1,
 'highestBid': '0.81000',
 'lastDayPrice': '0.949',
 'lastDayPriceExpiration': 1552346331,
 'lastPrice': '0.949',
 'lowestAsk': '0.949',
 'priceChangePercent': '0.00%',
 'priceChangeSteem': '0.000',
 'symbol': 'ENG',
 'volume': 223.535,
 'volumeExpiration': 1552346331}
```
#### get_buy_book() and get_sell_book()
These functions return the sell/buy book of all currently not fullfilled order at the market.

### Command line tool
I added a command line tool to the python package. It has currently two commands.
After installing the steemengine library, a steemengine command should be available in the terminal.
```
steemengine --version
```
and 
```
steemengine --help
```
should be working.

#### steemengine richlist
This command returns the top n token holder.
For example the top 10 ENG token holder can be shown be the following command:
```
 steemengine richlist -t 10 ENG
```
![image.png](https://ipfs.busy.org/ipfs/QmZwKFaExY7sewJbaHWnMKpnGYo5AUXeaoBmNbp1tZAWvb)

The STEEM value of the token balance is obtained by multiplying the balance by the `lastPrice` field from get_market_info().

#### steemengine info
This command can be used to receive information about

#### latest block
```
steemengine info
```
![image.png](https://ipfs.busy.org/ipfs/QmXi65CUriwXJatBP2oez2Vjdje1QEfxX48qGyerw7C57Q)

#### a sidechain block
```
steemengine info 16695
```
![image.png](https://ipfs.busy.org/ipfs/QmWykTLoBcxEroBp8LHu9HSTzCX2SMfdZzN2Jz7u1E7MCG)

#### a token
```
steemengine info ENG
```
![image.png](https://ipfs.busy.org/ipfs/QmYMHKjzH2BP5Ne78VwK1JyZkihyDYiXBask2KA2TF61kC)

#### an account
```
steemengine info holger80
```
![image.png](https://ipfs.busy.org/ipfs/QmZF2TKmrLMcyTecX8rtNu4fD1gCf1hAv7Wh8SiHEWFXYt)

#### a transaction id
```
steemengine info 12ed6e59179a8b5441809d60dc3025143f17ff9f
```
![image.png](https://ipfs.busy.org/ipfs/QmV5fymefs3Yyy8Aj5HYh9DWTJXgFecu8tGBsRQVe2RdkP)

### PyInstaller
I created two pyinstaller specs, which will create a one file standalone executable and a one-directory standalone excecutable. I setup appveyoer, in order to build a packed version for windows:
https://ci.appveyor.com/project/holger80/steemengine
I will put the newest Windows-Versions to the release page: https://github.com/holgern/steemengine/releases

## Commits
### Changelog and pyinstaller build instruction added
* [commit ff05b22](https://github.com/holgern/steemengine/commit/ff05b22c90812aaf383f81b02920bad626510916)
### Add command line tool for showing block, token and account info 
* [commit e8362861](https://github.com/holgern/steemengine/commit/e8362861c114831d991841ca99ba7e057f5f3d7b)
* Add CLI for showing information about blocks, transaction ids, token and accounts
* Unit tests for tokenobject and tokens added
* get_buy_book and get_sell_book for Wallet added

### Add Token class, remove unused imports and fix some variable names
* [commit d34d5ee](https://github.com/holgern/steemengine/commit/d34d5ee6c146cdb5765d33462d4fb0785ab2984b)
* The new Token class returns, token holder, market information and token information
* some camelcase variable names fixed
* unused imports removed
* version increased to 0.3.0

### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['Update for steemengine - token class and command line tool added'](https://steemit.com/@holger80/update-for-steemengine-token-class-and-command-line-tool-added)
