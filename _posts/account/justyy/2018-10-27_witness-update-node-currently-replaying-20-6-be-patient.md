
---
title: 'Witness Update:  Node Currently Replaying 20.6 - Be Patient!'
permlink: witness-update-node-currently-replaying-20-6-be-patient
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-27 22:38:00
categories:
- witness-category
tags:
- witness-category
- busy
- witness-update
- witness
- steem
thumbnail: 'https://ipfs.busy.org/ipfs/QmPfpG6wCJ3ECBgRPQis36APnMyDxNsqGP7AbPRP4HKDVA'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have currently disabled my witness node, upgrading to 20.6 and it is now reindexing...

I use @someguy123 's docker solution - so my steps are:

1. remove `witness` plugin from `config.ini` as it is no longer required after 20.6
2. `conductor disable` to put offline my witness node
3. `./run.sh stop` to remove the existing container
4. `./run.sh install` to install the latest version thanks to @someguy123 's image
5. `./run.sh replay` --- this is time consuming and I hope it is ready when I wake up tomorrow morning.
6. and next should be `conductor enable PUB_SIGN_KEY`

![image.png](https://ipfs.busy.org/ipfs/QmPfpG6wCJ3ECBgRPQis36APnMyDxNsqGP7AbPRP4HKDVA)



----------------

**Enjoy and Steem On!**

## Delegate to @justyy
@justyy runs a automatic delegation service for nearly a year now. Delegate to @justyy for at least 5 SP and start receiving daily payout as interests (from 8% to 10% APR). Also, as a supporter, the delegators will start to receive complimentary/curation upvotes (as a thank you) per day from e.g @justyy and a few other curation trails. For more information, [read this](https://github.com/DoctorLai/steemit-wechat-group). The voting weight algorithm is [open source](https://steemit.com/busy/@justyy/bank-of-china-implements-a-new-voting-algorithm).

- Delegate to @justyy - [at least 5 SP to join (automatically)](https://steemyy.com/sp-delegate-form/?delegatee=justyy)
- [Undelegate to @justyy (Quit) - SP returned by steem blockchain in 5 days](https://steemyy.com/sp-delegate-form/?delegatee=justyy&amount=0)
- [View Current Delegators/Supporters](https://steemyy.com/delegators/?id=justyy)

> Please note that the SP you enter is the final amount to delegate. For example, if you already delegate 10 SP and you want to delegate another 5 SP, you will need to enter 15 SP (instead of 5 SP) in the delegation form.

##  [Vote for me](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy) or [Set me as a witness Proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - Every vote counts! - Thank you!

## Your Vote is much appreciated, and every vote counts.
Check out [My Witness Page](https://steemyy.com/witness-data/justyy)

## Support me and [my work](https://anothervps.com/digital-ocean-100-free-credit-during-hacktoberfest/) as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a witness proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

Thank you! **Some of My Contributions: [SteemYY.com - SteemIt Tutorials, Robots, Tools and APIs](https://steemyy.com/)** and [VPS Search Tool](https://anothervps.com/vps-database/)



- - -

This page is synchronized from the post: ['Witness Update:  Node Currently Replaying 20.6 - Be Patient!'](https://steemit.com/@justyy/witness-update-node-currently-replaying-20-6-be-patient)
