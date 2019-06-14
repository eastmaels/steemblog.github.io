
---
title: 'Witness updated to 0.20.2'
permlink: witness-updated-to-0-20-2
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-23 20:37:45
categories:
- witness-update
tags:
- witness-update
- witness
- witness-category
- hf20
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmWdfhuztZaJQkttRRhajrnTAwxUbxz4UoHdhfoJi2Ze9p'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


HF20 is still scheduled for Tuesday, September 25, 2018 15:00:00 UTC and I updated my witness node now to 0.20.2. This [release](https://github.com/steemit/steem/releases/tag/v0.20.2) contains several bug fixes and an improved RC code.
I already produced my first block on 0.20.2 and all is running smoothly now.

I was working on implementing the new `witness_set_properties` operation into beem. This operation must be signed with the private witness key and can be used to set:

* account_creation_fee - fee for account creation
* account_subsidy_budget - defines the free account creation rate
* account_subsidy_decay - The per block decay of the account subsidy pool. 
* maximum_block_size
* sbd_interest_rate
* sbd_exchange_rate
* url
* new_signing_key

After trying some structures, it seems that it should be provided as:
```
{
 'owner': 'witness_owner',
 'props': [['key', 'hex_pub_key'], ['key1', 'value1'], ['key2', 'value2']]
}
```

I tried it on the HF20 testnet, but could not broadcasting, as I were receiving a `missing required other authority:Missing Authority` error. I wrote then a Issue [#2932](https://github.com/steemit/steem/issues/2932). Let's hope that it will be fixed soon.

The current development state of beem can be seen [here](https://github.com/holgern/beem/commit/e61c802c4fc1e4fe9f6a6dad7e2abe0fb4a813ab).

____
If you like what I'm doing, please consider @holger80 as one of your witnesses. You can use [steemconnect.com for approving your vote](https://steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1) or go to https://steemit.com/~witnesses and enter my name into the vote field:
<center>
![image.png](https://ipfs.busy.org/ipfs/QmWdfhuztZaJQkttRRhajrnTAwxUbxz4UoHdhfoJi2Ze9p)</center>"

- - -

This page is synchronized from the post: ['Witness updated to 0.20.2'](https://steemit.com/@holger80/witness-updated-to-0-20-2)
