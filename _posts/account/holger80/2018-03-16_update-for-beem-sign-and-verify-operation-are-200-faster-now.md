
---
title: 'update for beem - sign and verify operation are 200 % faster now'
permlink: update-for-beem-sign-and-verify-operation-are-200-faster-now
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-16 14:22:21
categories:
- utopian-io
tags:
- utopian-io
- python
- beem
- steemdev
- python-steem
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1521209192/w2oscwc1kxueqfhrj1vg.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


beem is a python library for steem. It has now 316 unit tests and the current version is 0.19.17. You can find beem on [github](https://github.com/holgern/beem). It can be installed by:
```
pip install -U beem
```
or
```
conda install beem
```

Whenever a transaction should be broadcasted to the steem blockchain, the content has to be signed  with the private key of the sender. It has to assure that the public key can be extracted from the signature. 

The public key can than be used to verify the signed transaction. This is performed by extracting the public key from the signature and comparing it with the provided one. 

An Elliptic Curve Digital Signature Algorithm (ECDSA) set to secp256k1 is used for both. There is a pure python implementation [python-ecdsa](https://github.com/warner/python-ecdsa) which is used by python-steem and beem. 
## secp256k1
In order to accelerate this, [secp256k1](https://github.com/ludbb/secp256k1-py) might be installed by:
```
pip install secp256k1
```
secp256k1 has the problem that it uses a depreated way to access ffi. Without update it might stop working (last update for secp256k1 was 2016):
```
UserWarning: implicit cast from 'char *' to a different pointer type: will be forbidden in the future (check that the types are as you expect; use an explicit ffi.cast() if they are correct)
```
secp256k1 cannot be installed  on windows. 

## cryptography
Then I found [cryptography](https://github.com/pyca/cryptography) which uses also openssl and was easily installable by:
```
pip install cryptography
```
or
```
conda install cryptography
```
So I decided to speed up signing and verification for all user who are not able to install secp256k1.
# Speed improvements by cryptography
The following is the mean times from 50 times signing and verifying a Transfer operation.

| library | beem/steem | sign duration [s] | verify duration [s] |
| --- | --- | --- |--- |
| python-ecdsa | beem | 0.37  | 0.58 |
| python-ecdsa | steem | 0.37  | 0.60 |
| secp256k1 | beem | 0.16 | 0.16 |
| secp256k1 | steem | 0.16 | 0.16 |
| cryptography | beem | 0.23 | 0.26  |

beem is 166.98 % (sign) and 229.39 % (verify) faster than steem, when secp256k1 is not installed!
Sending out 10 transfers can than be reduced from 9.7 seconds to 4.9 seconds.


# Using cryptography to speed up sign and verify operation
I was then trying to replace python-ecdsa by cryptography, but it was not possible, as some functions are not implemented in cryptography. I was then replacing some parts with algorithms from cryptography and could speed up sign/verify.

I'm using the following functions from cryptography:
```
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.primitives.asymmetric.utils \
            import decode_dss_signature, encode_dss_signature
```
## sign_message
I'm using the `derive_private_key` function from cryptography to derive a private_key from the wif string. It has to converted into an integer first.
``` 
        private_key = ec.derive_private_key(int(repr(priv_key), 16), ec.SECP256K1(), default_backend())
        public_key = private_key.public_key()
```
Then I'm looping and creating new signatures until ones fits:
```
        while True:
            cnt += 1
            if not cnt % 20:
                log.info("Still searching for a canonical signature. Tried %d times already!" % cnt)
            order = ecdsa.SECP256k1.order
            signer = private_key.signer(ec.ECDSA(hashes.SHA256()))
            signer.update(message)
            sigder = signer.finalize()
            r, s = decode_dss_signature(sigder)
            signature = ecdsa.util.sigencode_string(r, s, order)
            # Make sure signature is canonical!
            #
            sigder = bytearray(sigder)
            lenR = sigder[3]
            lenS = sigder[5 + lenR]
            if lenR is 32 and lenS is 32:
                # Derive the recovery parameter
                #
                i = recoverPubkeyParameter(
                    message, digest, signature, public_key)
                i += 4   # compressed
                i += 27  # compact
                break
```
I'm using the signer `private_key.signer(ec.ECDSA(hashes.SHA256()))` from cryptography. 

## recover_public_key
Is called by recoverPubkeyParameter until the recovered pubkey is correct, if not the index i is increased by one.
This function assures that the public key can be guessed from the signature.
I replaced:
```
        if not ecdsa.VerifyingKey.from_public_point(Q, curve=ecdsa.SECP256k1).verify_digest(signature, digest, sigdecode=ecdsa.util.sigdecode_string):
            return None
        return ecdsa.VerifyingKey.from_public_point(Q, curve=ecdsa.SECP256k1)
```
by
```
        sigder = encode_dss_signature(r, s)
        public_key = ec.EllipticCurvePublicNumbers(Q._Point__x, Q._Point__y, ec.SECP256K1()).public_key(default_backend())
        public_key.verify(sigder, message, ec.ECDSA(hashes.SHA256()))
        return public_key
```
where message is the orignal message which has to be signed as bytes representation. The rest of the function remains the same.

# Golos network
beem can now be used with the golos network:
```
from beem import Steem
gls = Steem(
            node=["wss://ws.golos.io"],
        )
gls.prefix
'GLS'
```
# beem can be used in Pydroid 3
You can find Pydroid 3 on the [Play store](https://play.google.com/store/apps/details?id=ru.iiec.pydroid3)

![20180316_150030.jpg](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521209192/w2oscwc1kxueqfhrj1vg.jpg)
![20180316_150044.jpg](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521209231/uh39nmk143cpxiflxt3c.jpg)
![20180316_150057.jpg](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521209029/mrx81ltpyfvdhjc6b89u.jpg)



# Changes
## ecdsa improved with cryptography
* https://github.com/holgern/beem/commit/ea5f3cad6f85229ec0d57475e40e3005cb60e5fa
### Account
* Improved some function, so that account works limited on GOLOS
### Blockchain
* sync changes from python-bitshares
### Instance
* sync changes from python-bitshares
### Steem
* Improved some functions so that steem works on GOLOS
### Chains
* Added GOLOS
### graphenebase/Account
* derive256address_with_version added
### ecsdasig
* Huge speed improvement (200%) by using cryptography
### benchmark added
* benchmark for beemgraphenebase/account funcions
* benchmark for ecdsa
* benchmark for sign/verification of all transaction
### Examples
* compare sign/verificaiton speed with steem
### Unit tests
* use memo unittests from steem-js
* add key_format unittests from steem-js
* Improved the ecdsa tests

## add test_golos
* https://github.com/holgern/beem/commit/0d61daab346dd79e0196988df4ef4968ff658781

## Fix bug in transactionbuilder
* https://github.com/holgern/beem/commit/96634446b68e7e1fb8440e45b4da1186a22141f7
* secp256k1 is faster than cryptography and put first

## Improve module loading
* https://github.com/holgern/beem/commit/f7d5a13f65276e32eb8497f6ad75717cdf30ad1a
* fix unit tests

## Fix unit tests by cleaning Wallet.keys
* https://github.com/holgern/beem/commit/fd63004044266f05d0ce1e1ddde54532a1eab0d2

## Clear Wallet.keys when setting new ones
* https://github.com/holgern/beem/commit/f6305b88fdcbf134f237f7ce1ca8849f595539d8
* Fix unit tests for python 2.7
* Account votes improved for appbase

## Fix small bug in ecdsasig
* https://github.com/holgern/beem/commit/ad5bef2c17481c6302a360100d0c40ecfb9eac33

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/update-for-beem-sign-and-verify-operation-are-200-faster-now">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['update for beem - sign and verify operation are 200 % faster now'](https://steemit.com/@holger80/update-for-beem-sign-and-verify-operation-are-200-faster-now)
