
---
title: 'Using beem to interact with the HF20 testnet'
permlink: using-beem-to-interact-with-the-hf20-testnet
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-25 05:44:12
categories:
- testnet
tags:
- testnet
- steemdev
- python
- beem
- busy
thumbnail: 'https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>
![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>

[beem](https://github.com/holgern/beem/) is ready to be used with the new HF 20 testnet which was announced [here](https://steemit.com/hardfork20/@steemitdev/hardfork-20-testnet-details).

We will use the new possibility to enter a custom_chain:

```
if __name__ == "__main__":
    stm = Steem(node=["https://testnet.steemitdev.com"],
                custom_chains={"TESTNETHF20": 
                               {'chain_assets': [
                                    {"asset": "@@000000013", "symbol": "SBD", "precision": 3, "id": 0},
                                    {"asset": "@@000000021", "symbol": "STEEM", "precision": 3, "id": 1},
                                    {"asset": "@@000000037", "symbol": "VESTS", "precision": 6, "id": 2}
                               ],
                 'chain_id': '46d82ab7d8db682eb1959aed0ada039a6d49afa1602491f93dde9cac3e8e6c32',
                 'min_version': '0.20.0',
                 'prefix': 'TST'}
                })
    print(stm.get_blockchain_version())
    print(stm.get_config()["STEEM_CHAIN_ID"])
```
with the current output:

```
0.21.0
'18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e'
```

The testnet has at the moment a different chain id as written in the  [steemitdev post](https://steemit.com/hardfork20/@steemitdev/hardfork-20-testnet-details). It seems that at the moment the switch-over from HF19 to HF20 is simulated. 

As the chain-id of the HF19 testnet is stored into beem, beem switches over to this one.

In order to get the current chain id, a direct RPC-call is possible:
```
from beemapi.graphenerpc import GrapheneRPC
rpc = GrapheneRPC(["https://testnet.steemitdev.com"], disable_chain_detection=True)
print(rpc.get_config()["STEEM_CHAIN_ID"])
```
The parameter `disable_chain_detection` disables the internal chain detection, which could lead to problems when connecting to a network with a unknown chain id (not stored in beem or given by custom_chains).

- - -

This page is synchronized from the post: ['Using beem to interact with the HF20 testnet'](https://steemit.com/@holger80/using-beem-to-interact-with-the-hf20-testnet)
