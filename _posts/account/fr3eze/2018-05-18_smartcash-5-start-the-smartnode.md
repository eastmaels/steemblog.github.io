
---
title: 'SmartCash#5 - Start the SmartNode'
permlink: smartcash-5-start-the-smartnode
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-18 02:36:39
categories:
- smartcash
tags:
- smartcash
- node
- income
- technology
- busy
thumbnail: 'https://gateway.ipfs.io/ipfs/QmQ2MXGFeUh86BrXZrk3NwrwoQborPKSSM45JyQ6tWgmrH'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![SmartCash Logo (L).png](https://gateway.ipfs.io/ipfs/QmQ2MXGFeUh86BrXZrk3NwrwoQborPKSSM45JyQ6tWgmrH)

>This series is to record my SmartNode journey. This is very much a high risk experimental act and I'm prepared to lose all the fund invested. Do your own research as this is not a financial advice.

# Setting up the real deal

Okay, after a series of operation we now have all the critical element to finally get the SmartNode started. 10,000 SMART, fully-synchronized local wallet, and a reliable VPS are all we need to set up the money printing machine. 

I will not post the step by step guide as there are sites and documentation online which already did the explanation so well that I never could. This post will be more of the tips in setting up SmartNode after much preparations:

### Useful resources

All in all, http://smartnodes.cc/ basically consists of everything one needs to know about how to set up SmartNode. It covers documentation from Mac, Linux to Windows, including much Bash scripts that would further enhance the stability of the server but I have yet to try them.

![image.png](https://gateway.ipfs.io/ipfs/QmUesAFGfy2xk7wkHhLcLwEwyw9dsJNbhtLNFZiuaaaAdH)

I set up local wallet in Windows OS and Linux Ubuntu on the VPS(of course) so I will recommend base on these background. Other than the official SmartNode site, items below were being used as the main reference as well:

- How To Set Up A SmartNode | Windows 10: 
https://www.youtube.com/watch?v=CEFw6Y1BAMc

- SmartCash SmartNode SCRIPT Setup Guide v2.2 for Windows 10: http://smartnodes.cc/files/SmartCash_SmartNode_Script_Setup_Guide_v2.2.pdf

### Use root

During the process of setting SmartNode on the VPS, remember you **must execute everything using root.** Even if some of the operations might not need root permission to perform, doing it with other users might cause troubles later which can be really hard to troubleshoot. As I assume most of the VPS providing `root` user as default, @privex offer the VPS with second class user `ubuntu`. 

However if your were offered with users other than root, use command `sudo su` or `sudo su root` and you will be granted root access.

### Use bootstrap to speed up syncing

Yes, the same sycning thing you took year to complete on [setting up the wallet](/smartcash/@fr3eze/smartcash-3-setting-up-a-wallet) will have to do it all again on the Linux VPS. The way to speed the process up is all the same with local wallet, just that now you will have to do it with command line. 

Follow the detailed guide in [SmartNode FAQ](http://smartnodes.cc/#SmartNode_FAQ) and you will be good. 

![Screenshot_20180518-103049.jpg](https://steemitimages.com/DQmXA6TaWS64q7HtCba53DjipcsooquzHHqh4a7mCRz9zt3/Screenshot_20180518-103049.jpg)

Take note that the steps suggesting do the step before *smartcashd* is started running but my experience proved this caution doesn't matter. Just execute the command and you will see the blockchian syncing become a loading progress using command `smartcash-cli getinfo`. Took me about 3 hours to complete.

<center>![smartcash-qt_2018-05-12_15-47-08.png](https://gateway.ipfs.io/ipfs/QmbPcKsAt4xRVsMxGnet2BD4Q3vHim77B4C7QW76cN5Krs)</center>
<center>Yay, finally got you running babe!</center>

### Use the SmartNodeMonitor

As we know if the node was down for **1 hour**  the uptimr will be set to zero meaning that node will have to queue all over again to enter the payment zone. So right after I get my node running, the first thing I want is a tool to help monitoring node status. I was ready to make a bash script on the VPS, until I found this piece of gem.

![Screenshot_20180518-102827_01.jpg](https://steemitimages.com/DQmSwHnYSiKvhaagsfgWTLkAGKjDG5fzg5eUxSrf3V1yA3a/Screenshot_20180518-102827_01.jpg)


**SmartNodeMonitorBot** on Telegram is the monitoring bot all one needs to maintain a node. You can add all multiple nodes in the same bot and it will constantly pinging the node to check if it is still up and running. Grant me peace of mind after using this bot, truly a must get!

Get it here:
https://t.me/SmartNodeMonitorBot

# Verdict

Along the way of SmartNode installation going, I would say that the SmartCash ecosystem is more matured than I expected. You can basically fill the questions with answers already available on the quoted resource above. I had much fun setting up my first node!

---

<sub>Official site: https://smartcash.cc</sub>
<sub>Twitter: https://twitter.com/scashofficial</sub>
<sub>Discord: https://discordapp.com/invite/BDUh8jr</sub>
<sub>Steemit: https://steemit.com/@smartcash or @smartcash</sub>

#### Related post:
  
[SmartCash#1 - My first crypto node setup for a passive income](/@fr3eze/smartcash-1-my-first-crypto-node-setup-for-a-passive-income)
[SmartCash#2 - Acquiring 10,000 SMART](/@fr3eze/smartcash-1-acquiring-10-000-smart)
[SmartCash#3 - Setting up a wallet](/@fr3eze/smartcash-3-setting-up-a-wallet)
[SmartCash#4 - VPS service that accepting STEEM](/@fr3eze/smartcash-4-vps-service-that-accepting-steem)

---

<a href="/@fr3eze" target="_blank"><img src="https://steemitimages.com/DQmbpKFSXdjVv77X8VePcz9hhZAoRC5HQsU2eHmPuKrj2Ag/image.png" /></a>

- - -

This page is synchronized from the post: ['SmartCash#5 - Start the SmartNode'](https://steemit.com/@fr3eze/smartcash-5-start-the-smartnode)
