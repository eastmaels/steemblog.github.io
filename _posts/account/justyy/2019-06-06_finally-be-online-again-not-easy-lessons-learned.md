
---
title: 'Finally be online again - Not easy, Lessons Learned'
permlink: finally-be-online-again-not-easy-lessons-learned
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-06 07:36:48
categories:
- witness-category
tags:
- witness-category
- witness-update
- witness
- busy
- steemit
thumbnail: 'https://ipfs.busy.org/ipfs/QmTRRLSVn8TZDqVfoKKt5X9QMSqgGovh9NBzUpHwUjdetn'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/QmTRRLSVn8TZDqVfoKKt5X9QMSqgGovh9NBzUpHwUjdetn)
![image.png](https://ipfs.busy.org/ipfs/QmXpTNKZqYQHkbNoVnZu3RU4G5EbZwGVpXDvKfScpDHdn8)
![image.png](https://ipfs.busy.org/ipfs/QmVARjpCELadhG2GNaReAu74czSSmyXieRtJ9JRCWda45n)

# My witness is finally back online!
Not easy, it has been around 200 hours. Why? I tried to upgrade to 20.11 when the server died for no obvious reasons, but failed, then I had decided to stick to 20.10 for the moment.

more than 60 hours replay this time, and here are few lessons learned.

**check the SHM size after reboot**. I forget to do this and waste another 10 hours. The SHM size can be re-sized via `./run.sh shm_size 64G` or by adding a new line to `/etc/fstab`
```
tmpfs   /dev/shm         tmpfs   nodev,nosuid,size=64G          0  0
```
Be warned that you have to be very careful not to delete or make mistakes on this file. Actually I accidentally messed up with the `/etc/fstab` and I wasted another hour to bring my server bootable again. 
![image.png](https://ipfs.busy.org/ipfs/QmTPkBvbrpt5jnHDBsvfG7fHDpCzR8j1MAi9iDWGMYMcrA)

**If the steemd hangs ..** quite a few time, the replaying hangs at `unpack legacy serialization....` And don't be afraid to restart your container or even server. This is the begining of replaying and sometimes it just hangs there for no obvious reasons.
![image.png](https://ipfs.busy.org/ipfs/QmPauVKHWhH42KdHd6SZPcXZYe41kUrBkBKYrkMDQp7dpb)

![steemit.png](https://ipfs.busy.org/ipfs/QmT3H6yjxh1pRxw6nWhKzMaaqeUqAu51S1Ef5QnuADMqvN)


------------------------------------------------
If you believe what I am doing, please consider a spare vote voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), thank you very much indeed.

@justyy - the author of https://SteemYY.com and I have been a Steem Witness for [more than a year now.](https://steemit.com/witness-category/@justyy/one-year-winessversary-a-great-start)




- - -

This page is synchronized from the post: ['Finally be online again - Not easy, Lessons Learned'](https://steemit.com/@justyy/finally-be-online-again-not-easy-lessons-learned)
