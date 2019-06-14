
---
title: 'Update for steemengine - token precision taken into account and several new CLI commands added'
permlink: update-for-steemengine-token-precision-taken-into-account-and-several-new-cli-commands-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-20 11:25:51
categories:
- utopian-io
tags:
- utopian-io
- development
- steem-engine
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmefwpuySKdgC8nVeEwx6WfBXRJNXt8VgHZD8v1hxeimMA'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Repository
https://github.com/holgern/steemengine

![image.png](https://ipfs.busy.org/ipfs/QmefwpuySKdgC8nVeEwx6WfBXRJNXt8VgHZD8v1hxeimMA)


## steemengine
[steemengine](https://github.com/holgern/steemengine) is a python library for working with [steem-engine.com](https://steem-engine.com/) tokens.

I released version 0.4.1 which can be installed by
```
pip install steemengine
```
## New features
### The token precision is taken into account for transfer, issue, buy, sell, withdraw and deposit
I added a new `quantize` function to the Token class. 
```
def quantize(self, amount):
    """Round down a amount using the token precision and returns a Decimal object"""
    amount = decimal.Decimal(amount)
    places = decimal.Decimal(10) ** (-self["precision"])
    return amount.quantize(places, rounding=decimal.ROUND_DOWN)
```
This function returns a rounded Decimal object, which takes the token precision into account. The amount is rounded down to a valid amount.
```
from steemengine.tokenobject import Token
steemp = Token("STEEMP")
steemp.quantize(1.0001)
Decimal('1.000')
steemp.quantize(0.999999)
Decimal('0.999')
steemp.quantize(0.0001)
Decimal('0.000')
```

This function is then used in  transfer, issue, buy, sell, withdraw and deposit:
```
token = Token(symbol)
quant_amount = token.quantize(amount)
if quant_amount <= decimal.Decimal("0"):
    raise InvalidTokenAmount("Amount to transfer is below token precision of %d" % token["precision"])
```
If the quantized amount is zero, an InvalidTokenAmount exception is raised.

### New commands for the CLI
The acting account, which needs an active key stored in the beem wallet, is either the default beempy account or set by `-a`, e.g. `steemengine transfer -a holger80 beembot 0.001 DRAGON test`.
The default account can be set by `beempy set default_account holger80` and checked by `beempy config`.
#### steemengine transfer
![image.png](https://ipfs.busy.org/ipfs/QmRvKRsihsrcpU2LkTbAjXVZiAuVB5F2wDMJymHCBZBykN)
This command can be used to sent token to other steem accounts.
```
steemengine transfer -a holger80 beembot 0.001 DRAGON test
Password to unlock wallet:
Wallet Unlocked!
{
    "expiration": "2019-03-20T10:12:49",
    "ref_block_num": 55237,
    "ref_block_prefix": 1423306811,
    "operations": [
        [
            "custom_json",
            {
                "required_auths": [
                    "holger80"
                ],
                "required_posting_auths": [],
                "id": "ssc-mainnet1",
                "json": "{\"contractName\":\"tokens\",\"contractAction\":\"transfer\",\"contractPayload\":{\"symbol\":\"DRAGON\",\"to\":\"beembot\",\"quantity\":\"0.0010000\",\"memo\":\"test\"}}"
            }
        ]
    ],
    "extensions": [],
    "signatures": [
        "206b0d9b6d0939108c2156cefbafa99bccb5bb206c2ca129ebb2cf336112abbaab0ff1151917bec552357d400b6d72b98425f2052735c723522a9537589046b1e7"
    ]
}
```
![image.png](https://ipfs.busy.org/ipfs/QmcfSQuDm9a2j3oZ2gqceXoUpAfXhAiwM9SVdDMePqWhkS)
![image.png](https://ipfs.busy.org/ipfs/QmNpDzJKYNr3CTCSAPoiPyYyt7r9rybvfd3nUnUtR3qAPA)

#### steemengine issue
![image.png](https://ipfs.busy.org/ipfs/QmT97DkNrxmBEM5Ttd7WTyVMFBwyeKSp3BfJy4DijfmA7R)
Issues new token, only possible when the active account is also the issuer of the token.
#### steemengine deposit
![image.png](https://ipfs.busy.org/ipfs/QmZwYLQbMVGacTDexXVfDxQR49U8zAehgYRf8jYttdhvei)
This command can be used to deposit STEEM and receive STEEMP for buying token.
The following command transfers 0.1 STEEM to steem-peg and 0.1 STEEMP are transferred to the account in return.
``` 
steemengine deposit -a holger80 0.1
```
![image.png](https://ipfs.busy.org/ipfs/Qmd3rkfC7nMRm7nHytFYxtFaNA1Gna6wp119pR1quHupLq)

#### steemengine withdraw
![image.png](https://ipfs.busy.org/ipfs/QmQUfPG3BuvXX1MzFLMWZ3coeUx2T7m3QbUQfNBcUBhdL4)
This command can be used to withdraw STEEMP and receive STEEM.
```
steemengine withdraw -a holger80 0.1
```
![image.png](https://ipfs.busy.org/ipfs/QmdxCKgJS4ZaereN7iwpt6EiNcGincmHavhXfBc1Qaij1o)

#### steemengine buy
![image.png](https://ipfs.busy.org/ipfs/QmZDdLmXXE3nWSN7vc6eNP4bQuf8Bp1sLtyVTR9HASgmmY)
This command can be used to place buy orders.
```
steemengine buy -a holger80 1 JAR 0.9
```
This places a buy order, for buying 1 JAR for 0.9 STEEMP. The accounts must have 0.9 STEEMP, otherwise a InsufficientTokenAmount exception will be raised. The 0.9 STEEMP are locked until the order is fullfilled or canceled.
#### steemengine sell
![image.png](https://ipfs.busy.org/ipfs/QmZ4w3KM6A236motFgc4oSUvtULvHizxg73yCjLKVbaiR6)
This command can be used to place a sell order.
```
steemengine sell -a holger80 1 JAR 3
```
In this examle, holger80 creates a sell order for selling 1 JAR for 3 STEEMP. The accounts needs 1 JAR to broadcast this, otherwise a InsufficientTokenAmount exception is raised. The 1 JAR is locked until the order is fullfilled or canceled.
#### steemengine cancel
![image.png](https://ipfs.busy.org/ipfs/QmQ8n5Eh4mqsniM3hq5XzVvbEdrgQd1ndWk3Y1q3vDosm2)
In order to cancel, the order id must be know. It can be checked with the buybook command.
```
steemengine buybook -a holger80 JAR
```
![image.png](https://ipfs.busy.org/ipfs/QmPhXeMF8r1KEUMcNY5mcffQBh5aZ4HZCtLGTQnkprHX1k)
The buy order can then be canceled by:
```
steemengine  cancel -a holger80 buy 1824
```

A sell order is canceled by
```
steemengine  cancel -a holger80 sell 923
```

#### steemengine buybook
![image.png](https://ipfs.busy.org/ipfs/QmSpiBPmfkzMdqPJQTbBm4apsPDiLUu4kc1zJh7nRaiabE)
```
steemengine buybook -a holger80 JAR
```
returns the buybook for account holger80 and token JAR.
```
steemengine buybook JAR
```
returns the complete buy book.
#### steemengine sellbook
![image.png](https://ipfs.busy.org/ipfs/QmXMYAem3oeXiLLnWNRc9AFFWB4U5LHTc7nFvhnYg4k9e8)
```
steemengine sellbook -a holger80 JAR
```
returns the sellbook for account holger80 and token JAR.
```
steemengine sellbook JAR
```
returns the complete sell book.


## Commits
### Fix cancel order id (cast to int)
* [commit f63baba](https://github.com/holgern/steemengine/commit/f63babab5ca356d61534b5a2c311739110a03daf)
### Add changelog
* [commit 14164d1](https://github.com/holgern/steemengine/commit/14164d1fbae80a70f3185e5db0ec49f11f7bb630)
### Add transfer, issue, withdraw, deposit, buy, sell, cancel, buybook, sellbook to CLI
* [commit 31f2e76](https://github.com/holgern/steemengine/commit/31f2e7628b11de694c6a3a0fa63c4ff6747bba12)
### Add amount quantization to deposit, withdraw, buy and sell
* [commit 63ee650](https://github.com/holgern/steemengine/commit/63ee650b5170bead53056d2757997e7c2be76510)

### Add token amount quantize and add issue to wallet
* [commit c0b7e8d](https://github.com/holgern/steemengine/commit/c0b7e8d13fc00ebc16fe3d3ceae55d2f96dce36d)
* quantize added to Token class
* TokenDoesNotExists is raised in the Token class when token does not exists
* Exception InvalidTokenAmount is raised when amount to transfer or to issue is below precision
* new issue function added to wallet
* token precision is taken into account for transfer and issue
* TokenIssueNotPermitted is raised when an account which is not the token issuer tries to issue

## GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['Update for steemengine - token precision taken into account and several new CLI commands added'](https://steemit.com/@holger80/update-for-steemengine-token-precision-taken-into-account-and-several-new-cli-commands-added)
