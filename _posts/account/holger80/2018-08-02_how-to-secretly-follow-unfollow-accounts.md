
---
title: 'How to secretly follow/unfollow accounts'
permlink: how-to-secretly-follow-unfollow-accounts
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-02 07:29:03
categories:
- steemdev
tags:
- steemdev
- follow
- unfollow
- python
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/Qmc1cNAQdXMKG4LSA1RRkk9KsrK3NVNP6BYgRAirm5kc8K'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


When an account is followed or unfollowed, a notification may broadcast to the account. Services that provide this, are GINAbot or the busy.org site for example.

When `beembot` is following me, i will receive a notification like:
* busy.org
![image.png](https://ipfs.busy.org/ipfs/Qmc1cNAQdXMKG4LSA1RRkk9KsrK3NVNP6BYgRAirm5kc8K)
* GINAbot
![image.png](https://ipfs.busy.org/ipfs/QmZtbY62KjcyCQ6onfwtZ8JZtKi39v8BuEb4pYCtAhNmuS)
* steemd
![image.png](https://ipfs.busy.org/ipfs/QmaezmQik7T9at7KeNxuTg2CqGcCBFbpnEpx4rE8PYZs8M)

## Follow/Unfollow notification can be prevented by using beem and by creating the follow ops in a special way
Follow / unfollow operations are custom_json operations, this means they will not be checked when broadcasting. When a follow/unfollow operation is embedded into a list, notification services will not notice, as they do not recognize them as valid follow operation.

`beembot` is currently following me:
![image.png](https://ipfs.busy.org/ipfs/QmUf2E5HQq9heEYXkEzoEDtcV9zYCThdD3WJgd92BwfVzb)
Lets `beembot` secretly unfollow me using beem (notice the double `[` and `]`):
```
from beem import Steem
from beem.account import Account
stm = Steem(keys=["POSTINGKEYBEEMBOT"])
account = Account("beembot", steem_instance=stm)

what = "" # "blog" for follow
json_body = [['follow', {'follower': 'beembot', 'following': 'holger80', 'what': [what]}]]
stm.custom_json("follow", json_body, required_posting_auths=[account["name"]])
```
The operation was sucessfull:
![image.png](https://ipfs.busy.org/ipfs/QmVnb2ULc7fcSTey8uyvUV7MFEnDF2Mjgp5oz1dMZjHzMc)
[Link to steemd](https://steemd.com/tx/722af299432d5d6c63b639b5d605f71450b69299)

steemd does not recognize the valid unfollow op:
![image.png](https://ipfs.busy.org/ipfs/QmYCWXRjLKgsiT74Yh88dyWyqC8P3n1WxFdbu8UkrztFv8)

I did not receive a notification from GINAbot or from busy.org.

## Let's secretly unfollow all followed accounts
`beembot` is following three accounts now:
![image.png](https://ipfs.busy.org/ipfs/QmZZNxghum7Xg6HaNDn8gAQtrM873ojPtQSETKe5yAGkrQ)
Let`s secretly unfollow all in one batch by broadcasting a valid list of unfollow operation embedded into a single custom_json operation:
```
from beem import Steem
from beem.account import Account
stm = Steem(keys=["POSTINGKEYBEEMBOT"])
account = Account("beembot", steem_instance=stm)
following_list = account.get_following()

json_body = []
what = '' # unfollow
# what = 'blog' # follow
for following in following_list:
    follow_op = ['follow', {'follower': account["name"], 'following': following, 'what': [what]}]
    json_body.append(follow_op)
stm.custom_json("follow", json_body, required_posting_auths=[account["name"]])
```
There is a maximum custom_json size, this example may not work with many accounts in following_list. It worked for three accounts:

![image.png](https://ipfs.busy.org/ipfs/QmUySjPaf4kXyniihQatoz77jK1jC4GsW5wYLP3W7hGf4H)
____
The code of GINAbot, busy.org and steemd may be adapted, so check first if the secret follow/unfollow operation still works.

- - -

This page is synchronized from the post: ['How to secretly follow/unfollow accounts'](https://steemit.com/@holger80/how-to-secretly-follow-unfollow-accounts)
