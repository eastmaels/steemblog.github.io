
---
title: 'Steem Wallet Tools - Fixing 3 Decimal Errors'
permlink: steem-wallet-tools-fixing-3-decimal-errors
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-09 21:18:39
categories:
- busy
tags:
- busy
- steemtools
- witness-category
- steemapps
- programming
thumbnail: 'https://ipfs.busy.org/ipfs/QmUNkFQuTB9XAH9fFxsYwydF2UPGLkAc3caywc3vjcN5WX'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


@onepercentbetter contacted me and said he can't get the [Steem Wallet](https://steemyy.com/wallet/) to work and it throws the following error message:

> VM371:53 {code: -32003, message: "Assert Exception:decimals == 3: Incorrect decimal places", data: {…}, digest:

From the error message, it appears that the amount of SBD/STEEM he entered in the textbox is not exactly 3 decimal places and that is why the `steem.broadcast.transfer` complains and fails to transfer as requested.

The Fix is rather straightward, just putting a `.toFixed(3)` to the amount and the tool is good again. You will also notice the `err.Message` is shown in the message box as well as in the console via `console.log`.

![image.png](https://ipfs.busy.org/ipfs/QmUNkFQuTB9XAH9fFxsYwydF2UPGLkAc3caywc3vjcN5WX)

# Steem Wallet Tool
https://steemyy.com/wallet/


----------------

**Enjoy and Steem On!**

## Delegate to @justyy
@justyy runs a automatic delegation service for nearly a year now. Delegate to @justyy for at least 5 SP and start receiving daily payout as interests (from 8% to 10% APR). Also, as a supporter, the delegators will start to receive complimentary/curation upvotes (as a thank you) per day from e.g @justyy and a few other curation trails. For more information, [read this](https://github.com/DoctorLai/steemit-wechat-group). The voting weight algorithm is [open source](https://steemit.com/busy/@justyy/bank-of-china-implements-a-new-voting-algorithm).

- Delegate to @justyy - [at least 5 SP to join (automatically)](https://steemyy.com/sp-delegate-form/?delegatee=justyy)
- [Undelegate to @justyy (Quit) - SP returned by steem blockchain in 5 days](https://steemyy.com/sp-delegate-form/?delegatee=justyy&amount=0)
- [View Current Delegators/Supporters](https://steemyy.com/delegators/?id=justyy)

![image.png](https://ipfs.busy.org/ipfs/QmTjA3McXSxyCvz4oZssAPmnnQHpzcoqK7hx8zonnPVtQk)

> Please note that the SP you enter is the final amount to delegate. For example, if you already delegate 10 SP and you want to delegate another 5 SP, you will need to enter 15 SP (instead of 5 SP) in the delegation form.

##  [Vote for me](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy) or [Set me as a witness Proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - Every vote counts! - Thank you!

## Your Vote is much appreciated, and every vote counts.
Check out [My Witness Page](https://steemyy.com/witness-data/justyy)

## Support me and [my work](https://anothervps.com/digital-ocean-100-free-credit-during-hacktoberfest/) as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a witness proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

Thank you! **Some of My Contributions: [SteemYY.com - SteemIt Tutorials, Robots, Tools and APIs](https://steemyy.com/)** and [VPS Search Tool](https://anothervps.com/vps-database/)

- - -

This page is synchronized from the post: ['Steem Wallet Tools - Fixing 3 Decimal Errors'](https://steemit.com/@justyy/steem-wallet-tools-fixing-3-decimal-errors)
