
---
title: 'How to use the steem.vc testnet with beem'
permlink: how-to-use-the-steem-vc-testnet-with-beem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-01 08:44:06
categories:
- beem
tags:
- beem
- testnet
- steemdev
- python
- busy
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The https://testnet.steem.vc/ testnet has the advantage that new accounts can be created by:
```
curl --data "username=foo&password=barman" https://testnet.steem.vc/create
```
# Install [beem](https://github.com/holgern/beem/)
```
pip install beem -U
```
or 
```
conda install beem
```

# Setup the testnet with beem and start testing

```
from beem.account import Account
from beemgraphenebase.account import PasswordKey, PrivateKey, PublicKey
from beem.steem import Steem

password = "barman"
username = "foo"
useWallet = False
walletpassword = "123"

if __name__ == "__main__":
    testnet_node = "https://testnet.steem.vc"
    stm = Steem(node=testnet_node)
    prefix = stm.prefix
    if useWallet:
        stm.wallet.unlock(walletpassword)
    active_key = PasswordKey(username, password, role="active", prefix=prefix)
    owner_key = PasswordKey(username, password, role="owner", prefix=prefix)
    posting_key = PasswordKey(username, password, role="posting", prefix=prefix)
    memo_key = PasswordKey(username, password, role="memo", prefix=prefix)

    active_privkey = active_key.get_private_key()
    posting_privkey = posting_key.get_private_key()
    owner_privkey = owner_key.get_private_key()
    memo_privkey = memo_key.get_private_key()
    if useWallet:
        stm.wallet.addPrivateKey(owner_privkey)
        stm.wallet.addPrivateKey(active_privkey)
        stm.wallet.addPrivateKey(memo_privkey)
        stm.wallet.addPrivateKey(posting_privkey)
    else:
        stm = Steem(node=testnet_node,
                    wif={'active': str(active_privkey),
                         'posting': str(posting_privkey),
                         'memo': str(memo_privkey)})
    account = Account(username, steem_instance=stm)
    account.transfer("null", 1, "SBD", "test")
```
At first, you have to enter the correct values for your newly created account:
```
password = "barman"
username = "foo"
useWallet = False
walletpassword = "123"
```

I performed these steps with `username = "beem"`.
Direct after account creation, the transaction failed with:
```
beemapi.exceptions.UnhandledRPCError: plugin exception:Account: beem needs 811351 RC. Please wait to transact, or power up STEEM.rethrow
```
The account has sufficient SP:
```
account.print_info()
beem (25.00) 
--- Voting Power ---
100.00 %,  VP = 0.00 $
full in 0:00:00 
--- Balance ---
420000.04 SP, 420000.000 STEEM, 420000.000 SBD
```
It can be seen that the RC plugin is disabled in the testnet. It is not possible to see the RCs of an account.

After waiting some minutes, I repeated the transfer:
```
account.transfer("null", 1, "SBD", "test")
{'expiration': '2018-10-01T08:37:24',
 'extensions': [],
 'operations': [['transfer',
                 {'amount': '1.000 SBD',
                  'from': 'beem',
                  'memo': 'test',
                  'to': 'null'}]],
 'ref_block_num': 32897,
 'ref_block_prefix': 413494785,
 'signatures': ['1f21b7382080f5f0ffc90b58545e4ca7ff12ade9be19d0823aae0d32ae0682f2ec52b14dbcb32af31e68b9344595a2b4d176b71d3a050f500728f154ddcea75a87']}
```
and it worked.

____
Happy testing with beem!


- - -

This page is synchronized from the post: ['How to use the steem.vc testnet with beem'](https://steemit.com/@holger80/how-to-use-the-steem-vc-testnet-with-beem)
