
---
title: 'python-steem 1.0.1 released'
permlink: python-steem-1-0-1-released
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-22 06:40:33
categories:
- python
tags:
- python
- steemdev
- conda
- steem-python
- release
thumbnail: 'https://ipfs.busy.org/ipfs/QmUuGmuxPyAKFVeLJKorY3ruwZARsbACNR9uPVKV32MonC'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A new version 1.0.1 of python-steem was released today to [pypi](https://pypi.org/project/steem/#files).
I updated also the [steem-feedstock](https://github.com/conda-forge/steem-feedstock).
You can update to the newest version of python-steem by:
When using anaconda:
```
conda update steem
```
or when not using anaconda:
``` 
pip install -U steem
```
## Downloads of the last version 1.0.0 for steem-feedstock
![image.png](https://ipfs.busy.org/ipfs/QmUuGmuxPyAKFVeLJKorY3ruwZARsbACNR9uPVKV32MonC)
## Changelog python-steem 1.0.1
Since there is no official changelog provided, I will provide an inofficial one:
* change_account_recovery operation added
* Refactored MasterPassword ([PR](https://github.com/steemit/steem-python/pull/232/))
```
WrongMasterPasswordException - renamed WrongKEKException
MasterPassword - renamed KeyEncryptionKey

Wallet.unlock - pwd in signature changed to user_passphrase
Wallet.getPassword - changed to Wallet.getUserPassphrase
Wallet.changePassword - changed to Wallet.changeUserPassphrase

Storage.saveEncryptedMaster - changed to Storage.saveEncryptedKEK
Storage.getEncryptedMaster - changed to Storage.getEncryptedKEK
Storage.decryptEncryptedMaster - changed to Storage.decryptEncryptedKEK
Storage.newMaster - changed to Storage.newKEK
Storage.changePassword - changed to Storage.changePassphrase
```
* ignore verify_authority failure for specific steem bug ([PR](https://github.com/steemit/steem-python/pull/213))
* assume appbase, downgrade on error ([PR](https://github.com/steemit/steem-python/pull/202))
* Added JSONDecodeError to list of retriable errors([PR](https://github.com/steemit/steem-python/pull/225))
* several bug fixes

- - -

This page is synchronized from the post: ['python-steem 1.0.1 released'](https://steemit.com/@holger80/python-steem-1-0-1-released)
