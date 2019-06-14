
---
title: 'update for beem - get_account_votes improved and signing speed improved'
permlink: update-for-beem-getaccountvotes-improved-and-signing-speed-improved
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-12 12:47:36
categories:
- utopian-io
tags:
- utopian-io
- development
- beem
- steemtank
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
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 494 unit tests and a coverage of 70 %. The current version is 0.20.17.
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
### Signing can be speed up by installing `secp256k1prp`
The python package [secp256k1prp](https://pypi.org/project/secp256k1prp) is now supported to speed up signing all broadcasted transaction. 

Before, secp256k1 was supported which is not maintained and I'm not able to install it anymore.

The following benchmark works only when `secp256k1prp` and `cryptography ` is installed. The library which should be used for sign/verify can be specified with `ecda.SECP256K1_MODULE`.
```
from beemgraphenebase.account import PrivateKey, PublicKey
import beemgraphenebase.ecdsasig as ecda
from beemgraphenebase.py23 import py23_bytes
import time
ecda.SECP256K1_MODULE = "ecdsa"
wif = "5J4KCbg1G3my9b9hCaQXnHSm6vrwW9xQTJS6ZciW2Kek7cCkCEk"
for lib in ["cryptography", "secp256k1", "ecdsa"]:
    ecda.SECP256K1_MODULE = lib
    start_time = time.time()
    for i in range(30):
        pub_key = py23_bytes(repr(PrivateKey(wif).pubkey), "latin")
        signature = ecda.sign_message("Foobar", wif)
        pub_key_sig = ecda.verify_message("Foobar", signature)

    print("%s: sign and verify took %.2f seconds." % (lib, (time.time() - start_time)/30))

```

| library | duration [s] |
| --- | --- |
|   secp256k1prp    | 1.63 |
|   cryptography | 1.80 |
|   ecsdsa   | 3.90 |

The benchmark shows that secp256k1prp is slightly faster than  cryptography for sign/verify a transaction.

## Bug fixes

### `get_account_votes ` works again with `api.steemit.com`
`get_account_votes` stoped working for `api.steemit.com` ([post](https://steemit.com/steemit/@steemitdev/additional-public-api-change)). The `get_account_votes` uses now `list_votes` with `"order": "by_voter_comment"` when `get_account_votes` returns a dict with a `error` field.

```
from beem.account import Account
from beem import Steem
stm = Steem("https://steemd.minnowsupportproject.org")
account = Account("holger80", steem_instance=stm)
votes = account.get_account_votes()
print(len(votes))
print(votes[-1])
```
returns 
```
7772
{'authorperm': 'steemcleaners/steemcleaners-report-for-december-29-2018', 'weight': 13434, 'rshares': '56347337681', 'percent': 1000, 'time': '2019-01-12T07:44:30'}
```
Due to the changes, the function works again for api.steemit.com:
```
from beem.account import Account
from beem import Steem
stm = Steem("https://api.steemit.com")
account = Account("holger80", steem_instance=stm)
votes = account.get_account_votes()
print(len(votes))
print(votes[-1])
```
returns
```
7772
{'id': 361753207, 'voter': 'holger80', 'author': 'steemcleaners', 'permlink': 'steemcleaners-report-for-december-29-2018', 'weight': 13434, 'rshares': '56347337681', 'vote_percent': 1000, 'last_update': '2019-01-12T07:44:30', 'num_changes': 0}
```
The returned dict of a vote is slightly different.
* `percent` -> `vote_percent`
* `time` -> `last_update`

### Fix rounding error in transfer broadcasting
The `Amount` class in beembase is used to calculate the signature of a transfer transaction. Inside this function, a rounding error occured, which prevents sending of 1.013 STEEM.
It was caused by:
```
(float(1.013) * 10 ** 3)
```
which is 
```
1012.9999999999999
```
and was round with the int() function to 
```
1012
```
 This had prevented broadcasting.
A `round` function is now used:
```
round(float(1.013) * 10 ** 3) = 1013
```
which returns 1013.
Function test:
![image.png](https://ipfs.busy.org/ipfs/QmV5ZKTRVX7RgYMqyC9DR4GHGRZDFRbP4BEYNR4yJncaHV)


### Unit tests fixed
Due to the some changes and the not working testnet, some unit tests were broken. They are all fixed now.
![image.png](https://ipfs.busy.org/ipfs/QmXBPDKsUFDa3cFAv4HDZbswwQ1gViFSFK4TA7hTSxXRzo)


### Commits
#### Replace secp256k1 by secp256k1prp which is better maintained and available on more platforms
* [dc3812d](https://github.com/holgern/beem/commit/dc3812d0b3244a9074e6d6b95d746cf6c0214a61)
#### Get_account_votes enhanced for api.steemit.com node
* [commit d09aa4d](https://github.com/holgern/beem/commit/d09aa4d31059843b361d5f6c4e6f9ae7b5b13ed7)
#### Fix unit tests
* [commit 2969013](https://github.com/holgern/beem/commit/29690131a5142a1178334aff7e36a07376ef542a)
#### Add coverage calculation and fix not working unit tests
* [commit ecfd272](https://github.com/holgern/beem/commit/ecfd272375ef0ceb866b9ab5773c74f147ebb58d)
#### Fix more unit tests
* [commit db74680](https://github.com/holgern/beem/commit/db74680f1c84752c2fc963c1eb0c10c41df69b40)
#### add sonar analysis
* [commit c13d530](https://github.com/holgern/beem/commit/c13d530ae614fea4841ec2055570239c31989502)
#### Repair unit tests for beempy
* [commit 590b5ab](https://github.com/holgern/beem/commit/590b5abc9457d83a719fd494455790357958b439)

#### Fix wrong rounding of 1.013 STEEM to 1.012 STEEM which prevents transfer of certain STEEM amounts.
* [commit e9f9687](https://github.com/holgern/beem/commit/e9f96870f6f98d9945b9b7cb4ae9f600dedab8b3)


### Github account
https://github.com/holgern

- - -

This page is synchronized from the post: ['update for beem - get_account_votes improved and signing speed improved'](https://steemit.com/@holger80/update-for-beem-getaccountvotes-improved-and-signing-speed-improved)
