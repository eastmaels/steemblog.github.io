
---
title: 'Witness Update: Node Upgraded to 0.20.9!'
permlink: witness-update-node-upgraded-to-0-20-9
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-24 19:26:36
categories:
- witness-category
tags:
- witness-category
- witness-update
- steem
- steem-witness
- busy
thumbnail: 'https://media.giphy.com/media/rdma0nDFZMR32/giphy.gif'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://media.giphy.com/media/rdma0nDFZMR32/giphy.gif)

Witness 0.20.9 was out:  https://github.com/steemit/steem/releases/tag/v0.20.9
> This release fixes a security vulnerability in JSON parsing. This update is optional, but recommended for all nodes running public API endpoints or plugins that rely on custom JSON operations (i.e. follow plugin).

I quickly did a upgrade for both the witness server and the backup node. So both of them are running at 20.9 now.

For docker users, the upgrade is simple:
1. ./run.sh stop
2. ./run.sh build v0.20.9
3. docker tag steem:v0.20.9 steem:latest
4. ./run.sh install
5. ./run.sh restart

This shouldn't require re-indexing.

# Main Witness Server
- Running 20.9 now (Docker)
- Location: Germany
- 10 cores of Intel(R) Xeon(R) CPU E5-2630 v4 @ 2.20GHz
- 60 GB RAM
- 1600 GB SSD
- 1300 Mbit/s port, Upstream 130 Gbits
- Ubuntu 18.04 bionic

# Backup Witness Server
- Running 20.9 now (Docker)
- Location: Germany
- 10 cores of Intel(R) Xeon(R) CPU E5-2630 v4 @ 2.20GHz
- 50 GB RAM
- 1200 GB SSD
- 1000 Mbit/s port, Upstream 130 Gbits
- Ubuntu 16.04 xenial

XXX----------------

**Enjoy and Steem On!**

## Delegate to @justyy
@justyy runs a automatic delegation service for a long time. Delegate to @justyy for at least 5 SP and start receiving daily payout as interests (from 8% to 10% APR). Also, as a supporter, the delegators will start to receive complimentary/curation upvotes (as a thank you) per day from e.g @justyy and a few other curation trails. For more information, [read this](https://github.com/DoctorLai/steemit-wechat-group). The voting weight algorithm is [open source](https://steemit.com/busy/@justyy/bank-of-china-implements-a-new-voting-algorithm).

- Delegate to @justyy - [at least 5 SP to join (automatically)](https://steemyy.com/sp-delegate-form/?delegatee=justyy)
- [Undelegate to @justyy (Quit) - SP returned by steem blockchain in 5 days](https://steemyy.com/sp-delegate-form/?delegatee=justyy&amount=0)
- [View Current Delegators/Supporters](https://steemyy.com/delegators/?id=justyy)

![image.png](https://ipfs.busy.org/ipfs/QmcuaxJY3J9x9uR4ySgL1oqE3HYGJuSEvJzsSmBCKJbU1w)

## 300 Delegators! Thank you!
*@justyy is the 7-th delegated project on steem blockchain*

> Please note that the SP you enter is the final amount to delegate. For example, if you already delegate 10 SP and you want to delegate another 5 SP, you will need to enter 15 SP (instead of 5 SP) in the delegation form.

##  [Vote for me](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy) or [Set me as a witness Proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - Every vote counts! - Thank you!

## Your Vote is much appreciated, and every vote counts.
Check out [My Witness Page](https://steemyy.com/witness-data/justyy)

## Support me and [my work](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a witness proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

Thank you! **Some of My Contributions: [SteemYY.com - SteemIt Tutorials, Robots, Tools and APIs](https://steemyy.com/)** and [VPS Search Tool](https://anothervps.com/vps-database/)

- - -

This page is synchronized from the post: ['Witness Update: Node Upgraded to 0.20.9!'](https://steemit.com/@justyy/witness-update-node-upgraded-to-0-20-9)
