
---
title: 'SmartCash#3 - Setting up a wallet'
permlink: smartcash-3-setting-up-a-wallet
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-09 17:36:12
categories:
- smartcash
tags:
- smartcash
- crypto
- busy
- wallet
- money
thumbnail: 'https://gateway.ipfs.io/ipfs/QmVQB4tjPkCpVvpe3DpBWwtP2s89x2bJMNkqT2XUuwwnsd'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://gateway.ipfs.io/ipfs/QmVQB4tjPkCpVvpe3DpBWwtP2s89x2bJMNkqT2XUuwwnsd)

# Set up a wallet

Note that a desktop wallet is a must for setting up SmartNode, Web Wallet is not enough for this operation. Since I'm running a Win 10 OS, this guide will use Windows environment as background.

Download a desktop wallet from:

https://smartcash.cc/wallets/

At the final stage of installation, user will be asked where is the location the blockchain storage should be located at. **Put this directory on SSD if you have one!** This will greatly improve the initialization and I will explain it later.

![image.png](https://gateway.ipfs.io/ipfs/QmW8mxoNutDwGL3Zsa2hbaHqZHAw1RbfAXBhn4RKQPEhaF)

The installation is pretty straight forward. After opening the wallet up for the first time, you will see the Blockchain syncing bar at the bottom left saying `40 weeks behind`. The wallet is trying to download the whole blockchain for it to operate normally. And this is going to take forever to complete.

## Here is how you can speed up the whole syncing process.

![image.png](https://gateway.ipfs.io/ipfs/QmRCJBaGjNR94Z86keiDbja2G6cfd2VvFaJ3QGEA846CYE)

Completely close the wallet.

Proceed to the wallet [download page](https://smartcash.cc/wallets/) again and download the `bootstrap`.

Click on it and the bootstrap will start to download with name `txindexstrap.zip` and 453 MB in size. Do this step as soon as you can because the download speed is quite slow running around 120 KB/s.

![image.png](https://gateway.ipfs.io/ipfs/QmTLQ9opj2wha9rkhudLSgMyiJx9dJuwn1uR98VAudwsF7)

Go to the installed directory of SmartCash blockchain, delete the folders `blocks` and `chainstate`. Unzip the bootstrap `txindexstrap.zip` you have just downloaded, copy the `blocks` and `chainstate` inside to the installed directory of SmartCash blockchain where you just deleted the folders. 

These bootstrap consisting a big portion of the current blockchain and so that you can use it to skip the long and never-ending syncing process executed by the wallet. This is something needed to be improved by the dev team.

![image.png](https://gateway.ipfs.io/ipfs/QmZKjeF3d7jQDcoQdi2hXdqMrnKSYxNGYTYo6wjmVCTdF3)


![image.png](https://gateway.ipfs.io/ipfs/QmTS82HgCFJ6iGGPYAuR6pHbmjcqYeun5r6xn2vemb4FTx)

Next step is creating a text file named `smartcash.conf` and add `txindex=1` to it. Save and close the file. 

Now you may open the wallet again.

![image.png](https://gateway.ipfs.io/ipfs/QmX44gVQ8EMtfzNZcJgThd77qs5ULqjRoxUD8Bs2Voy58w)

Look at the loading page at the bottom, the loading bar is processing the bootstrap file that you just threw inside at the blockchain storage. And the speed was completely decided by the disk type of where the storage is residing.

<div class="pull-left"><center><img src="https://gateway.ipfs.io/ipfs/QmWUd2JGkVKT1Z7b4VQP3n2jmDyLi6FLcLayeKMP65arvC
" /></center></div>
<div class="pull-right"><center><img src="https://gateway.ipfs.io/ipfs/QmWE6GRE7f7nddywAvM1dAH42m8qhf7xuFbx6jAvvXGEGR
" /></center></div>

I've made a huge mistake by storing the blockchain storage on my HDD to avoid wasting my precious SDD space. As you can see on the left pic, the Disk usage is at full 100% while the write speed is throttled around 300 KB/s. To give a clearer picture, this loading process took me slightly **more than 24 hours** to complete on a pretty decent rig.

To not further suffer in the future syncing process, I redo everything but placing the storage on a SDD. The write speed was as high as 9 MB/s and averaging at 4 MB/s as shown in the right picture, **took me less than 3 hours** to complete the job. Lesson well learnt.

# Summary

- Local wallet is necessary to be fully synched before setting up SmartNode.
- Wallet synching can take a very long time.
- Placing blockchain storage at SSD can hugely increase synching speed.

#### Related post:

[SmartCash#1 - My first crypto node setup for a passive income](/@fr3eze/smartcash-1-my-first-crypto-node-setup-for-a-passive-income)
[SmartCash#2 - Acquiring 10,000 SMART](/@fr3eze/smartcash-1-acquiring-10-000-smart)

---

<a href="/@fr3eze" target="_blank"><img src="https://steemitimages.com/DQmbpKFSXdjVv77X8VePcz9hhZAoRC5HQsU2eHmPuKrj2Ag/image.png" /></a>



- - -

This page is synchronized from the post: ['SmartCash#3 - Setting up a wallet'](https://steemit.com/@fr3eze/smartcash-3-setting-up-a-wallet)
