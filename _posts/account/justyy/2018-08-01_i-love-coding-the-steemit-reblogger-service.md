
---
title: 'I Love Coding! The SteemIt Reblogger Service'
permlink: i-love-coding-the-steemit-reblogger-service
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-01 22:06:39
categories:
- utopian-io
tags:
- utopian-io
- development
- busy
- witness-category
- programming
thumbnail: https://ipfs.busy.org/ipfs/QmbRok1X23FBXjGTKMqR9AC2sFTuZ488uYiVircdtaKUQy
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmbRok1X23FBXjGTKMqR9AC2sFTuZ488uYiVircdtaKUQy)

## New Project Motivation
On SteemIt, there are a lot of nice programming articles/tutorials from different authors. I would like a single account that resteemed all the programming-related posts, so that I can easily keep it as a feed.

## Project Github
https://github.com/DoctorLai/SteemRebloggerService
Consider submitting a PR or Issue.

## Installation
1. git clone https://github.com/DoctorLai/SteemRebloggerService.git
2. edit `config.json`
3. pm2 start reblogger.js

## Monitor
`pm2 monit`

![](https://github.com/DoctorLai/SteemRebloggerService/blob/master/SteemRebloggerService.jpg?raw=true)

## Technology Stack
Javascript, in particular the Node JS.

## Configuration file
`config.json`

```
{
  "rpc_nodes": [
    "https://api.steemit.com",
    "https://rpc.buildteam.io",
    "https://steemd.minnowsupportproject.org",
    "https://steemd.privex.io",
    "https://gtg.steem.house:8090"
  ],
  "account": "ilovecoding",
  "posting_key": "POSTING KEY",
  "tags": ["ilovecoding", "programming", "coding"],
  "blacklist": [],
  "interval": 3
}
```

## Roadmap
1. Automatic Upvote for these resteemed posts
2. Avoid Resteemed Twice (currently, exception thrown)
3. Resteem Queue - allow control of resteem/maximum intervals

## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

# You may now want to follow @ilovecoding for all programming-related posts!

- - -

This page is synchronized from the post: [I Love Coding! The SteemIt Reblogger Service](https://steemit.com/@justyy/i-love-coding-the-steemit-reblogger-service)
