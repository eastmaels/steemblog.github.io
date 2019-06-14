
---
title: 'Create a systemd timer for claiming rewards twice a day'
permlink: create-a-systemd-timer-for-claiming-rewards-twice-a-day
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-21 09:25:27
categories:
- tutorial
tags:
- tutorial
- beempy
- steemdev
- systemctl
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmY5wyzsrPR1sCV8i5KYibkHaPBhmt7xrTtrGtFT6bn4S9'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Do you want to claim rewards for a steem account automatically twice a day?  When:
* you use a linux system with python and systemctl
* have [beem](https://github.com/holgern/beem/) installed
* a wallet created (`beempy createwallet --wipe`)
* and a posting key stored (`beempy addkey`)
then you can follow this tutorial to add a systemd timer for claiming rewards.

## Warning
Installing a timer for claiming rewards twice a  day is convenient, but involves some risks. We are storing the posting key of an account on a (remote) server. Everyone that manages it to log in as root on the server will be able to receive the posting key. (The wallet password is stored in the script. After copying the wallet-sql library, the attacker can decrypt the stored posting key with the wallet password.) 

Never store an owner key or a master key in a beem wallet!

Knowing this, it is advised to immediately change the posting key, when something unusual happens.


## At first we need three files:

* steem-claimreward.timer
```
[Unit]
Description=Claim rewards twice daily

[Timer]
OnCalendar=*-*-* 00,12:00:00
RandomizedDelaySec=43200
Persistent=true

[Install]
WantedBy=timers.target
````
* steem-claimreward.service
```
[Unit]
Description=Claim reward service
After=syslog.target

[Service]
Type=oneshot
User=root
Group=root
ExecStart=/root/claimreward.sh
SyslogIdentifier=steem-claimreward
StandardOutput=syslog
StandardError=syslog
```
* claimreward.sh
```
#!/bin/bash
beempy updatenodes
export UNLOCK='Your-Wallet-Password'
beempy claimreward yoursteemacc
```

We store steem-claimreward.timer and steem-claimreward.service in `/etc/systemd/system`.
```
cp steem-claimreward.*  /etc/systemd/system
```
The bash script is moved to /root. In order to increase security, we assure that only root can read this file:
```
chmod 700 /root/claimreward.sh
```

It is also possible to replace the root user by another user in the `steem-claimreward.service`. The `claimreward.sh` has than to moved to a place the user can access.

Now, replace `yoursteemacc` with the account name from which you want to claim (posting key of this account has to be stored into the beempy wallet). Then you have to replace `Your-Wallet-Password` with your beempy wallet password.

## Activate the timer
```
systemctl reenable --now steem-claimreward.timer
```
activates the timer. With
```
systemctl list-timers
```
or 
```
systemctl status steem-claimreward.timer
```
you can check for the next execution time point.

![image.png](https://ipfs.busy.org/ipfs/QmY5wyzsrPR1sCV8i5KYibkHaPBhmt7xrTtrGtFT6bn4S9)


 The log file can be viewed by:
```
journalctl -f -u  steem-claimreward
```

## Controlling the timer
* enable
```
systemctl enable steem-claimreward.timer
```
* disable
```
systemctl disable steem-claimreward.timer
```
* start
```
systemctl start steem-claimreward.timer
```
* stop
```
systemctl stop steem-claimreward.timer
```

___
1. [How to install and use beempy using anaconda](https://steemit.com/python/@holger80/how-to-install-and-use-beempy-using-anaconda)
2. [How to write a post with image using beem](https://steemit.com/tutorial/@holger80/how-to-write-a-post-with-image-using-beem)
3. [Access steemit conveyor for reading account information with beempy](https://steemit.com/tutorial/@holger80/access-steemit-conveyor-for-reading-account-information-with-beempy)

- - -

This page is synchronized from the post: ['Create a systemd timer for claiming rewards twice a day'](https://steemit.com/@holger80/create-a-systemd-timer-for-claiming-rewards-twice-a-day)
