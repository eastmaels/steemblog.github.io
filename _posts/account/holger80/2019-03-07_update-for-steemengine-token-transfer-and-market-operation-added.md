
---
title: 'Update for steemengine - token transfer and market operation added'
permlink: update-for-steemengine-token-transfer-and-market-operation-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-07 14:36:42
categories:
- utopian-io
tags:
- utopian-io
- development
- steem-engine
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmVrVEAKKAwVESH2nBLnu3dQ8KNixFZuVg9nVEtdTTR65W'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmVrVEAKKAwVESH2nBLnu3dQ8KNixFZuVg9nVEtdTTR65W)

### Repository
https://github.com/holgern/steemengine

### steemengine
[steemengine](https://github.com/holgern/steemengine) is a python library for working with [steem-engine.com](https://steem-engine.com/) tokens.

I released version 0.2.0 which can be installed by
```
pip install steemengine
```

## New features
 It is now possible to view the wallet of a user and receive information about all registered token. Sending of token is possible and creating Buy/Sell order on the market can be done. It is also possible to deposit STEEM and withdraw STEEMP.

As a token transfer is a custom_json operation, there is the possibility that broadcasting a transfer will not change the token amount. There are some rules in place that may prevent that a transfer run trough( e.g. quantity must be a string and not a float). I tried to prevent such cases by:
```
{"symbol":symbol.upper(),"to":to,"quantity":str(amount),"memo":memo}
```
assuring that the symbol contains only upper chars and that the quantity is a string.


I updated my beem library, in order to allow token transfer (spaces in the custom json field were removed and broadcasting a custom json with an active key is now possible). Thus, all described functions work only with a beem version `>=0.20.19`. The beem version can be checked with
```
beempy --version
```

### Wallet password
Instead of unlocking the wallet
```
stm = Steem()
stm.unlock("wallet_pass")
```
the active key can be set directly:
```
stm = Steem(keys=["5xx"])
```
### View Token balance
It is possible to get the token balance for an account using the `Wallet` class.
```
from steemengine.wallet import Wallet
wallet = Wallet("holger80")
print(wallet)
print(wallet.get_token("JAR"))
```

### Token transfer
Token transfer is possible using the new `Wallet` class. The account name and the token balance is checked before sending.
The exception `TokenNotInWallet` is raised, when the token is available in the wallet. When the transfer amount is higher than the balance, a `InsufficientTokenAmount` exception is raised.
```
from beem import Steem
from steemengine.wallet import Wallet
stm = Steem()
stm.unlock("wallet_pass")
wallet = Wallet("holger80", steem_instance=stm)
wallet.transfer("jarunik",1, "JAR", memo="https://steemit.com/utopian-io/@holger80/update-for-steemengine-token-transfer-and-market-operation-added")
```

### Market deposit
The STEEM balance is checked before sending the deposit. When not sufficient STEEM are in the account, a `InsufficientTokenAmount` is raised.
```
from beem import Steem
from steemengine.market import Market
stm = Steem()
stm.unlock("wallet_pass")
m=Market(steem_instance=stm)
m.deposit("holger80", 0.01)
```
![image.png](https://ipfs.busy.org/ipfs/QmayDL9jQjyEAvBqwgzYXMTN9wK4Frs7n2pfm1bfNmCcWM)

![image.png](https://ipfs.busy.org/ipfs/QmZDS3qPvrsxyKeN7Cr4p1pXE76CrhxYnFh4MASdc7vVGG)

## Market withdraw
The `STEEMP` token balance is checked before. When the amount is not sufficient, a `InsufficientTokenAmount` is raised.
```
from beem import Steem
from steemengine.market import Market
stm = Steem()
stm.unlock("wallet_pass")
m=Market(steem_instance=stm)
m.withdraw("holger80", 0.009)
```
![image.png](https://ipfs.busy.org/ipfs/QmYMK7o1XZVN1jmqJJn4FPRvJvB9UhkD1T9UnNdEpuSJ5Y)


## Buy order
The `STEEMP` token balance is checked, when it is below `amount_token_to_buy * price`, a `InsufficientTokenAmount` is raised.
```
from beem import Steem
from steemengine.market import Market
stm = Steem()
stm.unlock("wallet_pass")
m=Market(steem_instance=stm)
m.buy("holger80", 1, "JAR", 0.09)
```
![image.png](https://ipfs.busy.org/ipfs/QmPsQ14kCnfBdJ4xi7MQAHtgC6fKwKmyp9Aq9Zd2aa7Piz)


## Cancel a buy order
A buy order can be cancelled, when the buy order ID is known. It can be found out by using the `get_buy_book` function. 
```
from beem import Steem
from steemengine.market import Market
stm = Steem()
stm.unlock("wallet_pass")
m=Market(steem_instance=stm)
open_buy_orders = m.get_buy_book("JAR", "holger80")
m.cancel("holger80", "buy", open_buy_orders[0]["$loki"])
```

## Sell order
The token balance is checked, when it is to low, a `InsufficientTokenAmount` is raised.
```
from beem import Steem
from steemengine.market import Market
stm = Steem()
stm.unlock("wallet_pass")
m=Market(steem_instance=stm)
m.sell("holger80", 1, "JAR", 10)
```
![image.png](https://ipfs.busy.org/ipfs/QmTVhzb95Y5UcL8kctSd8Mb4YbCG9nLcTJkQhaDXcGRCTq)


## Cancel a sell order
A sell order can be cancelled, when the sell order ID is known. It can be found out by using the `get_sell_book` function. 
```
from beem import Steem
from steemengine.market import Market
stm = Steem()
stm.unlock("wallet_pass")
m=Market(steem_instance=stm)
open_sell_orders = m.get_sell_book("JAR", "holger80")
m.cancel("holger80", "sell", open_sell_orders [0]["$loki"])
```

## View all tokens
```
from steemengine.tokens import Tokens
tokens = Tokens()
print("%d token were registered" % len(tokens))
print(tokens.get_token("ENG"))
```
## Commits
### Changelog and more examples added to readme
* [commit 5e39644](https://github.com/holgern/steemengine/commit/5e396444e144044725cae2108cf7508b3ee2c800)
* Doku to some functions added
### Add Market, Tokens and Wallet classes
* [commit dc38ce9](https://github.com/holgern/steemengine/commit/dc38ce97ea10c50fee9c54051e43744daacd3512)
* Market() can be used for deposit,withdrawel, buy and sell.
* Wallet() can be used for checking the wallet balance and sending tokens
* Tokens() can be used for checking all available tokens
### Rename function names to meet PEP8 conventions
* [commit 4c067b0](https://github.com/holgern/steemengine/commit/4c067b0bdeb19c7eb626cd4ec6402fade520a9da)
* Add two exapmles (token sending and token upvote bot)
* Increase version number
* find returns an array
* find_one returns an object


### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['Update for steemengine - token transfer and market operation added'](https://steemit.com/@holger80/update-for-steemengine-token-transfer-and-market-operation-added)
