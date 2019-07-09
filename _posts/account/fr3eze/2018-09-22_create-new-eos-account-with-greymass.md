
---
title: 'Create new EOS account with Greymass'
permlink: create-new-eos-account-with-greymass
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-22 14:53:39
categories:
- crypto
tags:
- crypto
- eos
- technology
- teammalaysia
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmZiDihYMWpX2zRhmxsh6d9Ag5o6pB1oGnP27E3beqKWgs'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


### Difference in keys and permissions

Although both Steem and EOS using the same DPOS mechanism and Graphene framework, running same segregated permission via multiples key like owner and active keys, both system are not really the same. Basically Steem has 4 keys starting from owner, active, posting, and memo, while EOS mainly comes with owner and active keys originally, while allowing user to customize permission with new keys.

Owner key in both system acting as the master key which having the highest level of permission and capable of signing every operation within the network. For example, active key can only signing operation that is currency-related such as sending fund or delegation to another account, but cannot approve administrative operation like recover lost account, and reset all private keys like owner key.

The main difference is, **a Steem account can only have one definite master key which is the owner key**, changing the owner key will reset all the private keys for active, posting, and memo at the same time. **EOS has independent private key for each owner and active key**, reset one doesn't affect the other one.

### Create new EOS account

Download the latest [Greymass wallet](https://github.com/greymass/eos-voter/releases). `Tools -> Key Generator -> Generate Key`. 

![eos-voter_2018-09-22_22-30-45.png](https://ipfs.busy.org/ipfs/QmZiDihYMWpX2zRhmxsh6d9Ag5o6pB1oGnP27E3beqKWgs)

A new key pair should be generated immediately and you should back it up to multiple copies in some other safe places. Click any tabs in the wallet and the keypair would be gone and there is no way you could recover it back, as the wallet does not save these keypairs within the application.

Generate 2 keypairs as we would use them for owner key and active key registration in the account creation later. You could use the same key pair for both keys but generally it is a better idea to use a different key pair for better security. Exposing the active private key will not risking the owner key integrity so there are still chances for you to recover the whole account.

![eos-voter_2018-09-22_22-38-40.png](https://ipfs.busy.org/ipfs/QmVuDc8ppR1MTa1V3tiS9rQqzG3sHZoQjo1gt9vc1bA156)

Secondly, go to the `Create Account` in the left panel. Input public keys from the 2 generated keypairs into owner and active key column. Assign a **12-characters account name**(has to be a unique one) and **4000 bytes for the RAM amount** depending on minimum requirement. 4KB of RAM should suffice at the moment, I heard the devs saying that would be reduced in the future.

Delegate some bandwidth and CPU in term of EOS. I would just put 10 for each, in this case, to make sure I can operate freely with the new account.

Press `Create Account` and this operation would be broadcast to the EOS network and it might take a while to be confirmed. After it the transaction is irreversible, simply import the new account in the same Greymass wallet by `Manage Wallets` function on the left panel, and `Import Accounts`.

Private keys will be needed for account importing and you can choose to only import only active or owner key which is quite a cool feature in EOS. Active and Owner key is very separated compared to the Steem system.




- - -

This page is synchronized from the post: ['Create new EOS account with Greymass'](https://steemit.com/@fr3eze/create-new-eos-account-with-greymass)
