
---
title: 'Witness Updated to 0.19.6 and Server using ZRAM!'
permlink: witness-updated-to-0-19-6-and-server-using-zram
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-12 23:24:12
categories:
- witness-category
tags:
- witness-category
- busy
- witness-update
- zram
- witness
thumbnail: 'https://ipfs.busy.org/ipfs/QmbTvHLt7jhbsh7WqTaignyAsgEFg1ANgNux8dvKyzQC12'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I set the SHM size to 48G on my witness server (with 50GB RAM) and the server stopped to produce blocks with the following message:

> 2736622ms th_a       database.cpp:2596             show_free_memory     ] Free memory is now 50M. Increase shared file size immediately  

I had to stop the node, increase the shared file size, mounted more spaced to /dev/shm. Meanwhile, I thought it would be a good idea to upgrade node from [0.19.5](https://helloacm.com/steem-blockchain-incident-of-negative-vesting-and-witness-node-updated-to-0-19-5/) to 0.19.6 using command `./run.sh install`.

Also, I enabled `zram` which is to compress the RAM using LZO compression algorithm.

![image.png](https://ipfs.busy.org/ipfs/QmbTvHLt7jhbsh7WqTaignyAsgEFg1ANgNux8dvKyzQC12)

```
du -h /dev/shm/shared_memory.bin
49G     /dev/shm/shared_memory.bin
```
and the uncompressed size - which is the SHM size is set to 96GB - usually this number is suggested by the following:

`SIZE = 2 * RAM - SWAP`

The ZRAM let your node last a bit longer with the limited RAM size - however at the cost of speed because it takes efforts for processors to zip and unzip the RAM on the fly i.e. it takes a bit longer this time (around 40 hours reindexing time).

![](https://cdn.steemitimages.com/DQmX483Qw8JXdtM6JLafWJKy5qSt1MxTd1PX6yH9ZJ11gLb/image.png)

For steem re-indexing, the time required can be shortened if the CPU frequency is higher.  Anyway, the node has produced two blocks since last re-enabled - everything seems good so far!

Being a [steem witness](https://helloacm.com/steem-witness-replay-time-takes-longer-and-longer/) is not easy, it takes efforts to maintain your server regularly e.g. applying updates/hardforks - this requires that you monitor (that is your duty) the healthy of your witness node from time to time (I check that every day - every few hours when I am awake - on my phone)

![](https://cdn.steemitimages.com/DQmakFXb9afJdUGG8QkRnkyLvd1iuBD7uJfoL9xaNg8HcUs/image.png)
*The latency is good and the witness is running smoothly*

*// Reposted to: [https://helloacm.com/steem-witness-updated-to-0-19-6-and-server-using-zram/](https://helloacm.com/steem-witness-updated-to-0-19-6-and-server-using-zram/)*

# If you like what I am doing ... 
## Support me and my work as a witness - [witness thread](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a witness proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1) - let @justyy represent you.

Thank you! **Some of My Contributions: [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: ['Witness Updated to 0.19.6 and Server using ZRAM!'](https://steemit.com/@justyy/witness-updated-to-0-19-6-and-server-using-zram)
