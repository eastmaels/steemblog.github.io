
---
title: 'How to build a steem-engine token upvote bot'
permlink: how-to-build-a-steem-engine-token-upvote-bot
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-28 12:35:15
categories:
- steem-engine
tags:
- steem-engine
- token
- python
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmPGeP5tzLBG2cNkwzchbthmh9TKHXkGCN86EZdVKDhYHB'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I wrote yesterday about my new [steemengine python library](https://steemit.com/utopian-io/@holger80/steemengine-a-python-library-for-steem-engine-com), which can be use to receive token balances and transfer history about every steem-engine token.

I'm now using this library to build a small upvote bot example.

In my example, @beembot is the upvoting account. When DRAGON token have been send to it, the account will upvote. There is a whitelist, so only whitelisted accounts will be upvoted.  1 DRAGON is one 100% upvote. 

## Usage
First I sent 1 DRAGON from @holger80 to @beembot with the url as memo:
![image.png](https://ipfs.busy.org/ipfs/QmPGeP5tzLBG2cNkwzchbthmh9TKHXkGCN86EZdVKDhYHB)

The transfer succeeded:
![image.png](https://ipfs.busy.org/ipfs/QmUqHkZjF3b5hpuV2azXXnNnPNdpGHCzaQ6obbGmi8Crt4)

and my post was upvoted:
![image.png](https://ipfs.busy.org/ipfs/QmZPgNwUc5B78fPnCtRVh2p1kfe8uTeCUFoaEwRS3PbkDA)

## How does it work
I chose the `get_history` function for receiving the token transfer history. It would be also possible to use `getBlockInfo` and go through all blocks of the sidechain. `get_history` seems to me as a simpler solution, so I used that.

`get_history` returns the last `limit` transfers. I implemented a check with `last_steem_block` to skip old blocks. It would be a good idea to store this value for the case that the script is stoped and started again.


## Setup
```
pip install beem
pip install steemengine
```
and setup a beem wallet
```
beempy createwallet
```
add the posting key of the upvote account in the prompt:
```
beempy addkey
```
## Script
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
from steemengine.api import Api
import time


if __name__ == "__main__":
    nodelist = NodeList()
    nodelist.update_nodes()
    stm = Steem(node=nodelist.get_nodes())
    api = Api()
    
    # edit here
    upvote_account = "beembot"
    upvote_token = "DRAGON"
    token_weight_factor = 100 # multiply token amount to get weight
    min_token_amount = 0.01
    max_post_age_days = 3
    whitelist = ["holger80"]
    blacklist_tags = []
    only_main_posts = True
    stm.wallet.unlock("wallet-passwd")
    last_steem_block = 1950 # It is a good idea to store this block, otherwise all transfers will be checked again
    while True:
        history = api.get_history(upvote_account, upvote_token, limit=1000, offset=0, histtype='user')
        for h in history:
            if int(h["block"]) <= last_steem_block:
                continue
            if h["to"] != upvote_account:
                continue
            last_steem_block = int(h["block"])
            if len(whitelist) > 0 and h["from"] not in whitelist:
                print("%s is not in the whitelist, skipping" % h["from"])
                continue
            if float(h["quantity"]) < min_token_amount:
                print("Below min token amount skipping...")
                continue
            try:
                c = Comment(h["memo"], steem_instance=stm)
            except:
                print("%s is not a valid url, skipping" % h["memo"])
                continue
            
            if c.is_comment() and only_main_posts:
                print("%s from %s is a comment, skipping" % (c["permlink"], c["author"]))
                continue
            if (c.time_elapsed().total_seconds() / 60 / 60 / 24) > max_post_age_days:
                print("Post is to old, skipping")
                continue                
            tags_ok = True
            if len(blacklist_tags) > 0 and "tags" in c:
                for t in blacklist_tags:
                    if t in c["tags"]:
                        tags_ok = False
            if not tags_ok:
                print("skipping, as one tag is blacklisted")
                continue
            already_voted = False
            for v in c["active_votes"]:
                if v["voter"] == upvote_account:
                    already_voted = True
            if already_voted:
                print("skipping, as already upvoted")
                continue
            
            upvote_weight = float(h["quantity"]) * token_weight_factor
            if upvote_weight > 100:
                upvote_weight = 100
            print("upvote %s from %s with %.2f %%" % (c["permlink"], c["author"], upvote_weight))
            c.upvote(weight=upvote_weight, voter=upvote_account)
        time.sleep(60)
```
Store the script as `token_upvote_bot.py` and run it by
```
python token_upvote_bot.py
```

## Summary
This script is only an example for a possible use case for my python library. What do you think? Do you have a idea for which I should create a script? Let me hear.

- - -

This page is synchronized from the post: ['How to build a steem-engine token upvote bot'](https://steemit.com/@holger80/how-to-build-a-steem-engine-token-upvote-bot)
