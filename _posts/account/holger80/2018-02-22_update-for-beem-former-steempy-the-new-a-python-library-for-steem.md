
---
title: 'Update for beem (former steempy) - the new python library for steem'
permlink: update-for-beem-former-steempy-the-new-a-python-library-for-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-22 12:11:45
categories:
- utopian-io
tags:
- utopian-io
- python
- steem
- beem
- steem-python
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1519296395/t0fglzwe85sftpsgyj4k.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519296395/t0fglzwe85sftpsgyj4k.png)
</center>
steempy is a CLI tool from steem-python, in order to prevent confusion, I renamed my python library to _beem_. A beam maschine is a special steam engine which utilizes a metal beam. Therefore, beem is a good name for a python library for Steem.

beem is a python library for Steem and uses [python-graphenelib](https://github.com/xeroc/python-graphenelib) from @xeroc. python-graphenelib has a dependency to [pcrytodome](https://github.com/Legrandin/pycryptodome), which is incompatible to the old and un-maintained [pycryto](https://github.com/dlitz/pycrypto) which is used by [steem-python](https://github.com/steemit/steem-python). Therefore,
_pip install beem_ will break some functions of steem-python, as pycryto is replaced by pycrytodome.

beem is compatible to python 3.5 and upwards. At the moments, all unit tests passed for python 3.5 and 3.6 for linux, OSX and windows. As soon as python-graphenelib is compatible to python 2.7, I will add compatiblity for python 2.7.

### You cannot install beem and steem on the same maschine!
I commited a PR to python-steem: https://github.com/steemit/steem-python/pull/146 in order to fix this.

## New links for the project
* https://github.com/holgern/beem
* http://beem.readthedocs.io/en/latest/
* https://pypi.python.org/pypi/beem

## You can install beem on an Android mobile using Termux. You can learn [here](https://utopian.io/utopian-io/@faisalamin/how-to-setup-and-run-python-and-c-in-android-termux) how to setup termux.
```
pkg install clang openssl-dev python python-dev
pip install-U beem
```
<center>
![20180222_124405.jpg](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519300243/n2nqw3kglnajlssfk4iq.jpg)</center>
## New Features
* Coverage could improved to 73%!
* Improved Doku
* Missing features added
* More unit tests
* Library renamed to beem
### Added missing transaction objects and more unit tests
* https://github.com/holgern/beem/commit/761a3a607201bd7fa87ae76bebe9427e6f2a9cda
* ExchangeRate, Beneficiary, Beneficiaries, CommentOptionExtensions, Transfer_to_vesting, Withdraw_vesting, Account_witness_vote, Comment, Custom_json, Comment_options, Feed_publish, Convert, Set_withdraw_vesting_route, Limit_order_cancel, Delegate_vesting_shares, Limit_order_create, Transfer_from_savings, Cancel_transfer_from_savings, Claim_reward_balance, Transfer_to_savings added
* Unit tests added
### Added missing functions and objects
* https://github.com/holgern/beem/commit/47cf2b4ceeeef87532722d8197400ded7e59fc16
#### account:
 * reputation added
* history improved and fixed
#### block:
* ops and ops_statistics added
#### blockchain:
* function-names improved
* ops_statistics added
#### blockchainobject
* json export added
#### Comment class added
#### Discussion class added
#### steem:
* follow and account by key api added and fixed
#### storage:
* more nodes added
#### utils
* Helpfunctions added
####  vote
* blockchainobject
* refresh fixed
#### wallet
* purgeWallet added
#### Witness
* printAsTable function added
* WitnessesVotedByAccount added
* WitnessesRankedByVote added
* WitnessesByIds added
* LookupWitnesses added
#### Steemnoderpc
* register_apis fixed
#### test_wallet
* unit tests added
#### test_utils
* unittests added
## Rename library from steempy to beem
* https://github.com/holgern/beem/commit/f166f7fc857c0270f4a684d655a9386c65e49274

### Improve doc and upstream fixes from python-bitshares included
* https://github.com/holgern/beem/commit/6637f5ca7d0adef333706479c67ceacdec7465e9

___
Did you try my new library yet? Please give me feedback!


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/update-for-beem-former-steempy-the-new-a-python-library-for-steem">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Update for beem (former steempy) - the new python library for steem'](https://steemit.com/@holger80/update-for-beem-former-steempy-the-new-a-python-library-for-steem)
