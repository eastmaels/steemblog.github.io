
---
title: 'I produced my first block as witness'
permlink: i-produced-my-first-block-as-witness
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-10 09:45:24
categories:
- witness-category
tags:
- witness-category
- witness
- steemit
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmfAHtd7NZFYEiqw7UXNn8MVAhuY2CKLiozZkvHv9p3EBS'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmfAHtd7NZFYEiqw7UXNn8MVAhuY2CKLiozZkvHv9p3EBS)
I successfully produced my first block as a witness today. With my current rank (screenshot from [steemian.info](https://steemian.info/witnesses)), I will produce a new block every fourth day.
### Witness activity
I released [beem](https://github.com/holgern/beem) version 0.19.37 and I improved the full-node report layout from @fullnodeupdate.

## Estimating my next witness slot
Using ` beempy` from [beem](https://github.com/holgern/beem), I can estimate my next witness slot:
``` 
beempy witness holger80
``` 
![image.png](https://ipfs.busy.org/ipfs/QmTrdbLzgJAKKZRXmAKyLEtjafmXTrG6LXcFmyBVyQxB3e)
`virtual_time_diff` shows the virtual schedule time difference. `block_diff_est` is the equivalent block count and `time_diff_est` is the equivalent time to the next block producing slot.

So I have some time to relax. The witness schedule page https://steem.bitcoiner.me/schedule/?c=show200 seems to show wrong results:

![image.png](https://ipfs.busy.org/ipfs/QmZPu4w9ZUM8X4xB3WyoaPBWLb6bVvEMFULHF1p5QPNMoe)
I continuously monitored the output of `beempy witness holger80` until I produced my first block and I can confirm that its output is accurate contrary to the wrong output of bitcoiner.me.
___
If you like what I'm doing, please consider @holger80 as one of your witnesses. You can use [steemconnect.com for approving your vote](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1) or go to https://steemit.com/~witnesses and enter my name into the vote field:
<center>
![image.png](https://ipfs.busy.org/ipfs/QmWdfhuztZaJQkttRRhajrnTAwxUbxz4UoHdhfoJi2Ze9p)</center>
___
* [Robust price feed publishing with beempy](https://steemit.com/witness-category/@holger80/robust-price-feed-publishing-with-beempy)
* [Measuring seed-node ping times with python](https://steemit.com/witness-category/@holger80/measuring-seed-node-ping-times-with-python)
* [My Witness Application - holger80](https://steemit.com/witness-category/@holger80/my-witness-application-holger80)


- - -

This page is synchronized from the post: ['I produced my first block as witness'](https://steemit.com/@holger80/i-produced-my-first-block-as-witness)
