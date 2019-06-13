
---
title: 'Witness Node Upgraded to 0.20.10'
permlink: witness-node-upgraded-to-0-20-10
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-18 19:03:15
categories:
- witness-category
tags:
- witness-category
- witness
- witness-update
- busy
- steemit
thumbnail: 'https://cdn.steemitimages.com/DQmfThXh7gagsffajM8L25Zm8iaj2TfyYs6SFPSupjRVYhX/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Witness Node has been successfully upgraded from 0.20.9 to 0.20.10 !
Luckily, we do not need to do a replay from 0.20.9 for the change notes, please see: https://github.com/steemit/steem/releases/tag/v0.20.10 
> This release is recommended for all nodes.
> This release fixes a vulnerability in how the pending transaction queue is treated during block application. In the worst case, the previous behavior could result in block propagation delays and general instability/denial of service of the Steem network.

Here are the steps from @drakos thank you very much!
> do a `cd ~/steem-docker ; git pull` to get the latest steem-docker, then `./run.sh build v0.20.10` and follow the instructions at the end of the build with `docker tag steem:v0.20.10 steem:latest`, then `./run.sh restart`

be a little bit patient when you are building the source and don't panic if you see red messages most of them are warnings!
![](https://cdn.steemitimages.com/DQmfThXh7gagsffajM8L25Zm8iaj2TfyYs6SFPSupjRVYhX/image.png)

## My Witness Page
https://steemyy.com/witness-data/justyy
![image.png](https://ipfs.busy.org/ipfs/Qmeiu2a1Z5GZQjzsX2dtKuuwu8SgeeiGyVv7ivFQkV4ksj)

@justyy is the developer of https://steemyy.com and he helps to promote the steem in the cn community. If you believe what he is doing, please consider voting him a witness [vote him here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)

Thank you!

- - -

This page is synchronized from the post: ['Witness Node Upgraded to 0.20.10'](https://steemit.com/@justyy/witness-node-upgraded-to-0-20-10)
