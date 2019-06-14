
---
title: 'update for beem: account history and testnet operation improved'
permlink: update-for-beem-account-history-and-testnet-operation-improved
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-13 13:17:42
categories:
- utopian-io
tags:
- utopian-io
- python
- beem
- appbase
- steemdev
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1520946624/onjvl8gedqr3dpoyrec1.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[beem](https://github.com/holgern/beem) is a python library for steem. It supports HTTP and Websocket connections and is ready to use with AppBase-API calls. The current version of beem is 0.19.16. beem has 287 unit tests with a coverage of 67% - 76% (depends on how it is calculated). beem can be installed by:
```
pip install beem
```
or
```
conda install beem
```
and updated by
```
pip install -U beem
```
or
```
conda update beem
```


# Statistics
conda-forge download statistic:
<center>
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520946624/onjvl8gedqr3dpoyrec1.png)
</center>
Visitors per day on github (blue line are unique visitors):
<center>![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520946450/ejuxhedslqfmsp4npnkr.png)
</center>

<center>![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520946853/oid4dolcqpztqd7e5jij.png)
</center>

# Use the testnet-server to test broadcast commands
beem can now be used to broadcast comands with the testnet-server `wss://testnet.steem.vc`.

At first, a new user has to be created by:
```
curl --data "username=foo&password=barman" https://testnet.steem.vc/create
```
You can use this password, to create the different keys by (`username` and `password` are from the curl command):
```
from beemgraphenebase.account import PasswordKey, PrivateKey, PublicKey
from beem.steem import Steem
from beem.account import Account
username = "" # enter username
password = "" # enter password
stm = Steem(node=["wss://testnet.steem.vc"])
prefix = stm.prefix # Should be STX
active_key = PasswordKey(username, password, role="active", prefix=prefix)
owner_key = PasswordKey(username, password, role="owner", prefix=prefix)
posting_key = PasswordKey(username, password, role="posting", prefix=prefix)
memo_key = PasswordKey(username, password, role="memo", prefix=prefix)
 
active_privkey = active_key.get_private_key()
posting_privkey = posting_key.get_private_key()
owner_privkey = owner_key.get_private_key()
memo_privkey = memo_key.get_private_key()
```
You can then add these keys to the wallet (Replace `123` with a secret passphrase): 
```
stm.wallet.wipe(True)
stm.wallet.create("123")
stm.wallet.unlock("123")
stm.wallet.addPrivateKey(active_privkey)
stm.wallet.addPrivateKey(owner_privkey)
stm.wallet.addPrivateKey(posting_privkey)
stm.wallet.addPrivateKey(memo_privkey)
```
or by entering the Keys directly:
``` 
stm = Steem(node=["wss://testnet.steem.vc"], wif={'active': str(active_privkey),  'posting': str(posting_privkey),  'memo': str(memo_privkey)})
```
You are now ready to test beem:
```
account = Account(username, steem_instance=stm)
account.transfer("test1", 1, "STEEM", "test")
```
You can also build the broadcast call by hand:
```
from beem.transactionbuilder import TransactionBuilder
from beembase.operations import Transfer
tx = TransactionBuilder(steem_instance=stm)
tx.appendOps(Transfer(**{
                    "from": account["name"],
                    "to": "test1",
                    "amount": "1 STEEM",
                    "memo": "test"}))
tx.appendSigner(account, "active")
tx.sign()
tx.broadcast()
```
# Account history
The account history commands were completely rewritten.
There are three commands now as in python-steem:
* get_account_history, history, history_reverse

## `get_account_history`
```
get_account_history(self, index, limit, start=None, stop=None, order=-1, only_ops=[], exclude_ops=[], raw_output=False)
```
`index` and `limit` are related to `virtual_op_count`. All account related transaction are yielded starting from `index >= limit` and stop at `index-limit`. If order is 1, the oldest entry is the first output, otherwise for order=-1 the newest entry is given out first. The output is stopped when `limit` entry are submitted. Addionally, `start` and `stop` can be set to a certain date and entry before start and after stop are skipped.

`only_ops` can be used to limit the op, e.g. `only_ops=["transfer]`. `exclude_ops` works the same way, but listed operation are excluded.

If raw_output is False, the output is identical to python-steem, when using raw_output=False.

## `history` and `history_reverse`
```
def history_reverse / history
(
        self, start=None, stop=None,
        only_ops=[], exclude_ops=[], batch_size=1000, raw_output=False
    )
```
Both function are similar to `get_account_history`, but can be used to get all entries. When an account has 5000 ops, and `batch_size` is 1000,  `get_account_history`is called internally five times.
`start` and `stop` can be int numbers or `datetime` dates.

Lets calculate the curation reward from the last 7 days:
```
from datetime import datetime, timedelta
from beem.account import Account
from beem.amount import Amount

acc = Account("holger80")
stop =datetime.utcnow() - timedelta(days=7)
reward_vests = Amount("0 VESTS")
for reward in acc.history_reverse(stop=stop, only_ops=["curation_reward"]):
            reward_vests += Amount(reward['reward'])
reward = acc.steem.vests_to_sp(reward_vests.amount)
```
The result is slightly different from `curation_stats()` from python-steem, but I'm convinced that only the output of beem is correct.

# Changes
## Parallel processing improved
* https://github.com/holgern/beem/commit/f565c1a157f9d67906532a590c80d02f5a7db73f
## Refactoring and Handling of other prefix (e.g. testnet) improved 
* https://github.com/holgern/beem/commit/b91bb17e28ff9806694bddcb5d50061c3f109412
### Transactionbuild
* Automatic Signing with owner key removed
## Beembase
* Beembase/account and beembase/bip38 removed as they are using beemgraphenebase/bip38 and beemgraphenebase/account
## Examples
* benchmark_nodes.py and op_on_testnet.py added

## test_testnet.py improved
* https://github.com/holgern/beem/commit/9717b121292b54cea51ec342b41f243dc43e5934

## Prepare next release
* https://github.com/holgern/beem/commit/fe6eac3a86c299c14a4e7847e940a0b9211f129a

## Add new example waitForRecharge.py
* https://github.com/holgern/beem/commit/879b2844741de8b076072ef1d5e6c3de7d426a5b

##  Next release 0.19.16
* https://github.com/holgern/beem/commit/cf1091f3637ba01ede2263d1533a47184e5375cd
### Account
* get_withdraw_routes added
* get_account_votes fixed for appbase
* get_vote, has_voted added
* virtual_op_count, get_curation_reward curation_stats added
* get_account_history and history_reverse added
* history improved
### Blockchain
* hash_op added
### CLI
* default vote weight added
* upvote added
* Info improved
### Steem
* get_block_interval added
### Transactionbuilder
* txbuffer.clear() added on exception
### Vote
* AccountVotes fixed
### GrapheneRPC
* Websocket disconnect exception handling improved
### Examples
* Compare_With_steem_python_account.py added
### Unittest
* tests for account improved

## Add more unit tests for account history
* https://github.com/holgern/beem/commit/a3b469e2128b5233a91b82f2e00788f0c7974721

## Several improvements
 https://github.com/holgern/beem/commit/580e3f1fa0ab96475fe32ae04edd1ba3c39f9f6d
* Wallet wipe improved
* wallet purge and purgeWallet renamed to wipe
* internal node error and Unable to acquire database lock handled
* login to websocket only if username and password is provided

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/update-for-beem-account-history-and-testnet-operation-improved">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['update for beem: account history and testnet operation improved'](https://steemit.com/@holger80/update-for-beem-account-history-and-testnet-operation-improved)
