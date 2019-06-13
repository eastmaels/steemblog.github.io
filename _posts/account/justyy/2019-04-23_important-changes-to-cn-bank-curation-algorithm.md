
---
title: 'Important Changes to CN Bank Curation Algorithm'
permlink: important-changes-to-cn-bank-curation-algorithm
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-23 19:13:54
categories:
- algorithm
tags:
- algorithm
- curation
- fight-spam
- busy
- witness-category
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


**[中文 Chinese Version](https://steemit.com/cn/@justyy/7)**

Many posts have been downvoted by the officials or unofficials and the curation rewards are greatly affected that are rewarded to the [delegators/supporters](https://steemyy.com/delegators/?id=justyy). Therefore, here is an important update:

Curation algorithm change: https://github.com/DoctorLai/steemit-wechat-group/commit/d6e30e486a6ecd4708f732cc147f265bdf59fbcb#diff-0aaf1baf27e743257ef08a946e0885c0

To sum up, if you have been unluckily downvoted by the following list in the last 7 days, .....

> DOWNVOTERS = ["@spaminator", "@mack-bot", "@steemcleaners", "@blockcleaner"]

Then, your posts will not be curated (however, the daily STEEM will be distributed as always)

```
# filter out posts that author has been downvoted in the last 7 days, sorry.
 if [x in downvoters7d for x in DOWNVOTERS].count(True) > 0:
        return 0 
```

Hope this **helps fight the spams** and also *reduce the cost of running the delegation services* - it is not easy to keep this running for over a year and half till now.

*@justyy reserves the right to final interpretation.*

**Enjoy and Steem On!**
------------------------------------


### My Witness
Check out [My Witness Page](https://steemyy.com/witness-data/justyy)

1. [my witness campagin](https://steemit.com/witness-category/@justyy/justyy-just-another-witness)
2. [One Year Witnessversary - A Great Start!](https://steemit.com/witness-category/@justyy/one-year-winessversary-a-great-start)

#### Support me and my work by:
1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

### Some of my contributions: 
1. [SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)
2. [VPS Database](https://anothervps.com/vps-database/)
3. [Video Downloader](https://weibomiaopai.com/download-video-parser.php)
4. [Cryptocurrency Discord Bot](https://discordapp.com/api/oauth2/authorize?client_id=417847038697406467&permissions=522304&scope=bot)
5. [SteemIt Discord Bot](https://discordapp.com/oauth2/authorize?client_id=418196534660694037&permissions=522304&scope=bot)

Join cnsteem Discord channel: https://discord.gg/SnNaaYS

- - -

This page is synchronized from the post: [Important Changes to CN Bank Curation Algorithm](https://steemit.com/@justyy/important-changes-to-cn-bank-curation-algorithm)
