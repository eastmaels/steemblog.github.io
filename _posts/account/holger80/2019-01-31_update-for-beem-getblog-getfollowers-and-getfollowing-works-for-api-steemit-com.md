
---
title: 'update for beem - get_blog, get_followers and get_following works for api.steemit.com'
permlink: update-for-beem-getblog-getfollowers-and-getfollowing-works-for-api-steemit-com
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-31 22:54:45
categories:
- utopian-io
tags:
- utopian-io
- development
- beem
- python
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Repository
https://github.com/holgern/beem<center>
![beem-logo](https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 495 unit tests and a coverage of 70 %. The current version is 0.20.18.
I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V
The newest beem version can be installed by:

```
pip install -U beem
```
or when  using conda:
```
conda install beem
```
beem can be updated by:
```
conda update beem
```
## New Features
### public keys can be set in `beempy newaccount` for account creation
```
beempy newaccount --owner OWNER_PUB --active ACTIVE_PUB --memo MEMO_PUB --posting POSTING_PUB -a CREATOR_ACCOUNT NEW_ACCOUNT
```
When the owner, active, memo and posting parameter are used and 4 public keys are set, a new account is created with these 4 keys. Public/private keys can be created by `beempy keygen`

```
+-------------+-----------------------------------------------------------------------------------------------------------------+

| Key         | Value                                                                                                           |
+-------------+-----------------------------------------------------------------------------------------------------------------+

| Brain Key   | CENTO NOVENA CHIAUS ICEBERG DRAPE ORDERER YUSDRUM APHYLLY TORNUS YAWROOT OBEAH RIT CATELLA SILESIA HUBBA CULTCH |
| Private Key | 5JQZAHjvLf2Tncs6LU1P1nfwpvCaJWe8LKjbpworo5EUjdWL42G                                                             |
| Public Key  | STM7Bq295nbY3sm3RWoSRmQv2pFJdiNcxZZiazKmJw2epY25946D1                                                           |
+-------------+-----------------------------------------------------------------------------------------------------------------+
```
When now `STM7Bq295nbY3sm3RWoSRmQv2pFJdiNcxZZiazKmJw2epY25946D1` is set as one of the four public keys, the new account will have `5JQZAHjvLf2Tncs6LU1P1nfwpvCaJWe8LKjbpworo5EUjdWL42G` as one of the four private keys.

By this, it is possible to create 4 public/private keys and give only the public keys to someone else, who can then claim a new account using these 4 public keys.

## Nodelist - api.steemit.com is handled as limited node
The `get_nodes`  function has now an `exclude_limited` parameter. When set to True, https://api.steemit.com is excluded. The reason for doing this, is that https://api.steemit.com is not a feature-complete full node anymore. Several API calls do not work anymore.

```
from beem.nodelist import NodeList
nodelist = NodeList()
nodelist.update_nodes()
print(nodelist.get_nodes(exclude_limited=True))
```
returns nodes without api.steemit.com:
```
['https://steemd.minnowsupportproject.org', 'https://rpc.steemviz.com', 'https://anyx.io', 'https://rpc.usesteem.com', 'https://appbasetest.timcliff.com', 'https://steemd.privex.io', 'https://api.steem.house']
```
The https://rpc.usesteem.com was added to the nodelist.

## Bug fixes
Issue [#146](https://github.com/holgern/beem/issues/146) was caused by moving several API calls to hivemind. By this, the return structure of some calls were changed. The issue was
fixed by improving
`get_blog`, `get_followers` and `get_following` so that they works with api.steemit.com.
It was sufficient in this case to check of the returned object is a `dict` or a list.

When the returned object is a dict, it is converted into  a list by returning the content in the `blog` field:
```
if isinstance(ret, dict) and "blog" in ret:
    ret = ret["blog"]
```
After doing this, both lists are similar and can be processed and returned.

Example call:
```
from beem import Steem
from beem.account import Account
stm = Steem(node="https://api.steemit.com")
acc = Account("holger80", steem_instance=stm)
print("%d followers, %d following" % (len(acc.get_followers()), len(acc.get_following())))
print("Last blog: %s" % (acc.get_blog(limit=1)[0]["title"]))
```
returns
```
1269 followers, 342 following
Last blog: steemrewarding.com - curation performance is shown and other improvements
```
Results for other nodes:
```
from beem import Steem
from beem.account import Account
stm = Steem(node="https://steemd.minnowsupportproject.org")
acc = Account("holger80", steem_instance=stm)
print("%d followers, %d following" % (len(acc.get_followers()), len(acc.get_following())))
print("Last blog: %s" % (acc.get_blog(limit=1)[0]["title"]))
```
returns
```
1272 followers, 342 following
Last blog: steemrewarding.com - curation performance is shown and other improvements
```


## Unit tests are fixed
In all unit tests, the api.steemit.com node is excluded. This fixes all unit tests.

## Commits
### beempy newaccount - possible to provide owen, posting, active, and memo pub_key to create a new account
* [commit 5029b08](https://github.com/holgern/beem/commit/5029b0834ee6908e5604f8c51b47bf00562ef7ab)

### Fix get_follower and get_following for api.steemit.com
* [commit 0267cf1](https://github.com/holgern/beem/commit/0267cf1f0eb14a14d62e11968c3eb4ee24d476e8)

### Fix get_blog for api.steemit.com
* [commit cf284bd](https://github.com/holgern/beem/commit/cf284bdcffd490463be19cbf518af02db8eaf4be)
* remove wss://steemd-appbase.steemit.com

### Nodelist udpated 
* [commit a9972c4](https://github.com/holgern/beem/commit/a9972c48729cb394dd44df6c0c598c6121314926)
* normal and appbase option for Nodelist are deprecated. 
* exclude_limited added for getting a nodelist without api.steemit.com.
* full node server added
* unit tests adapted

### Fix wrong full node api urls in unit tests
* [commit 46f6a69](https://github.com/holgern/beem/commit/46f6a6985e12469678dabe95314f410484504237)

### Fix unittests 
* [commit 500f9a8](https://github.com/holgern/beem/commit/500f9a864aa184d591b7a8fc1dc15ae7a9f448af)
* Remove not working steemitdev testnet
* exclude api.steemit.com from some tests

## Github account
https://github.com/holgern


- - -

This page is synchronized from the post: ['update for beem - get_blog, get_followers and get_following works for api.steemit.com'](https://steemit.com/@holger80/update-for-beem-getblog-getfollowers-and-getfollowing-works-for-api-steemit-com)
