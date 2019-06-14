
---
title: 'Update for beem - steemconnect integration and bug fixes'
permlink: update-for-beem-steemconnect-integration-and-bug-fixes
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-29 21:05:09
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

<center>![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 481 unit tests and a coverage of 78 %. The current version is 0.19.33.

I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V

### Bug Fixes for  Race condition in blockchain.blocks() when using threads
- The bug was described in detail [here](https://steemit.com/utopian-io/@stmdev/beem-race-condition-in-blockchain-blocks-when-using-threads).
- Fix in [commit 7c8b53](https://github.com/holgern/beem/commit/7c8b53512ceedab73bb6388fb1fb02f3dd4ae557)
- The problem was the `auto_clean` function for the cache.
- When using threads, `auto_clean` is now disabled with `set_cache_auto_clean(False)` and the cache is manually cleaned with `clear_cache_from_expired_items()` when all threads are finished.
When `blocks()` finishes, `set_cache_auto_clean(auto_clean)` is set to the old value.

### SteemConnect integration
Inspired by [steemconnect-python-client](https://github.com/emre/steemconnect-python-client) by @emrebeyler, [SteemConnect](https://steemconnect.com/) is now integrated into beem. 

I created @beem.app inside steemconnect for testing (https://v2.steemconnect.com/apps/).
![image.png](https://ipfs.busy.org/ipfs/Qma9bHMWSphcGfueFyQSWp3j7NdqXuKnFVKdBGaFWu9FQ4)


The following steps were done to integrate steemconnect properly:
1. A new Token class was added to beem/storage
2. The following function were added to beem/wallet:
   * setToken
   * clear_local_token
   * encrypt_token
   * decrypt_token
   * addToken
   * getTokenForAccountName
   *  removeTokenFromPublicName
   * getPublicNames
3. a SteemConnect class was created (based on client.py from steemconnect-python-client)
4. Integration into TransactionBuilder and Steem

You see a diff between both functions here (On the left side is  client.py shown and on the right side steemconnect.py from beem). White ares indicate that both files are identically.

![image.png](https://ipfs.busy.org/ipfs/QmeoUnvKXyJp8GJ714uHA3D5yT656FgQdiuTNrqDnQhcw1)


### Usage
beem.steemconnect can be used to create steemconnect links for broadcasting transactions.
In the first example, `nobroadcast=True` and  `unsigned=True` is used to disable signing and broadcasting. When then a broadcasting operation is called, the unsigned transaction is returned and entered into `url_from_tx`. This function from `SteemConnect` returns then a steemconnect v2 link which can be entered into the browser.
```
from beem import Steem
from beem.account import Account
from beem.steemconnect import SteemConnect
from pprint import pprint
steem = Steem(nobroadcast=True, unsigned=True)
sc2 = SteemConnect(steem_instance=steem)
acc = Account("test", steem_instance=steem)
pprint(sc2.url_from_tx(acc.transfer("test1", 1, "STEEM", "test")))
```
results in:
```
'https://v2.steemconnect.com/sign/transfer?from=test&to=test1&amount=1.000+STEEM&memo=test'

```
It is also possible to create a operation by hand:

```
from beem import Steem
from beem.transactionbuilder import TransactionBuilder
from beembase import operations
from beem.steemconnect import SteemConnect
from pprint import pprint
stm = Steem()
sc2 = SteemConnect(steem_instance=stm)
tx = TransactionBuilder(steem_instance=stm)
op = operations.Transfer(**{"from": 'test',
                            "to": 'test1',
                            "amount": '1.000 STEEM',
                            "memo": 'test'})
tx.appendOps(op)
pprint(sc2.url_from_tx(tx.json()))
```
results in:
```
'https://v2.steemconnect.com/sign/transfer?from=test&to=test1&amount=1.000+STEEM&memo=test'
```
#### Creating SteemConnect links with beempy
By adding `-l` as option, all available broadcast operation can be converted into a link:
```
beempy -l  claimreward holger80
```
results in
```
"https://v2.steemconnect.com/sign/claim_reward_balance?account=holger80&reward_steem=0.048+STEEM&reward_sbd=3.842+SBD&reward_vests=5093.882902+VESTS"
```
#### Fetching a steemconnect app token
In examples/login_app, an example app.py can be found. This example was adapted from steemconnect-python-client. Set the `client_id`, the `scope` and unlocking the wallet by entering the correct passphrase.
![image.png](https://ipfs.busy.org/ipfs/Qmf5cjvRwTFdKZekoypXunBWC2abRdSwjk5msZVznkZ5Vq)
The flask app can be started by
```
flask run
```
Enter `http://127.0.0.1:5000/` in a browser and click on the link.
After entering a username and password, the generated token is stored in the wallet.

#### Using the app token for broadcasting via SteemConnect
```
from beem import Steem
from beem.steemconnect import SteemConnect
from beem.comment import Comment
sc2 = SteemConnect(client_id="beem.app")
steem = Steem(steemconnect=sc2)
steem.wallet.unlock("supersecret-passphrase")
post = Comment("author/permlink", steem_instance=steem)
post.upvote(voter="test")  # replace "test" with your account
```

#### Using the app token for broadcasting via SteemConnect in beempy
By adding `-s` as option, all broadcast operation as upvote are broadcast via Steemconnect
```
beempy -s  upvote -a test -w 100 @author/permlink
```
#### beempy listtoken
This command can be used to show all stored token:
![image.png](https://ipfs.busy.org/ipfs/QmQ5TtB8UBsqypTxHjkg5dTdUo1LpATx5ku2mDTfwXeWLx)


### Commit history
#### Include steemconnect v2 to beem
* [commit b95afdf](https://github.com/holgern/beem/commit/b95afdfdfac96d02e2c2448fa1951bf63a16a7a0)
##### steem
* add steemconnect in init, when set, steemconnect is used for broadasting
##### steemconnect
* new class can be used to broadcast operation with steemconnect v2
##### storage
* Token class to store encrypted token
##### Transactionbuilder
* use steemconnect broadcast with set in steem
##### Wallet
* add token storage class
* add setToken, clear_local_token, encrypt_token, decrypt_token, addToken, getTokenForAccountName, removeTokenFromPublicName, getPublicNames
##### Example
* Add login app for testing steemconnect

#### Fix issue [#16](https://github.com/holgern/beem/issues/16)
* [commit 7c8b53](https://github.com/holgern/beem/commit/7c8b53512ceedab73bb6388fb1fb02f3dd4ae557)

#### Several improvements and fixes 
* [commit 97711e5](https://github.com/holgern/beem/commit/97711e5e7fe9bda99bacf789374ed3dcc13ea493)
##### Account
* Example added for transfer
##### Nodelist
* Doc added
##### Steem
* steemconnect integration improved and use_sc2 added
* Docu improved
##### SteemConnect
* compatible with py2.7
* several improvements
* Examles added
##### Transactionbuilder
* Integration of steemconnect improved
Wallet
* fix bug
##### SteemNodeRPC
* fix old and removed parameter n_urls
##### Doc
* Fix bug in tutorial page

#### Creating links for signing with SC2
* [commit 249bdb4](https://github.com/holgern/beem/commit/249bdb40473b0c9f4986994cb49634fe725b56b6)
* url_from_tx function added, which can be used to create url for signing with steemconnect v2
* Authomatic url creation removed

#### Add option to create url from all broadcast operation to beempy
* [commit 8b949d](https://github.com/holgern/beem/commit/8b949dfe03e2b632c90b62a56db4c5a303d65ed9)
##### CLI
* Add -l option to beempy
* Add -s option for broadcast via steemconnect
* addtoken, listtoken and deltoken added
* Add doc - files for nodelist, steemconnect and node
##### Storage
* sc2_scope removed from config
* hot_sign_redirect_uri added to config

#### Some improvements for steemconnect
* [commit e21be76](https://github.com/holgern/beem/commit/e21be76f14e6b413825e91ec836efd236b92b59e)
* Converts amounts from list to string (appbase)
* Unit test for steemconnect added
##### Transactionbuilder
* Remove log line

#### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['Update for beem - steemconnect integration and bug fixes'](https://steemit.com/@holger80/update-for-beem-steemconnect-integration-and-bug-fixes)
