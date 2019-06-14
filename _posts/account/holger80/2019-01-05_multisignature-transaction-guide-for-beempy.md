
---
title: 'Multisignature Transaction Guide for beempy'
permlink: multisignature-transaction-guide-for-beempy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-05 00:04:09
categories:
- steem
tags:
- steem
- steemdev
- multisignature
- beem
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmXK6zSnkQZfWRxsRrotuB7iD4YK65xc7xJSgewqnMQpa4'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This guide will describe how to broadcast a multisignature transactions to the steem blockchain using beempy. It is my  submission to  this [bounty](https://steemit.com/steem/@timcliff/steem-developer-bounty-1500-steem-multisignature-transaction-guide-details-inside).

beempy is the command line tool provided by the python library [beem](https://github.com/holgern/beem). It is installed when the beem library is installed.

## Installation
There are three different ways to install beem/beempy:
### Install beem through pip / pip3
Assuming that python and pip is already installed, beem can be installed by
```
pip install beem
```
This does not work on windows.
### Install beem through conda
When anaconda is used, beempy can be installed by
```
conda install beem
```
This works also on windows
### Unzip beempy provided by pyinstaller for windows
Download the newest beempy zip file from the [release](https://github.com/holgern/beem/releases) site and unpack it.

A more detailed installation guide can be found in the [readme file](https://github.com/holgern/beem/blob/master/README.rst).

This guide is only valid for beempy version 0.20.16 or higher. The version can be checked by:
```
beempy --version
```
The guide will not work for versions below 0.20.16!
## Setting up multisignature authority for the active authority - Part 1
In order to change the active authority permissions, the active key of the account that should be changed, must be stored in the key wallet.
It can be checked if there is already a wallet by:
```
 beempy  walletinfo
```
When there is no, it can be created by:
```
beempy createwallet
```
Now we can add the active key:
```
beempy addkey
```
There will be two prompts, the first will ask for the wallet master password and the second will ask for the active key.

At first we should  check if the account which should be set up, already has more than one permission.
```
beempy permissions <account_name>
```
If there is more than one Key listed and all accounts that were given active authority  permission should be removed, it can be done by:
```
beempy disallow --permission active -a <account_name> <account_with_active_permission>
```

Now, active permissions can be granted to other accounts by using the  `allow` command. Lets assume we want to allow N accounts / keys  for active permission.
when adding the first N-1 accounts/keys we must not define the treshold T:
```
beempy allow --permission active -a <account_name> --weight W_1 <pubkey_or_accountname_1>
beempy allow --permission active -a <account_name> --weight W_2 <pubkey_or_accountname_2>
...
beempy allow --permission active -a <account_name> --weight W_n-1 <pubkey_or_accountname_n-1>
```
Now we can set the threshold `T` for the last account/key:
```
beempy allow --permission active -a <account_name> --weight W_n --threshold T <pubkey_or_accountname_n>
```
### Posting authority
When permissions to the posting authority should be changed, 
```
--permission active
```
must be replaced by
```
--permission posting
```
### Example
We want to setup the active authority with  7 keys:
 >  A user wants to have their active authority setup with seven keys. Keys one and two each have a weight of 25%. Keys three, four, five, six, and seven each have a weight of 10%. In order for a transaction to be valid, it must have at least 40% weighted signatures.

```
beempy allow --permission active -a testholger --weight 25 STM6bVMCVr4FcLmbcckEgaHcHmcfytzoanTW1FrnTQ6rL5NWuBeGA  

beempy allow --permission active -a testholger --weight 25 STM8RsufKpLfEeirs6WYDJm93UT1U5ntQqkSZrumWhv9Tw8B1NWTx

beempy allow --permission active -a testholger --weight 10 STM58dtFYRZviGgbm4nhnELczhGDK78R3Vi7M1VCdkNS2vZG8pkbJ 

beempy allow --permission active -a testholger --weight 10 STM8A2zgE2wouhMfd6ycAvpboB6m2PKwa31pih49yZTsbD5jGMT3t 

beempy allow --permission active -a testholger --weight 10 STM5qoHyJrKCsW4FFhrrbWPuS52N2FUjQTFiHJVHfuBykEVvENrvS 

beempy allow --permission active -a testholger --weight 10 STM8LaqooL399EZXUacyBVFCXJiGRnQsyw6YYGEN7UqQksdH5oAta  

beempy allow --permission active -a testholger --weight 10 --threshold 40 STM8Y8aYJC7EbFRZ34imY2sJ7b78WprTMWiQAp4hbYcg2JCr4EcT9  
```

Let's check if everything has worked out:
```
 beempy permissions testholger
+------------+-----------+------------------------------------------------------------+

| Permission | Threshold |                                                Key/Account |
+------------+-----------+------------------------------------------------------------+

|      owner |         1 |  STM8k9awBgjduUdkoTyP1DFSLYNrtqgnCeeETFFWHeox4BKybT71n (1) |
|     active |        40 | STM58dtFYRZviGgbm4nhnELczhGDK78R3Vi7M1VCdkNS2vZG8pkbJ (10) |
|            |           | STM5qoHyJrKCsW4FFhrrbWPuS52N2FUjQTFiHJVHfuBykEVvENrvS (10) |
|            |           | STM6bVMCVr4FcLmbcckEgaHcHmcfytzoanTW1FrnTQ6rL5NWuBeGA (25) |
|            |           | STM8A2zgE2wouhMfd6ycAvpboB6m2PKwa31pih49yZTsbD5jGMT3t (10) |
|            |           | STM8LaqooL399EZXUacyBVFCXJiGRnQsyw6YYGEN7UqQksdH5oAta (10) |
|            |           | STM8RsufKpLfEeirs6WYDJm93UT1U5ntQqkSZrumWhv9Tw8B1NWTx (25) |
|            |           | STM8Y8aYJC7EbFRZ34imY2sJ7b78WprTMWiQAp4hbYcg2JCr4EcT9 (10) |
|            |           |  STM8YQFkpJrj74SdR8JWRv12DHVRn3eKoAaEcwrj1QmLGArZY39o8 (1) |
|    posting |         1 |  STM52tq9RWwdYJ3gzxz2fzhcg9HCBfouqcHBYVU439tLdk73Ed7SM (1) |
+------------+-----------+------------------------------------------------------------+
```

## Setting up multisignature authority for the active authority - Part 2
When an account has more than one key assigned to the active permission, broadcasting is successfully when at least the weight sum of all signed keys is at least the threshold T.

At first we need to create a unsigned transaction.  We can do this with beempy by:
```
beempy -xd -e 3600 <command> <options> > unsigned_transaction.json
```
The parameter x and d prevent that the transaction is signed and broadcasted. `-e 3600` increases the expiration time to the maximum time of 1 hour. This means that all participants have 1 hour to sign and finally to broadcast.


We need the key that should sign in the wallet:
```
beempy addkey
```
Signing can than be done by
```
beempy sign --file unsigned_transaction.json -o signed_1_transaction.json
```
The next signer with has the next key in its wallet can  sign with:
```
beempy sign --file signed_1_transaction.json -o signed_2_transaction.json
```
This is repeated until the weight sum of signer exceed the threshold.

Broadcasting can then be done by:
```
beempy broadcast --file signed_2_transaction.json
```

### Example
Let's continue our example and transfer some STEEM:
> One of the key holders of the account wants to transfer 5.0 STEEM tokens to another user. The transaction should be signed with keys one, four, and five (which would exceed the 40% threshold).

We need to create the unsigned transaction first:
```
 beempy -xd -e 3600 transfer -a testholger holger80 5.000 STEEM > unsigned_transaction.json
```
Then the first signer will sign. The first key must be stored in the wallet
```
beempy addkey
```
and we can sign:
```
beempy sign --file unsigned_transaction.json -o signed_1_transaction.json
```
Now we delete the key with:
```
beempy delkey STM6bVMCVr4FcLmbcckEgaHcHmcfytzoanTW1FrnTQ6rL5NWuBeGA  
```

Now the forth key should sign and we add this key to the wallet
```
beempy addkey
```
and we can sign:
```
beempy sign --file signed_1_transaction.json -o signed_2_transaction.json
```
Now we delete the key with:
```
beempy delkey STM8A2zgE2wouhMfd6ycAvpboB6m2PKwa31pih49yZTsbD5jGMT3t 
```

Now the fifth key will sign. We will add it first:
```
beempy addkey
```
and we can sign:
```
beempy sign --file signed_2_transaction.json -o signed_3_transaction.json
```

We have enough signer and we can now broadcast the transaction by:
```
beempy broadcast --file signed_3_transaction.json
```

Let's see if it has worked:

![image.png](https://ipfs.busy.org/ipfs/QmXK6zSnkQZfWRxsRrotuB7iD4YK65xc7xJSgewqnMQpa4)
There are the three signatures, so everything worked out!

- - -

This page is synchronized from the post: ['Multisignature Transaction Guide for beempy'](https://steemit.com/@holger80/multisignature-transaction-guide-for-beempy)
