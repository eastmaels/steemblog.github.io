
---
title: 'update for beem - several improvements and bug fixes'
permlink: update-for-beem-several-improvements-and-bug-fixes
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-20 11:25:00
categories:
- utopian-io
tags:
- utopian-io
- development
- beem
- python
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


#### Repository
https://github.com/holgern/beem
<center>
![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 536 unit tests and a coverage of 74 %. The current version is 0.19.49.
I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V
___
## Bug Fixes
### Discussions.get_discussions("blog", ...) returns the same two comments over and over
The bug was fixed in [commit 0416477](https://github.com/holgern/beem/commit/041647798c80a499e2b82652050f9e88c156d937).
The limitation of `get_discussions_by_blog` is that only 100 entries can be fetched at once. More entries can be obtained by setting `start_author` and `start_permlink`  the last obtained post.
This post is then obtained twice. Once in the previous call and once in the next call. In beem, a logic was implemented to skip this doubled post. 

The observed error could be observed in some special cases. The bug was fixed by implementing a better logic:
```
if query_count != 0 and rpc_query_count == 0 and (d["author"] == start_author and d["permlink"] == start_permlink):
    double_result = True
    if len(dd) == 1:
        found_more_than_start_entry = False
start_author = d["author"]
start_permlink = d["permlink"]
```

## `get_all_replies` and `get_parent` were added to `beem.comment.Comment`
Two important functions for which no RPC-API call exists were added. `get_all_replies` returns all replies from a comment. All comments are returned in list. `depth`, `parent_permlink` and `parent_author` are included into each comment. Using these three values, the complete reply structure can be reconstructed (Building a reply tree is planned for one of the next updates).

```
from beem.comment import Comment
byteball_post = Comment("@punqtured/official-byteball-airdrop-to-steemians")
all_replies = byteball_post.get_all_replies()
len(all_replies)
2481
```
Let's take a look on the 1000th reply:
![carbon (4).png](https://ipfs.busy.org/ipfs/QmVVFePz4QTk3Hog4QRmMQrWFkYm2uF6eowSTRrzMa7SUv)

`get_parent()` can now be used to find the parent post:
```
reply = Comment("@samhamou/re-tincho-re-gaurav9971-re-punqtured-official-byteball-airdrop-to-steemians-20180712t225124402z")
parent = reply.get_parent()
parent.authorperm
'@punqtured/official-byteball-airdrop-to-steemians'
```

## Reconstruct vote power since account creation
With the newest improvements ([commit 305491f](https://github.com/holgern/beem/commit/305491f05d989c5637b44010e390785d871a1560)) for `beem.snapshot.AccountSnapshot` it is now possible to reconstruct the vote power since account creation. Only `weight` and `timestamp` of all outgoing votes is used to reconstruct the vote power:


![carbon.png](https://ipfs.busy.org/ipfs/QmPDqcBWKcqXye4wrzZGiYMveQFvPwM8X8N5HQ17FtrhXD)


![voting-power-holger80.png](https://ipfs.busy.org/ipfs/QmakFpGDSEcB5pv5L9EufykpfDRppamgQVVorTsqnsrNfM)
Last reconstructed vote power for my account is `93.64`. The current vote power of my account is
```
from beem.account import Account
acc = Account("holger80")
acc.get_voting_power(False)
93.65
```
The difference is only 0.01 %.

## Reconstruct account reputation over time
Reconstruction of account reputation was added in
[commit fa2675b](https://github.com/holgern/beem/commit/fa2675bd7d4c2f1ac3bb741737d166d7cd3fa739)
The account reputation is calculated from all incoming votes using the vote `timestamp`, `rshares` and `voter reputation`:
![carbon (3).png](https://ipfs.busy.org/ipfs/QmRV1W3ZpEw5joscAnrBdcukJosJ82HRQTTNd8Aa5F4aNk)

![reputation-holger80.png](https://ipfs.busy.org/ipfs/QmP5qVk1uJLurrkmgtzj2Pg41Efr3mhQpuUTWKhxSRBj8T)
The last reconstructed reputation value is:
```
last reputation 62.581168
```
whereas my current repution is:
```
from beem.account import Account
acc = Account("holger80")
acc.get_reputation()
62.604815023975625
```
The difference between my current and the reconstructed repution is only `0.0236`.

## Commit history
#### Prepare next release and fix Amount for condenser broadcast ops (used for appbase right now)
* [commit 812155c](https://github.com/holgern/beem/commit/812155c0aba1784cbfe979237913eaeef9c8552e)

#### fixes issue #45
* [commit fc85671](https://github.com/holgern/beem/commit/fc8567111655cbd36307914c400bb4a6e0665dec)
* Fixes issue #45 by checking the timestamp of last_payout instead of net_rshares. With these changes, voting of unvoted posts/comments is possible.
* Refactoring of Transactionbuilder and adding of _use_condenser_api for defining the use of condenser api on broadcasting when using appbase nodes

#### Add get_all_replies to comment for fetching all replies
* [commit 664bbaa](https://github.com/holgern/beem/commit/664bbaa090ca29831363bdc50347a05f1d151a9a)

#### Fix formatToTimestamp for python 2.7
* [commit 49012f3](https://github.com/holgern/beem/commit/49012f315035afe20a9a4cc943868d5d0e044356)

#### Refactor Amount detection in account, claimreward improved
* [commit 6d9181c](https://github.com/holgern/beem/commit/6d9181cee39d850a14864a005869bd6e0aa53a09)

#### Several improvements and fixes
* [commit 305491f](https://github.com/holgern/beem/commit/305491f05d989c5637b44010e390785d871a1560)
###### CLI
* upvote and downvote fixed
###### Snapshot
* refactoring
* update_vote and build_vp_arrays added for showing vote power history
###### Examples
* account_vp_over_time added

#### Prepare next release and add next_witness_block_countdown example
* [commit ef18f9e](https://github.com/holgern/beem/commit/ef18f9ec36fdb95492b677bebd88ed43269ef3e3)

#### add `get_parent` to comment and fix for `beempy reward`
* [commit 8d0e364](https://github.com/holgern/beem/commit/8d0e364f6f13f6c66a092047a20b4f2c9716856d)

#### Fix issue #51
* [commit 0416477](https://github.com/holgern/beem/commit/041647798c80a499e2b82652050f9e88c156d937)

#### Fixes replies for Discussions
* [commit 1f8c90c](https://github.com/holgern/beem/commit/1f8c90c4a112c2951bbde51e20aab34a03afc0dd)

#### Fixes Discussions, when only one reply is returned
* [commit aa74d03](https://github.com/holgern/beem/commit/aa74d03acc2f0cb9808b385b08b69eede8cf8191)

#### snapshot improved and unit test fixed
* [commit fa2675b](https://github.com/holgern/beem/commit/fa2675bd7d4c2f1ac3bb741737d166d7cd3fa739)
###### Snapshot
* update_in_vote added 
* enable_votes changed to enable_in_votes and enable_out_votes
* build_rep_arrays added
###### Example
* account_vp_over_time added
* account_reputation_by_SP added
###### Discussion
* check if parameter exists in discussion_query added

#### Fix #57 and try to improve error "Client returned invalid format. Expected JSON!" handling
* [commit dea8826](https://github.com/holgern/beem/commit/dea8826b3910622e0a6c66c6d946ceb620e44fe3)

#### Fix unit tests and improve json export for account 
* [commit d655d66](https://github.com/holgern/beem/commit/d655d669e11827e36140ba1b3448942fa5c940d2)
* depth property added for comments

#### Fix flake8 and improve steemconnect fix for #57
* [commit 7220734](https://github.com/holgern/beem/commit/7220734d1480d43c005f5ab589036c810fd6ff32)
___
If you like what I'm doing, please consider @holger80 as one of your witnesses ([steemconnect](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1)). 

- - -

This page is synchronized from the post: ['update for beem - several improvements and bug fixes'](https://steemit.com/@holger80/update-for-beem-several-improvements-and-bug-fixes)
