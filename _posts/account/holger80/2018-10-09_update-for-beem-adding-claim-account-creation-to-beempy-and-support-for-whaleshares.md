
---
title: 'update for beem - adding claim account creation to beempy and support for whaleshares'
permlink: update-for-beem-adding-claim-account-creation-to-beempy-and-support-for-whaleshares
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-09 22:08:45
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
https://github.com/holgern/beem<center>
![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 502 unit tests and a coverage of 72 %. The current version is 0.20.7.
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

### New Features

#### claim account and create claim account added to beempy
A new command for claim accounts was added to beempy:
`beempy claimaccount <creator>`
where `<creator>` is the account name which pays for the account claiming with RC.
![image.png](https://ipfs.busy.org/ipfs/Qmf63BVoc1Nnicg5k5PQLQbwokyPqTyMNNKrCbiXFUVbb9)

When `--fee` is set to `--fee 3`, the account creation fee is paid with STEEM instead of being changed with RCs. The parameter `--number` or `-n` can be set to claim more than 1 account.

### create a claimed account
`beempy newaccount -a <creator> <newaccountname>` was adapted to HF20.  When `--create-claimed-account'` is set, a subsidized account with name `<newaccountname>` is created:
```
beempy newaccount -a <creator> --create-claimed-account <newaccountname>
```
creates a 
![image.png](https://ipfs.busy.org/ipfs/QmY2taFsXU8q53Jo6kKYKMAbmgH7Tccd4bCY2iG1yVjQVz)


### Whaleshares is supported
Different steem blockchain with a different number of operations are supportet now. At the moment, only the operationids for the steem chain and for the whaleshares chain are stored in `beembase/operattionsids.py`. As the network prefix is now set in the init function of `Signed_transaction` and `Operation`, the correct operation-ids table can be loaded. A wrong operation id prevents an operation from being successfully broadcasted.

```
node = ["wss://whaleshares.io/ws", "https://rpc.wls.services/"]
wls = Steem(node=node)
```

beem will always fully support steem, supporting of other steem-based networks is only done when the functionality for interacting with steem is not disturbed. Supporting other networks will help to prevent that several beem forks are being created and will help that beem itself is further developed and improved.

### Better testnet and 3rd party chain support
All "STEEM", "SBD" and "VESTS" strings are replaced by `steem.steem_symbol`, `steem.sbd_symbol` and `steem.vests_symbol` properties which adapt to the connected network thanks to @crokkon ([utopian-io post](https://steemit.com/utopian-io/@crokkon/improved-testnet-3rd-party-chain-support-in-beem-1539031672421)). 

I replaced also all fixed "STEEM", "SBD" and "VESTS" strings in beempy. For networks which do not have a SBD currency as Whaleshares, the sbd_symbol is replaced by the steem_symbol:
```
    @property
    def sbd_symbol(self):
        """ get the current chains symbol for SBD (e.g. "TBD" on testnet) """
        # some networks (e.g. whaleshares) do not have SBD
        try:
            symbol = self._get_asset_symbol(0)
        except KeyError:
            symbol = self._get_asset_symbol(1)
        return symbol
```
Balances in the account class depend now on the number of available symbols:
```
acc2.balances
{'available': [0.000 STEEM, 0.098 SBD, 10152.045284 VESTS],
 'rewards': [0.000 STEEM, 0.000 SBD, 0.000000 VESTS],
 'savings': [0.000 STEEM, 0.000 SBD],
 'total': [0.000 STEEM, 0.098 SBD, 10152.045284 VESTS]}
```
becomes
```
acc.balances
{'available': [0.000 WLS, 0.009999 VESTS],
 'rewards': [0.000 WLS, 0.000000 VESTS],
 'savings': [],
 'total': [0.000 WLS, 0.009999 VESTS]}
```
on whaleshares.io.

## Commit history
### All constant STEEM and SBD strings inside beempy are replaced by steem.steem_symbol steem.sbd_symbol properties
* [commit f2e47ec](https://github.com/holgern/beem/commit/f2e47ecc4668d0fea754e6ec5b493fd640b8ed88)
### Fix prefix parameter for signedtransaction init function and improve steem.refresh_data()
* [commit f829f36](https://github.com/holgern/beem/commit/f829f362a0a0923aa753c8b60fc1c19fac52f393)
* Fix test_block unittest
* Adapt Changelog for next release

### Small improvements
* [commit be1452e](https://github.com/holgern/beem/commit/be1452e1537bd611a35cddaf07bd926f6e2a9d7c)

### Add create_claimed_account to beempy and add correct operationids for WLS
* [commit 1a2e229](https://github.com/holgern/beem/commit/1a2e229c4421abda8ca8c4d1f43d97ad7ec6a2f5)

### Add claimaccount to beempy and some improvements for steem.sbd_symbol
* [commit b51f84d](https://github.com/holgern/beem/commit/b51f84d82eb2afe7fc6cb8a3ee2f53b8f0ccf802)

### Fix typo and improved handling of symbols in comment
* [commit d0abdfc](https://github.com/holgern/beem/commit/d0abdfcc51e66f2ca7e369f6c81a7ecaec98961a)

### WLS prefix fixed and next version prepared
* [commit d23629b](https://github.com/holgern/beem/commit/d23629bc92960ce0a7eabbfe66c545d89ea1138a)

### Fix unit tests and skip not working tests on testnet
* [commit 3e5965a](https://github.com/holgern/beem/commit/3e5965aa8a22ccca92b6a20ba6abe1cd8847d013)

### Fix timestamp
* [commit de9c67e](https://github.com/holgern/beem/commit/de9c67e5bfd2cc37a745004088ea1d891de6a44c)

### Fix get_effective_vesting_shares for python 2.7
* [commit 4fbdab1](https://github.com/holgern/beem/commit/4fbdab12d9cfb3981c7a80d671e06b56d0b1c0c5)

### Fix unit tests
* [commit 9c42b2c](https://github.com/holgern/beem/commit/9c42b2c83aa6aa91a62508fc1f565b858f7218f1)

### Several improvements and fixes
* [commit 362eea7](https://github.com/holgern/beem/commit/362eea7e3cd5e935c24927a6a9bdeef76fdaad6e)
#### Account
* some code improvements
#### Graphenerpc
* small improvement in chain detection
#### Steem
* replace_steemit_by_steem option removed from get_config
* witness_update fixed
#### Comment
* Fix docu
#### chain
* Waleshares added
#### Unit test
* unit tests fixed

### Fix unit test for python2.7
* [commit 82e438f](https://github.com/holgern/beem/commit/82e438f6a64cb4b51cb6f3014824a794d92f4304)

### Fix unit tests for new amount dict format in test_transactions
* [commit bfb1254](https://github.com/holgern/beem/commit/bfb125410cf7fb104d744b1b04c7452676df3a2e)

### Prepare next release
* [commit 433451f](https://github.com/holgern/beem/commit/433451f1706d4460acf890620f53c72f336a25a1)
* add claim_account RC calculation
* fix Bytes type
* Improve testnet example
* test_types improved

- - -

This page is synchronized from the post: ['update for beem - adding claim account creation to beempy and support for whaleshares'](https://steemit.com/@holger80/update-for-beem-adding-claim-account-creation-to-beempy-and-support-for-whaleshares)
