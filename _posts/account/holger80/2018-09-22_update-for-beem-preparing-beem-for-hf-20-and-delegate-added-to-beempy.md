
---
title: 'update for beem - preparing beem for HF 20 and delegate added to beempy'
permlink: update-for-beem-preparing-beem-for-hf-20-and-delegate-added-to-beempy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-22 13:23:36
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
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 489 unit tests and a coverage of 73 %. The current version is 0.19.56.
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

## Bug Fixes
### Account.get_voting_power() method Not Functional on HF20 RPC Nodes
The post about the bug can be found [here](https://steemit.com/utopian-io/@anthonyadavisii/beem-0-19-55-beem-account-getvotingpower-method-not-functional-on-hf20-rpc-nodes).
`get_voting_power` was fixed in  [commit c01e10d](https://github.com/holgern/beem/commit/c01e10d2629dd868f90532dc60d13da7f923f946)
by using:
* `self["voting_manabar"]["current_mana"]`
* `self["voting_manabar"]["last_update_time"]`

Example with working get_voting_power():
```
from beem import Steem
from beem.account import Account

stm = Steem(node="https://api.steemit.com")
acc = Account("holger80", steem_instance=stm)
acc.get_voting_power()
95.37947158587963
stm
<Steem node=https://api.steemit.com, nobroadcast=False>
stm.get_blockchain_version()
'0.20.2'
```

### New Features
#### delegation added to beempy
Delegation can be done by
```
beempy delegate -a <account> <amount> <to_account>
```
`amount` can be VESTS or STEEM and must be quoted with `"`.
Examples:
```
beempy delegate -a beembot "1 STEEM" holger80
beempy delegate -a beemboot "1000 VESTS" holger80
```
It is also possible to create steemconnect links by adding `-l` before `delegate`:
```
beempy -l delegate -a beembot "1 STEEM" holger80
```
This results in `https://steemconnect.com/sign/delegate_vesting_shares?delegator=beembot&delegatee=holger80&vesting_shares=2021.090606+VESTS`
### Connection to HF20 testnet
The asset symbols were fixed for the HF20 testnet. It can be used by:
```
from beem import Steem
stm = Steem(node="https://testnet.steemitdev.com")
stm.chain_params["chain_id"] = "46d82ab7d8db682eb1959aed0ada039a6d49afa1602491f93dde9cac3e8e6c32"
```

#### Nodelist update
All nodes in nodelist were updated.

##### Unit tests
All unit tests were fixed. As non-appbase nodes are no longer available, all unit tests which uses non-appbase nodes were failing. This was fixed.

#### Constants fixed
* `STEEM_VOTING_MANA_REGENERATION_SECONDS` and `STEEM_REVERSE_AUCTION_WINDOW_SECONDS_HF20` were added.

## Commit history
### STEEM_VOTING_MANA_REGENERATION_SECONDS is used for regenerated_vp calculation
* [commit d993074](https://github.com/holgern/beem/commit/d993074d974d9838f8c4a85731230b108654fc98)
* Fix unit test
### Fix constants and unittests
* [commit b407a5f](https://github.com/holgern/beem/commit/b407a5f03af0c75779e66a751224055088658fdd)
### Fix unit tests
* [commit 65bcdec](https://github.com/holgern/beem/commit/65bcdec455808eada356c99bee545baccea2736f)

### Improved several functions and nodelist updated
* [commit 476656c](https://github.com/holgern/beem/commit/476656c679c42df1923b7dbe41cac4fbfaaeee94)
### CONSTANTS
* STEEM_REVERSE_AUCTION_WINDOW_SECONDS_HF20 added

### Nodelist
* nodes information updated

### Steem
* get_dust_threshold() improved and get_config used
* hardfork checks improved
* hardfork property improved by using get_hardfork_properties function

### Changelog.rst added and Issue #80 fixed

## Fix remaining unit tests
* [commit 74c189a](https://github.com/holgern/beem/commit/74c189a511bb6915cdaccfb739e8571eb9ca78cf)

## Fix more unit tests for appbase and upcoming HF20
* [commit 6ddfeea](https://github.com/holgern/beem/commit/6ddfeea9b06e3d1be857e868e6bdce2296000628)

## Remove non appbase nodes and related tests from all unit tests Improve blockchain.stream() for appbase
* [commit 77bf202](https://github.com/holgern/beem/commit/77bf20234e5d2253ddd14cc9078c9a48f542294b)

## Fix warnings
* [commit c98562c](https://github.com/holgern/beem/commit/c98562cb4b6ecad7db1f57c7b402c2f920032c76)

## Fix flake8 and revert changes to sbd_to_rshares
* [commit d55ab7b](https://github.com/holgern/beem/commit/d55ab7b775827ba339aa5bfe972c343a1875c3b5)

## Add delegate to beempy and some HF20 fixes
* [commit c01e10d](https://github.com/holgern/beem/commit/c01e10d2629dd868f90532dc60d13da7f923f946)

___

#### GitHub Account
https://github.com/holgern/
____
If you like what I'm doing, please consider @holger80 as one of your witnesses ([steemconnect](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1)).

- - -

This page is synchronized from the post: ['update for beem - preparing beem for HF 20 and delegate added to beempy'](https://steemit.com/@holger80/update-for-beem-preparing-beem-for-hf-20-and-delegate-added-to-beempy)
