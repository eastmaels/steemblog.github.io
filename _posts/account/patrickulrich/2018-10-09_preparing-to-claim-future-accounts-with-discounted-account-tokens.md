
---
title: 'Preparing to Claim Future Accounts with Discounted Account Tokens'
permlink: preparing-to-claim-future-accounts-with-discounted-account-tokens
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-09 02:01:45
categories:
- steem
tags:
- steem
- steemit
- hf20
- discountedaccounttoken
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmNMizTb8Ao2cNEh7ASFqMaxZhDHBUokxNbrLr1Er8o4jz'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmNMizTb8Ao2cNEh7ASFqMaxZhDHBUokxNbrLr1Er8o4jz)

If you haven't already heard the news HF20 changed the way new Steem accounts will be created. First it removed the traditional route of creating an account with at least .5 STEEM and a delegation. If your account was created through Steemit.com then this is how it was likely created. This route was replaced with a new creation method that will enable the creation of new users at a scale that was not possible before.

## Discounted Account Tokens

This new method utilizes a new blockchain tool called Discounted Account Tokens. Each of these tokens can be redeemed to create a new Steem account without any STEEM cost to the creator. The only charge is against your rechargeable resource credits. This means anyone with enough resource credits to pay the fee can start storing account tokens to help on-board their friends and acquaintances in the future!

This doesn't mean that anyone can start claiming these discounted accounts though. In fact it requires a decent amount of RC to do so. At a bit over 5MM RC it's really only feasible for accounts with at least 3,000 SP. It also took a bit of python knowledge until recently but now that new tools are rolling out that last part is changing.

## How To Claim Your Discounted Accounts

I recently just found out, thanks to @abh12345's [excellent post](https://steempeak.com/steem/@abh12345/i-claimed-a-few-accounts-today-is-this-something-that-everyone-that-can-should-be-doing), that SteemConnect has enabled the ability to claim discounted account tokens. The process is pretty simple but again you'll want to make sure that you have at least 6MM RC available so that you'll have enough to claim plus still have enough resource credits to use Steem afterwards.

1.) Copy "[https://steemconnect.com/sign/claim_account?creator=YOURUSERNAME&fee=0.000%20STEEM&extensions=[]](https://steemconnect.com/sign/claim_account?creator=YOURUSERNAME&fee=0.000%20STEEM&extensions=[])" without including the "".

2.) Replace YOURUSERNAME from the URL above with your Steem username.

3.) Sign the SteemConnect transaction with your active key.

<center>![image.png](https://ipfs.busy.org/ipfs/QmNtcLCJrwJzBQhryuZ4e4Wxm7Sp718TUywYE5ZmCwBaZG)
</center>

As long as you have enough RC to cover the transaction it will process and you will be the new owner of a pending claimed account. This means that you can now register a new Steem account for no charge at all and just pay with your claimed account token. To verify just visit https://steemd.com/@YOURUSERNAME with YOURUSERNAME replaced by your Steem account. Then look along the left side for the heading "Pending claimed accounts" to see how many account tokens you have access to.

## Claiming Your Reserved Account

To my knowledge there's currently no extremely user friendly tool to redeem your discounted account. That being said you can always claim using @holger80's beem tool with [these instructions](https://steempeak.com/beem/@holger80/claiming-and-creating-a-discounted-account-using-beem). **Note:** you'll need to have python installed on your machine to utilize this tool. That being said I imagine the [SteemConnect Account Creation Tool](https://steemconnect.com/accounts/create) will be updated with time to support this function as well. I will try to remember to update this post once I see that updated.

- - -

This page is synchronized from the post: ['Preparing to Claim Future Accounts with Discounted Account Tokens'](https://steemit.com/@patrickulrich/preparing-to-claim-future-accounts-with-discounted-account-tokens)
