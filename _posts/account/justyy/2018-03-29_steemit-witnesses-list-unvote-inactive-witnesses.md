
---
title: 'Steemit Witnesses List - Unvote Inactive Witnesses'
permlink: steemit-witnesses-list-unvote-inactive-witnesses
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-29 06:54:15
categories:
- witness-cateogry
tags:
- witness-cateogry
- witness
- steemdev
- steemapps
- steemtools
thumbnail: https://gateway.ipfs.io/ipfs/QmWLJCtRMEGvqArvjn4A1S7shxEExy8WuXMfKJbreM46jT
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Don't waste your valuable votes on inactive witnesses! Use your votes wisely. Some witnesses may be offline for quite a while and you may consider voting for some others instead. The steemit witness help build the steem blockchains and that is why your votes matter!

I have made a tiny tool: 
- https://helloacm.com/tools/steemit/witness/

that allows you to view a list of witnesses that you vote.  Type in your steem ID and press Enter or click the button:

![image.png](https://gateway.ipfs.io/ipfs/QmWLJCtRMEGvqArvjn4A1S7shxEExy8WuXMfKJbreM46jT)


At the `Status` column, if the witness has a green YES, it means he/she is active, otherwise a red NO means the witness is inactive, you may consider revoking the vote via the `Unvote` link. The `unvote` will redirect you to steemconnect.

## API (Application Programming Interface)
API Calling Example is:

> https://uploadbeta.com/api/steemit/account/witness/?cached&id=justyy

It will return JSON-encoded array has the following fields for each witness you have voted:

> sbd_interest_rate
account_creation_fee_symbol
last_sbd_exchange_update
maximum_block_size
sbd_exchange_rate_base_symbol
votes
votes_count
last_aslot
running_version
signing_key
account_creation_fee
total_missed
hardfork_version_vote
last_confirmed_block_num
hardfork_time_vote
sbd_exchange_rate_quote
sbd_exchange_rate_quote_symbol
url
name
created


If \$_GET parameter s is not specified, this API will use the \$_POST variable id instead.

> curl -X POST https://helloacm.com/api/steemit/account/witness/ -d "id=justyy"

## How this works?
A witness is inactive for sure, if his/her signing key is something like this:

```
STM1111111111111111111111111111111114T1Anm
```

### Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by [voting for me here!](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), Thank you very very much!

- - -

This page is synchronized from the post: [Steemit Witnesses List - Unvote Inactive Witnesses](https://steemit.com/@justyy/steemit-witnesses-list-unvote-inactive-witnesses)
