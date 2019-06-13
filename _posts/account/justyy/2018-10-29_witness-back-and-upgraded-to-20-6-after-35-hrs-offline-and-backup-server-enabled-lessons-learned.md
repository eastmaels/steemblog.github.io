
---
title: 'Witness Back and Upgraded to 20.6 - after 35 hrs offline and Backup Server Enabled! Lessons Learned'
permlink: witness-back-and-upgraded-to-20-6-after-35-hrs-offline-and-backup-server-enabled-lessons-learned
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-29 10:44:48
categories:
- witness-category
tags:
- witness-category
- busy
- witness-update
- witness
- steem
thumbnail: 'https://ipfs.busy.org/ipfs/QmRV9iZ8saGrawAq7YeS2HTFgN2EskQ23SQK9TYzygYyU3'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Witness Back and Upgraded to 20.6 - after 35 hrs offline and Backup Server Enabled!
![image.png](https://ipfs.busy.org/ipfs/QmRV9iZ8saGrawAq7YeS2HTFgN2EskQ23SQK9TYzygYyU3)

I started upgrading to 20.6 at Saturday night without a backup server. It took longer than I expected because:
1. witness server is only 50GB RAM.
2. ZRAM enabled (compressed）
3. Main CPU Frequency is only 2100 MHz

I thought `witness` plugin is the same thing as `witness_api` thus I removed it and when replay was around 90% - I made another mistake by `./run.sh restart` - because I thought it will reload the configuration. **Lessons Learned!**

It took another 10+ hours because the reindexing had to re-start from beginning.

I thought it would be great to have a backup server in the future because during the offline, I lost three votes.. And most importantly, **being a witness means responsibility to produce blocks when needed.** We all need to minimize the downtime.

I spent another *fortune* to rent another VPS - as a backup. Both are now fully synchronized to 20.6 blockchain.

![](https://cdn.steemitimages.com/DQmeyWQ1m4bmcjrtNxWLo5Ci8yHcxmTorxfiDkJrHX2Dpsn/image.png)
*Left: Main Server, Right: Backup Server*

# Witness Status
[My Witness Page](https://steemyy.com/witness-data/justyy)

# Main Witness Server
- Running 20.6 now (Docker)
- Location: Germany
- 10 cores of Intel(R) Xeon(R) CPU E5-2630 v4 @ 2.20GHz
- 50 GB RAM
- 1200 GB SSD
- 1000 Mbit/s port, Upstream 130 Gbits
- Ubuntu 16.04 xenial

# Backup Witness Server
- Running 20.6 now (Docker)
- Location: Germany
- 10 cores of Intel(R) Xeon(R) CPU E5-2630 v4 @ 2.20GHz
- 60 GB RAM
- 1600 GB SSD
- 1300 Mbit/s port, Upstream 130 Gbits
- Ubuntu 18.04 bionic

![image.png](https://ipfs.busy.org/ipfs/QmXassNGasEt3aLigGafdA3hFhpLTM1x2GB72v4D3gCBzm)

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

This page is synchronized from the post: ['Witness Back and Upgraded to 20.6 - after 35 hrs offline and Backup Server Enabled! Lessons Learned'](https://steemit.com/@justyy/witness-back-and-upgraded-to-20-6-after-35-hrs-offline-and-backup-server-enabled-lessons-learned)
