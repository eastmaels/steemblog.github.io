
---
title: 'Bug: steem-verifier crashes on certain transaction ids'
permlink: bug-steem-verifier-crashes-on-certain-transaction-ids
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-07 10:08:27
categories:
- utopian-io
tags:
- utopian-io
- bug-hunting
- steem
- blockchain
- busy
thumbnail: 'https://gateway.ipfs.io/ipfs/QmR55g2HWLYQJFXko46exShA9rNuRZ1jEtkrbZjJ5grX7P'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Project Information
* Repository: https://github.com/hernandev/steem-verifier
* Project Name: steem-verifier

#### Expected behavior
When giving a valid transaction id, steem-verifier should show the public key of the signer and the user name of the signer.

#### Actual behavior`
Install steem-verifier with
```
pip install steem-verifier
```
and enter the following into the terminal:
```
steem-verifier d6457b3ad20583b3434f3a06c2c648b3a770c341
```
Now steem-verifier crashes with:
```
ecdsa.numbertheory.SquareRootError: 76198183007165409965398859979003670973818984091490751645956120696063919941083 has no square root modulo 115792089237316195423570985008687907853269984665640564039457584007908834671663
```
#### How to reproduce
Here is the proof that `d6457b3ad20583b3434f3a06c2c648b3a770c341` is a valid trx
(using https://steemd.com/tx/d6457b3ad20583b3434f3a06c2c648b3a770c341):
![image.png](https://gateway.ipfs.io/ipfs/QmR55g2HWLYQJFXko46exShA9rNuRZ1jEtkrbZjJ5grX7P)


* Browser/App version: Python 3.6.4, steempy 1.0.0
* Operating system: Linux brooks.uberspace.de 3.10.0-693.11.6.el7.x86_64 #1 SMP Thu Jan 4 01:06:37 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux


#### Recording Of The Bug
![07-05-_2018_11-59-32.gif](https://gateway.ipfs.io/ipfs/Qmbv1V6DxEzuBVYKrhGGZ2rBVPq6ENPWemJWyUWKw755vA)
Traceback:
```
Traceback (most recent call last):
  File "/home/holger80/.local/bin/steem-verifier", line 11, in <module>
    sys.exit(entry())
  File "/home/holger80/.local/lib/python3.6/site-packages/verifier/cli.py", line 48, in entry
    public_keys = verifier.get_public_keys(transaction_data)
  File "/home/holger80/.local/lib/python3.6/site-packages/verifier/verifier.py", line 56, in get_public_keys
    for key in transaction.verify(chain=self.chain):
  File "/home/holger80/.local/lib/python3.6/site-packages/steembase/transactions.py", line 225, in verify
    p = self.recover_public_key(self.digest, sig, recoverParameter)
  File "/home/holger80/.local/lib/python3.6/site-packages/steembase/transactions.py", line 141, in recover_public_key
    beta = ecdsa.numbertheory.square_root_mod_prime(alpha, curve.p())
  File "/home/holger80/.local/lib/python3.6/site-packages/ecdsa/numbertheory.py", line 165, in square_root_mod_prime
    % ( a, p ) )
ecdsa.numbertheory.SquareRootError: 76198183007165409965398859979003670973818984091490751645956120696063919941083 has no square root modulo 115792089237316195423570985008687907853269984665640564039457584007908834671663
```
It is possible to use the `secp256k1` module for sign and verify in steem-python. Let's see if the usage of this module changes something:
```
=> Extracting public keys...
Traceback (most recent call last):
  File "/home/holger80/.local/bin/steem-verifier", line 11, in <module>
    sys.exit(entry())
  File "/home/holger80/.local/lib/python3.6/site-packages/verifier/cli.py", line 48, in entry
    public_keys = verifier.get_public_keys(transaction_data)
  File "/home/holger80/.local/lib/python3.6/site-packages/verifier/verifier.py", line 56, in get_public_keys
    for key in transaction.verify(chain=self.chain):
  File "/home/holger80/.local/lib/python3.6/site-packages/steembase/transactions.py", line 213, in verify
    sig = pub.ecdsa_recoverable_deserialize(sig, recoverParameter)
  File "/home/holger80/.local/lib/python3.6/site-packages/secp256k1/__init__.py", line 136, in ecdsa_recoverable_deserialize
    raise Exception("invalid rec_id")
Exception: invalid rec_id
```
Does also not work, but different error message.
#### Proof of Work Done
https://github.com/holgern

- - -

This page is synchronized from the post: ['Bug: steem-verifier crashes on certain transaction ids'](https://steemit.com/@holger80/bug-steem-verifier-crashes-on-certain-transaction-ids)
