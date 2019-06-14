
---
title: 'Update for beem - a steem python lib - CLI and conda-forge added'
permlink: update-for-beem-a-steem-python-lib-cli-and-conda-forge-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-02 13:53:36
categories:
- utopian-io
tags:
- utopian-io
- python
- beem
- steem-python
- library
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1519996701/owixqfttfd2vrz0bainp.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


beem has now a first and simple version for a CLI script, called ` beempy`. I pushed beem to conda-forge. The coverage could be increased to 79.4%. The current version is 0.19.9.

You can find the github here: https://github.com/holgern/beem.
### Conda-forge
beem has now its own feedstock: https://github.com/conda-forge/beem-feedstock. I successfully pushed a [pull request]( https://github.com/conda-forge/staged-recipes/pull/5281).
It can now be installed by `conda install beem` on every miniconda/anaconda environment. You only need to enable the conda-forge channel first:
```
conda config --add channels conda-forge
```
### CLI
I started to work on a cli tool for beem. I'm using [click](http://click.pocoo.org/6/). I will try to add all commands which are available withing steempy from steem-python.
<center>![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519996701/owixqfttfd2vrz0bainp.png)
</center>

### Unit tests
I worked also on the unit tests. At the moment, 178 unit tests are available.

## Changes
* https://github.com/holgern/beem/commit/3c4d42a46e681688aa9e5746b84f53c906450355
### Python2/3 Compatibilty
* to_bytes() is reverted back to `__bytes__`
* py23_bytes added
* isinstance for strings and integer corrected
* super() made compatible with python 2

### Account
* allow and disallow moved from the steem to the account class
* small improvements

### Comment
* get_votes added
### Steem
* Doku improved
### Vote
* bug fixes
* printAsTable added
### Wallet
* getPostingKeyForAccount added
### Unit tests
* test_vote added
* test_testnet added
* test_py23 added

### Fix unit tests for python 3
* https://github.com/holgern/beem/commit/fde33e6fc63af0b8d0d5331c067652d15bbdbdcc

### CLI added
* https://github.com/holgern/beem/commit/d1c216f0e8951c5cb8481db9f500cf2b4b37e0ca
* CLI added with following commands:
* balance
* info
* Unit tests for CLI added

## CLI and Account improved
* https://github.com/holgern/beem/commit/d3291ec480590dcadf5af230eac542bd5abc9101
### Account:
* sp vp properties added
* print_info improved
* reputation -> get_reputation
* voting_power -> get_voting_power
* steem_power -> get_steem_power
* precision option removed
* balance -> get_balance
### CLI
* set, config createwallet, walletinfo, addkey, listkeys, listaccounts and changewalletpasswordphrase added
### Steem
* create_account_with_delegate added
### Unittests
Unit tests fixed and added

### Fix Memo in Transfer
* https://github.com/holgern/beem/commit/87baf3f962d87a0edee22967d63d080c1d835d4b
*  Unit tests fixed for STEEM-style encrypted memos
* Memo encryption and decryption fixed

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/update-for-beem-a-steem-python-lib-cli-and-conda-forge-added">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Update for beem - a steem python lib - CLI and conda-forge added'](https://steemit.com/@holger80/update-for-beem-a-steem-python-lib-cli-and-conda-forge-added)
