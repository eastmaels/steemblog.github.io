
---
title: 'Update for steemengine - testnet, stake and unstake support have been added'
permlink: pdate-for-steemengine-testnet-stake-and-unstake-support-have-been-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-08 10:20:45
categories:
- utopian-io
tags:
- utopian-io
- development
- steem-engine
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmeBMdFuYivtQYJikVnYHikq39zHd5KH8wHYvHmrKcgLfB'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Repository
https://github.com/holgern/steemengine

![image.png](https://ipfs.busy.org/ipfs/QmeBMdFuYivtQYJikVnYHikq39zHd5KH8wHYvHmrKcgLfB)


## steemengine
[steemengine](https://github.com/holgern/steemengine) is a python library for working with [steem-engine.com](https://steem-engine.com/) tokens.

I released version 0.5.0 which can be installed by
```
pip install steemengine
```
## New features
### steem-engine testnet is supported
It is possible to set the url in the `Api` class and input the `Api` object to each steemengine class.
This allows it to use the steem-engine testnet.
```
from steemengine.api import Api
from steemengine.wallet import Wallet
api = Api("https://testapi.steem-engine.com/")
w = Wallet("holger80", api=api)
w.set_id("ssc-00000000000000000002")
print(w.get_token("SSC"))

```
The url of the testnet api is `https://testapi.steem-engine.com/`. When set the url in the API class and set the api parameter in all steemengine classes, e.g. `Wallet("holger80", api=api)`, all API calls are done to the testnet. When operation as transfers should be performed ih the testnet, the id has to be changed, by using the`set_id` function. The id of the mainnet is `ssc-mainnet1` and the testnet id is: `ssc-00000000000000000002`.

```
w.set_id("ssc-00000000000000000002")
```
sets the id to the testnet id.
### Using the testnet
When the testnet should be used, the following has to be done:
For the Wallet class:
```
api = Api("https://testapi.steem-engine.com/")
w = Wallet(..., api=api)
w.set_id("ssc-00000000000000000002")
```

For the Market class:
```
api = Api("https://testapi.steem-engine.com/")
m = Market(..., api=api)
m.set_id("ssc-00000000000000000002")
```

For the Tokenobject class:
```
api = Api("https://testapi.steem-engine.com/")
t = Token(..., api=api)
```

For the Tokens class:
```
api = Api("https://testapi.steem-engine.com/")
t = Tokens(api=api)
```


## staking and unstaking of tokens
At the last update of steem-engine staking of token was activated. Three new functions were added to the command line tool and the wallet class in order to support staking.

```
steemengine stake -a holger80 1 DRAGON
```
broadcasts a custom_json 
![image.png](https://ipfs.busy.org/ipfs/QmY34xYfTA7nru4GsX9YdYXeAqwfzQJaSBqu6vKuWVH9Y4)
with `stake` as contractAction.

As it can be seen here, the transaction was accepted. As staking was not enabled at the DRAGON token, the transaction had no effect.
```
steemengine info 2bf97f544b1fc86fbbe5ef4c43b8e622b6aad388
Transaction Id: 2bf97f544b1fc86fbbe5ef4c43b8e622b6aad388
+---------------------+------------------------------------------+

| Key                 | Value                                    |
+---------------------+------------------------------------------+

| blockNumber         | 137651                                   |
| action              | stake                                    |
| contract            | tokens                                   |
| logs                | {                                        |
|                     |     "errors": [                          |
|                     |         "staking not enabled"            |
|                     |     ]                                    |
|                     | }                                        |
| payload             | {                                        |
|                     |     "symbol": "DRAGON",                  |
|                     |     "quantity": "1.0000000",             |
|                     |     "isSignedWithActiveKey": true        |
|                     | }                                        |
| refSteemBlockNumber | 32722564                                 |
| sender              | holger80                                 |
| transactionId       | 2bf97f544b1fc86fbbe5ef4c43b8e622b6aad388 |
+---------------------+------------------------------------------+
```

#### Syntax of the new commands:
This command stakes  an AMOUNT of unstaked token TOKEN. The account on which the staking should happen must be given by the -a options.
```
Usage: steemengine  stake [OPTIONS] AMOUNT TOKEN

  stake a token

Options:
  -a, --account TEXT  Transfer from this account
  --help              Show this message and exit.
```
This command unstakes  an AMOUNT of staked token TOKEN. The account on which the staking should happen must be given by the -a options.
```
Usage: steemengine unstake [OPTIONS] AMOUNT TOKEN

  unstake a token

Options:
  -a, --account TEXT  Transfer from this account
  --help              Show this message and exit.
```
This command cancel an ongoing unstake operation with the transaction id TRX_ID. The account on which the staking should happen must be given by the -a options.
```
Usage: steemengine  cancel-unstake [OPTIONS] TRX_ID

  unstake a token

Options:
  -a, --account TEXT  Transfer from this account
  --help              Show this message and exit.
```
### New function at the wallet class
A token MYTOKEN can be staked with the stake function:
```
from steemengine.wallet import Wallet
from beem import Steem
active_wif = "5xxxx"
stm = Steem(keys=[active_wif])
wallet = Wallet("test", steem_instance=stm)
wallet.stake(1, "MYTOKEN")
```
The staked token can then be unstaked by:
```
wallet.unstake(1, "MYTOKEN")
```
Unstaking takes some time. The process can be canceled by:
```
wallet.stake("cf39ecb8b846f1efffb8db526fada21a5fcf41c3")
```
where `cf39ecb8b846f1efffb8db526fada21a5fcf41c3` is the transaction id of the unstake operation.

### Info shows the amount of staked token
```
steemengine info holger80
```
or 
```
from steemengine.wallet import Wallet
wallet = Wallet("holger80")
print(wallet)
```
Shows the amount of staked token. Token on which staking is not enabled, has only a balance key.
All tokens on which staking is activated have a `stake` and `pendingUnstake` field. The `info` command shows the content of these fields are prints a `-` when staking was not activated for a token.

## Commits
### Release 0.5.0
* [commit 58d9b11](https://github.com/holgern/steemengine/commit/58d9b11e86e3fbecbfa5263019679018182fdcf2)
* Add stake, unstake, cancel_unstake to Wallet class
* Add stake, unstake, cancel_unstake to the command line tool
* Add stake and pendingUnstake to info from the commandline tool
### Release 0.4.6
* [commit 3288300](https://github.com/holgern/steemengine/commit/32883001b4ad9416b2d9a6afeaaabd9c151f8a63)
* Allow to change the ssc id
### Release 0.4.5
* [commit b567e61](https://github.com/holgern/steemengine/commit/b567e614b77b47d7f402e38338a91a1238172273)
* Propagate the APi object to all steemengine objects

### Release 0.4.4 
* [commit 6ca253f](https://github.com/holgern/steemengine/commit/6ca253fd52f88bc7e83453b1eaa59be30ba419af)
* Fix URL for RPC object
### Release 0.4.3
* [commit c03c444](https://github.com/holgern/steemengine/commit/c03c4441cca9fe7fff1e93cba4187d8ec602c72e)
* Change URL also in RPC
### Release 0.4.2
* [commit 8f806a1](https://github.com/holgern/steemengine/commit/8f806a1b0bef6bfdc72620dcc1fee47a643196cf)
* Fix issue #2 - Fix cancel for handling new buy/sell id 
* URL for steemengine API can be set
## GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['Update for steemengine - testnet, stake and unstake support have been added'](https://steemit.com/@holger80/pdate-for-steemengine-testnet-stake-and-unstake-support-have-been-added)
