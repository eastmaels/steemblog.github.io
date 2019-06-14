
---
title: 'Witness update #1 - first unexpected server reboot'
permlink: witness-update-1-first-unexpected-server-reboot
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-08 12:43:30
categories:
- witness
tags:
- witness
- witness-category
- steem
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmXhdwmKhVBo64eVMPhmfTUjjWjtMaCAWKCzPooeS8PYit'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>
![image.png](https://ipfs.busy.org/ipfs/QmXhdwmKhVBo64eVMPhmfTUjjWjtMaCAWKCzPooeS8PYit)
</center>
Today I learned that letting a  witness server running 24/7 is quite a challenge job. This morning, my server was not reachable anymore. After contacting the support and managing to power on the server, I saw that the RAID SSD drive was mounted readonly. Thus, all scripts failed and the blockchain file was damaged. I had to start replaying again.

At first, I disabled my signing key by:
```
beempy witnessdisable
```
After remounting in write mode, downloading the blockchain file from gtg, I'm replaying at the moment.

In the meantime, I wrote some scripts to speed downloading and replaying for the next unexpected reboot. You can find my scripts here:
https://github.com/holgern/witness-shm-setup
It is a work in progress.
When the replay is finished, I will set my signing key again.

In order to prevent a complete replay, I wrote two scripts, one for backup the ramdisk:
```
rsync --quiet --archive --delete --recursive --force /dev/shm/ ${shm_backup_dir}
```
and one script for restoring it
```
mount -o remount,size=${shared_file_size} /dev/shm
rsync --quiet --archive ${shm_backup_dir}/ /dev/shm/
```
I hope, this will save time and let me start steemd directly after restoring.
___
## Witness rank and activity
My active rank is currently #135. Thanks again for the support! I will sign my first block in about 9 days.

I released a new update for [beem](https://steemit.com/utopian-io/@holger80/update-for-beem-fullnodeupdate-integrated-and-witness-tools-added) and I'm very active in the [beem-discord server](https://discord.gg/4HM592V). I've answered all kind of questions and fixed some bugs in beem.

I've worked on my new @fullnodeupdate project. This project provides a list of currently working nodes. Currently, It is only used by beem, but it can be used in all steem related libraries, steem-js, python-steem, ..... The only requirement is that the library understand json and can read json_metadata from an account.

I'm currently spending my entire free time on both projects.

___
If you like what I'm doing, please consider @holger80 as one of your witnesses. You can use [steemconnect.com for approving your vote](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1) or go to https://steemit.com/~witnesses and enter my name into the vote field:
<center>
![image.png](https://ipfs.busy.org/ipfs/QmWdfhuztZaJQkttRRhajrnTAwxUbxz4UoHdhfoJi2Ze9p)</center>
___
* [Robust price feed publishing with beempy](https://steemit.com/witness-category/@holger80/robust-price-feed-publishing-with-beempy)
* [Measuring seed-node ping times with python](https://steemit.com/witness-category/@holger80/measuring-seed-node-ping-times-with-python)
* [My Witness Application - holger80](https://steemit.com/witness-category/@holger80/my-witness-application-holger80)
___
[Image source](https://pixabay.com/en/error-www-keyboard-tap-type-in-102074/)

- - -

This page is synchronized from the post: ['Witness update #1 - first unexpected server reboot'](https://steemit.com/@holger80/witness-update-1-first-unexpected-server-reboot)
